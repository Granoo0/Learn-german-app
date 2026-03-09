
// ─── DATA ─────────────────────────────────────────────────────────────────────

export const LEVEL_META = {
  A1: { label: "A1", name: "Beginner", desc: "Introductions, numbers, colors & everyday basics", color: "#16a34a", light: "#dcfce7" },
  A2: { label: "A2", name: "Elementary", desc: "Shopping, travel, daily routines & simple conversations", color: "#1d4ed8", light: "#dbeafe" },
  B1: { label: "B1", name: "Intermediate", desc: "Work, opinions, past events & complex sentences", color: "#d97706", light: "#fef3c7" },
  B2: { label: "B2", name: "Upper-Intermediate", desc: "Abstract topics, nuance, formal register", color: "#7c3aed", light: "#ede9fe" },
  C1: { label: "C1", name: "Advanced", desc: "Fluent expression, idiomatic language, debate", color: "#be185d", light: "#fce7f3" },
  C2: { label: "C2", name: "Mastery", desc: "Near-native precision, literature & complex rhetoric", color: "#dc2626", light: "#fee2e2" },
};

export const LEVELS = ["A1", "A2", "B1", "B2", "C1", "C2"];

// ── VOCABULARY ────────────────────────────────────────────────────────────────

export const VOCABULARY = {
  A1: [
    { german: "Hallo", english: "Hello", example: "Hallo! Wie heißt du?", gender: null, pos: "interjection" },
    { german: "Tschüss", english: "Bye", example: "Tschüss, bis morgen!", gender: null, pos: "interjection" },
    { german: "Bitte", english: "Please / You're welcome", example: "Bitte, nehmen Sie Platz.", gender: null, pos: "adverb" },
    { german: "Danke", english: "Thank you", example: "Danke schön!", gender: null, pos: "interjection" },
    { german: "Ja", english: "Yes", example: "Ja, ich verstehe.", gender: null, pos: "adverb" },
    { german: "Nein", english: "No", example: "Nein, das stimmt nicht.", gender: null, pos: "adverb" },
    { german: "der Mann", english: "man", example: "Der Mann ist groß.", gender: "der", pos: "noun" },
    { german: "die Frau", english: "woman", example: "Die Frau liest ein Buch.", gender: "die", pos: "noun" },
    { german: "das Kind", english: "child", example: "Das Kind spielt im Garten.", gender: "das", pos: "noun" },
    { german: "der Tisch", english: "table", example: "Der Tisch ist aus Holz.", gender: "der", pos: "noun" },
    { german: "das Haus", english: "house", example: "Das Haus ist sehr alt.", gender: "das", pos: "noun" },
    { german: "die Stadt", english: "city", example: "Berlin ist eine große Stadt.", gender: "die", pos: "noun" },
    { german: "das Wasser", english: "water", example: "Ich trinke Wasser.", gender: "das", pos: "noun" },
    { german: "das Brot", english: "bread", example: "Das Brot schmeckt lecker.", gender: "das", pos: "noun" },
    { german: "der Apfel", english: "apple", example: "Ich esse einen Apfel.", gender: "der", pos: "noun" },
    { german: "die Schule", english: "school", example: "Die Kinder gehen zur Schule.", gender: "die", pos: "noun" },
    { german: "der Hund", english: "dog", example: "Der Hund bellt laut.", gender: "der", pos: "noun" },
    { german: "die Katze", english: "cat", example: "Die Katze schläft.", gender: "die", pos: "noun" },
    { german: "das Auto", english: "car", example: "Das Auto fährt schnell.", gender: "das", pos: "noun" },
    { german: "die Straße", english: "street", example: "Die Straße ist breit.", gender: "die", pos: "noun" },
    { german: "heißen", english: "to be called / named", example: "Ich heiße Thomas.", gender: null, pos: "verb" },
    { german: "sein", english: "to be", example: "Ich bin müde.", gender: null, pos: "verb" },
    { german: "haben", english: "to have", example: "Ich habe einen Bruder.", gender: null, pos: "verb" },
    { german: "wohnen", english: "to live / reside", example: "Ich wohne in Berlin.", gender: null, pos: "verb" },
    { german: "arbeiten", english: "to work", example: "Er arbeitet als Arzt.", gender: null, pos: "verb" },
    { german: "sprechen", english: "to speak", example: "Sie spricht Deutsch.", gender: null, pos: "verb" },
    { german: "kommen", english: "to come", example: "Ich komme aus Deutschland.", gender: null, pos: "verb" },
    { german: "gehen", english: "to go", example: "Wir gehen ins Kino.", gender: null, pos: "verb" },
    { german: "essen", english: "to eat", example: "Er isst gerne Pasta.", gender: null, pos: "verb" },
    { german: "trinken", english: "to drink", example: "Sie trinkt Tee.", gender: null, pos: "verb" },
    { german: "machen", english: "to do / make", example: "Was machst du heute?", gender: null, pos: "verb" },
    { german: "schreiben", english: "to write", example: "Ich schreibe eine E-Mail.", gender: null, pos: "verb" },
    { german: "lesen", english: "to read", example: "Sie liest gern Bücher.", gender: null, pos: "verb" },
    { german: "groß", english: "big / tall", example: "Der Turm ist sehr groß.", gender: null, pos: "adjective" },
    { german: "klein", english: "small / short", example: "Das Zimmer ist klein.", gender: null, pos: "adjective" },
    { german: "gut", english: "good", example: "Das Essen ist gut.", gender: null, pos: "adjective" },
    { german: "schlecht", english: "bad", example: "Das Wetter ist schlecht.", gender: null, pos: "adjective" },
    { german: "alt", english: "old", example: "Das Buch ist sehr alt.", gender: null, pos: "adjective" },
    { german: "neu", english: "new", example: "Ich habe ein neues Auto.", gender: null, pos: "adjective" },
    { german: "schön", english: "beautiful / nice", example: "Das Bild ist sehr schön.", gender: null, pos: "adjective" },
    { german: "heute", english: "today", example: "Heute ist Montag.", gender: null, pos: "adverb" },
    { german: "morgen", english: "tomorrow", example: "Morgen habe ich frei.", gender: null, pos: "adverb" },
    { german: "jetzt", english: "now", example: "Ich bin jetzt zu Hause.", gender: null, pos: "adverb" },
    { german: "hier", english: "here", example: "Ich wohne hier.", gender: null, pos: "adverb" },
    { german: "da", english: "there", example: "Er ist da drüben.", gender: null, pos: "adverb" },
    { german: "eins", english: "one", example: "Ich möchte eins.", gender: null, pos: "numeral" },
    { german: "zwei", english: "two", example: "Ich habe zwei Geschwister.", gender: null, pos: "numeral" },
    { german: "drei", english: "three", example: "Wir haben drei Katzen.", gender: null, pos: "numeral" },
    { german: "der Vater", english: "father", example: "Mein Vater ist Koch.", gender: "der", pos: "noun" },
    { german: "die Mutter", english: "mother", example: "Meine Mutter ist Lehrerin.", gender: "die", pos: "noun" },
    { german: "rot", english: "red", example: "Das Auto ist rot.", gender: null, pos: "adjective" },
    { german: "blau", english: "blue", example: "Der Himmel ist blau.", gender: null, pos: "adjective" },
    { german: "die Milch", english: "milk", example: "Die Milch ist kalt.", gender: "die", pos: "noun" },
    { german: "das Geld", english: "money", example: "Ich habe kein Geld.", gender: "das", pos: "noun" },
    { german: "die Zeit", english: "time", example: "Ich habe keine Zeit.", gender: "die", pos: "noun" },
    { german: "der Freund", english: "friend (male)", example: "Mein Freund heißt Max.", gender: "der", pos: "noun" },
    { german: "die Freundin", english: "friend (female)", example: "Meine Freundin ist nett.", gender: "die", pos: "noun" },
  ],
  A2: [
    { german: "der Bahnhof", english: "train station", example: "Der Bahnhof ist in der Stadtmitte.", gender: "der", pos: "noun" },
    { german: "das Ticket", english: "ticket", example: "Ich kaufe ein Ticket.", gender: "das", pos: "noun" },
    { german: "der Supermarkt", english: "supermarket", example: "Ich gehe in den Supermarkt.", gender: "der", pos: "noun" },
    { german: "kaufen", english: "to buy", example: "Sie kauft ein neues Kleid.", gender: null, pos: "verb" },
    { german: "verkaufen", english: "to sell", example: "Er verkauft sein altes Auto.", gender: null, pos: "verb" },
    { german: "bestellen", english: "to order", example: "Ich bestelle einen Kaffee.", gender: null, pos: "verb" },
    { german: "bezahlen", english: "to pay", example: "Können Sie bar bezahlen?", gender: null, pos: "verb" },
    { german: "die Rechnung", english: "bill / invoice", example: "Die Rechnung beträgt 20 Euro.", gender: "die", pos: "noun" },
    { german: "teuer", english: "expensive", example: "Das Restaurant ist sehr teuer.", gender: null, pos: "adjective" },
    { german: "billig", english: "cheap", example: "Die Schuhe sind billig.", gender: null, pos: "adjective" },
    { german: "der Beruf", english: "profession / job", example: "Was ist Ihr Beruf?", gender: "der", pos: "noun" },
    { german: "das Büro", english: "office", example: "Er arbeitet im Büro.", gender: "das", pos: "noun" },
    { german: "die Besprechung", english: "meeting", example: "Die Besprechung beginnt um 9 Uhr.", gender: "die", pos: "noun" },
    { german: "anfangen", english: "to start / begin", example: "Wann fängt der Film an?", gender: null, pos: "verb" },
    { german: "aufhören", english: "to stop / finish", example: "Der Unterricht hört um 15 Uhr auf.", gender: null, pos: "verb" },
    { german: "anrufen", english: "to call (phone)", example: "Ich rufe dich morgen an.", gender: null, pos: "verb" },
    { german: "mitnehmen", english: "to take along", example: "Kann ich das mitnehmen?", gender: null, pos: "verb" },
    { german: "gestern", english: "yesterday", example: "Gestern war ich krank.", gender: null, pos: "adverb" },
    { german: "früh", english: "early", example: "Ich stehe früh auf.", gender: null, pos: "adverb" },
    { german: "spät", english: "late", example: "Es ist schon spät.", gender: null, pos: "adjective" },
    { german: "das Wetter", english: "weather", example: "Das Wetter ist heute schön.", gender: "das", pos: "noun" },
    { german: "die Jahreszeit", english: "season", example: "Welche Jahreszeit magst du?", gender: "die", pos: "noun" },
    { german: "der Urlaub", english: "vacation", example: "Wir fahren im Urlaub nach Spanien.", gender: "der", pos: "noun" },
    { german: "das Hotel", english: "hotel", example: "Das Hotel hat einen Pool.", gender: "das", pos: "noun" },
    { german: "die Reise", english: "journey / trip", example: "Die Reise dauert drei Stunden.", gender: "die", pos: "noun" },
    { german: "fliegen", english: "to fly", example: "Wir fliegen nach Paris.", gender: null, pos: "verb" },
    { german: "fahren", english: "to drive / travel", example: "Ich fahre mit dem Zug.", gender: null, pos: "verb" },
    { german: "die Familie", english: "family", example: "Meine Familie wohnt in München.", gender: "die", pos: "noun" },
    { german: "das Hobby", english: "hobby", example: "Mein Hobby ist Lesen.", gender: "das", pos: "noun" },
    { german: "der Sport", english: "sport", example: "Er treibt viel Sport.", gender: "der", pos: "noun" },
    { german: "kochen", english: "to cook", example: "Sie kocht sehr gut.", gender: null, pos: "verb" },
    { german: "schlafen", english: "to sleep", example: "Das Baby schläft.", gender: null, pos: "verb" },
    { german: "die Wohnung", english: "apartment", example: "Die Wohnung ist sehr gemütlich.", gender: "die", pos: "noun" },
    { german: "das Zimmer", english: "room", example: "Das Zimmer ist sauber.", gender: "das", pos: "noun" },
    { german: "die Küche", english: "kitchen", example: "Die Küche ist modern.", gender: "die", pos: "noun" },
    { german: "müde", english: "tired", example: "Ich bin sehr müde.", gender: null, pos: "adjective" },
    { german: "hungrig", english: "hungry", example: "Bist du hungrig?", gender: null, pos: "adjective" },
    { german: "krank", english: "sick / ill", example: "Er ist krank und bleibt zu Hause.", gender: null, pos: "adjective" },
    { german: "gesund", english: "healthy", example: "Obst und Gemüse sind gesund.", gender: null, pos: "adjective" },
    { german: "schnell", english: "fast", example: "Das Auto fährt sehr schnell.", gender: null, pos: "adjective" },
    { german: "langsam", english: "slow", example: "Sprechen Sie bitte langsamer.", gender: null, pos: "adjective" },
    { german: "laut", english: "loud", example: "Die Musik ist zu laut.", gender: null, pos: "adjective" },
    { german: "leise", english: "quiet", example: "Sei bitte leise!", gender: null, pos: "adjective" },
    { german: "der Arzt", english: "doctor (male)", example: "Der Arzt kommt gleich.", gender: "der", pos: "noun" },
    { german: "die Ärztin", english: "doctor (female)", example: "Die Ärztin ist sehr freundlich.", gender: "die", pos: "noun" },
    { german: "das Krankenhaus", english: "hospital", example: "Er liegt im Krankenhaus.", gender: "das", pos: "noun" },
    { german: "helfen", english: "to help", example: "Können Sie mir helfen?", gender: null, pos: "verb" },
    { german: "verstehen", english: "to understand", example: "Ich verstehe das nicht.", gender: null, pos: "verb" },
    { german: "kennen", english: "to know (person/place)", example: "Ich kenne diese Stadt gut.", gender: null, pos: "verb" },
    { german: "wissen", english: "to know (fact)", example: "Weißt du die Antwort?", gender: null, pos: "verb" },
    { german: "mögen", english: "to like", example: "Ich mag Schokolade.", gender: null, pos: "verb" },
  ],
  B1: [
    { german: "die Meinung", english: "opinion", example: "Meiner Meinung nach ist das falsch.", gender: "die", pos: "noun" },
    { german: "vorschlagen", english: "to suggest / propose", example: "Ich schlage vor, dass wir früher anfangen.", gender: null, pos: "verb" },
    { german: "zustimmen", english: "to agree", example: "Ich stimme Ihnen völlig zu.", gender: null, pos: "verb" },
    { german: "ablehnen", english: "to reject / decline", example: "Er lehnt das Angebot ab.", gender: null, pos: "verb" },
    { german: "erklären", english: "to explain", example: "Können Sie das erklären?", gender: null, pos: "verb" },
    { german: "beschreiben", english: "to describe", example: "Beschreib mir deine Heimatstadt.", gender: null, pos: "verb" },
    { german: "das Ereignis", english: "event", example: "Das war ein wichtiges Ereignis.", gender: "das", pos: "noun" },
    { german: "die Umwelt", english: "environment", example: "Wir müssen die Umwelt schützen.", gender: "die", pos: "noun" },
    { german: "die Gesellschaft", english: "society", example: "Die Gesellschaft verändert sich.", gender: "die", pos: "noun" },
    { german: "die Wirtschaft", english: "economy", example: "Die Wirtschaft wächst langsam.", gender: "die", pos: "noun" },
    { german: "jedoch", english: "however / yet", example: "Das ist teuer, jedoch von guter Qualität.", gender: null, pos: "conjunction" },
    { german: "obwohl", english: "although", example: "Obwohl es regnet, gehe ich spazieren.", gender: null, pos: "conjunction" },
    { german: "damit", english: "so that", example: "Ich übe täglich, damit ich besser werde.", gender: null, pos: "conjunction" },
    { german: "deshalb", english: "therefore / that's why", example: "Es regnet, deshalb nehme ich einen Schirm.", gender: null, pos: "adverb" },
    { german: "trotzdem", english: "nevertheless", example: "Er ist krank, trotzdem kommt er zur Arbeit.", gender: null, pos: "adverb" },
    { german: "verwenden", english: "to use", example: "Verwenden Sie bitte einen Stift.", gender: null, pos: "verb" },
    { german: "erinnern", english: "to remember / remind", example: "Ich erinnere mich an meinen ersten Schultag.", gender: null, pos: "verb" },
    { german: "entscheiden", english: "to decide", example: "Ich muss mich entscheiden.", gender: null, pos: "verb" },
    { german: "versuchen", english: "to try / attempt", example: "Ich versuche, jeden Tag zu lernen.", gender: null, pos: "verb" },
    { german: "erreichen", english: "to reach / achieve", example: "Sie hat ihr Ziel erreicht.", gender: null, pos: "verb" },
    { german: "die Erfahrung", english: "experience", example: "Er hat viel Berufserfahrung.", gender: "die", pos: "noun" },
    { german: "die Möglichkeit", english: "possibility / opportunity", example: "Das ist eine gute Möglichkeit.", gender: "die", pos: "noun" },
    { german: "der Grund", english: "reason", example: "Was ist der Grund dafür?", gender: "der", pos: "noun" },
    { german: "die Lösung", english: "solution", example: "Wir suchen eine Lösung.", gender: "die", pos: "noun" },
    { german: "das Problem", english: "problem", example: "Das Problem ist bekannt.", gender: "das", pos: "noun" },
    { german: "eigentlich", english: "actually", example: "Eigentlich wollte ich zu Hause bleiben.", gender: null, pos: "adverb" },
    { german: "wahrscheinlich", english: "probably", example: "Er kommt wahrscheinlich morgen.", gender: null, pos: "adverb" },
    { german: "schließlich", english: "finally / after all", example: "Schließlich hat er nachgegeben.", gender: null, pos: "adverb" },
    { german: "bemerken", english: "to notice", example: "Hast du bemerkt, dass er nervös war?", gender: null, pos: "verb" },
    { german: "annehmen", english: "to assume / accept", example: "Ich nehme an, dass er recht hat.", gender: null, pos: "verb" },
    { german: "die Unterhaltung", english: "conversation / entertainment", example: "Wir hatten eine gute Unterhaltung.", gender: "die", pos: "noun" },
    { german: "der Unterschied", english: "difference", example: "Was ist der Unterschied?", gender: "der", pos: "noun" },
    { german: "ähnlich", english: "similar", example: "Die beiden sind sehr ähnlich.", gender: null, pos: "adjective" },
    { german: "verschieden", english: "different / various", example: "Es gibt verschiedene Möglichkeiten.", gender: null, pos: "adjective" },
    { german: "ausreichend", english: "sufficient", example: "Das ist ausreichend.", gender: null, pos: "adjective" },
    { german: "notwendig", english: "necessary", example: "Das ist notwendig.", gender: null, pos: "adjective" },
    { german: "benutzen", english: "to use", example: "Darf ich Ihr Telefon benutzen?", gender: null, pos: "verb" },
    { german: "vorbereiten", english: "to prepare", example: "Ich bereite mich auf die Prüfung vor.", gender: null, pos: "verb" },
    { german: "teilnehmen", english: "to participate", example: "Ich nehme an dem Kurs teil.", gender: null, pos: "verb" },
    { german: "aufpassen", english: "to pay attention / be careful", example: "Pass auf!", gender: null, pos: "verb" },
    { german: "stattfinden", english: "to take place", example: "Das Konzert findet morgen statt.", gender: null, pos: "verb" },
    { german: "die Verantwortung", english: "responsibility", example: "Er übernimmt die Verantwortung.", gender: "die", pos: "noun" },
    { german: "die Gelegenheit", english: "opportunity / occasion", example: "Das ist eine gute Gelegenheit.", gender: "die", pos: "noun" },
    { german: "der Erfolg", english: "success", example: "Wir wünschen dir viel Erfolg!", gender: "der", pos: "noun" },
    { german: "die Herausforderung", english: "challenge", example: "Das ist eine große Herausforderung.", gender: "die", pos: "noun" },
    { german: "beachten", english: "to pay attention to / observe", example: "Bitte beachten Sie die Regeln.", gender: null, pos: "verb" },
    { german: "betonen", english: "to emphasize / stress", example: "Ich möchte betonen, dass das wichtig ist.", gender: null, pos: "verb" },
    { german: "verlieren", english: "to lose", example: "Hast du deinen Schlüssel verloren?", gender: null, pos: "verb" },
    { german: "gewinnen", english: "to win / gain", example: "Unsere Mannschaft hat gewonnen.", gender: null, pos: "verb" },
    { german: "erscheinen", english: "to appear / seem", example: "Er erscheint heute nicht.", gender: null, pos: "verb" },
    { german: "folgen", english: "to follow", example: "Folgen Sie mir bitte.", gender: null, pos: "verb" },
  ],
  B2: [
    { german: "die Argumentation", english: "argumentation / reasoning", example: "Seine Argumentation war überzeugend.", gender: "die", pos: "noun" },
    { german: "widersprechen", english: "to contradict / object", example: "Ich muss dem widersprechen.", gender: null, pos: "verb" },
    { german: "sich beziehen auf", english: "to refer to", example: "Ich beziehe mich auf Ihren letzten Bericht.", gender: null, pos: "verb" },
    { german: "inwiefern", english: "to what extent / in what way", example: "Inwiefern beeinflusst das die Ergebnisse?", gender: null, pos: "adverb" },
    { german: "die Nuance", english: "nuance", example: "Die Nuance ist entscheidend.", gender: "die", pos: "noun" },
    { german: "abwägen", english: "to weigh up / consider", example: "Man muss die Vor- und Nachteile abwägen.", gender: null, pos: "verb" },
    { german: "voraussetzen", english: "to presuppose / require", example: "Das setzt gute Kenntnisse voraus.", gender: null, pos: "verb" },
    { german: "aufweisen", english: "to show / exhibit", example: "Der Text weist stilistische Besonderheiten auf.", gender: null, pos: "verb" },
    { german: "die Tendenz", english: "tendency / trend", example: "Es gibt eine Tendenz zur Digitalisierung.", gender: "die", pos: "noun" },
    { german: "die Auswirkung", english: "effect / impact", example: "Die Auswirkungen sind noch unklar.", gender: "die", pos: "noun" },
    { german: "berücksichtigen", english: "to take into account", example: "Das muss berücksichtigt werden.", gender: null, pos: "verb" },
    { german: "einschätzen", english: "to assess / evaluate", example: "Wie schätzen Sie die Lage ein?", gender: null, pos: "verb" },
    { german: "ausdrücken", english: "to express", example: "Er drückt sich sehr präzise aus.", gender: null, pos: "verb" },
    { german: "die Schlussfolgerung", english: "conclusion", example: "Was ist die Schlussfolgerung?", gender: "die", pos: "noun" },
    { german: "differenzieren", english: "to differentiate", example: "Man muss hier differenzieren.", gender: null, pos: "verb" },
    { german: "der Zusammenhang", english: "context / connection", example: "Im Zusammenhang mit diesem Thema...", gender: "der", pos: "noun" },
    { german: "die Konsequenz", english: "consequence", example: "Was sind die Konsequenzen?", gender: "die", pos: "noun" },
    { german: "angemessen", english: "appropriate / adequate", example: "Das ist eine angemessene Reaktion.", gender: null, pos: "adjective" },
    { german: "erheblich", english: "considerable / significant", example: "Das hat erhebliche Auswirkungen.", gender: null, pos: "adjective" },
    { german: "überwiegend", english: "predominantly", example: "Die Reaktionen waren überwiegend positiv.", gender: null, pos: "adverb" },
    { german: "hingegen", english: "on the other hand / in contrast", example: "Er liebt Musik; sie hingegen bevorzugt Stille.", gender: null, pos: "adverb" },
    { german: "zudem", english: "in addition / moreover", example: "Zudem ist er sehr erfahren.", gender: null, pos: "adverb" },
    { german: "insbesondere", english: "in particular", example: "Insbesondere Kinder sind betroffen.", gender: null, pos: "adverb" },
    { german: "vorausgesetzt", english: "provided that / assuming", example: "Vorausgesetzt, das stimmt, dann...", gender: null, pos: "conjunction" },
    { german: "sämtliche", english: "all / entire", example: "Sämtliche Dokumente wurden geprüft.", gender: null, pos: "adjective" },
    { german: "der Ansatz", english: "approach / starting point", example: "Das ist ein innovativer Ansatz.", gender: "der", pos: "noun" },
    { german: "hervorheben", english: "to highlight / emphasize", example: "Ich möchte besonders hervorheben...", gender: null, pos: "verb" },
    { german: "verdeutlichen", english: "to clarify / illustrate", example: "Das verdeutlicht das Problem.", gender: null, pos: "verb" },
    { german: "zusammenfassen", english: "to summarize", example: "Fassen Sie bitte kurz zusammen.", gender: null, pos: "verb" },
    { german: "schlussfolgern", english: "to conclude", example: "Daraus lässt sich schlussfolgern...", gender: null, pos: "verb" },
  ],
  C1: [
    { german: "die Abhandlung", english: "treatise / discourse", example: "Er verfasste eine wissenschaftliche Abhandlung.", gender: "die", pos: "noun" },
    { german: "subtil", english: "subtle", example: "Die Ironie ist sehr subtil.", gender: null, pos: "adjective" },
    { german: "geläufig", english: "fluent / common", example: "Diese Redewendung ist mir nicht geläufig.", gender: null, pos: "adjective" },
    { german: "entbehren", english: "to lack / be without", example: "Diese Aussage entbehrt jeder Grundlage.", gender: null, pos: "verb" },
    { german: "die Redewendung", english: "idiom / phrase", example: "Diese Redewendung ist sehr gebräuchlich.", gender: "die", pos: "noun" },
    { german: "eingehend", english: "thorough / detailed", example: "Wir haben die Frage eingehend besprochen.", gender: null, pos: "adjective" },
    { german: "veranschaulichen", english: "to illustrate / demonstrate", example: "Das veranschaulicht den Zusammenhang.", gender: null, pos: "verb" },
    { german: "das Leitbild", english: "guiding principle / vision", example: "Das ist das Leitbild unseres Unternehmens.", gender: "das", pos: "noun" },
    { german: "pointiert", english: "pointed / incisive", example: "Eine pointierte Kritik.", gender: null, pos: "adjective" },
    { german: "Stellung nehmen", english: "to take a stance / comment on", example: "Bitte nehmen Sie zu diesem Thema Stellung.", gender: null, pos: "verb" },
    { german: "widersprüchlich", english: "contradictory", example: "Die Aussagen sind widersprüchlich.", gender: null, pos: "adjective" },
    { german: "schlüssig", english: "conclusive / coherent", example: "Ihr Argument ist sehr schlüssig.", gender: null, pos: "adjective" },
    { german: "die Prämisse", english: "premise", example: "Von welcher Prämisse gehen Sie aus?", gender: "die", pos: "noun" },
    { german: "anspruchsvoll", english: "demanding / sophisticated", example: "Das ist ein anspruchsvolles Projekt.", gender: null, pos: "adjective" },
    { german: "tiefgründig", english: "profound / deep", example: "Eine tiefgründige Analyse.", gender: null, pos: "adjective" },
    { german: "aufgreifen", english: "to pick up / address (a topic)", example: "Er hat mein Argument aufgegriffen.", gender: null, pos: "verb" },
    { german: "sich erschöpfen in", english: "to be limited to / exhausted in", example: "Das erschöpft sich nicht darin.", gender: null, pos: "verb" },
    { german: "unbeschadet", english: "without prejudice to / notwithstanding", example: "Unbeschadet dessen bleibt die Frage offen.", gender: null, pos: "preposition" },
    { german: "ineinandergreifen", english: "to interlock / be interconnected", example: "Diese Faktoren greifen ineinander.", gender: null, pos: "verb" },
    { german: "prägen", english: "to shape / characterize", example: "Erfahrungen prägen den Charakter.", gender: null, pos: "verb" },
    { german: "veranlassen", english: "to cause / induce", example: "Was hat Sie dazu veranlasst?", gender: null, pos: "verb" },
    { german: "nahelegen", english: "to suggest / imply", example: "Die Daten legen nahe, dass...", gender: null, pos: "verb" },
    { german: "die Auseinandersetzung", english: "confrontation / debate", example: "Eine konstruktive Auseinandersetzung.", gender: "die", pos: "noun" },
    { german: "maßgeblich", english: "authoritative / decisive", example: "Das war maßgeblich für unseren Erfolg.", gender: null, pos: "adjective" },
    { german: "unabdingbar", english: "indispensable", example: "Vertrauen ist unabdingbar.", gender: null, pos: "adjective" },
  ],
  C2: [
    { german: "der Trugschluss", english: "fallacy", example: "Das ist ein klassischer Trugschluss.", gender: "der", pos: "noun" },
    { german: "apodiktisch", english: "apodictic / dogmatic", example: "Seine apodiktischen Aussagen lassen keinen Raum für Diskussion.", gender: null, pos: "adjective" },
    { german: "die Eloquenz", english: "eloquence", example: "Er beeindruckt durch seine Eloquenz.", gender: "die", pos: "noun" },
    { german: "triftig", english: "valid / cogent", example: "Ein triftiger Grund.", gender: null, pos: "adjective" },
    { german: "die Erörterung", english: "discussion / essay (analytical)", example: "Eine Erörterung des Problems.", gender: "die", pos: "noun" },
    { german: "akribisch", english: "meticulous", example: "Er arbeitet akribisch.", gender: null, pos: "adjective" },
    { german: "lakonisch", english: "laconic", example: "Eine lakonische Antwort.", gender: null, pos: "adjective" },
    { german: "parlieren", english: "to talk fluently / hold forth", example: "Er kann stundenlang parlieren.", gender: null, pos: "verb" },
    { german: "das Wortgefecht", english: "verbal battle / war of words", example: "Ein rhetorisches Wortgefecht.", gender: "das", pos: "noun" },
    { german: "scharfsinnig", english: "astute / perspicacious", example: "Eine scharfsinnige Beobachtung.", gender: null, pos: "adjective" },
    { german: "unerschütterlich", english: "unshakeable", example: "Sein Glaube ist unerschütterlich.", gender: null, pos: "adjective" },
    { german: "die Weitsicht", english: "far-sightedness / foresight", example: "Politische Weitsicht ist selten.", gender: "die", pos: "noun" },
    { german: "ergründen", english: "to fathom / probe", example: "Kann man das Universum wirklich ergründen?", gender: null, pos: "verb" },
    { german: "verklausulieren", english: "to hedge / obscure in clauses", example: "Er verklausuliert seine Aussagen.", gender: null, pos: "verb" },
    { german: "unnachgiebig", english: "unyielding / relentless", example: "Er verfolgt sein Ziel unnachgiebig.", gender: null, pos: "adjective" },
    { german: "die Hinterfragung", english: "questioning / scrutiny", example: "Eine kritische Hinterfragung der Methodik.", gender: "die", pos: "noun" },
    { german: "diffizil", english: "tricky / delicate (formal)", example: "Das ist ein diffiziles Thema.", gender: null, pos: "adjective" },
    { german: "zeitigen", english: "to produce / yield (a result)", example: "Das wird Folgen zeitigen.", gender: null, pos: "verb" },
    { german: "inständig", english: "earnest / urgent (plea)", example: "Ich bitte Sie inständig.", gender: null, pos: "adjective" },
    { german: "prononciert", english: "pronounced / emphatic", example: "Eine prononcierte Haltung.", gender: null, pos: "adjective" },
  ],
};

export const GRAMMAR = {
  A1: [
    {
      title: "Verb Conjugation (Present Tense – Präsens)",
      explanation: "In German, verbs change their endings based on the subject pronoun. The stem of a verb is found by removing -en from the infinitive. Then add these endings:",
      table: {
        headers: ["Pronoun", "Ending", "Example: kommen"],
        rows: [
          ["ich", "-e", "ich komme"],
          ["du", "-st", "du kommst"],
          ["er/sie/es", "-t", "er kommt"],
          ["wir", "-en", "wir kommen"],
          ["ihr", "-t", "ihr kommt"],
          ["sie/Sie", "-en", "sie kommen"],
        ]
      },
      tip: "Irregular verbs like sein (to be) and haben (to have) must be memorised separately."
    },
    {
      title: "Articles: Nominative Case (der, die, das)",
      explanation: "German nouns have grammatical gender: masculine (der), feminine (die), and neuter (das). The nominative case is used for the subject of a sentence — the entity performing the action.",
      table: {
        headers: ["Gender", "Definite", "Indefinite", "Negative"],
        rows: [
          ["Masculine", "der Mann", "ein Mann", "kein Mann"],
          ["Feminine", "die Frau", "eine Frau", "keine Frau"],
          ["Neuter", "das Kind", "ein Kind", "kein Kind"],
          ["Plural", "die Kinder", "— Kinder", "keine Kinder"],
        ]
      },
      tip: "There is no article rule — you must learn the gender of each noun as you go. Nouns ending in -ung, -keit, -heit are almost always feminine."
    },
    {
      title: "Accusative Case",
      explanation: "The accusative case is used for the direct object — the thing that receives the action. For most genders, the accusative looks the same as the nominative. Only the masculine changes!",
      table: {
        headers: ["Gender", "Nominative", "Accusative"],
        rows: [
          ["Masculine", "der / ein / kein", "den / einen / keinen"],
          ["Feminine", "die / eine / keine", "die / eine / keine"],
          ["Neuter", "das / ein / kein", "das / ein / kein"],
          ["Plural", "die / keine", "die / keine"],
        ]
      },
      tip: "Example: Ich sehe den Mann. (I see the man.) The man is the direct object, so 'der' becomes 'den'."
    },
    {
      title: "Basic Sentence Structure (SVO)",
      explanation: "German follows Subject-Verb-Object (SVO) order in main clauses, just like English. However, the verb must always be in the second position (V2 rule). If another element is placed first, the subject moves after the verb.",
      table: null,
      examples: [
        "Ich trinke Kaffee. (I drink coffee.)",
        "Heute trinke ich Kaffee. (Today I drink coffee.)",
        "Kaffee trinke ich heute. (Coffee I drink today.) ← emphasis on 'today'"
      ],
      tip: "The V2 rule is one of the most important rules in German. No matter what comes first, the verb is always second!"
    },
    {
      title: "Personal Pronouns",
      explanation: "German personal pronouns for the nominative case are essential to form basic sentences.",
      table: {
        headers: ["German", "English"],
        rows: [
          ["ich", "I"],
          ["du", "you (informal)"],
          ["er", "he"],
          ["sie", "she / they"],
          ["es", "it"],
          ["wir", "we"],
          ["ihr", "you all (informal)"],
          ["Sie", "you (formal)"],
        ]
      },
      tip: "In writing, 'Sie' (formal you) is always capitalised. 'sie' (lowercase) means 'she' or 'they'."
    },
  ],
  A2: [
    {
      title: "Dative Case",
      explanation: "The dative case marks the indirect object — the recipient of an action. It answers 'to whom?' or 'for whom?'. It's also required after certain prepositions (mit, bei, nach, von, aus, seit, zu, gegenüber).",
      table: {
        headers: ["Gender", "Nominative", "Dative"],
        rows: [
          ["Masculine", "der / ein", "dem / einem"],
          ["Feminine", "die / eine", "der / einer"],
          ["Neuter", "das / ein", "dem / einem"],
          ["Plural", "die", "den (+n to noun)"],
        ]
      },
      tip: "Memory trick: Dative after 'mit' is very common. 'Ich fahre mit dem Bus.' (I travel by bus.)"
    },
    {
      title: "Separable Verbs (Trennbare Verben)",
      explanation: "Many German verbs have a prefix that separates and moves to the end of the sentence in present tense and imperative. The prefix is usually a preposition or adverb.",
      table: {
        headers: ["Infinitive", "Meaning", "Example"],
        rows: [
          ["auf•stehen", "to get up", "Ich stehe um 7 Uhr auf."],
          ["an•rufen", "to call", "Er ruft seine Mutter an."],
          ["mit•nehmen", "to take along", "Nimmst du mich mit?"],
          ["ein•kaufen", "to go shopping", "Wir kaufen heute ein."],
          ["ab•fahren", "to depart", "Der Zug fährt um 9 ab."],
        ]
      },
      tip: "In infinitive and written forms, the verb is written as one word with a dot. In sentences, the prefix goes to the end!"
    },
    {
      title: "Perfect Tense (Perfekt)",
      explanation: "German uses the Perfekt tense for past events in spoken language. It is formed with haben or sein + past participle (Partizip II). Most verbs use haben; motion verbs and state-change verbs use sein.",
      table: {
        headers: ["Infinitive", "Partizip II", "Helper", "Example"],
        rows: [
          ["machen", "gemacht", "haben", "Ich habe das gemacht."],
          ["lesen", "gelesen", "haben", "Sie hat das Buch gelesen."],
          ["gehen", "gegangen", "sein", "Wir sind gegangen."],
          ["kommen", "gekommen", "sein", "Er ist gekommen."],
          ["fahren", "gefahren", "sein", "Ich bin nach Berlin gefahren."],
        ]
      },
      tip: "Regular verbs: ge- + stem + -(e)t. Irregular verbs have irregular past participles that must be memorised."
    },
    {
      title: "Modal Verbs (Modalverben)",
      explanation: "Modal verbs modify the meaning of a main verb (which goes to the end of the sentence as an infinitive). They have irregular conjugations.",
      table: {
        headers: ["Infinitive", "Meaning", "ich/er form", "Example"],
        rows: [
          ["müssen", "must / have to", "muss", "Ich muss arbeiten."],
          ["können", "can / be able to", "kann", "Er kann schwimmen."],
          ["dürfen", "may / be allowed to", "darf", "Sie darf hier nicht rauchen."],
          ["wollen", "want to", "will", "Wir wollen reisen."],
          ["sollen", "should / supposed to", "soll", "Du sollst lernen."],
          ["mögen", "to like / may", "mag", "Ich mag Schokolade."],
        ]
      },
      tip: "The main verb in infinitive form always goes to the END of the clause with a modal verb."
    },
    {
      title: "Prepositions with Accusative and Dative",
      explanation: "Some prepositions always take accusative, some always take dative, and 'two-way' prepositions (Wechselpräpositionen) use accusative for motion and dative for location.",
      table: {
        headers: ["Case", "Prepositions"],
        rows: [
          ["Always Accusative", "durch, für, gegen, ohne, um"],
          ["Always Dative", "aus, bei, mit, nach, seit, von, zu, gegenüber"],
          ["Two-way (Wechsel)", "an, auf, hinter, in, neben, über, unter, vor, zwischen"],
        ]
      },
      tip: "Two-way trick: Akkusativ = Aktion (movement), Dativ = Dormancy (location). 'Ich gehe in das Restaurant (Akk.)' vs 'Ich bin in dem Restaurant (Dat.)'"
    },
  ],
  B1: [
    {
      title: "Konjunktiv II (Subjunctive II) – Wishes & Hypotheticals",
      explanation: "Konjunktiv II is used to express wishes, hypothetical situations, polite requests, and unreal conditions. It is formed by adding -e to the Präteritum stem (often with umlaut for strong verbs).",
      table: {
        headers: ["Verb", "Konjunktiv II", "Example"],
        rows: [
          ["haben", "hätte", "Ich hätte gern mehr Zeit."],
          ["sein", "wäre", "Das wäre toll!"],
          ["können", "könnte", "Könnten Sie mir helfen?"],
          ["werden", "würde", "Ich würde gern mitkommen."],
          ["gehen", "ginge", "Wenn ich Zeit hätte, ginge ich spazieren."],
        ]
      },
      tip: "For most verbs, use 'würde + infinitive' instead of the Konjunktiv II form — it sounds more natural and avoids uncommon forms."
    },
    {
      title: "Passive Voice (Passiv)",
      explanation: "German Passive is formed with werden + Partizip II. It focuses on the action rather than the person doing it. The actor can be introduced with 'von'.",
      table: {
        headers: ["Tense", "Formula", "Example"],
        rows: [
          ["Present", "wird + Partizip II", "Das Haus wird gebaut."],
          ["Past (Perf.)", "wurde + Partizip II", "Das Haus wurde gebaut."],
          ["Perf. Passive", "ist + Partizip II + worden", "Das Haus ist gebaut worden."],
        ]
      },
      tip: "Note that in Perfekt Passiv, 'worden' is used (not 'geworden')!"
    },
    {
      title: "Relative Clauses (Relativsätze)",
      explanation: "Relative clauses give additional information about a noun. They use a relative pronoun (similar to der/die/das articles but with changes in dative/genitive) and the verb goes to the end.",
      table: {
        headers: ["Case", "Masc.", "Fem.", "Neut.", "Plural"],
        rows: [
          ["Nominative", "der", "die", "das", "die"],
          ["Accusative", "den", "die", "das", "die"],
          ["Dative", "dem", "der", "dem", "denen"],
          ["Genitive", "dessen", "deren", "dessen", "deren"],
        ]
      },
      tip: "Example: 'Das ist der Mann, der mein Auto gestohlen hat.' (That is the man who stole my car.)"
    },
    {
      title: "Infinitive Constructions with 'zu'",
      explanation: "Many verbs, adjectives, and nouns are followed by an infinitive with 'zu'. The infinitive with 'zu' goes to the end of the clause. For separable verbs, 'zu' goes between prefix and stem.",
      table: {
        headers: ["Construction", "Example"],
        rows: [
          ["verb + zu + Inf.", "Ich versuche, früh aufzustehen."],
          ["adj. + zu + Inf.", "Es ist schwierig, das zu erklären."],
          ["noun + zu + Inf.", "Ich habe keine Zeit, das zu machen."],
          ["separable verb", "Ich versuche, früh aufzustehen."],
        ]
      },
      tip: "Note the comma before the 'zu' clause when the main clause and the infinitive clause have different subjects."
    },
    {
      title: "Conjunctions and Word Order",
      explanation: "Coordinating conjunctions (und, aber, denn, oder, sondern) don't change word order. Subordinating conjunctions (weil, dass, obwohl, wenn, als, ob, damit...) send the verb to the END of the clause.",
      table: {
        headers: ["Type", "Examples", "Word order"],
        rows: [
          ["Coordinating", "und, aber, oder, denn", "Normal (V2)"],
          ["Subordinating", "weil, dass, obwohl, wenn", "Verb to END"],
          ["Adverbial", "deshalb, trotzdem, dann", "Verb 2nd (inverted sub.)"],
        ]
      },
      tip: "Tip: 'Weil' vs 'denn' — both mean 'because', but 'weil' changes word order (verb last) while 'denn' keeps normal order."
    },
  ],
  B2: [
    {
      title: "Advanced Passive Constructions",
      explanation: "Beyond the basic passive, German has Zustandspassiv (state passive) and impersonal passive. Zustandspassiv uses 'sein' + Partizip II to describe a resulting state. Impersonal passive uses 'es' and describes an activity without a subject.",
      table: {
        headers: ["Type", "Formula", "Example"],
        rows: [
          ["Vorgangspassiv", "werden + Partizip II", "Das Fenster wird geöffnet."],
          ["Zustandspassiv", "sein + Partizip II", "Das Fenster ist geöffnet."],
          ["Impersonal", "Es wird + Partizip II", "Es wird hier nicht geraucht."],
        ]
      },
      tip: "Zustandspassiv describes the result/state, while Vorgangspassiv describes the process of an action."
    },
    {
      title: "Konjunktiv I (Reported Speech)",
      explanation: "Konjunktiv I is used primarily in journalistic reported speech (indirekte Rede) to show that the speaker is reporting what someone else said, without necessarily endorsing it.",
      table: {
        headers: ["Person", "sein", "haben", "kommen"],
        rows: [
          ["ich", "sei", "habe", "komme"],
          ["er/sie/es", "sei", "habe", "komme"],
          ["wir", "seien", "haben", "kommen"],
          ["sie/Sie", "seien", "haben", "kommen"],
        ]
      },
      tip: "If Konjunktiv I looks the same as the Indikativ (e.g., 'wir haben'), switch to Konjunktiv II ('wir hätten') to make it clear it's reported speech."
    },
    {
      title: "Extended Adjectival Phrases (Erweitertes Adjektivattribut)",
      explanation: "A highly distinctive German feature: instead of a relative clause, German can compress information into an extended participial phrase placed before the noun. This is common in formal/written German.",
      table: null,
      examples: [
        "Die gestern in Berlin stattgefundene Konferenz... (The conference that took place yesterday in Berlin...)",
        "Der von allen Mitarbeitern unterschriebene Bericht... (The report signed by all employees...)",
        "Das auf dem Tisch liegende Buch... (The book lying on the table...)"
      ],
      tip: "These constructions are rare in speech but very common in academic and journalistic writing."
    },
    {
      title: "da-compounds and wo-compounds",
      explanation: "Instead of preposition + pronoun for things (not people), German uses a compound: da(r)- + preposition. For questions about things, use wo(r)- + preposition.",
      table: {
        headers: ["Preposition", "da-compound", "wo-compound"],
        rows: [
          ["mit", "damit", "womit"],
          ["auf", "darauf", "worauf"],
          ["über", "darüber", "worüber"],
          ["für", "dafür", "wofür"],
          ["von", "davon", "wovon"],
        ]
      },
      tip: "Use 'dar-' / 'wor-' before prepositions starting with a vowel (darauf, worauf, etc.)."
    },
  ],
  C1: [
    {
      title: "Nominalisation (Nominalisierung)",
      explanation: "German frequently converts verbs and adjectives into nouns — especially in formal, academic, and bureaucratic writing. Verbs → infinitive nouns (das Schreiben), adjectives → nouns with -heit/-keit/-schaft, verbal nouns with -ung.",
      table: {
        headers: ["Original", "Type", "Nominalisation"],
        rows: [
          ["schreiben", "verb", "das Schreiben (the writing)"],
          ["ankommen", "verb", "die Ankunft (the arrival)"],
          ["krank", "adj.", "die Krankheit (the illness)"],
          ["fähig", "adj.", "die Fähigkeit (the ability)"],
          ["entscheiden", "verb", "die Entscheidung (the decision)"],
        ]
      },
      tip: "Nominalisation makes language more formal. Academic texts heavily favour nominal style over verbal style."
    },
    {
      title: "Anticipatory 'es' (Korrelat)",
      explanation: "German often uses 'es' as a placeholder (Korrelat) when the real subject or object is a clause or infinitive. This is common in formal and written German.",
      table: null,
      examples: [
        "Es freut mich, Sie kennenzulernen. (It pleases me to meet you.)",
        "Es ist wichtig, dass du lernst. (It is important that you study.)",
        "Ich finde es schwierig, früh aufzustehen. (I find it difficult to get up early.)",
      ],
      tip: "The 'es' appears even when the real subject is a full clause. It can't be omitted in sentences where 'es' stands for a subordinate clause object."
    },
    {
      title: "Genitive Case and Genitive Constructions",
      explanation: "The genitive case shows possession or association. It is more common in written/formal German. In speech, it is often replaced by 'von + dative'.",
      table: {
        headers: ["Gender", "Definite (Gen.)", "Indefinite (Gen.)", "Adj. ending"],
        rows: [
          ["Masculine", "des Mannes", "eines Mannes", "-en"],
          ["Feminine", "der Frau", "einer Frau", "-en"],
          ["Neuter", "des Kindes", "eines Kindes", "-en"],
          ["Plural", "der Kinder", "keiner Kinder", "-en"],
        ]
      },
      tip: "Masculine and neuter nouns add -(e)s in the genitive: 'des Mannes'. Genitive prepositions: wegen, trotz, während, aufgrund, statt, anstatt."
    },
  ],
  C2: [
    {
      title: "Rhetorical and Stylistic Devices",
      explanation: "At C2 level, mastery of rhetorical devices enriches expression and allows for sophisticated argumentation and literary analysis.",
      table: {
        headers: ["Device", "German term", "Example"],
        rows: [
          ["Metaphor", "Metapher", "Das Leben ist eine Reise."],
          ["Irony", "Ironie", "Das war natürlich sehr klug von dir!"],
          ["Hyperbole", "Übertreibung", "Ich habe das tausendmal erklärt."],
          ["Litotes", "Litotes", "Das war nicht ganz uninteressant."],
          ["Chiasmus", "Chiasmus", "Man lebt nicht um zu essen, sondern isst um zu leben."],
        ]
      },
      tip: "Recognising and using these devices distinguishes C2 from lower levels and is crucial for literary analysis."
    },
    {
      title: "Complex Modal Constructions",
      explanation: "Modal verbs in Konjunktiv II, combined with passive voice and perfect aspect, create nuanced meanings about probability, necessity, and hypothetical past situations.",
      table: {
        headers: ["Construction", "Meaning", "Example"],
        rows: [
          ["müsste + Perf.Inf.", "should have (done)", "Er hätte das wissen müssen."],
          ["könnte + Pass.Inf.", "could be (done)", "Das könnte geändert werden."],
          ["dürfte + Perf.Inf.", "may/should have", "Das dürfte bekannt sein."],
          ["sollte + haben", "supposedly (hearsay)", "Er soll es gewusst haben."],
        ]
      },
      tip: "These forms are essential for nuanced academic and journalistic writing, expressing degrees of certainty."
    },
    {
      title: "Register and Style Variation",
      explanation: "C2 mastery requires the ability to consciously shift between registers: informal (colloquial), standard, formal, academic, and bureaucratic. Each has distinct features.",
      table: {
        headers: ["Register", "Features", "Example"],
        rows: [
          ["Colloquial", "contractions, particles, ellipsis", "'Machste das?' (Machst du das?)"],
          ["Standard", "complete sentences, correct grammar", "'Machst du das?'"],
          ["Formal", "passive, nominalisations, Sie", "'Wird das von Ihnen erledigt?'"],
          ["Academic", "Konjunktiv I, nominalisations", "'Die Untersuchung ergab, dass...'"],
        ]
      },
      tip: "Inappropriate register (too formal or too casual) is a clear marker of non-native speech at high levels."
    },
  ],
};

export const FILL_BLANK = {
  A1: [
    { sentence: "Ich ___ in Berlin.", blank: "wohne", options: ["wohne", "wohnst", "wohnt", "wohnen"], hint: "ich + wohnen" },
    { sentence: "Das ___ ein großes Haus.", blank: "ist", options: ["bin", "bist", "ist", "sind"], hint: "sein – 3rd person" },
    { sentence: "___ Tisch ist aus Holz.", blank: "Der", options: ["Die", "Das", "Der", "Den"], hint: "Tisch is masculine" },
    { sentence: "Ich esse ___ Apfel.", blank: "einen", options: ["ein", "eine", "einer", "einen"], hint: "Accusative – masculine" },
    { sentence: "Sie ___ sehr schnell.", blank: "läuft", options: ["laufe", "läuft", "laufen", "laufst"], hint: "er/sie/es + laufen (irregular)" },
    { sentence: "Heute ___ ich keine Zeit.", blank: "habe", options: ["bin", "habe", "hat", "sein"], hint: "ich + haben" },
    { sentence: "Das Auto ___ rot.", blank: "ist", options: ["bin", "ist", "sind", "seid"], hint: "sein – 3rd person singular" },
    { sentence: "Wir ___ in die Stadt.", blank: "gehen", options: ["geht", "gehen", "gehst", "gehe"], hint: "wir + gehen" },
  ],
  A2: [
    { sentence: "Ich fahre ___ dem Zug.", blank: "mit", options: ["mit", "von", "zu", "an"], hint: "'by train' uses which preposition?" },
    { sentence: "Wann fährt der Bus ___?", blank: "ab", options: ["auf", "an", "ab", "aus"], hint: "abfahren – separable verb" },
    { sentence: "Er hat das Buch ___.", blank: "gelesen", options: ["liest", "las", "gelesen", "geliest"], hint: "Perfekt of 'lesen'" },
    { sentence: "Ich helfe ___ Frau.", blank: "der", options: ["die", "den", "der", "das"], hint: "helfen + Dative – feminine" },
    { sentence: "Sie ___ nach Paris fliegen.", blank: "will", options: ["kann", "will", "muss", "darf"], hint: "want to = wollen, er/sie = will" },
    { sentence: "Wir sind gestern sehr spät ___ gegangen.", blank: "ins Bett", options: ["ins Bett", "zur Arbeit", "in die Schule", "nach Hause"], hint: "go to bed" },
    { sentence: "Morgen ___ ich meine Großeltern besuchen.", blank: "werde", options: ["wird", "werde", "werden", "würde"], hint: "Futur I with ich" },
    { sentence: "Er ___ schnell in den Supermarkt gegangen.", blank: "ist", options: ["hat", "bin", "ist", "wurde"], hint: "Perfekt with motion verb" }
  ],
  B1: [
    { sentence: "Das Fenster ___ von ihm geöffnet.", blank: "wurde", options: ["hat", "ist", "wurde", "war"], hint: "Passive – Präteritum" },
    { sentence: "Ich lerne Deutsch, ___ ich in Deutschland arbeiten kann.", blank: "damit", options: ["weil", "obwohl", "damit", "dass"], hint: "'so that' = ?" },
    { sentence: "Das ist der Mann, ___ ich gestern gesehen habe.", blank: "den", options: ["der", "dem", "den", "dessen"], hint: "Relative pronoun – Akkusativ – masculine" },
    { sentence: "___ es regnet, gehe ich spazieren.", blank: "Obwohl", options: ["Weil", "Obwohl", "Damit", "Als"], hint: "'although' = ?" },
    { sentence: "Ich versuche, früh aufzu___.", blank: "stehen", options: ["gehen", "kommen", "stehen", "fangen"], hint: "aufstehen split with 'zu'" },
    { sentence: "Er hat mir versprochen, dass er morgen pünktlich ___ .", blank: "kommt", options: ["kommt", "kommen", "gekommen", "kam"], hint: "Nebensatz – Verb am Ende" },
    { sentence: "Sie hat viel gelernt, ___ sie die Prüfung besteht.", blank: "damit", options: ["weil", "obwohl", "damit", "dass"], hint: "final clause – purpose" },
    { sentence: "Er fragt, ___ sie morgen Zeit haben.", blank: "ob", options: ["ob", "weil", "dass", "wenn"], hint: "whether/if" }
  ],
  B2: [
    { sentence: "Es ist wichtig, alle Vor- und Nachteile sorgfältig abzu___.", blank: "wägen", options: ["wägen", "wiegen", "wagen", "wollen"], hint: "from 'abwägen'" },
    { sentence: "Die Auswirkungen der Entscheidung sind noch nicht vollständig ___ .", blank: "abzusehen", options: ["abzusehen", "anzusehen", "zusehen", "übersehen"], hint: "fixed expression 'nicht abzusehen'" },
    { sentence: "Im Gegensatz ___ früher lesen heute viele Menschen Nachrichten online.", blank: "zu", options: ["mit", "zu", "für", "an"], hint: "expression 'im Gegensatz zu'" },
    { sentence: "Es ist davon auszugehen, ___ die Preise weiter steigen.", blank: "dass", options: ["ob", "dass", "weil", "wenn"], hint: "that" },
    { sentence: "Er spricht fließend Englisch, ___ er Spanisch nur bruchstückhaft versteht.", blank: "während", options: ["während", "als", "bevor", "weil"], hint: "while / whereas" },
    { sentence: "Die Firma hat sich ___ entschieden, in eine neue Technologie zu investieren.", blank: "dazu", options: ["darauf", "daran", "dazu", "dafür"], hint: "decided to (do that)" },
    { sentence: "Das Projekt ist ___ wegen fehlender finanzieller Mittel gescheitert.", blank: "hauptsächlich", options: ["erheblich", "hauptsächlich", "ausdrücklich", "hingegen"], hint: "mainly/principally" },
    { sentence: "Je mehr man übt, ___ besser wird man.", blank: "desto", options: ["um", "weil", "desto", "als"], hint: "je ... desto" }
  ],
  C1: [
    { sentence: "Die Studie kommt zu der ___, dass mehr Forschung nötig ist.", blank: "Schlussfolgerung", options: ["Konsequenz", "Schlussfolgerung", "Folge", "Schluss"], hint: "academic phrasing" },
    { sentence: "Unbeschadet ___ bleibt die Frage offen, wie das Problem langfristig gelöst werden kann.", blank: "dessen", options: ["dessen", "darum", "damit", "worüber"], hint: "Genitivpronomen" },
    { sentence: "Die Autorin ___ die wichtigsten Argumente in der Einleitung knapp zusammen.", blank: "fasst", options: ["fasst", "fassen", "gefasst", "fasstet"], hint: "3rd person singular, Präsens" },
    { sentence: "Diese Vorgehensweise ___ einer gewissen Logik.", blank: "entbehrt", options: ["bedarf", "entbehrt", "beansprucht", "veranlasst"], hint: "lacks" },
    { sentence: "Es wurde ___ betont, dass die Frist eingehalten werden muss.", blank: "nochmals", options: ["immerhin", "hingegen", "nochmals", "infolge"], hint: "once again" },
    { sentence: "Dieser Umstand legt ___, dass weitere Untersuchungen notwendig sind.", blank: "nahe", options: ["weit", "fest", "nahe", "zu"], hint: "suggests" },
    { sentence: "Wir müssen uns ___ mit dieser Frage befassen.", blank: "eingehend", options: ["oberflächlich", "eingehend", "beiläufig", "maßgeblich"], hint: "thoroughly" },
    { sentence: "Das Problem lässt sich nicht so einfach ___.", blank: "lösen", options: ["lösen", "löst", "liefen", "lesen"], hint: "Infinitiv am Ende" }
  ],
  C2: [
    { sentence: "Seine Argumentation wirkt nur auf den ersten Blick überzeugend, bei näherer Betrachtung erweist sie sich jedoch als ___ .", blank: "Trugschluss", options: ["Trugbild", "Trugschluss", "Trugwort", "Trugschrift"], hint: "fallacy" },
    { sentence: "Die Ergebnisse der Untersuchung ___ eine deutliche Tendenz zur Digitalisierung.", blank: "zeitigen", options: ["zeitigen", "zeichnen", "zeigen", "zeugen"], hint: "gehobenes Verb" },
    { sentence: "In ihrer lakonischen Antwort ___ sich eine subtile Kritik an der bisherigen Politik.", blank: "verbirgt", options: ["verbirgt", "verborgen", "verbarg", "verbergen"], hint: "3rd person singular, Präsens" },
    { sentence: "Sein Verhalten ist absolut ___ und lässt keine Zweifel offen.", blank: "apodiktisch", options: ["lakonisch", "akribisch", "apodiktisch", "diffizil"], hint: "dogmatic/absolute" },
    { sentence: "Ihre Erklärung war derart ___, dass viele Zuhörer irritiert waren.", blank: "verklausuliert", options: ["verklausuliert", "scharfsinnig", "schlüssig", "triftig"], hint: "obscure/hedged" },
    { sentence: "Die Situation erfordert ein äußerst ___ Vorgehen.", blank: "diffiziles", options: ["apodiktisches", "lakonisches", "diffiziles", "eloquentes"], hint: "tricky/delicate" },
    { sentence: "Die Argumentation ___ jeglicher empirischen Grundlage.", blank: "entbehrt", options: ["entbehrt", "entstammt", "entzieht", "entspricht"], hint: "lacks" },
    { sentence: "Er arbeitet so ___, dass keine Fehler zu befürchten sind.", blank: "akribisch", options: ["lakonisch", "akribisch", "stoisch", "nachgiebig"], hint: "meticulous" }
  ],
};

export const WORD_MATCH = {
  A1: [
    { german: "der Tisch", english: "table" },
    { german: "die Schule", english: "school" },
    { german: "groß", english: "big" },
    { german: "essen", english: "to eat" },
    { german: "das Wasser", english: "water" },
    { german: "heute", english: "today" },
    { german: "die Katze", english: "cat" },
    { german: "schreiben", english: "to write" },
  ],
  A2: [
    { german: "kaufen", english: "to buy" },
    { german: "der Urlaub", english: "vacation" },
    { german: "teuer", english: "expensive" },
    { german: "anfangen", english: "to start" },
    { german: "der Bahnhof", english: "train station" },
    { german: "helfen", english: "to help" },
    { german: "früh", english: "early" },
    { german: "krank", english: "sick" },
  ],
  B1: [
    { german: "die Meinung", english: "opinion" },
    { german: "deshalb", english: "therefore" },
    { german: "obwohl", english: "although" },
    { german: "erreichen", english: "to achieve" },
    { german: "die Lösung", english: "solution" },
    { german: "wahrscheinlich", english: "probably" },
    { german: "stattfinden", english: "to take place" },
    { german: "die Umwelt", english: "environment" },
  ],
  B2: [
    { german: "abwägen", english: "to weigh up" },
    { german: "die Auswirkung", english: "impact" },
    { german: "hingegen", english: "in contrast" },
    { german: "erheblich", english: "considerable" },
    { german: "berücksichtigen", english: "to consider" },
    { german: "der Ansatz", english: "approach" },
    { german: "angemessen", english: "appropriate" },
    { german: "die Schlussfolgerung", english: "conclusion" },
  ],
  C1: [
    { german: "die Prämisse", english: "premise" },
    { german: "schlüssig", english: "coherent" },
    { german: "unabdingbar", english: "indispensable" },
    { german: "prägen", english: "to shape" },
    { german: "maßgeblich", english: "decisive" },
    { german: "die Abhandlung", english: "treatise" },
    { german: "tiefgründig", english: "profound" },
    { german: "subtil", english: "subtle" },
  ],
  C2: [
    { german: "der Trugschluss", english: "fallacy" },
    { german: "scharfsinnig", english: "astute" },
    { german: "lakonisch", english: "laconic" },
    { german: "apodiktisch", english: "dogmatic" },
    { german: "die Eloquenz", english: "eloquence" },
    { german: "akribisch", english: "meticulous" },
    { german: "triftig", english: "cogent" },
    { german: "ergründen", english: "to fathom" },
  ],
};

export const QUIZZES = {
  A1: [
    { q: "How do you say 'table' in German?", options: ["das Buch", "der Tisch", "die Lampe", "das Fenster"], answer: 1 },
    { q: "Which is the correct verb form? 'Ich ___ Deutsch.'", options: ["spreche", "sprichst", "sprechen", "spricht"], answer: 0 },
    { q: "What does 'Guten Morgen' mean?", options: ["Good night", "Good evening", "Good morning", "Good afternoon"], answer: 2 },
    { q: "What is the gender of 'Frau' (woman)?", options: ["der", "die", "das", "keine"], answer: 1 },
    { q: "Choose the correct article: '___ Mann ist groß.'", options: ["Die", "Das", "Der", "Den"], answer: 2 },
    { q: "What does 'essen' mean?", options: ["to sleep", "to drink", "to walk", "to eat"], answer: 3 },
    { q: "'Ich ___ in Berlin.' (to live)", options: ["wohne", "wohnst", "wohnt", "wohnen"], answer: 0 },
    { q: "What does 'klein' mean?", options: ["big", "fast", "small", "new"], answer: 2 },
    { q: "How do you say 'I am tired' in German?", options: ["Ich bin hungrig.", "Ich bin müde.", "Ich bin krank.", "Ich bin gut."], answer: 1 },
    { q: "Which word means 'house'?", options: ["das Buch", "das Auto", "das Haus", "die Straße"], answer: 2 },
    { q: "What is the correct order? (Today / I / go / to school)", options: ["Heute gehe ich zur Schule.", "Heute ich gehe zur Schule.", "Ich heute gehe zur Schule.", "Gehe ich heute zur Schule."], answer: 0 },
    { q: "'Danke' means:", options: ["Please", "Sorry", "Hello", "Thank you"], answer: 3 },
    { q: "How do you say 'milk' in German?", options: ["das Wasser", "die Milch", "der Kaffee", "das Brot"], answer: 1 },
    { q: "Complete: 'Der Himmel ist ___.'", options: ["rot", "blau", "grün", "schwarz"], answer: 1 },
    { q: "Choose the correct negation: 'Ich habe ___ Geld.'", options: ["kein", "keine", "keinen", "keinem"], answer: 0 },
  ],
  A2: [
    { q: "Complete: 'Ich fahre ___ dem Bus.' (by bus)", options: ["mit", "von", "zu", "an"], answer: 0 },
    { q: "Which sentence uses the Perfekt tense correctly?", options: ["Ich habe gegangen.", "Ich bin gegangen.", "Ich bin gehen.", "Ich habe gehen."], answer: 1 },
    { q: "'Wann ___ der Zug ___?' (depart – sep. verb: abfahren)", options: ["fährt / ab", "ab / fährt", "fährt ab / —", "abfährt / —"], answer: 0 },
    { q: "What does 'trotzdem' mean?", options: ["therefore", "although", "because", "nevertheless"], answer: 3 },
    { q: "Which dative article is correct? 'Ich helfe ___ Frau.'", options: ["die", "den", "der", "das"], answer: 2 },
    { q: "'Er ___ Deutsch sprechen.' (can)", options: ["will", "muss", "kann", "darf"], answer: 2 },
    { q: "What is the Partizip II of 'kaufen'?", options: ["gekauft", "kaufte", "kaufen", "gekauten"], answer: 0 },
    { q: "Which preposition requires accusative?", options: ["mit", "von", "für", "bei"], answer: 2 },
    { q: "'Ich rufe dich ___.' (anrufen – to call)", options: ["an", "auf", "ab", "aus"], answer: 0 },
    { q: "Complete: 'Es ist sehr ___.' (expensive)", options: ["billig", "teuer", "groß", "alt"], answer: 1 },
    { q: "Which verb uses 'sein' in Perfekt?", options: ["kaufen", "machen", "kommen", "schreiben"], answer: 2 },
    { q: "What is 'der Urlaub'?", options: ["The job", "The vacation", "The weather", "The hotel"], answer: 1 },
    { q: "Complete: 'Gestern ___ ich lange gearbeitet.'", options: ["habe", "bin", "war", "hat"], answer: 0 },
    { q: "'billig' is the opposite of:", options: ["teuer", "groß", "spannend", "alt"], answer: 0 },
    { q: "Which sentence describes a daily routine?", options: ["Ich fliege nach Kanada.", "Ich stehe um 7 Uhr auf.", "Ich habe kein Geld.", "Ich mag Schokolade."], answer: 1 },
  ],
  B1: [
    { q: "Form a polite request: '___ Sie mir helfen?' (could – Konjunktiv II)", options: ["Werden", "Wären", "Könnten", "Dürften"], answer: 2 },
    { q: "Which sentence is in the passive?", options: ["Er baut das Haus.", "Das Haus wird gebaut.", "Er hat das Haus gebaut.", "Das Haus ist groß."], answer: 1 },
    { q: "Choose the correct relative pronoun: 'Das ist der Mann, ___ ich kenne.'", options: ["den", "dem", "der", "dessen"], answer: 0 },
    { q: "'Obwohl' means:", options: ["because", "therefore", "although", "so that"], answer: 2 },
    { q: "Complete: 'Ich versuche, früh aufzu___.'", options: ["gehen", "stehen", "kommen", "fangen"], answer: 1 },
    { q: "Which word order is correct after 'weil'? ('I'm staying home because I'm ill.')", options: ["..weil ich bin krank.", "..weil ich krank bin.", "..weil bin ich krank.", "..weil krank ich bin."], answer: 1 },
    { q: "'Wahrscheinlich' means:", options: ["actually", "finally", "probably", "however"], answer: 2 },
    { q: "What tense is this? 'Das Haus wurde gebaut.'", options: ["Perfekt Passiv", "Präteritum Passiv", "Präsens Passiv", "Futur Passiv"], answer: 1 },
    { q: "'Deshalb' means:", options: ["although", "nevertheless", "because", "therefore"], answer: 3 },
    { q: "Which is a separable verb?", options: ["verstehen", "beschreiben", "aufhören", "erklären"], answer: 2 },
    { q: "Complete: 'Er hat das Buch ___.' (read – Perfekt)", options: ["geliest", "gelesen", "liest", "las"], answer: 1 },
    { q: "Which connector expresses a contrast?", options: ["deshalb", "außerdem", "obwohl", "damit"], answer: 2 },
    { q: "Choose the correct word order: 'Ich habe gestern in der Stadt einen Freund getroffen.' – Which element comes directly after 'gestern'?", options: ["in der Stadt", "einen Freund", "getroffen", "ich"], answer: 0 },
    { q: "What does 'aus diesem Grund' mean?", options: ["for this reason", "in contrast", "however", "in addition"], answer: 0 },
    { q: "Which preposition means 'without'?", options: ["mit", "ohne", "gegen", "für"], answer: 1 }
  ],
  B2: [
    { q: "Which is a Zustandspassiv (state passive) sentence?", options: ["Der Brief wird geschrieben.", "Der Brief ist geschrieben.", "Der Brief wurde geschrieben.", "Der Brief ist geschrieben worden."], answer: 1 },
    { q: "What does 'inwiefern' mean?", options: ["why", "where", "to what extent", "when"], answer: 2 },
    { q: "Convert to a da-compound: 'Wofür interessierst du dich?' → 'Ich interessiere mich ___.'", options: ["dazu", "daran", "dafür", "davon"], answer: 2 },
    { q: "What is Konjunktiv I primarily used for?", options: ["Hypothetical situations", "Reported speech", "Polite requests", "Future events"], answer: 1 },
    { q: "'Er soll sehr klug sein.' This means:", options: ["He should be very smart.", "He has to be very smart.", "He is reportedly very smart.", "He can be very smart."], answer: 2 },
    { q: "'Erheblich' means:", options: ["appropriate", "contradictory", "considerable", "predominantly"], answer: 2 },
    { q: "Which sentence uses an extended participial phrase?", options: ["Das Buch, das gestern gekauft wurde...", "Das gestern gekaufte Buch...", "Das Buch ist gestern gekauft.", "Das Buch, das man kaufte..."], answer: 1 },
    { q: "'Hingegen' is best translated as:", options: ["therefore", "in contrast", "consequently", "apparently"], answer: 1 },
    { q: "What does 'hervorheben' mean?", options: ["to hide", "to emphasize", "to ignore", "to forget"], answer: 1 },
    { q: "Which connector indicates a consequence?", options: ["folglich", "obwohl", "dennoch", "hingegen"], answer: 0 },
    { q: "What is the correct past participle of 'entscheiden'?", options: ["entscheidet", "entschieden", "geentscheidet", "entscheid"], answer: 1 },
    { q: "What does 'differenzieren' mean?", options: ["to agree", "to differentiate", "to copy", "to subtract"], answer: 1 },
    { q: "Complete: '___ der schlechten Wetterbedingungen, fand das Event statt.'", options: ["Wegen", "Trotz", "Während", "Aufgrund"], answer: 1 },
    { q: "What is a 'Tendenz'?", options: ["A trend", "A consequence", "An argument", "A nuance"], answer: 0 },
    { q: "Which word means 'predominantly'?", options: ["ausdrücklich", "erheblich", "überwiegend", "zudem"], answer: 2 }
  ],
  C1: [
    { q: "Which is a nominalisation of 'entscheiden' (to decide)?", options: ["Entscheidend", "Entschiedenheit", "die Entscheidung", "Entschiedung"], answer: 2 },
    { q: "What is the genitive of 'der Mann'?", options: ["dem Mann", "den Mann", "des Mannes", "den Mannes"], answer: 2 },
    { q: "Identify the rhetorical device: 'Das Leben ist eine Reise.'", options: ["Irony", "Hyperbole", "Metaphor", "Litotes"], answer: 2 },
    { q: "'Unabdingbar' means:", options: ["debatable", "indispensable", "contradictory", "temporary"], answer: 1 },
    { q: "What does the Korrelat 'es' do in 'Es freut mich, Sie zu treffen'?", options: ["It is the subject", "It's a placeholder for the infinitive clause", "It's an accusative pronoun", "It emphasises the sentence"], answer: 1 },
    { q: "Which preposition takes the genitive case?", options: ["wegen", "mit", "für", "von"], answer: 0 },
    { q: "'Pointiert' means:", options: ["boring", "incisive/pointed", "approximate", "obscure"], answer: 1 },
    { q: "'Maßgeblich' means:", options: ["negligible", "decisive/authoritative", "hypothetical", "temporary"], answer: 1 },
    { q: "What does 'veranlassen' mean?", options: ["to induce / cause", "to prevent", "to hesitate", "to assume"], answer: 0 },
    { q: "Which is a synonym for 'notwendig'?", options: ["unabdingbar", "widersprüchlich", "geläufig", "subtil"], answer: 0 },
    { q: "'Sich erschöpfen in' means:", options: ["to be limited to", "to get tired of", "to create from", "to search for"], answer: 0 },
    { q: "What is a 'Prämisse'?", options: ["A premise", "A conclusion", "A summary", "A confrontation"], answer: 0 },
    { q: "Which preposition uses the Genitive?", options: ["gegenüber", "infolge", "aus", "nach"], answer: 1 },
    { q: "What does 'tiefgründig' mean?", options: ["superficial", "profound", "confusing", "simple"], answer: 1 },
    { q: "Choose the correct noun for 'beweisen':", options: ["der Beweis", "die Beweisung", "das Beweisen", "die Beweisheit"], answer: 0 }
  ],
  C2: [
    { q: "What is a 'Trugschluss'?", options: ["A tautology", "A metaphor", "A fallacy", "An analogy"], answer: 2 },
    { q: "'Apodiktisch' means:", options: ["subtle and nuanced", "dogmatic, leaving no room for debate", "eloquent", "indirect"], answer: 1 },
    { q: "What does 'zeitigen' mean?", options: ["to modernise", "to delay", "to produce/yield a result", "to age"], answer: 2 },
    { q: "Identify the device: 'Man lebt nicht um zu essen, sondern isst um zu leben.'", options: ["Metaphor", "Chiasmus", "Irony", "Hyperbole"], answer: 1 },
    { q: "'Lakonisch' means:", options: ["loquacious", "ambiguous", "laconic/brief", "academic"], answer: 2 },
    { q: "Modal construction: 'Er hätte das wissen müssen' means:", options: ["He should know it now.", "He had to know it.", "He should have known it.", "He might know it."], answer: 2 },
    { q: "'Diffizil' is a synonym for:", options: ["simple", "clear", "tricky/delicate", "obvious"], answer: 2 },
    { q: "In academic German, what distinguishes nominal style (Nominalstil)?", options: ["Many verbs, few nouns", "Heavy use of nouns and passive voice", "Informal vocabulary", "Short sentences only"], answer: 1 },
    { q: "What is an 'Erörterung'?", options: ["An analytical discussion/essay", "A quick summary", "A fictional story", "A mathematical proof"], answer: 0 },
    { q: "Which word means 'unyielding' or 'relentless'?", options: ["lakonisch", "akribisch", "unnachgiebig", "triftig"], answer: 2 },
    { q: "Identify the rhetorical device: 'Eine bittere Süße'.", options: ["Oxymoron", "Hyperbole", "Chiasmus", "Metaphor"], answer: 0 },
    { q: "What does 'verklausulieren' mean?", options: ["to clarify", "to emphasize", "to obscure in clauses", "to delete"], answer: 2 },
    { q: "Which is a synonym for 'eloquent'?", options: ["wortkarg", "wortgewandt", "lakonisch", "apodiktisch"], answer: 1 },
    { q: "'Ergründen' is best translated as:", options: ["to fathom / probe", "to bury", "to construct", "to forget"], answer: 0 },
    { q: "What does 'triftig' refer to?", options: ["A tricky situation", "A valid/cogent reason", "An endless process", "A dogmatic view"], answer: 1 }
  ],
};
