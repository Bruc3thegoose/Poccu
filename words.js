// Word bank — one "russian,english" pair per line.
// Sorted by Russian character. Add or edit lines freely.
const WORDS = (function () {
  const raw = `а,while, and, but
автор,author
американский,American
армия,army
ах,ah!, oh!
баба,woman, wife, old woman
бабушка,grandmother
банк,bank
бежать,to run, hurry
без,without
белый,white
берег,bank, shore, coast
бить,to beat, hit
близкий,near, similar; intimate
бог,god
бой,battle, fight, combat
бок,side, flank
более,more
болезнь,illness, sickness, disease
боль,pain
больной,sick
большинство,majority
большой,big, large, important
борьба,fight, struggle
бояться,to be afraid, fear
брат,brother
брать,to take; hire
бросить,to throw
будто,as if, as though
будущее,future
бумага,paper
бутылка,bottle
бы,would
бывать,be, visit, happen
бывший,former, ex-
быстро,fast, quickly
быстрый,quick, fast
быть,to be
в,in, at
важный,important
ваш,yours
вверх,up, upwards
вдруг,suddenly
ведь,you see, you know
век,century, age
великий,great
вера,faith, belief
верить,to believe
вернуться,to return
верный,correct; faithful; reliable
веселый,cheerful, merry
вести,to lead
весь,all, everything
весьма,very, highly, greatly
ветер,wind
вечер,evening
вещь,thing
взгляд,look, glance; view
взглянуть,to look, give a glance
вздохнуть,to take breath, to sigh
взять,to take
вид,appearance, look, view
видеть,to see
видимо,apparently, seemingly
видно,evidently, obviously
вино,wine
висеть,to hang
власть,power
вместе,together
вместо,instead
вниз,down, downwards
внимание,attention
вновь,again, once more
внутренний,inside, internal
во,in, at; super, exactly
вовсе,quiet; not … at all
вода,water
водка,vodka
военный,military
возвращаться,to return
воздух,air
возле,by, near, close by
возможно,as… as possible
возможность,possibility, opportunity, chance
возникать,to arise, appear
возникнуть,to arise, spring up
возраст,age
война,war
войти,to enter, come in
вокруг,around
волос,hair
воля,will
вон,out
вообще,in general, altogether, on the whole
вопрос,question, matter, problem
ворот,collar
вот,here, there, this is, that's
впервые,for the first time
вперед,forward
впереди,before, in front of
вполне,quite, fully
впрочем,however, though
враг,enemy
врач,physician, doctor
время,time, season
вроде,like, not unlike
всегда,always
вскоре,soon, shortly
вспоминать,to remember, recall
вспомнить,to remember, recall
встать,to get up, rise, stand up
встретить,to meet
встреча,meeting, reception
всякое,any, every
второй,second
входить,to enter, come in
вчера,yesterday
вы,you
выглядеть,to look
вызвать,to call, send
вызывать,to call, send
выйти,to go out, come out, appear
выпить,to drink
выражение,expression
высокий,tall, high
выход,exit
выходить,to go out; nurse
выше,higher
газета,newspaper
где,where
генерал,general
герой,hero
глава,head, chief
главный,main, chief
глаз,eye; sight
глубокий,deep
глядеть,to look, gaze
говорить,to say, to tell, to speak
год,year
голова,head, mind, brains
голос,voice
голубой,blue, sky-blue
гора,mountain, hill
гореть,to burn
город,town, city
горячий,hot
господин,gentleman, Mr.
гость,guest
государственный,State
государство,State
готовый,ready
гражданин,citizen
граница,border
грудь,breast, chest
группа,group
губа,lip
да,yes, but
давать,to give; let, allow
давно,long ago
даже,even
далекий,distant, remote
далеко,far, far off
дама,lady, partner, queen
данный,given, present
дать,to give
два,two
двадцать,twenty
дверь,door
двигаться,to move
движение,movement
двое,two
двор,yard, court
девочка,girl, little girl
девушка,girl, miss
дед,grandfather, old man
действие,action, effect
действительно,indeed, really
действовать,to act
делать,to do, make
дело,business, affair, matter
день,day
деньги,money
деревня,village, country
дерево,tree
держать,to hold, keep
держаться,to hold on, behave
десяток,ten, dozens
десять,ten
детский,child's, children's
детство,childhood
директор,director, manager
длинный,long
для,for, to
до,to, up to, about, before
добавить,to add
добрый,kind
довольно,enough; rather
дождь,rain
доктор,doctor
документ,document
долгий,long
долго,for a long time
должный,due, proper
дом,house, home
домой,home
дорога,road, way, journey
дорогой,on the way
достаточно,enough, sufficiently
достать,to reach; get, obtain
дочь,daughter
друг,friend
другой,other, another, different
думать,to think; believe
дурак,fool, idiot
дух,spirit
душа,soul, spirit
дым,smoke
дядя,uncle
едва,hardly, just, barely
единственный,only, sole
если,if
есть,to eat, to be
ехать,to go, ride, drive, travel
ещё,still, yet
ж,and, as for, but
ждать,to wait
же,and, as for, but, same
желание,wish
желать,to wish
железный,ferreous, iron
желтый,yellow
жена,wife
женщина,woman
живой,living, live, lively
живот,stomach, belly
жизнь,life
жить,to live
за,behind, over, at, after
заболевание,disease, illness
забыть,to forget
завод,factory
завтра,tomorrow
закон,law, act, statue
закричать,to shout, cry out
зал,hall
заметить,to notice, observe
заниматься,to be occupied, engage
запах,smell, odour, scent
затем,then, after that
зато,but, but then
зачем,what for, why
звать,to call
звезда,star
звук,sound
здесь,here
здоровый,healthy
зеленый,green
земля,earth, land, soil
зеркало,mirror
зима,winter
знак,sign
знакомый,familiar, acquainted
знать,to know, be aware
значить,to mean, signify
золотой,golden
зуб,tooth
и,and, though
ибо,for
игра,game, play
играть,to play
идея,idea
идти,to go, come
из,from, of, in
известный,well-known, famous
или,or
именно,namely, just
иметь,to have, own
имя,name
иначе,otherwise, differentlyl
иногда,sometimes
иной,different, other
институт,institute
интерес,interes
интересно,interestingly
интересный,interesting
информация,information
искать,to search
использовать,to use, utilize, make use of
история,history, story, event
исчезнуть,to disappear
к,to, for, by
кабинет,study, room, office suite
каждый,each, every
казаться,to seem, appear
как,how, what, as, like
какой,what, which, how
камень,stone
капитан,captain, master
карман,pocket
карта,map
картина,picture, painting
качество,quality
квартира,flat, apartment
кивнуть,to nod
километр,kilometre, kilometer
класс,class
книга,a book
ко,to, towards, by
когда,when, while, as
кожа,skin
кой,which (old-fashioned)
колено,knee
количество,quantity
колоть,to prick
команда,team; command
командир,commander, commanding officer
комната,a room
компания,company
конец,end, distance
конечный,final, last
кончиться,to end
корабль,ship
коридор,corridor, passage
король,king
короткий,short
который,which, who, that
край,border, edge; land, country
красивый,beautiful
красный,red
кресло,armchair
крикнуть,to cry, shout
кричать,to cry, shout
кровать,bed
кровь,blood
кроме,except, besides
круг,circle
крупный,large, big, prominent
крыша,roof
кстати,to the point, at the same time
кто,who, that, some
куда,where, what for, much
кулак,fist
купить,to buy, purchase
куст,bush
кухня,kitchen
лагерь,camp
ладно,in harmony, well, all right
ладонь,palm
левый,left
легко,easily, lightly
лежать,to lie, be situated
лейтенант,lieutenant
лес,forest
лестница,staircase
лететь,to fly
лето,summer
ли,whether, if
либо,or
лист,leaf, sheet
литература,literature
лицо,face; person
личный,personal
лишь,only, as soon as
лоб,forehead
лошадь,horse
лучший,better, best
любимый,dear, loved
любить,to love
любовь,love
любой,any, every
лёгкий,light, easy
магазин,shop, store
маленький,small, little
мало,little, few
мальчик,boy
мама,mummy, mum
мать,mother
машина,car, machine, engine
медленно,slowly
между,between, among
мелкий,shallow, small
менее,less
мера,measure, step
местный,local
место,place; seat
месяц,month
метр,meter, metre
мешать,to interfere, prevent; mix
мешок,bag, sack
милый,nice, sweet, dear
мимо,past, by
минута,minute, moment
мир,world, peace
мнение,opinion
многие,many
много,many, much
можно,one can
мозг,brain
мой,my, mine
мокрый,wet
мол,he says, they say, etc.
молодая,bride ; young
молодой,young ; bridegroom
молча,silently, without a word
молчать,to keep silence
момент,moment, instant
море,sea
Москва,Moscow
московский,Moscow
мочь,be able
муж,husband
мужик,muzhik, man
мужчина,man, male
музыка,music
мы,we
мысль,thought, idea
на,on, it, at, to
наверно,probably
наверное,probably, most likely
над,above, over
надежда,hope
надеяться,to hope
надо,over, above, ought to
назад,back, backwards
название,name, title
назвать,to call, name
называть,to call, name
называться,to call oneself
найти,to find, discover, consider
наконец,at last, finally
написать,to write
например,for example, for instance
народ,people, nation
настоящий,present;real, true
наука,science
находиться,to be found, turn up
начало,beginning, origin, source
начальник,chief, head, superior
начать,to begin
начаться,to begin
начинать,to begin
наш,our, ours
не,not
небо,sky
небольшой,small, not great
невозможно,impossible
недавно,recently, lately
неделя,week
неизвестный,unknown
некоторый,some
нельзя,it is impossible, can't
немец,German
немецкий,German
немного,a little
необходимый,necessary
неожиданно,unexpectedly, suddenly
несколько,several, some
нести,to carry
нет,no, not, but
неужели,really, surely
нечего,there is nothing, there is no need
ни,not a, not, neither… nor
никак,in now way, by no means
никакой,no, none
никогда,never
никто,nobody
ничто,nothing
но,but
новый,new; modern
нога,foot, leg
номер,number, size, room, issue
нос,nose
носить,to wear
ночной,night
ночь,night
нравиться,to please, like
ну,now, right, well, come on
нужный,necessary
о,of, about, against
об,about, of
оба,both
обещать,to promise
область,oblast, province; field
обнаружить,to discover, find out
образ,shape, form, image
обратно,back, backwards
общество,society
общий,general, common
объяснить,to explain
обычно,usually
обычный,usual, ordinary
обязательно,without fail, be sure
огонь,fire
огромный,huge, enormous
один,one, some, alone
однажды,once, one day
однако,however, though
ожидать,to expect
оказаться,find oneself, turn out
оказываться,to turn out, find oneself
окно,window, windowsill
около,by, near
он,he
она,she
они,they
оно,it
опыт,experience
опять,again
орган,organ, body
оружие,weapon
основной,main
особенно,especially, particularly
особый,special
оставаться,to remain, stay
оставить,to leave, abandon
остальной,remaining, the rest of
остановиться,to stop
остаться,to remain, stay
осторожно,carefully, cautiously
остров,island
острый,sharp; spicy
от,from, of, for
ответ,answer, reply
ответить,to answer, reply
отвечать,to answer, reply
отдать,to return, give back
отец,father
открытый,open
открыть,to open
откуда,where… from
относиться,to treat, regard, relate
отношение,relationship, attitude
отсюда,from here
офицер,officer
очень,very
очередь,line, queue, turn
палец,finger, toe
память,memory
папа,dad, daddy
пара,pair, couple
парень,boy, fellow, guy
партия,party
пахнуть,to smell
первый,first, front, former
перед,before, in front of
перестать,to stop, cease
петь,to sing
писатель,writer
писать,to write
письмо,letter
пить,to drink
плакать,to cry
план,plan
плечо,shoulder, upper arm
плохо,badly
площадь,square, area
по,on, along, by
поверить,to believe
повернуться,to turn
повод,occasion, reason; bridle
повторить,to repeat
погибнуть,to perish, be killed
под,under, for, towards, to
поднять,to lift, raise
подняться,to rise, climb
подобный,similar, like
подойти,to approach, come up
подумать,to think
подходить,to come up, approach;to fit
поезд,train
поехать,to depart, set off
пожаловать,to grant, bestow
пожалуйста,please
позволить,to allow, permit
позвонить,to call, to telephone
поздний,late
пойти,to go
пока,for the present
показать,to show, display
показаться,to appear, come in sight
показывать,to show, display
пол,floor; sex
поле,field
политический,political
полковник,colonel
полный,full, complete
половина,half
положение,position, posture, condition, state
положить,to lay down, put down, place
получать,to receive, get
получаться,to come out
получить,to receive, get, obtain
получиться,to come, arrive, turn out
помнить,to remember
помогать,to help, assist
помочь,to help
помощь,help
понимать,to understand
понятно,clearly, plainly
понять,to understand; realize
попасть,to hit; to find oneself
попробовать,to try, test
попросить,to ask
пора,time; pore
порядок,order
поскольку,so far as, since
послать,to send, dispatch
после,after, afterwards
последний,last, the latest, new
посмотреть,to take a look, watch, inspect
поставить,to put, place, set
потерять,to lose
потом,afterwards, then
потому,that's why
похожий,similar, alike
почему,why
почти,almost
почувствовать,to feel
поэт,poet
поэтому,therefore
появиться,to appear, show up
появляться,to appear, show up
правда,truth
правило,rule
правильно,correctly, properly
правительство,government
право,right
правый,right
предложить,to offer, propose, suggest
представить,to presetn, produce, introduce
представлять,to present, introduce, imagine
прежде,before
прежний,former
президент,president; director
прекрасный,beautiful, fine
при,attached to, in the presence of, by, about
привести,to bring
привыкнуть,to get used to, to grow accustomed to
придтись,to fit, fall; have to
приехать,to arrive, come
прийти,to come, arrive
прийтись,to fit, fall; have to
приказ,order
пример,example
принести,to bring
принимать,to take, admit, accept
принять,to take, admit, accept
природа,nature
прислать,to send
приходить,to come, arrive
приходиться,to fit, fall; have to
причем,moreover, and what's more
причина,cause, reason, motive
пришлый,alien, strange
про,about, for
проблема,problem, issue
провести,to accompany, set off; conduct; spend
проводить,to lead, escort; accompany
продолжать,to continue
произнести,to pronounce, say, utter
произойти,to happen, occur, take place
происходить,to happen, occur, take place
пройти,to pass, go by, be over
просить,to ask
простить,to forgive
просто,simply
простой,simple, easy, plain
против,against, opposite, contrary to
протянуть,to stretch, extend
профессор,professor
проходить,to pass, go;study
процесс,process
прочее,et cetera, other
прошлый,past
прямо,straight, frankly
прямой,straight
птица,bird
пустой,empty, hollow; idle
пусть,let's, though
путь,way, track, path
пытаться,to try
пять,five
работа,work, job
работать,to work
рабочий,working
равно,alike, in like manner
ради,for the sake of
радость,gladness, joy
раз,time, once, since
разве,really?, perhaps
развитие,development
разговаривать,to talk, speak
разговор,talk, conversation
разный,different
район,area, region
ранний,early
рассказ,story
рассказать,to tell, narrate
рассказывать,to tell, narrate
ребята,guys, children
ребёнок,child, kid, infant
революция,revolution
результат,result, outcome
река,river
речь,speech
решение,decision, conclusion
решить,to decide, solve
род,family, clan, generation
родитель,parent
родной,own, native, dear
роль,role
роман,novel, romance
российский,Russian
Россия,Russia
рост,growth, increase; height
рот,mouth
рота,company (military)
рубль,ruble
рука,hand, arm
русский,Russian
рыба,fish
ряд,row, line
с,with, and, from, of
сад,garden, yard
садиться,to sit down
сам,myself, yourself
самолет,aircraft, aeroplane
самый,most, the very, the same
сапог,(high) boot
свет,light;world
свобода,freedom
свободный,free
свой,my, our, your
своё,one's own, my, our
связанный,related, connected, tied-up
связь,tie, bond; connection, relation
сделать,to do, make, finish
себя,myself, himself, herself
сегодня,today
сей,this
сейчас,now, presently, soon
секунда,a second
семь,seven
семья,family
сердце,heart
серый,grey; dull
серьезный,serious
сестра,sister
сесть,to sit
сидеть,to sit
сила,strength, force
сильно,strongly
сильный,strong, powerful
синий,dark blue
система,system
ситуация,situation
сказать,to say, to speak
сквозь,through
сколько,how much, how many
скоро,quickly, fast, soon
скорый,quick, fast
слабый,weak
слава,glory, fame
слать,to send
слегка,slightly
след,track, footprint
следовать,to follow, come next
следующий,next, following
слеза,tear
слишком,too, too much
словно,as if, like
слово,word
служба,service, work
служить,to serve
случай,case, occasion, incident
случиться,to happen
слушать,to listen, hear
слышать,to hear
смерть,death
смеяться,to laugh
смотреть,to look, watch
смочь,to be able
смысл,sense, meaning, purpose
сначала,at first, from the beginning
снег,snow
снова,again
снять,to take away, take off;photograph
со,with
собака,dog
собираться,to gather together, assemble; intend
собраться,to gather, collect
собственный,one's own
событие,event
совершенно,absolutely, quite
совет,advice
советский,Soviet
современный,contemporary, modern, up-to-date
совсем,quite, entirely, totally
согласиться,to agree, consent
создать,to create, establish
сознание,consciousness
солдат,soldier
солнце,sun
сон,dream
сообщить,to report, let know
сорок,forty
сосед,neighbour
состояние,state, condition; fortune
союз,union, alliance; conjunction
спасибо,gratitude, thanks
спать,to sleep
спина,back
спокойно,quietly
способный,capable (of)
спрашивать,to ask, inquire
спросить,to ask
сразу,at once, right away, just
среди,among
средний,average, middle
средство,means, remedy
ставить,to put, place, set
стакан,glass
становиться,to stand; to become
станция,station
стараться,to try, endeavour
старик,old man
старший,elder, senior
старый,old
стать,to become, begin, come
статья,article
стекло,glass
стена,wall
сто,hundred
стол,table, desk; board
столь,so
столько,so much, so many
сторона,side, party
стоять,to stand, be, stand up
страна,country
странно,strangely
странный,strange
страх,fear
страшно,terribly, awfully
страшный,terrible, frightful
стрелять,to shoot
стул,chair
суд,court, law-court
судить,to judge, try
судьба,fate, fortune, destiny
сухой,dry
существовать,to exist, to be
счастливый,happy
счастье,happiness, luck
счет,bill, account
считать,to count, consider
сын,son
сюда,here
так,so, thus, then
также,also, as well, too
таки,after all
такой,such, so, some
там,there, then
твой,your, yours (informal)
телефон,telephone
тело,body
темнота,darkness
темный,dark
тень,shadow
теперь,now, nowadays
теплый,warm
течение,current
тип,type, model
тихий,quiet, low, scelent
тихо,quietly, softly, slowly
тишина,silence, stillness
товарищ,comrade, friend
тогда,then
тоже,also, as well, too
толпа,crowd
толстый,thick, heavy, fat
только,only, merely, but
тонкий,thin
тот,that
точка,dot, point
точно,exactly
трава,grass
требовать,to demand
третий,third
три,three
тридцать,thirty
трубка,tube, roll, pipe
труд,labour, work
трудно,with difficulty
туда,there
тут,here, now, then
ты,you, thou
тысяча,a thousand
тяжёлый,heavy
у,by, with, of
убить,to kill
уверенный,confident, sure
увидеть,to see
угол,corner, angle
удар,blow, stroke
удаться,turn out well, succeed, manage
удивиться,to wonder, be surprised
удовольствие,pleasure
уехать,to leave, depart
уж,really, already
уже,already, by now
узнать,to know, learn, recognize
уйти,to leave, go away
улица,street
улыбаться,to smile
улыбка,smile
улыбнуться,to smile
ум,mind, brains, intellect
умереть,to die
уметь,to be able, know, can
упасть,to fall
управление,operation, control
уровень,level
условие,condition, term
услышать,to hear
успеть,to be in time, be successful
утро,morning
ухо,ear
уходить,to leave, go away
учитель,teacher, instructor
учиться,to study, learn
факт,fact
фамилия,surname
форма,form, shape, uniform
фронт,front
характер,character, disposition, temper
хватать,to snatch, seize; be sufficient
хватить,to snatch, seize, suffice
хлеб,bread
ход,move
ходить,to go, walk
хозяин,master, boss, host
холодный,cold, cool
хороший,good, nice
хорошо,well
хотеть,to want, like
хотеться,want, like
хоть,even, if you want, though
хотя,although
художник,painter, artist
худой,thin, skinny
цвет,colour, color
цветок,flower
целый,intact, whole, entire
цель,goal, object, target
цена,price
центр,center
чай,tea
час,hour, time
часто,often
частый,frequent
часть,part, share, department
чей,whose
человек,man, person
человеческий,human
чем,than; instead of
через,through, across
черный,black
черта,line, boundary; trait
четыре,four
число,number
чистый,clean, pure
читать,to read
член,member, limb
что,what, that, why
чтоб,that, in order that
чтобы,that, in order that
чувство,feeling
чувствовать,to feel
чужой,somebody else's;strange, foreign
чуть,hardly, slightly
чёрный,black
шаг,step
шесть,six
шея,neck
широкий,wide
школа,school
щека,cheek
этаж,floor, storey
это,that, this, it
этот,this
я,I
являться,to appear
язык,tongue, language
ясно,clear, clearly
ящик,box, case`;

  return raw
    .split("\n")
    .map((l) => l.trim())
    .filter((l) => l && l.indexOf(",") !== -1)
    .map((l) => {
      const i = l.indexOf(",");
      return { ru: l.slice(0, i).trim(), en: l.slice(i + 1).trim() };
    });
})();
