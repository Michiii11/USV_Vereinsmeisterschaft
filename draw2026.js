const menSingleDraw = new Tournament("Herren Einzel", [
    new Round("1. Runde", [
        new Match("Thomas", "Bye", "", "", "r1"),
        new Match("Colin", "Bye", "", "", "r2"),
        new Match("David K.", "Constantin", "", "", "r3"),
        new Match("Bye", "David L.", "", "", "r4"),
        new Match("Jakob", "Bye", "", "", "r5"),
        new Match("Bye", "Lukas", "", "", "r6"),
        new Match("Martin Moser", "Simon", "", "", "r7"),
        new Match("Bye", "Peter", "", "", "r8"),
    ]),
    new Round("Quarterfinal A", [
        new Match("Thomas", "Colin", "", "", "qA1"),
        new Match("", "David L.", "", "", "qA2"),
        new Match("Jakob", "Lukas", "", "", "qA3"),
        new Match("", "Peter", "", "", "qA4"),
    ]),
    new Round("Semifinal A", [
        new Match("Thomas", "", "6:1 6:1", "", "sA1"),
        new Match("", "", "", "", "sA2"),
    ]),
    new Round("Round 2 B", [
        new Match("Bye", "Bye", "", "", "r2B1"),
        new Match("", "Bye", "", "", "r2B2"),
        new Match("Bye", "Bye", "", "", "r2B3"),
        new Match("", "Bye", "", "", "r2B4"),
    ]),
    new Round("Quarterfinal B", [
        new Match("Bye", "", "", "(3)", "qB1"),
        new Match("", "", "", "(4)", "qB2"),
        new Match("Bye", "Colin", "", "(1)", "qB3"),
        new Match("", "", "", "(2)", "qB4"),
    ]),
    new Round("Semifinal B", [
        new Match("", "", "", "", "sB1"),
        new Match("Colin", "", "", "", "sB2"),
    ]),
    new Round("Semifinal C", [
        new Match("Bye", "", "(5)", "(6)", "rC1"),
        new Match("Bye", "", "(7)", "(8)", "rC2"),
    ]),
]);

const womenSingleDraw = new Tournament("Damen Einzel", [
    new Round("Round 1", [
        new Match("Helga", "Bye", "", "", "r1"),
        new Match("Andrea", "Rosa", "", "", "r2"),
        new Match("Karin", "Emma", "", "", "r3"),
        new Match("Marlene", "Amelie", "", "", "r4"),
    ]),
    new Round("Semifinal A", [
        new Match("Helga", "", "", "", "sA1"),
        new Match("", "Amelie", "", "6:4 6:1", "sA2"),
    ]),
    new Round("Round 2 B", [
        new Match("Bye", "", "", "", "r2B1"),
        new Match("", "Marlene", "", "", "r2B2"),
    ]),
    new Round("Semifinal B", [
        new Match("", "", "", "(2)", "sB1"),
        new Match("", "", "", "(1)", "sB2"),
    ]),
])

const menDoubleDraw = new Tournament("Herren Doppel", [
    new Round("Round 1", [
        new Match("Thomas / David L.", "Harald / Julian", "", "", "r1"),
        new Match("David K. / Jakob", "Mario O. / Patrick Ö.", "", "", "r2"),
        new Match("Mario V. / Patrick P.", "Philipp / Colin", "", "", "r3"),
        new Match("Simon / Peter", "Herbert / Gerhard", "", "", "r4"),
    ]),
    new Round("Semifinal A", [
        new Match("", "", "", "", "sA1"),
        new Match("", "", "", "", "sA2"),
    ]),
    new Round("Round 2 B", [
        new Match("", "", "", "", "r2B1"),
        new Match("", "", "", "", "r2B2"),
    ]),
    new Round("Semifinal B", [
        new Match("", "", "", "(2)", "sB1"),
        new Match("", "", "", "(1)", "sB2"),
    ])
])

const womenDoubleDraw = new Tournament("Damen Doppel", [
    new Round("Round Robin", [
        new Match("Andrea / Helga", "Amelie / Edith", "", "", "rr2"),
        new Match("Andrea / Helga", "Sophie / Valentina", "", "", "rr3"),
        new Match("Andrea / Helga", "Emma / Karin", "", "", "rr4"),
        new Match("Andrea / Helga", "Rosa / Marlene", "", "", "rr5"),
        new Match("Amelie / Edith", "Sophie / Valentina", "", "", "rr3"),
        new Match("Amelie / Edith", "Emma / Karin", "", "", "rr4"),
        new Match("Amelie / Edith", "Rosa / Marlene", "", "", "rr5"),
        new Match("Sophie / Valentina", "Emma / Karin", "", "", "rr4"),
        new Match("Sophie / Valentina", "Rosa / Marlene", "", "", "rr5"),
        new Match("Emma / Karin", "Rosa / Marlene", "", "", "rr5"),
    ])
]);

const roundRobinData = [
    { name: "Andrea / Helga", spiele: 0, siege: 0, saetze: "0:0", games: "0:0" },
    { name: "Amelie / Edith", spiele: 0, siege: 0, saetze: "0:0", games: "0:0" },
    { name: "Sophie / Valentina", spiele: 0, siege: 0, saetze: "0:0", games: "0:0" },
    { name: "Emma / Karin", spiele: 0, siege: 0, saetze: "0:0", games: "0:0" },
    { name: "Rosa / Marlene", spiele: 0, siege: 0, saetze: "0:0", games: "0:0" },
];