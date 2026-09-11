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
    direction: "ru2en",
    letter: "random",
    rolls: 0,
    cycling: false,
    timerId: null,
  };

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
  const letterEl = $("#letter");
  const dirEl = $("#direction");
  const speedEl = $("#speed");
  const speedLabel = $("#speed-label");
  const revealEl = $("#reveal");
  const hideListEl = $("#hide-list");
  const speakEl = $("#speak");

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

  // Text-to-speech: speak the Russian word aloud.
  function speakRu(text) {
    if (!state.speak || !("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = "ru-RU";
    const voices = window.speechSynthesis.getVoices();
    const ru = voices.find((v) => v.lang && v.lang.toLowerCase().startsWith("ru"));
    if (ru) u.voice = ru;
    window.speechSynthesis.speak(u);
  }

  // Words grouped by their first Cyrillic character.
  const BY_LETTER = WORDS.reduce((acc, w) => {
    const letter = w.ru.charAt(0);
    (acc[letter] = acc[letter] || []).push(w);
    return acc;
  }, {});

  // Draw a random starting letter (or the user-chosen one), then a
  // random subset of its words. Returns { letter, words }.
  function sampleWords(n) {
    const letters = Object.keys(BY_LETTER);

    let letter;
    if (state.letter === "random") {
      letter = letters[rng(letters.length)];
      // Prefer a letter that has enough words for the requested subset size.
      const enough = letters.filter((l) => BY_LETTER[l].length >= n);
      if (enough.length) letter = enough[rng(enough.length)];
    } else if (BY_LETTER[state.letter]) {
      letter = state.letter;
    } else {
      letter = letters[rng(letters.length)];
    }

    const pool = BY_LETTER[letter].slice();
    for (let i = pool.length - 1; i > 0; i--) {
      const j = rng(i + 1);
      [pool[i], pool[j]] = [pool[j], pool[i]];
    }
    return { letter, words: pool.slice(0, Math.min(n, pool.length)) };
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
    const idx = rng(state.subset.length);
    const w = state.subset[idx];

    // Restart the flip animation on every roll.
    cycleCard.classList.remove("animate");
    void cycleCard.offsetWidth;
    cycleCard.classList.add("animate");

    cycleNum.textContent = "#" + (idx + 1);
    speakRu(w.ru);

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

  function startCycling() {
    if (state.cycling || !state.subset.length) return;
    state.cycling = true;
    roll();
    state.timerId = setInterval(roll, state.speedMs);
    updateControls();
  }

  function stopCycling() {
    state.cycling = false;
    if (state.timerId) clearInterval(state.timerId);
    state.timerId = null;
    updateControls();
  }

  function newSelection() {
    const picked = sampleWords(state.size);
    state.subset = picked.words;
    state.rolls = 0;
    rollCountEl.textContent = "0";
    renderGrid();
    stopCycling();
    startCycling();
    statusEl.textContent = `— ${state.subset.length} words · letter "${picked.letter}"`;
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

  letterEl.addEventListener("change", () => {
    state.letter = letterEl.value;
    newSelection();
  });

  dirEl.addEventListener("change", () => {
    state.direction = dirEl.value;
  });

  speedEl.addEventListener("input", () => {
    state.speedMs = Number(speedEl.value);
    speedLabel.textContent = (state.speedMs / 1000).toFixed(1) + " s";
    if (state.cycling) {
      stopCycling();
      startCycling();
    }
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

  speedLabel.textContent = (state.speedMs / 1000).toFixed(1) + " s";

  // Populate the letter dropdown with every Cyrillic letter in the bank.
  Object.keys(BY_LETTER).sort().forEach((l) => {
    const opt = document.createElement("option");
    opt.value = l;
    opt.textContent = l + " (" + BY_LETTER[l].length + ")";
    letterEl.appendChild(opt);
  });

  newSelection();
})();
