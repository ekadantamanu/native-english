var PUZZLES = [

// ============================================================
// BEGINNER — 50 PUZZLES
// ============================================================

// --- Simple Present (8) ---
{words:['She','drinks','coffee','every','morning'],answer:'She drinks coffee every morning.',native:'Simple Present: he/she/it + verb+s. Daily habits use simple present.',col:'#c49a1a',bg:'var(--gold-dim)',level:'beginner',topic:'Simple Present'},
{words:['They','live','in','a','big','house'],answer:'They live in a big house.',native:'Simple Present: I/we/you/they + base verb. No -s for plural subjects.',col:'#0e6655',bg:'linear-gradient(135deg,#e8f5f0,#d4ede6)',level:'beginner',topic:'Simple Present'},
{words:['My','brother','works','at','a','hospital'],answer:'My brother works at a hospital.',native:'Simple Present: singular subject (my brother) takes verb+s.',col:'#1a5276',bg:'rgba(96,165,250,0.12)',level:'beginner',topic:'Simple Present'},
{words:['We','eat','lunch','at','noon'],answer:'We eat lunch at noon.',native:'Simple Present: we/they/you use base verb with no -s ending.',col:'#6c3483',bg:'var(--teal-dim)',level:'beginner',topic:'Simple Present'},
{words:['The','cat','sleeps','on','the','sofa'],answer:'The cat sleeps on the sofa.',native:'Simple Present: singular noun (the cat) takes verb+s.',col:'#1e8449',bg:'rgba(74,222,128,0.12)',level:'beginner',topic:'Simple Present'},
{words:['I','walk','to','school','every','day'],answer:'I walk to school every day.',native:'Simple Present: I + base verb. Never add -s after I.',col:'#d35400',bg:'var(--coral-dim)',level:'beginner',topic:'Simple Present'},
{words:['He','plays','football','on','Sundays'],answer:'He plays football on Sundays.',native:'Simple Present: he/she/it + verb+s. Play → plays.',col:'#c0392b',bg:'18px',level:'beginner',topic:'Simple Present'},
{words:['The','children','go','to','bed','at','nine'],answer:'The children go to bed at nine.',native:'Simple Present: plural subject (the children) uses base verb go.',col:'#1565c0',bg:'rgba(167,139,250,0.12)',level:'beginner',topic:'Simple Present'},

// --- Simple Past (8) ---
{words:['She','visited','her','grandmother','yesterday'],answer:'She visited her grandmother yesterday.',native:'Simple Past: regular verbs add -ed. Yesterday signals past tense.',col:'#c49a1a',bg:'var(--gold-dim)',level:'beginner',topic:'Simple Past'},
{words:['They','watched','a','film','last','night'],answer:'They watched a film last night.',native:'Simple Past: watch → watched. Last night is a past time marker.',col:'#0e6655',bg:'linear-gradient(135deg,#e8f5f0,#d4ede6)',level:'beginner',topic:'Simple Past'},
{words:['I','bought','new','shoes','on','Saturday'],answer:'I bought new shoes on Saturday.',native:'Simple Past: buy → bought. Irregular verb — must be memorised.',col:'#1a5276',bg:'rgba(96,165,250,0.12)',level:'beginner',topic:'Simple Past'},
{words:['He','went','to','the','market','alone'],answer:'He went to the market alone.',native:'Simple Past: go → went. Irregular verb — one of the most common.',col:'#6c3483',bg:'var(--teal-dim)',level:'beginner',topic:'Simple Past'},
{words:['We','had','a','great','time','together'],answer:'We had a great time together.',native:'Simple Past: have → had. Irregular verb used for experiences.',col:'#1e8449',bg:'rgba(74,222,128,0.12)',level:'beginner',topic:'Simple Past'},
{words:['She','cooked','rice','and','vegetables'],answer:'She cooked rice and vegetables.',native:'Simple Past: cook → cooked. Regular verb, add -ed.',col:'#d35400',bg:'var(--coral-dim)',level:'beginner',topic:'Simple Past'},
{words:['The','students','studied','all','night'],answer:'The students studied all night.',native:'Simple Past: study → studied. Consonant+y → change y to i and add -ed.',col:'#c0392b',bg:'18px',level:'beginner',topic:'Simple Past'},
{words:['My','father','came','home','late'],answer:'My father came home late.',native:'Simple Past: come → came. Irregular verb — very common in daily English.',col:'#1565c0',bg:'rgba(167,139,250,0.12)',level:'beginner',topic:'Simple Past'},

// --- Present Continuous (6) ---
{words:['She','is','reading','a','book','now'],answer:'She is reading a book now.',native:'Present Continuous: is/am/are + verb-ing. NOW signals this tense.',col:'#c49a1a',bg:'var(--gold-dim)',level:'beginner',topic:'Present Continuous'},
{words:['They','are','playing','in','the','garden'],answer:'They are playing in the garden.',native:'Present Continuous: they + are + verb-ing. Action happening right now.',col:'#0e6655',bg:'linear-gradient(135deg,#e8f5f0,#d4ede6)',level:'beginner',topic:'Present Continuous'},
{words:['I','am','waiting','for','the','bus'],answer:'I am waiting for the bus.',native:'Present Continuous: I + am + verb-ing. Only I uses am.',col:'#1a5276',bg:'rgba(96,165,250,0.12)',level:'beginner',topic:'Present Continuous'},
{words:['He','is','talking','on','the','phone'],answer:'He is talking on the phone.',native:'Present Continuous: he + is + verb-ing. Single consonant+vowel → double final consonant.',col:'#6c3483',bg:'var(--teal-dim)',level:'beginner',topic:'Present Continuous'},
{words:['We','are','having','dinner','right','now'],answer:'We are having dinner right now.',native:'Present Continuous: we + are + verb-ing. Have → having (drop the e).',col:'#1e8449',bg:'rgba(74,222,128,0.12)',level:'beginner',topic:'Present Continuous'},
{words:['The','dog','is','sleeping','under','the','table'],answer:'The dog is sleeping under the table.',native:'Present Continuous: singular subject + is + verb-ing.',col:'#d35400',bg:'var(--coral-dim)',level:'beginner',topic:'Present Continuous'},

// --- Articles (6) ---
{words:['She','wants','to','be','a','doctor'],answer:'She wants to be a doctor.',native:'Articles: a/an before singular countable nouns. Doctor starts with consonant sound → a.',col:'#c0392b',bg:'18px',level:'beginner',topic:'Articles'},
{words:['I','saw','an','elephant','at','the','zoo'],answer:'I saw an elephant at the zoo.',native:'Articles: an before vowel sounds (elephant). The zoo = specific place we both know.',col:'#1565c0',bg:'rgba(167,139,250,0.12)',level:'beginner',topic:'Articles'},
{words:['He','bought','a','new','car','last','week'],answer:'He bought a new car last week.',native:'Articles: a = first mention, one of many. Car starts with consonant → a.',col:'#c49a1a',bg:'var(--gold-dim)',level:'beginner',topic:'Articles'},
{words:['The','sun','rises','in','the','east'],answer:'The sun rises in the east.',native:'Articles: the = unique things. There is only one sun and one east.',col:'#0e6655',bg:'linear-gradient(135deg,#e8f5f0,#d4ede6)',level:'beginner',topic:'Articles'},
{words:['She','is','an','honest','person'],answer:'She is an honest person.',native:'Articles: an before vowel SOUNDS. Honest sounds like it starts with O → an honest.',col:'#1a5276',bg:'rgba(96,165,250,0.12)',level:'beginner',topic:'Articles'},
{words:['We','live','near','a','big','park'],answer:'We live near a big park.',native:'Articles: a before singular countable noun first mentioned. Park starts with consonant → a.',col:'#6c3483',bg:'var(--teal-dim)',level:'beginner',topic:'Articles'},

// --- Prepositions (6) ---
{words:['The','keys','are','on','the','table'],answer:'The keys are on the table.',native:'Prepositions: ON for surfaces. Keys resting on top of the table.',col:'#1e8449',bg:'rgba(74,222,128,0.12)',level:'beginner',topic:'Prepositions'},
{words:['She','lives','in','Mumbai'],answer:'She lives in Mumbai.',native:'Prepositions: IN for cities, countries, and enclosed spaces.',col:'#d35400',bg:'var(--coral-dim)',level:'beginner',topic:'Prepositions'},
{words:['Meet','me','at','the','station','at','eight'],answer:'Meet me at the station at eight.',native:'Prepositions: AT for specific places and specific times.',col:'#c0392b',bg:'18px',level:'beginner',topic:'Prepositions'},
{words:['The','cat','is','under','the','chair'],answer:'The cat is under the chair.',native:'Prepositions: UNDER = below/beneath something.',col:'#1565c0',bg:'rgba(167,139,250,0.12)',level:'beginner',topic:'Prepositions'},
{words:['He','arrived','on','Monday','morning'],answer:'He arrived on Monday morning.',native:'Prepositions: ON + days of the week. ON Monday, ON Friday.',col:'#c49a1a',bg:'var(--gold-dim)',level:'beginner',topic:'Prepositions'},
{words:['The','bank','is','next','to','the','post','office'],answer:'The bank is next to the post office.',native:'Prepositions: next to = immediately beside something.',col:'#0e6655',bg:'linear-gradient(135deg,#e8f5f0,#d4ede6)',level:'beginner',topic:'Prepositions'},

// --- Plurals / Countable (6) ---
{words:['There','are','three','children','in','the','room'],answer:'There are three children in the room.',native:'Plurals: child → children. Irregular plural — must memorise.',col:'#1a5276',bg:'rgba(96,165,250,0.12)',level:'beginner',topic:'Plurals'},
{words:['She','bought','two','loaves','of','bread'],answer:'She bought two loaves of bread.',native:'Countable: bread is uncountable. We count loaves of bread, not breads.',col:'#6c3483',bg:'var(--teal-dim)',level:'beginner',topic:'Plurals'},
{words:['I','need','some','information','about','the','course'],answer:'I need some information about the course.',native:'Uncountable: information has no plural. Never say informations.',col:'#1e8449',bg:'rgba(74,222,128,0.12)',level:'beginner',topic:'Plurals'},
{words:['The','mice','ran','across','the','floor'],answer:'The mice ran across the floor.',native:'Plurals: mouse → mice. Irregular plural — must memorise.',col:'#d35400',bg:'var(--coral-dim)',level:'beginner',topic:'Plurals'},
{words:['Can','I','have','a','glass','of','water','please'],answer:'Can I have a glass of water please.',native:'Uncountable: water has no plural. Use a glass of water, not a water.',col:'#c0392b',bg:'18px',level:'beginner',topic:'Plurals'},
{words:['There','are','many','leaves','on','the','ground'],answer:'There are many leaves on the ground.',native:'Plurals: leaf → leaves. Words ending in f/fe → change to v and add -es.',col:'#1565c0',bg:'rgba(167,139,250,0.12)',level:'beginner',topic:'Plurals'},

// --- Basic Questions (6) ---
{words:['Where','does','she','work','every','day'],answer:'Where does she work every day.',native:'Questions: Where + does + subject + base verb. Does is used with he/she/it.',col:'#c49a1a',bg:'var(--gold-dim)',level:'beginner',topic:'Questions'},
{words:['What','time','does','the','train','leave'],answer:'What time does the train leave.',native:'Questions: What time + does + subject + base verb. No -s on leave after does.',col:'#0e6655',bg:'linear-gradient(135deg,#e8f5f0,#d4ede6)',level:'beginner',topic:'Questions'},
{words:['How','many','brothers','do','you','have'],answer:'How many brothers do you have.',native:'Questions: How many + plural noun + do + subject + verb.',col:'#1a5276',bg:'rgba(96,165,250,0.12)',level:'beginner',topic:'Questions'},
{words:['Did','she','call','you','this','morning'],answer:'Did she call you this morning.',native:'Questions: Did + subject + base verb. Past tense question uses did.',col:'#6c3483',bg:'var(--teal-dim)',level:'beginner',topic:'Questions'},
{words:['Is','he','coming','to','the','party'],answer:'Is he coming to the party.',native:'Questions: Is + subject + verb-ing. Yes/No question using present continuous.',col:'#1e8449',bg:'rgba(74,222,128,0.12)',level:'beginner',topic:'Questions'},
{words:['Why','are','you','laughing','so','much'],answer:'Why are you laughing so much.',native:'Questions: Why + are + subject + verb-ing. Open question about reason.',col:'#d35400',bg:'var(--coral-dim)',level:'beginner',topic:'Questions'},

// --- There is / There are (4) ---
{words:['There','is','a','cat','in','the','garden'],answer:'There is a cat in the garden.',native:'There is + singular noun. One cat = is. There are + plural nouns.',col:'#c0392b',bg:'18px',level:'beginner',topic:'There is/are'},
{words:['There','are','some','apples','on','the','table'],answer:'There are some apples on the table.',native:'There are + plural noun. Apples is plural → use are.',col:'#1565c0',bg:'rgba(167,139,250,0.12)',level:'beginner',topic:'There is/are'},
{words:['There','is','no','milk','in','the','fridge'],answer:'There is no milk in the fridge.',native:'There is + uncountable noun. Milk is uncountable → always use is.',col:'#c49a1a',bg:'var(--gold-dim)',level:'beginner',topic:'There is/are'},
{words:['There','are','twenty','students','in','my','class'],answer:'There are twenty students in my class.',native:'There are + plural noun. Twenty students = plural → are.',col:'#0e6655',bg:'linear-gradient(135deg,#e8f5f0,#d4ede6)',level:'beginner',topic:'There is/are'},

// ============================================================
// INTERMEDIATE — 50 PUZZLES
// ============================================================

// --- Present Perfect (8) ---
{words:['She','has','lived','in','London','for','five','years'],answer:'She has lived in London for five years.',native:'Present Perfect: has/have + past participle. FOR + duration = present perfect.',col:'#1a5276',bg:'rgba(96,165,250,0.12)',level:'intermediate',topic:'Present Perfect'},
{words:['I','have','never','eaten','sushi','before'],answer:'I have never eaten sushi before.',native:'Present Perfect: have + never + past participle. Life experience without specific time.',col:'#6c3483',bg:'var(--teal-dim)',level:'intermediate',topic:'Present Perfect'},
{words:['They','have','just','finished','the','project'],answer:'They have just finished the project.',native:'Present Perfect: have + just + past participle. Just = very recently.',col:'#1e8449',bg:'rgba(74,222,128,0.12)',level:'intermediate',topic:'Present Perfect'},
{words:['He','has','already','sent','the','email'],answer:'He has already sent the email.',native:'Present Perfect: has + already + past participle. Already = before expected time.',col:'#d35400',bg:'var(--coral-dim)',level:'intermediate',topic:'Present Perfect'},
{words:['Have','you','ever','been','to','Japan'],answer:'Have you ever been to Japan.',native:'Present Perfect question: Have + subject + ever + past participle.',col:'#c0392b',bg:'18px',level:'intermediate',topic:'Present Perfect'},
{words:['She','has','worked','here','since','January'],answer:'She has worked here since January.',native:'Present Perfect: has + past participle + since + starting point.',col:'#1565c0',bg:'rgba(167,139,250,0.12)',level:'intermediate',topic:'Present Perfect'},
{words:['We','have','not','decided','yet'],answer:'We have not decided yet.',native:'Present Perfect negative: have + not + past participle + yet. Yet = up to now.',col:'#c49a1a',bg:'var(--gold-dim)',level:'intermediate',topic:'Present Perfect'},
{words:['The','team','has','won','three','trophies','this','year'],answer:'The team has won three trophies this year.',native:'Present Perfect: has + past participle. This year is still ongoing = present perfect.',col:'#0e6655',bg:'linear-gradient(135deg,#e8f5f0,#d4ede6)',level:'intermediate',topic:'Present Perfect'},

// --- Past Continuous (6) ---
{words:['She','was','cooking','when','I','arrived'],answer:'She was cooking when I arrived.',native:'Past Continuous: was/were + verb-ing. Longer action interrupted by simple past.',col:'#1a5276',bg:'rgba(96,165,250,0.12)',level:'intermediate',topic:'Past Continuous'},
{words:['They','were','playing','football','all','afternoon'],answer:'They were playing football all afternoon.',native:'Past Continuous: were + verb-ing. Describes ongoing activity in the past.',col:'#6c3483',bg:'var(--teal-dim)',level:'intermediate',topic:'Past Continuous'},
{words:['I','was','reading','while','she','was','cooking'],answer:'I was reading while she was cooking.',native:'Past Continuous: two simultaneous ongoing past actions connected with while.',col:'#1e8449',bg:'rgba(74,222,128,0.12)',level:'intermediate',topic:'Past Continuous'},
{words:['He','was','not','listening','during','the','meeting'],answer:'He was not listening during the meeting.',native:'Past Continuous negative: was + not + verb-ing.',col:'#d35400',bg:'var(--coral-dim)',level:'intermediate',topic:'Past Continuous'},
{words:['What','were','you','doing','at','midnight'],answer:'What were you doing at midnight.',native:'Past Continuous question: What + were + subject + verb-ing.',col:'#c0392b',bg:'18px',level:'intermediate',topic:'Past Continuous'},
{words:['The','sun','was','shining','when','we','left'],answer:'The sun was shining when we left.',native:'Past Continuous: was + verb-ing = background action. Left = short completed action.',col:'#1565c0',bg:'rgba(167,139,250,0.12)',level:'intermediate',topic:'Past Continuous'},

// --- Comparatives / Superlatives (6) ---
{words:['This','exam','is','harder','than','the','last','one'],answer:'This exam is harder than the last one.',native:'Comparatives: short adjective + -er + than. Hard → harder.',col:'#c49a1a',bg:'var(--gold-dim)',level:'intermediate',topic:'Comparatives'},
{words:['She','is','the','most','talented','student','in','the','class'],answer:'She is the most talented student in the class.',native:'Superlatives: the + most + long adjective. Talented has 3 syllables → most talented.',col:'#0e6655',bg:'linear-gradient(135deg,#e8f5f0,#d4ede6)',level:'intermediate',topic:'Comparatives'},
{words:['The','more','you','practise','the','better','you','become'],answer:'The more you practise the better you become.',native:'Double comparative: the + comparative, the + comparative = parallel increase.',col:'#1a5276',bg:'rgba(96,165,250,0.12)',level:'intermediate',topic:'Comparatives'},
{words:['He','runs','much','faster','than','his','brother'],answer:'He runs much faster than his brother.',native:'Comparatives: much + adjective-er strengthens the comparison.',col:'#6c3483',bg:'var(--teal-dim)',level:'intermediate',topic:'Comparatives'},
{words:['This','is','the','worst','film','I','have','ever','seen'],answer:'This is the worst film I have ever seen.',native:'Superlatives: bad → worst. Irregular superlative. Ever is common after superlatives.',col:'#1e8449',bg:'rgba(74,222,128,0.12)',level:'intermediate',topic:'Comparatives'},
{words:['Gold','is','more','valuable','than','silver'],answer:'Gold is more valuable than silver.',native:'Comparatives: more + long adjective + than. Valuable has 3 syllables → more valuable.',col:'#d35400',bg:'var(--coral-dim)',level:'intermediate',topic:'Comparatives'},

// --- Modal Verbs (6) ---
{words:['You','should','drink','more','water','every','day'],answer:'You should drink more water every day.',native:'Modals: should + base verb. Should = advice or recommendation.',col:'#c0392b',bg:'18px',level:'intermediate',topic:'Modals'},
{words:['She','must','submit','the','report','by','Friday'],answer:'She must submit the report by Friday.',native:'Modals: must + base verb. Must = strong obligation or necessity.',col:'#1565c0',bg:'rgba(167,139,250,0.12)',level:'intermediate',topic:'Modals'},
{words:['He','might','come','to','the','party','tonight'],answer:'He might come to the party tonight.',native:'Modals: might + base verb. Might = possibility but not certain.',col:'#c49a1a',bg:'var(--gold-dim)',level:'intermediate',topic:'Modals'},
{words:['Could','you','please','open','the','window'],answer:'Could you please open the window.',native:'Modals: could + subject + base verb. Could = polite request.',col:'#0e6655',bg:'linear-gradient(135deg,#e8f5f0,#d4ede6)',level:'intermediate',topic:'Modals'},
{words:['You','do','not','have','to','wear','a','uniform'],answer:'You do not have to wear a uniform.',native:'Modals: do not have to = no obligation. Different from must not (prohibition).',col:'#1a5276',bg:'rgba(96,165,250,0.12)',level:'intermediate',topic:'Modals'},
{words:['She','would','rather','stay','home','tonight'],answer:'She would rather stay home tonight.',native:'Modals: would rather + base verb. Expresses preference.',col:'#6c3483',bg:'var(--teal-dim)',level:'intermediate',topic:'Modals'},

// --- Passive Voice (6) ---
{words:['The','letter','was','written','by','the','manager'],answer:'The letter was written by the manager.',native:'Passive: was/were + past participle + by. Subject receives the action.',col:'#1e8449',bg:'rgba(74,222,128,0.12)',level:'intermediate',topic:'Passive Voice'},
{words:['English','is','spoken','all','over','the','world'],answer:'English is spoken all over the world.',native:'Passive: is/are + past participle. No agent needed — general truth.',col:'#d35400',bg:'var(--coral-dim)',level:'intermediate',topic:'Passive Voice'},
{words:['The','new','road','is','being','built','now'],answer:'The new road is being built now.',native:'Present Continuous Passive: is/are + being + past participle.',col:'#c0392b',bg:'18px',level:'intermediate',topic:'Passive Voice'},
{words:['The','thief','has','been','caught','by','the','police'],answer:'The thief has been caught by the police.',native:'Present Perfect Passive: has/have + been + past participle.',col:'#1565c0',bg:'rgba(167,139,250,0.12)',level:'intermediate',topic:'Passive Voice'},
{words:['The','results','will','be','announced','tomorrow'],answer:'The results will be announced tomorrow.',native:'Future Passive: will + be + past participle.',col:'#c49a1a',bg:'var(--gold-dim)',level:'intermediate',topic:'Passive Voice'},
{words:['Rice','is','grown','in','many','Asian','countries'],answer:'Rice is grown in many Asian countries.',native:'Passive: is/are + past participle. Used when the agent is obvious or unimportant.',col:'#0e6655',bg:'linear-gradient(135deg,#e8f5f0,#d4ede6)',level:'intermediate',topic:'Passive Voice'},

// --- Reported Speech (6) ---
{words:['She','said','that','she','was','tired'],answer:'She said that she was tired.',native:'Reported Speech: present → past. She said I am tired → she said she WAS tired.',col:'#1a5276',bg:'rgba(96,165,250,0.12)',level:'intermediate',topic:'Reported Speech'},
{words:['He','told','me','that','he','would','call','later'],answer:'He told me that he would call later.',native:'Reported Speech: will → would. He said I will call → he said he WOULD call.',col:'#6c3483',bg:'var(--teal-dim)',level:'intermediate',topic:'Reported Speech'},
{words:['They','asked','if','I','had','eaten','lunch'],answer:'They asked if I had eaten lunch.',native:'Reported Questions: yes/no questions use if. Present perfect → past perfect.',col:'#1e8449',bg:'rgba(74,222,128,0.12)',level:'intermediate',topic:'Reported Speech'},
{words:['She','told','him','not','to','be','late'],answer:'She told him not to be late.',native:'Reported Commands: told + person + not + to + base verb.',col:'#d35400',bg:'var(--coral-dim)',level:'intermediate',topic:'Reported Speech'},
{words:['He','asked','where','she','lived'],answer:'He asked where she lived.',native:'Reported Wh-questions: normal word order after the question word. Not where did she live.',col:'#c0392b',bg:'18px',level:'intermediate',topic:'Reported Speech'},
{words:['She','said','she','had','already','finished','the','work'],answer:'She said she had already finished the work.',native:'Reported Speech: present perfect → past perfect. Have finished → HAD finished.',col:'#1565c0',bg:'rgba(167,139,250,0.12)',level:'intermediate',topic:'Reported Speech'},

// --- First & Second Conditionals (6) ---
{words:['If','it','rains','tomorrow','we','will','stay','home'],answer:'If it rains tomorrow we will stay home.',native:'First Conditional: if + present simple, will + base verb. Real future possibility.',col:'#c49a1a',bg:'var(--gold-dim)',level:'intermediate',topic:'Conditionals'},
{words:['If','I','had','more','time','I','would','travel','more'],answer:'If I had more time I would travel more.',native:'Second Conditional: if + past simple, would + base verb. Imaginary present situation.',col:'#0e6655',bg:'linear-gradient(135deg,#e8f5f0,#d4ede6)',level:'intermediate',topic:'Conditionals'},
{words:['She','will','pass','the','exam','if','she','studies','hard'],answer:'She will pass the exam if she studies hard.',native:'First Conditional: will + base verb in main clause, present simple in if-clause.',col:'#1a5276',bg:'rgba(96,165,250,0.12)',level:'intermediate',topic:'Conditionals'},
{words:['If','I','were','you','I','would','apologise'],answer:'If I were you I would apologise.',native:'Second Conditional: if I were you = advice structure. Were is used for all persons.',col:'#6c3483',bg:'var(--teal-dim)',level:'intermediate',topic:'Conditionals'},
{words:['What','would','you','do','if','you','won','the','lottery'],answer:'What would you do if you won the lottery.',native:'Second Conditional question: would + subject + base verb + if + past simple.',col:'#1e8449',bg:'rgba(74,222,128,0.12)',level:'intermediate',topic:'Conditionals'},
{words:['Unless','you','hurry','you','will','miss','the','train'],answer:'Unless you hurry you will miss the train.',native:'First Conditional with unless: unless = if not. Unless you hurry = if you do not hurry.',col:'#d35400',bg:'var(--coral-dim)',level:'intermediate',topic:'Conditionals'},

// --- Conjunctions (6) ---
{words:['Although','it','was','cold','she','went','for','a','walk'],answer:'Although it was cold she went for a walk.',native:'Conjunctions: although + clause + comma + main clause. Shows contrast.',col:'#c0392b',bg:'18px',level:'intermediate',topic:'Conjunctions'},
{words:['She','studied','hard','therefore','she','passed'],answer:'She studied hard therefore she passed.',native:'Conjunctions: therefore = as a result. Shows cause and effect between two clauses.',col:'#1565c0',bg:'rgba(167,139,250,0.12)',level:'intermediate',topic:'Conjunctions'},
{words:['He','is','not','only','smart','but','also','hardworking'],answer:'He is not only smart but also hardworking.',native:'Correlative conjunctions: not only...but also. Connects two parallel qualities.',col:'#c49a1a',bg:'var(--gold-dim)',level:'intermediate',topic:'Conjunctions'},
{words:['She','left','early','so','that','she','could','catch','the','bus'],answer:'She left early so that she could catch the bus.',native:'Conjunctions: so that + could = purpose. Shows reason for an action.',col:'#0e6655',bg:'linear-gradient(135deg,#e8f5f0,#d4ede6)',level:'intermediate',topic:'Conjunctions'},
{words:['Neither','the','food','nor','the','service','was','good'],answer:'Neither the food nor the service was good.',native:'Correlative conjunctions: neither...nor. Both are negative. Verb agrees with second subject.',col:'#1a5276',bg:'rgba(96,165,250,0.12)',level:'intermediate',topic:'Conjunctions'},
{words:['By','the','time','she','arrived','he','had','already','left'],answer:'By the time she arrived he had already left.',native:'Conjunctions: by the time + past simple shows one action completed before another.',col:'#6c3483',bg:'var(--teal-dim)',level:'intermediate',topic:'Conjunctions'},

// --- Present Perfect Continuous (6) ---

// ============================================================
// ADVANCED — 50 PUZZLES
// ============================================================

// --- Third Conditional (6) ---
{words:['If','I','had','studied','harder','I','would','have','passed'],answer:'If I had studied harder I would have passed.',native:'Third Conditional: if + past perfect, would + have + past participle. Impossible past regret.',col:'#1a5276',bg:'rgba(96,165,250,0.12)',level:'advanced',topic:'Third Conditional'},
{words:['She','would','not','have','missed','the','flight','if','she','had','left','earlier'],answer:'She would not have missed the flight if she had left earlier.',native:'Third Conditional negative: would + not + have + past participle. Past regret.',col:'#6c3483',bg:'var(--teal-dim)',level:'advanced',topic:'Third Conditional'},
{words:['Had','they','known','the','truth','they','would','have','acted','differently'],answer:'Had they known the truth they would have acted differently.',native:'Inverted Third Conditional: Had + subject + past participle (no if). Formal English.',col:'#1e8449',bg:'rgba(74,222,128,0.12)',level:'advanced',topic:'Third Conditional'},
{words:['If','she','had','taken','the','medicine','she','might','have','recovered','faster'],answer:'If she had taken the medicine she might have recovered faster.',native:'Third Conditional with might have: less certain outcome than would have.',col:'#d35400',bg:'var(--coral-dim)',level:'advanced',topic:'Third Conditional'},
{words:['What','would','you','have','done','if','you','had','been','there'],answer:'What would you have done if you had been there.',native:'Third Conditional question: What + would + subject + have + past participle.',col:'#c0392b',bg:'18px',level:'advanced',topic:'Third Conditional'},
{words:['He','could','have','become','a','doctor','if','he','had','studied','medicine'],answer:'He could have become a doctor if he had studied medicine.',native:'Third Conditional with could have: expresses lost opportunity in the past.',col:'#1565c0',bg:'rgba(167,139,250,0.12)',level:'advanced',topic:'Third Conditional'},

// --- Inversion (6) ---
{words:['Never','have','I','seen','such','a','beautiful','sunset'],answer:'Never have I seen such a beautiful sunset.',native:'Inversion: negative adverb (never) at start forces auxiliary + subject inversion.',col:'#c49a1a',bg:'var(--gold-dim)',level:'advanced',topic:'Inversion'},
{words:['Not','only','did','she','win','but','she','also','broke','the','record'],answer:'Not only did she win but she also broke the record.',native:'Inversion: not only + did + subject + verb. Forces auxiliary inversion in first clause.',col:'#0e6655',bg:'linear-gradient(135deg,#e8f5f0,#d4ede6)',level:'advanced',topic:'Inversion'},
{words:['Hardly','had','he','arrived','when','the','meeting','started'],answer:'Hardly had he arrived when the meeting started.',native:'Inversion: hardly + had + subject + past participle + when. Two quick sequential events.',col:'#1a5276',bg:'rgba(96,165,250,0.12)',level:'advanced',topic:'Inversion'},
{words:['Only','after','she','left','did','he','realise','his','mistake'],answer:'Only after she left did he realise his mistake.',native:'Inversion: Only after + clause + did + subject + verb. Emphasises the sequence.',col:'#6c3483',bg:'var(--teal-dim)',level:'advanced',topic:'Inversion'},
{words:['Little','did','they','know','what','was','about','to','happen'],answer:'Little did they know what was about to happen.',native:'Inversion: little + did + subject + know. Fixed expression meaning they were unaware.',col:'#1e8449',bg:'rgba(74,222,128,0.12)',level:'advanced',topic:'Inversion'},
{words:['No','sooner','had','she','sat','down','than','the','phone','rang'],answer:'No sooner had she sat down than the phone rang.',native:'Inversion: no sooner + had + subject + past participle + than. Two immediate events.',col:'#d35400',bg:'var(--coral-dim)',level:'advanced',topic:'Inversion'},

// --- Subjunctive (5) ---
{words:['It','is','essential','that','every','student','submit','the','form'],answer:'It is essential that every student submit the form.',native:'Subjunctive: It is essential/important/vital that + subject + BASE verb (no -s, no -ed).',col:'#c0392b',bg:'18px',level:'advanced',topic:'Subjunctive'},
{words:['The','doctor','recommended','that','she','rest','for','a','week'],answer:'The doctor recommended that she rest for a week.',native:'Subjunctive: recommend/suggest/insist + that + subject + base verb.',col:'#1565c0',bg:'rgba(167,139,250,0.12)',level:'advanced',topic:'Subjunctive'},
{words:['I','wish','I','were','able','to','speak','five','languages'],answer:'I wish I were able to speak five languages.',native:'Subjunctive: wish + were (not was) for all persons. Expresses unreal present wish.',col:'#c49a1a',bg:'var(--gold-dim)',level:'advanced',topic:'Subjunctive'},
{words:['He','insisted','that','the','meeting','be','postponed'],answer:'He insisted that the meeting be postponed.',native:'Subjunctive passive: insist that + subject + be + past participle.',col:'#0e6655',bg:'linear-gradient(135deg,#e8f5f0,#d4ede6)',level:'advanced',topic:'Subjunctive'},
{words:['If','only','she','had','told','me','the','truth'],answer:'If only she had told me the truth.',native:'Subjunctive: if only + past perfect expresses strong regret about the past.',col:'#1a5276',bg:'rgba(96,165,250,0.12)',level:'advanced',topic:'Subjunctive'},

// --- Mixed Conditionals (6) ---
{words:['If','I','had','taken','that','job','I','would','be','rich','now'],answer:'If I had taken that job I would be rich now.',native:'Mixed Conditional: if + past perfect (past), would + base verb (present). Past cause, present result.',col:'#6c3483',bg:'var(--teal-dim)',level:'advanced',topic:'Mixed Conditionals'},
{words:['If','she','were','more','confident','she','would','have','applied'],answer:'If she were more confident she would have applied.',native:'Mixed Conditional: if + past simple (present state), would + have + past participle (past result).',col:'#1e8449',bg:'rgba(74,222,128,0.12)',level:'advanced',topic:'Mixed Conditionals'},
{words:['Had','I','not','missed','that','flight','I','would','be','there','now'],answer:'Had I not missed that flight I would be there now.',native:'Mixed Conditional with inversion: Had + subject + past participle. Past cause, present result.',col:'#d35400',bg:'var(--coral-dim)',level:'advanced',topic:'Mixed Conditionals'},
{words:['If','he','spoke','better','English','he','would','have','got','the','job'],answer:'If he spoke better English he would have got the job.',native:'Mixed Conditional: if + past simple (permanent state), would + have + past participle (past missed chance).',col:'#c0392b',bg:'18px',level:'advanced',topic:'Mixed Conditionals'},
{words:['She','would','not','be','so','tired','if','she','had','slept','properly'],answer:'She would not be so tired if she had slept properly.',native:'Mixed Conditional reversed: main clause (present) + if + past perfect (past cause).',col:'#1565c0',bg:'rgba(167,139,250,0.12)',level:'advanced',topic:'Mixed Conditionals'},
{words:['If','they','had','invested','earlier','they','would','own','the','company','now'],answer:'If they had invested earlier they would own the company now.',native:'Mixed Conditional: past investment opportunity missed → present ownership lost.',col:'#c49a1a',bg:'var(--gold-dim)',level:'advanced',topic:'Mixed Conditionals'},

// --- Cleft Sentences (5) ---
{words:['It','was','Maria','who','solved','the','problem'],answer:'It was Maria who solved the problem.',native:'Cleft sentence: It + was + focus word + who/that + rest of clause. Emphasises Maria.',col:'#0e6655',bg:'linear-gradient(135deg,#e8f5f0,#d4ede6)',level:'advanced',topic:'Cleft Sentences'},
{words:['What','I','need','is','a','long','holiday'],answer:'What I need is a long holiday.',native:'Wh-cleft: What + subject + verb + is + focus. Emphasises what is needed.',col:'#1a5276',bg:'rgba(96,165,250,0.12)',level:'advanced',topic:'Cleft Sentences'},
{words:['It','is','hard','work','that','leads','to','success'],answer:'It is hard work that leads to success.',native:'Cleft sentence: It + is + focus noun phrase + that + verb. Emphasises the cause.',col:'#6c3483',bg:'var(--teal-dim)',level:'advanced',topic:'Cleft Sentences'},
{words:['What','surprised','me','most','was','her','reaction'],answer:'What surprised me most was her reaction.',native:'Wh-cleft: What + clause + was + focus noun. Emphasises the surprising element.',col:'#1e8449',bg:'rgba(74,222,128,0.12)',level:'advanced',topic:'Cleft Sentences'},
{words:['It','was','not','until','midnight','that','they','finally','arrived'],answer:'It was not until midnight that they finally arrived.',native:'Cleft with not until: It + was + not until + time + that + clause. Emphasises lateness.',col:'#d35400',bg:'var(--coral-dim)',level:'advanced',topic:'Cleft Sentences'},

// --- Participle Clauses (6) ---
{words:['Having','finished','her','work','she','went','for','a','walk'],answer:'Having finished her work she went for a walk.',native:'Participle clause: Having + past participle replaces after she had finished. Formal English.',col:'#c0392b',bg:'18px',level:'advanced',topic:'Participle Clauses'},
{words:['Exhausted','from','the','long','journey','he','fell','asleep','immediately'],answer:'Exhausted from the long journey he fell asleep immediately.',native:'Participle clause: past participle at start = because he was exhausted. Formal shortening.',col:'#1565c0',bg:'rgba(167,139,250,0.12)',level:'advanced',topic:'Participle Clauses'},
{words:['Not','knowing','what','to','do','she','called','her','manager'],answer:'Not knowing what to do she called her manager.',native:'Negative participle clause: Not + knowing = because she did not know.',col:'#c49a1a',bg:'var(--gold-dim)',level:'advanced',topic:'Participle Clauses'},
{words:['The','report','submitted','last','week','contained','several','errors'],answer:'The report submitted last week contained several errors.',native:'Reduced relative clause: submitted = which was submitted. Past participle modifies the noun.',col:'#0e6655',bg:'linear-gradient(135deg,#e8f5f0,#d4ede6)',level:'advanced',topic:'Participle Clauses'},
{words:['Walking','into','the','room','he','noticed','something','unusual'],answer:'Walking into the room he noticed something unusual.',native:'Participle clause: Walking = as he walked. Subject must be same in both clauses.',col:'#1a5276',bg:'rgba(96,165,250,0.12)',level:'advanced',topic:'Participle Clauses'},
{words:['Having','been','told','the','news','she','burst','into','tears'],answer:'Having been told the news she burst into tears.',native:'Perfect passive participle: Having been + past participle = after she was told.',col:'#6c3483',bg:'var(--teal-dim)',level:'advanced',topic:'Participle Clauses'},

// --- Advanced Reported Speech (5) ---
{words:['She','denied','having','taken','the','money'],answer:'She denied having taken the money.',native:'Reporting verb + gerund: deny + verb-ing. She said I did not take it → denied having taken.',col:'#1e8449',bg:'rgba(74,222,128,0.12)',level:'advanced',topic:'Advanced Reported Speech'},
{words:['He','admitted','that','he','had','made','a','serious','mistake'],answer:'He admitted that he had made a serious mistake.',native:'Reporting verb: admit + that + past perfect. Present perfect shifts to past perfect in reported speech.',col:'#d35400',bg:'var(--coral-dim)',level:'advanced',topic:'Advanced Reported Speech'},
{words:['They','warned','us','not','to','enter','the','building'],answer:'They warned us not to enter the building.',native:'Reporting verb + object + not + to infinitive: warn someone not to do something.',col:'#c0392b',bg:'18px',level:'advanced',topic:'Advanced Reported Speech'},
{words:['She','claimed','to','have','been','working','there','for','years'],answer:'She claimed to have been working there for years.',native:'Reporting verb + to have been + verb-ing: claim + perfect continuous infinitive.',col:'#1565c0',bg:'rgba(167,139,250,0.12)',level:'advanced',topic:'Advanced Reported Speech'},
{words:['He','suggested','going','to','a','different','restaurant'],answer:'He suggested going to a different restaurant.',native:'Reporting verb + gerund: suggest + verb-ing. Never suggest to go — always suggest going.',col:'#c49a1a',bg:'var(--gold-dim)',level:'advanced',topic:'Advanced Reported Speech'},

// --- Complex Passives (5) ---
{words:['The','suspect','is','believed','to','have','fled','the','country'],answer:'The suspect is believed to have fled the country.',native:'Complex passive: subject + is + believed/said/thought + to + have + past participle.',col:'#0e6655',bg:'linear-gradient(135deg,#e8f5f0,#d4ede6)',level:'advanced',topic:'Complex Passives'},
{words:['She','is','said','to','be','one','of','the','best','in','her','field'],answer:'She is said to be one of the best in her field.',native:'Complex passive: subject + is said + to + base verb. Formal alternative to people say that.',col:'#1a5276',bg:'rgba(96,165,250,0.12)',level:'advanced',topic:'Complex Passives'},
{words:['The','new','policy','is','reported','to','have','been','approved'],answer:'The new policy is reported to have been approved.',native:'Complex passive: is reported + to have been + past participle. Double passive structure.',col:'#6c3483',bg:'var(--teal-dim)',level:'advanced',topic:'Complex Passives'},
{words:['It','is','widely','believed','that','exercise','improves','mental','health'],answer:'It is widely believed that exercise improves mental health.',native:'Impersonal passive: It + is + adverb + past participle + that clause.',col:'#1e8449',bg:'rgba(74,222,128,0.12)',level:'advanced',topic:'Complex Passives'},
{words:['The','documents','are','thought','to','have','been','destroyed'],answer:'The documents are thought to have been destroyed.',native:'Complex passive: are thought + to have been + past participle. Passive within passive.',col:'#d35400',bg:'var(--coral-dim)',level:'advanced',topic:'Complex Passives'},

// --- Perfect Passive (6) ---
{words:['The','project','had','been','completed','before','the','deadline'],answer:'The project had been completed before the deadline.',native:'Past Perfect Passive: had + been + past participle. Completed before another past event.',col:'#c0392b',bg:'18px',level:'advanced',topic:'Perfect Passive'},
{words:['The','letter','should','have','been','sent','last','week'],answer:'The letter should have been sent last week.',native:'Modal Perfect Passive: should + have + been + past participle. Past obligation not fulfilled.',col:'#1565c0',bg:'rgba(167,139,250,0.12)',level:'advanced',topic:'Perfect Passive'},
{words:['By','next','year','the','bridge','will','have','been','completed'],answer:'By next year the bridge will have been completed.',native:'Future Perfect Passive: will + have + been + past participle.',col:'#c49a1a',bg:'var(--gold-dim)',level:'advanced',topic:'Perfect Passive'},
{words:['The','evidence','must','have','been','tampered','with'],answer:'The evidence must have been tampered with.',native:'Modal Perfect Passive: must + have + been + past participle. Past deduction + passive.',col:'#0e6655',bg:'linear-gradient(135deg,#e8f5f0,#d4ede6)',level:'advanced',topic:'Perfect Passive'},
{words:['She','was','said','to','have','been','trained','by','the','best'],answer:'She was said to have been trained by the best.',native:'Complex Past Passive: was said + to have been + past participle. Layered passive.',col:'#1a5276',bg:'rgba(96,165,250,0.12)',level:'advanced',topic:'Perfect Passive'},
{words:['The','manuscript','is','believed','to','have','been','written','in','the','twelfth','century'],answer:'The manuscript is believed to have been written in the twelfth century.',native:'Complex passive with time: is believed + to have been + past participle + time phrase.',col:'#6c3483',bg:'var(--teal-dim)',level:'advanced',topic:'Perfect Passive'}


];
