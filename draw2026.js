const menSingleDraw = new Tournament("Herren Einzel", [
    new Round("1. Runde", [
        new Match("Thomas", "Bye", "", "", "r1"),
        new Match("Colin", "Bye", "", "", "r2"),
        new Match("David K.", "Constantin", "", "", "r3"),
        new Match("Bye", "David L.", "", "", "r4"),
        new Match("Jakob", "Bye", "", "", "r5"),
        new Match("Bye", "Lukas", "", "", "r6"),
        new Match("Martin Moser", "Bye", "", "", "r7"),
        new Match("Bye", "Peter", "", "", "r8"),
    ]),
    new Round("Quarterfinal A", [
        new Match("Thomas", "Colin", "", "", "qA1"),
        new Match("Constantin", "David L.", "6:2 6:7 10:5", "", "qA2"),
        new Match("Jakob", "Lukas", "", "", "qA3"),
        new Match("Martin", "Peter", "", "", "qA4"),
    ]),
    new Round("Semifinal A", [
        new Match("Thomas", "", "6:1 6:1", "", "sA1"),
        new Match("Jakob", "Peter", "6:1 6:2", "6:1 6:1", "sA2"),
    ]),
    new Round("Round 2 B", [
        new Match("Bye", "Bye", "", "", "r2B1"),
        new Match("David K.", "Bye", "", "", "r2B2"),
        new Match("Bye", "Bye", "", "", "r2B3"),
        new Match("Bye", "Bye", "", "", "r2B4"),
    ]),
    new Round("Quarterfinal B", [
        new Match("Bye", "Lukas", "", "(3)", "qB1"),
        new Match("David K.", "Martin", "", "(4)", "qB2"),
        new Match("Bye", "Colin", "", "(1)", "qB3"),
        new Match("Bye", "", "", "(2)", "qB4"),
    ]),
    new Round("Semifinal B", [
        new Match("Lukas", "Martin", "", "6:3 6:4", "sB1"),
        new Match("Colin", "", "", "", "sB2"),
    ]),
    new Round("Final B", [
        new Match("Lukas", "", "6:2 6:4", "", "fB")
    ]),
    new Round("Semifinal C", [
        new Match("Bye", "Bye", "(5)", "(6)", "rC1"),
        new Match("Bye", "Bye", "(7)", "(8)", "rC2"),
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
        new Match("Helga", "Andrea", "", "6:2 7:6", "sA1"),
        new Match("Karin", "Amelie", "7:6 6:0", "6:4 6:1", "sA2"),
    ]),
    new Round("Final A", [
       new Match("Helga", "", "6:0 6:1", "", "fA"),
    ]),
    new Round("Round 2 B", [
        new Match("Bye", "Rosa", "", "", "r2B1"),
        new Match("Emma", "Marlene", "", "", "r2B2"),
    ]),
    new Round("Semifinal B", [
        new Match("Rosa", "", "", "(2)", "sB1"),
        new Match("", "Andrea", "", "(1)", "sB2"),
    ]),
])

const menDoubleDraw = new Tournament("Herren Doppel", [
    new Round("Round 1", [
        new Match("Thomas / David L.", "Harald / Julian", "", "", "r1"),
        new Match("David K. / Jakob", "Mario O. / Patrick Ö.", "", "", "r2"),
        new Match("Mario V. / Patrick P.", "Philipp / Colin", "", "", "r3"),
        new Match("Bye", "Herbert / Gerhard", "", "", "r4"),
    ]),
    new Round("Semifinal A", [
        new Match("Thomas / David L.", "Mario O. / Patrick Ö.", "6:3 6:3", "6:2 6:1", "sA1"),
        new Match("Philipp / Colin", "Herbert / Gerhard", "6:0 3:6 10:6", "", "sA2"),
    ]),
    new Round("Round 2 B", [
        new Match("Harald / Julian", "David K. / Jakob", "", "", "r2B1"),
        new Match("Mario V. / Patrick P.", "Bye", "", "", "r2B2"),
    ]),
    new Round("Semifinal B", [
        new Match("", "", "", "(2)", "sB1"),
        new Match("Mario V. / Patrick P.", "", "", "(1)", "sB2"),
    ])
])

const womenDoubleDraw = new Tournament("Damen Doppel", [
    new Round("Round Robin", [
        new Match("Andrea / Helga", "Amelie / Edith", "", "", "rr2"),
        new Match("Andrea / Helga", "Sophie / Valentina", "6:1 6:4", "", "rr3"),
        new Match("Andrea / Helga", "Emma / Karin", "6:2 6:0", "", "rr4"),
        new Match("Andrea / Helga", "Rosa / Marlene", "", "", "rr5"),
        new Match("Amelie / Edith", "Sophie / Valentina", "", "", "rr3"),
        new Match("Amelie / Edith", "Emma / Karin", "", "", "rr4"),
        new Match("Amelie / Edith", "Rosa / Marlene", "", "", "rr5"),
        new Match("Sophie / Valentina", "Emma / Karin", "4:6 3:6", "", "rr4"),
        new Match("Sophie / Valentina", "Rosa / Marlene", "", "", "rr5"),
        new Match("Emma / Karin", "Rosa / Marlene", "6:2 6:2", "", "rr5"),
    ])
]);

const roundRobinData = [
    { name: "Andrea / Helga", spiele: 2, siege: 2, saetze: "4:0", games: "24:7" },
    { name: "Emma / Karin", spiele: 3, siege: 2, saetze: "4:2", games: "26:23" },
    { name: "Amelie / Edith", spiele: 0, siege: 0, saetze: "0:0", games: "0:0" },
    { name: "Rosa / Marlene", spiele: 1, siege: 0, saetze: "0:2", games: "4:12" },
    { name: "Sophie / Valentina", spiele: 2, siege: 0, saetze: "0:4", games: "12:24" },
];