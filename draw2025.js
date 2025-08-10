const menSingleDraw = new Tournament("Herren Einzel", [
    new Round("1. Runde", [
        new Match("Michi", "Bye", "", "", "r1"),
        new Match("Constantin", "Peter P.", "", "", "r2"),
        new Match("Colin", "Simon", "", "", "r3"),
        new Match("David", "Thomas", "", "", "r4"),
        new Match("Herbert", "Peter S.", "", "", "r5"),
        new Match("Harald", "Jakob", "", "", "r6"),
        new Match("Andreas", "Mario", "", "", "r7"),
        new Match("Bye", "Patrick", "", "", "r8"),
    ]),
    new Round("Quarterfinal A", [
        new Match("Michi", "&nbsp", "&nbsp", "13.08. 16:00", "qA1"),
        new Match("Simon", "", "6:3 6:4", "", "qA2"),
        new Match("", "", "", "", "qA3"),
        new Match("", "Patrick", "", "&nbsp", "qA4"),
    ]),
    new Round("Round 2 B", [
        new Match("Bye", "", "&nbsp", "&nbsp", "r2B1"),
        new Match("", "", "&nbsp", "&nbsp", "r2B2"),
        new Match("", "", "&nbsp", "&nbsp", "r2B3"),
        new Match("", "Bye", "&nbsp", "&nbsp", "r2B4"),
    ]),
    new Round("Quarterfinal B", [
        new Match("", "&nbsp", "&nbsp", "(3)", "qB1"),
        new Match("", "&nbsp", "&nbsp", "(4)", "qB2"),
        new Match("", "&nbsp", "&nbsp", "(1)", "qB3"),
        new Match("", "&nbsp", "&nbsp", "(2)", "qB4"),
    ]),
    new Round("Semifinal C", [
        new Match("&nbsp", "&nbsp", "(5)", "(6)", "rC1"),
        new Match("&nbsp", "&nbsp", "(7)", "(8)", "rC2"),
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
        new Match("Helga", "", "&nbsp", "", "sA1"),
        new Match("&nbsp", "", "14.08. 9:00", "", "sA2"),
    ]),
    new Round("Round 2 B", [
        new Match("Bye", "", "&nbsp", "&nbsp", "r2B1"),
        new Match("", "", "&nbsp", "&nbsp", "r2B2"),
    ]),
    new Round("Semifinal B", [
        new Match("", "&nbsp", "&nbsp", "(2)", "sB1"),
        new Match("", "&nbsp", "&nbsp", "(1)", "sB2"),
    ])
])

const menDoubleDraw = new Tournament("Herren Doppel", [
    new Round("Round 1", [
        new Match("Michi / Simon", "Herbert / Gerhard", "", "", "r1"),
        new Match("Daniel / Philipp", "Peter / Paul", "", "", "r2"),
        new Match("Patrick / Mario O.", "Jakob / Mario V.", "", "", "r3"),
        new Match("Colin / Constantin", "David / Thomas", "", "", "r4"),
    ]),
    new Round("Semifinal B", [
        new Match("", "&nbsp", "&nbsp", "(2)", "sB1"),
        new Match("", "&nbsp", "&nbsp", "(1)", "sB2"),
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
        new Match("Karin / Emma", "Andrea / Erna", "", "", "rr3"),
    ]),
    new Round("Round Robin 4", [
        new Match("Andrea / Erna", "Helga / Marlene", "", "", "rr1"),
        new Match("Andrea / Erna", "Amelie / Edith", "", "", "rr2"),
        new Match("Andrea / Erna", "Karin / Emma", "", "", "rr3"),
    ]),
]);

const roundRobinData = [
    { name: "Helga / Marlene", spiele: 0, siege: 0, saetze: "0:0", games: "0:0" },
    { name: "Amelie / Edith", spiele: 0, siege: 0, saetze: "0:0", games: "0:0" },
    { name: "Karin / Emma", spiele: 0, siege: 0, saetze: "0:0", games: "0:0" },
    { name: "Andrea / Erna", spiele: 0, siege: 0, saetze: "0:0", games: "0:0" }
];