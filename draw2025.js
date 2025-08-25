const menSingleDraw = new Tournament("Herren Einzel", [
    new Round("1. Runde", [
        new Match("Michi", "Bye", "", "", "r1"),
        new Match("Consti", "Peter P.", "", "", "r2"),
        new Match("Colin", "Simon", "", "", "r3"),
        new Match("David", "Thomas", "", "", "r4"),
        new Match("Herbert", "Peter S.", "", "", "r5"),
        new Match("Harald", "Jakob", "", "", "r6"),
        new Match("Andreas", "Mario", "", "", "r7"),
        new Match("Bye", "Patrick", "", "", "r8"),
    ]),
    new Round("Quarterfinal A", [
        new Match("Michi", "Peter P.", "", "6:0 6:0", "qA1"),
        new Match("Simon", "Thomas", "6:3 6:4", "6:1 6:0", "qA2"),
        new Match("Herbert", "", "6:0 6:0", "29.08. 15:00", "qA3"),
        new Match("Andreas", "Patrick", "6:2 6:1", "", "qA4"),
    ]),
    new Round("Semifinal A", [
        new Match("Michi", "Thomas", "6:2 6:0", "6:0 6:0", "sA1"),
        new Match("", "", "", "", "sA2"),
    ]),
    new Round("Final A", [
        new Match("", "", "26.08. 18:00", "", "fA"),
    ]),
    new Round("Round 2 B", [
        new Match("Bye", "Consti", "", "", "r2B1"),
        new Match("Colin", "David", "", "", "r2B2"),
        new Match("Peter S.", "", "", "", "r2B3"),
        new Match("Mario", "Bye", "", "", "r2B4"),
    ]),
    new Round("Quarterfinal B", [
        new Match("Consti", "", "", "(3)", "qB1"),
        new Match("", "", "", "(4)", "qB2"),
        new Match("", "Peter P.", "", "(1)", "qB3"),
        new Match("Mario", "Simon", "", "(2)", "qB4"),
    ]),
    new Round("Semifinal B", [
        new Match("", "", "", "", "sB1"),
        new Match("", "Simon", "", "6:1 6:2", "sB2"),
    ]),
    new Round("Semifinal C", [
        new Match("Bye", "", "(5)", "(6)", "rC1"),
        new Match("", "Bye", "(7)", "(8)", "rC2"),
    ]),
]);

const womenSingleDraw = new Tournament("Damen Einzel", [
    new Round("Round 1", [
        new Match("Helga", "Bye", "", "", "r1"),
        new Match("Andrea", "Marlene", "", "", "r2"),
        new Match("Erna", "Emma", "", "", "r3"),
        new Match("Karin", "Amelie", "", "", "r4"),
    ]),
    new Round("Semifinal A", [
        new Match("Helga", "Andrea", "", "2:6 6:1 6:3", "sA1"),
        new Match("Emma", "Amelie", "6:3 6:4", "6:2 6:3", "sA2"),
    ]),
    new Round("Final A", [
       new Match("Helga", "", "6:0 6:0", "", "fA"),
    ]),
    new Round("Round 2 B", [
        new Match("Bye", "Marlene", "", "", "r2B1"),
        new Match("Erna", "Karin", "", "", "r2B2"),
    ]),
    new Round("Semifinal B", [
        new Match("Marlene", "", "", "(2)", "sB1"),
        new Match("Karin", "Andrea", "6:1 6:2", "(1)", "sB2"),
    ])
])

const menDoubleDraw = new Tournament("Herren Doppel", [
    new Round("Round 1", [
        new Match("Michi / Simon", "Herbert / Gerhard", "", "", "r1"),
        new Match("Daniel / Philipp", "Peter / Paul", "", "", "r2"),
        new Match("Patrick / Mario O.", "Jakob / Mario V.", "", "", "r3"),
        new Match("Colin / Consti", "David / Thomas", "", "", "r4"),
    ]),
    new Round("Semifinal A", [
        new Match("Michi / Simon", "Peter / Paul", "7:5 7:5", "6:0 6:0", "sA1"),
        new Match("", "", "27.08. 19:00", "27.08. 18:00", "sA2"),
    ]),
    new Round("Final A", [
        new Match("Michi / Simon", "", "6:4 6:4", "", "fA"),
    ]),
    new Round("Round 2 B", [
        new Match("Herbert / Gerhard", "Daniel / Philipp", "", "", "r2B1"),
        new Match("", "", "", "", "r2B2"),
    ]),
    new Round("Semifinal B", [
        new Match("", "", "", "(2)", "sB1"),
        new Match("", "Peter / Paul", "", "(1)", "sB2"),
    ])
])

const womenDoubleDraw = new Tournament("Damen Doppel", [
    new Round("Round Robin 1", [
        new Match("Helga / Marlene", "Amelie / Edith", "", "", "rr2"),
        new Match("Helga / Marlene", "Karin / Emma", "", "", "rr3"),
        new Match("Helga / Marlene", "Andrea / Erna", "", "", "rr4"),
    ]),
    new Round("Round Robin 2", [
        new Match("Amelie / Edith", "Helga / Marlene", "", "", "rr1"),
        new Match("Amelie / Edith", "Karin / Emma", "", "", "rr3"),
        new Match("Amelie / Edith", "Andrea / Erna", "", "", "rr4"),
    ]),
    new Round("Round Robin 3", [
        new Match("Karin / Emma", "Helga / Marlene", "", "", "rr1"),
        new Match("Karin / Emma", "Amelie / Edith", "", "", "rr2"),
        new Match("Karin / Emma", "Andrea / Erna", "6:4 6:2", "", "rr3"),
    ]),
    new Round("Round Robin 4", [
        new Match("Andrea / Erna", "Helga / Marlene", "", "", "rr1"),
        new Match("Andrea / Erna", "Amelie / Edith", "", "", "rr2"),
        new Match("Andrea / Erna", "Karin / Emma", "4:6 2:6", "", "rr3"),
    ]),
]);

const roundRobinData = [
    { name: "Karin / Emma", spiele: 1, siege: 1, saetze: "2:0", games: "12:6" },
    { name: "Helga / Marlene", spiele: 0, siege: 0, saetze: "0:0", games: "0:0" },
    { name: "Amelie / Edith", spiele: 0, siege: 0, saetze: "0:0", games: "0:0" },
    { name: "Andrea / Erna", spiele: 1, siege: 0, saetze: "0:2", games: "6:12" }
];