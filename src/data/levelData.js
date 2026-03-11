
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

export const VOCAB_COUNT = { A1: 307, A2: 224, B1: 198, B2: 80, C1: 32, C2: 20 };

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
