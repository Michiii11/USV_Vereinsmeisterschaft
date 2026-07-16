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
    new Round("Round 2 B", [
        new Match("Bye", "Bye", "", "", "r2B1"),
        new Match("", "Bye", "", "", "r2B2"),
        new Match("Bye", "Bye", "", "", "r2B3"),
        new Match("", "Bye", "", "", "r2B4"),
    ]),
    new Round("Quarterfinal B", [
        new Match("Bye", "", "", "(3)", "qB1"),
        new Match("", "", "", "(4)", "qB2"),
        new Match("Bye", "", "", "(1)", "qB3"),
        new Match("", "", "", "(2)", "qB4"),
    ]),
    new Round("Semifinal C", [
        new Match("", "", "(5)", "(6)", "rC1"),
        new Match("", "", "(7)", "(8)", "rC2"),
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
        new Match("", "", "", "", "sA2"),
    ]),
    new Round("Round 2 B", [
        new Match("Bye", "", "", "", "r2B1"),
        new Match("", "", "", "", "r2B2"),
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
    new Round("Round Robin 1", [
        new Match("Sophie / Valentina", "Emma / Karin", "", "", "rr2"),
        new Match("Sophie / Valentina", "Rosa / Marlene", "", "", "rr3"),
        new Match("", "", "", "", "rr4"),
    ]),
    new Round("Round Robin 2", [
        new Match("Emma / Karin", "Sophie / Valentina", "", "", "rr1"),
        new Match("Emma / Karin", "Rosa / Marlene", "", "", "rr3"),
        new Match("", "", "", "", "rr4"),
    ]),
    new Round("Round Robin 3", [
        new Match("Rosa / Marlene", "Sophie / Valentina", "", "", "rr1"),
        new Match("Rosa / Marlene", "Emma / Karin", "", "", "rr2"),
        new Match("", "", "", "", "rr3"),
    ])
]);

const roundRobinData = [
    { name: "Sophie / Valentina", spiele: 0, siege: 0, saetze: "0:0", games: "0:0" },
    { name: "Emma / Karin", spiele: 0, siege: 0, saetze: "0:0", games: "0:0" },
    { name: "Rosa / Marlene", spiele: 0, siege: 0, saetze: "0:0", games: "0:0" },
];