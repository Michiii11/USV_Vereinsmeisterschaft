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
        new Match("Herbert", "Jakob", "6:0 6:0", "7:5 6:1", "qA3"),
        new Match("Andreas", "Patrick", "6:2 6:1", "", "qA4"),
    ]),
    new Round("Semifinal A", [
        new Match("Michi", "Thomas", "6:2 6:0", "6:0 6:0", "sA1"),
        new Match("Herbert", "Patrick", "6:2 6:0", "6:1 6:0", "sA2"),
    ]),
    new Round("Final A", [
        new Match("Michi", "Patrick", "6:1 6:1", "6:1 6:3", "fA"),
    ]),
    new Round("Winner A", [
       new Match("Michi", "", "6:3 6:0", "", "wA")
    ]),
    new Round("Round 2 B", [
        new Match("Bye", "Consti", "", "", "r2B1"),
        new Match("Colin", "David", "", "", "r2B2"),
        new Match("Peter S.", "Harald", "", "", "r2B3"),
        new Match("Mario", "Bye", "", "", "r2B4"),
    ]),
    new Round("Quarterfinal B", [
        new Match("Consti", "Jakob", "", "(3)", "qB1"),
        new Match("David", "Andreas", "6:0 6:1", "(4)", "qB2"),
        new Match("Peter S.", "Peter P.", "6:2 7:6", "(1)", "qB3"),
        new Match("Mario", "Simon", "", "(2)", "qB4"),
    ]),
    new Round("Semifinal B", [
        new Match("Jakob", "Andreas", "6:2 6:4", "w. o.", "sB1"),
        new Match("Peter P.", "Simon", "6:0 6:1", "6:1 6:2", "sB2"),
    ]),
    new Round("Final B", [
        new Match("Jakob", "Peter P.", "w. o.", "6:1 6:2", "fB")
    ]),
    new Round("Winner B", [
        new Match("Peter P.", "", "w. o.", "", "wB")
    ]),
    new Round("Semifinal C", [
        new Match("Bye", "Colin", "(5)", "(6)", "rC1"),
        new Match("Harald", "Bye", "(7)", "(8)", "rC2"),
    ]),
    new Round("Final C", [
        new Match("Colin", "Harald", "", "", "fC"),
    ]),
    new Round("Winner C", [
        new Match("Harald", "", "6:3 6:2", "", "wC")
    ])
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
       new Match("Helga", "Amelie", "6:0 6:0", "6:2 6:0", "fA"),
    ]),
    new Round("Winner A", [
       new Match("Amelie", "", "w. o.", "", "wA")
    ]),
    new Round("Round 2 B", [
        new Match("Bye", "Marlene", "", "", "r2B1"),
        new Match("Erna", "Karin", "", "", "r2B2"),
    ]),
    new Round("Semifinal B", [
        new Match("Marlene", "Emma", "", "(2)", "sB1"),
        new Match("Karin", "Andrea", "6:1 6:2", "(1)", "sB2"),
    ]),
    new Round("Final B", [
        new Match("Emma", "Karin", "6:1 7:6", "6:3 6:0", "fB"),
    ]),
    new Round("Winner B", [
        new Match("Karin", "", "6:1 7:6", "", "wB")
    ])
])

const menDoubleDraw = new Tournament("Herren Doppel", [
    new Round("Round 1", [
        new Match("Michi / Simon", "Herbert / Gerhard", "", "", "r1"),
        new Match("Daniel / Philipp", "Peter / Paul", "", "", "r2"),
        new Match("Patrick / Mario O.", "Jakob / Mario V.", "", "", "r3"),
        new Match("Colin / Consti", "Thomas / David", "", "", "r4"),
    ]),
    new Round("Semifinal A", [
        new Match("Michi / Simon", "Peter / Paul", "7:5 7:5", "6:0 6:0", "sA1"),
        new Match("Patrick / Mario O.", "Thomas / David", "6:3 6:2", "6:1 6:2", "sA2"),
    ]),
    new Round("Final A", [
        new Match("Michi / Simon", "Patrick / Mario O.", "6:4 6:4", "4:6 7:5 7:6", "fA"),
    ]),
    new Round("Winner A", [
        new Match("Michi / Simon", "", "6:4 6:2", "", "wA")
    ]),
    new Round("Round 2 B", [
        new Match("Herbert / Gerhard", "Daniel / Philipp", "", "", "r2B1"),
        new Match("Jakob / Mario V.", "Colin / Consti", "", "", "r2B2"),
    ]),
    new Round("Semifinal B", [
        new Match("Herbert / Gerhard", "Thomas / David", "6:0 6:0", "(2)", "sB1"),
        new Match("Jakob / Mario V.", "Peter / Paul", "7:6 0:6 6:4", "(1)", "sB2"),
    ]),
    new Round("Final B", [
        new Match("Thomas / David", "Jakob / Mario V.", "6:3 6:1", "w. o.", "fB")
    ]),
    new Round("Winner B", [
        new Match("Thomas / David", "", "w. o.", "", "wB")
    ])
])

const womenDoubleDraw = new Tournament("Damen Doppel", [
    new Round("Round Robin 1", [
        new Match("Helga / Marlene", "Amelie / Edith", "6:4 6:4", "", "rr2"),
        new Match("Helga / Marlene", "Karin / Emma", "6:4 6:4", "", "rr3"),
        new Match("Helga / Marlene", "Andrea / Erna", "6:0 6:1", "", "rr4"),
    ]),
    new Round("Round Robin 2", [
        new Match("Amelie / Edith", "Helga / Marlene", "4:6 4:6", "", "rr1"),
        new Match("Amelie / Edith", "Karin / Emma", "6:3 7:6", "", "rr3"),
        new Match("Amelie / Edith", "Andrea / Erna", "6:2 6:1", "", "rr4"),
    ]),
    new Round("Round Robin 3", [
        new Match("Karin / Emma", "Helga / Marlene", "4:6 4:6", "", "rr1"),
        new Match("Karin / Emma", "Amelie / Edith", "3:6 6:7", "", "rr2"),
        new Match("Karin / Emma", "Andrea / Erna", "6:4 6:2", "", "rr3"),
    ]),
    new Round("Round Robin 4", [
        new Match("Andrea / Erna", "Helga / Marlene", "0:6 1:6", "", "rr1"),
        new Match("Andrea / Erna", "Amelie / Edith", "2:6 1:6", "", "rr2"),
        new Match("Andrea / Erna", "Karin / Emma", "4:6 2:6", "", "rr3"),
    ]),
]);

const roundRobinData = [
    { name: "Helga / Marlene", spiele: 3, siege: 3, saetze: "6:0", games: "36:17" },
    { name: "Amelie / Edith", spiele: 3, siege: 2, saetze: "4:2", games: "33:27" },
    { name: "Karin / Emma", spiele: 3, siege: 1, saetze: "2:4", games: "29:30" },
    { name: "Andrea / Erna", spiele: 3, siege: 0, saetze: "0:6", games: "10:36" }
];