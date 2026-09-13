(function () {
  "use strict";

  const $ = (s) => document.querySelector(s);
  const $$ = (s) => Array.from(document.querySelectorAll(s));

  const state = {
    subset: [],
    size: 10,
    speedMs: 2500,
    revealEn: true,
    hideList: true,
    speak: true,
    speakEn: false,
    direction: "ru2en",
    spaced: false,
    cooldowns: {},
    rolls: 0,
    cycling: false,
  };

  let nextRollTimer = null;
  let cycleGeneration = 0;

  const gridEl = $("#subset-grid");
  const cycleCard = $("#cycle-card");
  const cycleNum = $("#cycle-num");
  const cycleWord = $("#cycle-word");
  const cycleEn = $("#cycle-en");
  const rollCountEl = $("#roll-count");
  const statusEl = $("#status");
  const btnNew = $("#btn-new");
  const btnPause = $("#btn-pause");
  const sizeEl = $("#size");
  const dirEl = $("#direction");
  const speedEl = $("#speed");
  const speedLabel = $("#speed-label");
  const revealEl = $("#reveal");
  const hideListEl = $("#hide-list");
  const speakEl = $("#speak");
  const speakEnEl = $("#speak-en");
  const spacedEl = $("#spaced");
  const spacedLabel = $("#spaced-label");

  function rng(max) {
    return Math.floor(Math.random() * max);
  }

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, (c) => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
    }[c]));
  }

  // One asterisk per character of the hidden word.
  function mask(len) {
    return "*".repeat(Math.max(len, 1));
  }

  // Cached voice list (Chrome loads voices asynchronously).
  let voiceCache = [];
  function refreshVoices() {
    if ("speechSynthesis" in window) voiceCache = window.speechSynthesis.getVoices();
  }
  if ("speechSynthesis" in window) {
    refreshVoices();
    window.speechSynthesis.addEventListener("voiceschanged", refreshVoices);
  }

  // Score a voice for "humanness" — prefer neural / natural voices.
  function scoreVoice(v, langPrefix) {
    if (!v.lang || !v.lang.toLowerCase().startsWith(langPrefix)) return -1;
    const name = (v.name || "").toLowerCase();
    let score = 0;
    if (name.includes("natural")) score += 100;
    if (name.includes("neural")) score += 90;
    if (name.includes("premium") || name.includes("enhanced") || name.includes("online")) score += 60;
    if (name.includes("google")) score += 50;
    if (name.includes("microsoft")) score += 20;
    if (v.localService) score += 5;
    return score;
  }

  // Best available voice for a language.
  function pickVoice(langPrefix) {
    refreshVoices();
    let best = null;
    let bestScore = -1;
    for (const v of voiceCache) {
      const s = scoreVoice(v, langPrefix);
      if (s > bestScore) { bestScore = s; best = v; }
    }
    return best;
  }

  // Map the speed dial (ms) to a speech rate.
  // 800ms -> 1.5x (fast), 2500ms -> 1.0x (normal), 6000ms -> 0.6x (slow).
  function speechRate() {
    const ms = state.speedMs;
    if (ms <= 2500) {
      return 1.5 - (ms - 800) * 0.5 / 1700;
    }
    return 1.0 - (ms - 2500) * 0.4 / 3500;
  }

  function speedLabelText() {
    return (state.speedMs / 1000).toFixed(1) + " s · " + speechRate().toFixed(2) + "×";
  }

  // Text-to-speech: speak Russian then English (whichever are enabled).
  //
  // When BOTH are enabled, we merge them into a SINGLE utterance using the
  // Russian voice. The Russian voice reads the Cyrillic natively and the
  // English word with a Russian accent — one continuous stream, so there is
  // no voice-switch gap at all.
  function speakWord(w) {
    if (!("speechSynthesis" in window)) return;
    const synth = window.speechSynthesis;
    synth.cancel();

    const rate = speechRate();

    function make(text, lang, voice) {
      const u = new SpeechSynthesisUtterance(text);
      u.lang = lang;
      u.rate = rate;
      if (voice) u.voice = voice;
      return u;
    }

    const both = state.speak && state.speakEn;

    if (both) {
      // Same Russian voice speaks both -> seamless, Russian-accented English.
      const ruVoice = pickVoice("ru");
      synth.speak(make(w.ru + ", " + w.en, "ru-RU", ruVoice));
    } else if (state.speak) {
      synth.speak(make(w.ru, "ru-RU", pickVoice("ru")));
    } else if (state.speakEn) {
      synth.speak(make(w.en, "en-US", pickVoice("en")));
    }
  }

  // Pure random subset from the whole word bank (no letter grouping).
  function sampleWords(n) {
    const arr = WORDS.slice();
    for (let i = arr.length - 1; i > 0; i--) {
      const j = rng(i + 1);
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr.slice(0, Math.min(n, arr.length));
  }

  function renderGrid() {
    gridEl.innerHTML = "";
    state.subset.forEach((w, i) => {
      const tile = document.createElement("div");
      tile.className = "tile";
      tile.dataset.index = i;
      const ru = state.hideList
        ? `<span class="tile-ru hidden-hint">${mask(w.ru.length)}</span>`
        : `<span class="tile-ru">${escapeHtml(w.ru)}</span>`;
      tile.innerHTML =
        `<span class="tile-num">${i + 1}</span>` + ru;
      gridEl.appendChild(tile);
    });
  }

  function highlightTile(idx) {
    $$("#subset-grid .tile").forEach((t, i) => t.classList.toggle("active", i === idx));
  }

  function roll() {
    if (!state.subset.length) return;

    // Spaced repetition: only roll words that aren't on cooldown.
    let candidates = state.subset;
    if (state.spaced) {
      const unlocked = state.subset.filter((w) => (state.cooldowns[w.ru] || 0) === 0);
      if (unlocked.length) candidates = unlocked;
    }

    const w = candidates[rng(candidates.length)];
    const idx = state.subset.indexOf(w);

    if (state.spaced) state.cooldowns[w.ru] = 3;

    // Restart the flip animation on every roll.
    cycleCard.classList.remove("animate");
    void cycleCard.offsetWidth;
    cycleCard.classList.add("animate");

    cycleNum.textContent = "#" + (idx + 1);
    speakWord(w);

    if (state.direction === "ru2en") {
      cycleWord.textContent = w.ru;
      cycleEn.textContent = state.revealEn ? w.en : mask(w.en.length);
    } else {
      cycleWord.textContent = w.en;
      cycleEn.textContent = state.revealEn ? w.ru : mask(w.ru.length);
    }

    state.rolls += 1;
    rollCountEl.textContent = state.rolls;
    highlightTile(idx);
  }

  // True while the speech engine is speaking or has queued utterances.
  function isSpeaking() {
    return (
      "speechSynthesis" in window &&
      (window.speechSynthesis.speaking || window.speechSynthesis.pending)
    );
  }

  // Resolve once the speech engine has finished all queued speech.
  function waitForSpeech() {
    return new Promise((resolve) => {
      if (!isSpeaking()) return resolve();
      const safety = setTimeout(resolve, 15000);
      const poll = () => {
        if (!isSpeaking()) {
          clearTimeout(safety);
          resolve();
        } else {
          setTimeout(poll, 80);
        }
      };
      poll();
    });
  }

  // Schedule the next roll so speech always completes, but the gap never
  // exceeds the chosen speed when speech is quick.
  async function scheduleNext() {
    const gen = cycleGeneration;
    const started = Date.now();
    await waitForSpeech();
    if (!state.cycling || gen !== cycleGeneration) return;
    const elapsed = Date.now() - started;
    const delay = Math.max(0, state.speedMs - elapsed);
    nextRollTimer = setTimeout(() => {
      if (!state.cycling || gen !== cycleGeneration) return;
      roll();
      scheduleNext();
    }, delay);
  }

  function startCycling() {
    if (state.cycling || !state.subset.length) return;
    state.cycling = true;
    roll();
    scheduleNext();
    updateControls();
  }

  function stopCycling() {
    state.cycling = false;
    cycleGeneration += 1;
    if (nextRollTimer) clearTimeout(nextRollTimer);
    nextRollTimer = null;
    if ("speechSynthesis" in window) window.speechSynthesis.cancel();
    updateControls();
  }

  function newSelection() {
    // Spaced repetition: each new selection releases locked words by one step.
    if (state.spaced) {
      for (const k in state.cooldowns) {
        if (state.cooldowns[k] > 0) state.cooldowns[k] -= 1;
      }
    }

    state.subset = sampleWords(state.size);
    state.rolls = 0;
    rollCountEl.textContent = "0";
    renderGrid();
    stopCycling();
    startCycling();
    statusEl.textContent = `— ${state.subset.length} random words in play`;
  }

  function updateControls() {
    btnPause.textContent = state.cycling ? "⏸ Pause" : "▶ Resume";
    btnPause.classList.toggle("is-paused", !state.cycling);
  }

  btnNew.addEventListener("click", newSelection);
  btnPause.addEventListener("click", () => (state.cycling ? stopCycling() : startCycling()));

  sizeEl.addEventListener("change", () => {
    state.size = Number(sizeEl.value);
    newSelection();
  });

  dirEl.addEventListener("change", () => {
    state.direction = dirEl.value;
  });

  speedEl.addEventListener("input", () => {
    state.speedMs = Number(speedEl.value);
    speedLabel.textContent = speedLabelText();
    // No restart here: scheduleNext() re-reads state.speedMs after each word,
    // so the new speed applies on the very next roll. Restarting on every
    // input event spawned overlapping loops (the "broken" speed dial).
  });

  revealEl.addEventListener("change", () => {
    state.revealEn = revealEl.checked;
    renderGrid();
  });

  hideListEl.addEventListener("change", () => {
    state.hideList = hideListEl.checked;
    renderGrid();
  });

  speakEl.addEventListener("change", () => {
    state.speak = speakEl.checked;
    if (!state.speak && "speechSynthesis" in window) window.speechSynthesis.cancel();
  });

  speakEnEl.addEventListener("change", () => {
    state.speakEn = speakEnEl.checked;
  });

  spacedEl.addEventListener("change", () => {
    state.spaced = spacedEl.checked;
    spacedLabel.classList.toggle("spaced-on", state.spaced);
  });

  speedLabel.textContent = speedLabelText();

  newSelection();
})();
