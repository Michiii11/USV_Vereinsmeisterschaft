const menSingleDraw = new Tournament("Herren Einzel", [
    new Round("Round 1", [
        new Match("Michi", "David L.", "", "", "r1"),
        new Match("Severin", "Andi", "", "", "r2"),
        new Match("David K.", "Jakob", "", "", "r3"),
        new Match("Lukas L.", "Elias", "", "", "r4"),
        new Match("Thomas", "Herbert", "", "", "r5"),
        new Match("Lukas P.", "Julian", "", "", "r6"),
        new Match("Peter P.", "Gerhard", "", "", "r7"),
        new Match("Peter S.", "Patrick", "", "", "r8"),
    ]),
    new Round("Quarterfinal A", [
        new Match("Michi", "Severin", "6:0 6:0", "6:1 6:2", "qA1"),
        new Match("Jakob", "Elias", "6:0 7:6", "6:0 6:1", "qA2"),
        new Match("Thomas", "Julian", "6:4 6:4", "6:2 6:3", "qA3"),
        new Match("Peter P.", "Patrick", "6:2 6:2", "6:2 6:0", "qA4"),
    ]),
    new Round("Semifinal A", [
        new Match("Michi", "Elias", "6:0 6:0", "6:2 6:0", "sA1"),
        new Match("Thomas", "Patrick", "w. o.", "6:0 6:2", "sA2"),
    ]),
    new Round("Final A", [
        new Match("Michi", "Patrick", "6:1 6:0", "6:1 6:2", "fA"),
    ]),
    new Round("Winner A", [
        new Match("Michi", "", "6:4 6:2", "", "wA"),
    ]),
    new Round("Round 2 B", [
        new Match("David L.", "Andi", "&nbsp", "&nbsp", "r2B1"),
        new Match("David K.", "Lukas L.", "&nbsp", "&nbsp", "r2B2"),
        new Match("Herbert", "Lukas P.", "&nbsp", "&nbsp", "r2B3"),
        new Match("Gerhard", "Peter S.", "&nbsp", "&nbsp", "r2B4"),
    ]),
    new Round("Quarterfinal B", [
        new Match("Andi", "Julian", "6:1 6:1", "(3)", "qB1"),
        new Match("Lukas L.", "Peter P.", "6:0 6:1", "(4)", "qB2"),
        new Match("Herbert", "Severin", "6:0 6:0", "(1)", "qB3"),
        new Match("Peter S.", "Jakob", "6:3 6:1", "(2)", "qB4"),
    ]),
    new Round("Semifinal B", [
        new Match("Andi", "Peter P.", "w. o.", "6:2 6:2", "sB1"),
        new Match("Herbert", "Jakob", "w. o.", "6:4 6:2", "sB2"),
    ]),
    new Round("Final B", [
        new Match("Andi", "Herbert", "1:6 7:5 6:4", "6:0 6:1", "fB"),
    ]),
    new Round("Winner B", [
        new Match("Herbert", "", "3:6 6:0 10:7", "", "wB"),
    ]),
    new Round("Semifinal C", [
        new Match("David L.", "David K.", "(5)", "(6)", "rC1"),
        new Match("Lukas P.", "Gerhard", "(7)", "(8)", "rC2"),
    ]),
    new Round("Final C", [
        new Match("ㅤ", "Gerhard", "", "6:2 6:2", "fC"),
    ]),
    new Round("Winner C", [
        new Match("ㅤ", "", "", "", "wC"),
    ]),
]);

const womenSingleDraw = new Tournament("Damen Einzel", [
    new Round("Round 1", [
        new Match("Helga", "Andrea", "", "", "r1"),
        new Match("Edith", "Karin", "", "", "r2"),
        new Match("Amelie", "Marlene", "", "", "r3"),
        new Match("Rosa", "Lea", "", "", "r4"),
    ]),
    new Round("Semifinal A", [
        new Match("Helga", "Karin", "6:0 6:0", "6:2 6:3", "sA1"),
        new Match("Amelie", "Lea", "6:1 6:2", "6:0 6:0", "sA2"),
    ]),
    new Round("Final A", [
        new Match("Helga", "Lea", "6:0 6:2", "6:3 4:6 6:2", "fA"),
    ]),
    new Round("Winner A", [
        new Match("Lea", "", "6:1 6:2", "", "wA"),
    ]),
    new Round("Round 2 B", [
        new Match("Andrea", "Edith", "&nbsp", "&nbsp", "r2B1"),
        new Match("Marlene", "Rosa", "&nbsp", "&nbsp", "r2B2"),
    ]),
    new Round("Semifinal B", [
        new Match("Andrea", "Amelie", "6:2 6:2", "(2)", "sB1"),
        new Match("Marlene", "Karin", "6:2 5:7 6:1", "(1)", "sB2"),
    ]),
    new Round("Final B", [
        new Match("Amelie", "Karin", "6:0 6:2", "6:3 6:0", "fB"),
    ]),
    new Round("Winner B", [
        new Match("Amelie", "", "6:3 6:2", "", "wB"),
    ]),
]);

const menDoubleDraw = new Tournament("Herren Doppel", [
    new Round("Round 1", [
        new Match("Lea / Elias", "Bye", "", "", "r1"),
        new Match("Thomas / David", "Peter P. / Paul", "", "", "r2"),
        new Match("Patrick Ö. / Mario O.", "Patrick P. / Mario V.", "", "", "r3"),
        new Match("Bye", "Herbert / Gerhard", "", "", "r4"),
        new Match("Peter S. / Andi", "Bye", "", "", "r5"),
        new Match("Bye", "Daniel / Philipp", "", "", "r6"),
        new Match("Lukas P. / Jakob", "Bye", "", "", "r7"),
        new Match("Bye", "Michi / Lukas L.", "", "", "r8"),
    ]),
    new Round("Quarterfinal A", [
        new Match("Lea / Elias", "Thomas / David", "&nbsp", "1:6 6:2 6:4", "qA1"),
        new Match("Patrick Ö. / Mario O.", "Herbert / Gerhard", "6:0 6:1", "&nbsp", "qA2"),
        new Match("Peter S. / Andi", "Daniel / Philipp", "&nbsp", "&nbsp", "qA3"),
        new Match("Lukas P. / Jakob", "Michi / Lukas L.", "&nbsp", "&nbsp", "qA4"),
    ]),
    new Round("Semifinal A", [
        new Match("Thomas / David", "Herbert / Gerhard", "3:6 6:4 10:6", "6:4 7:6", "sA1"),
        new Match("Peter S. / Andi", "Michi / Lukas L.", "6:0 6:0", "6:0 6:1", "sA2"),
    ]),
    new Round("Final A", [
        new Match("Herbert / Gerhard", "Michi / Lukas L.", "6:3 4:6 7:6", "6:1 4:6 6:3", "fA"),
    ]),
    new Round("Winner A", [
        new Match("Michi / Lukas L.", "", "7:5 6:2", "", "wA"),
    ]),
    new Round("Round 2 B", [
        new Match("Bye", "Peter P. / Paul", "&nbsp", "&nbsp", "r2B1"),
        new Match("Patrick P. / Mario V.", "Bye", "&nbsp", "&nbsp", "r2B2"),
        new Match("Bye", "Bye", "&nbsp", "&nbsp", "r2B3"),
        new Match("Bye", "Bye", "&nbsp", "&nbsp", "r2B4"),
    ]),
    new Round("Quarterfinal B", [
        new Match("Peter P. / Paul", "Daniel / Philipp", "&nbsp", "(3)", "qB1"),
        new Match("Patrick P. / Mario V.", "Lukas P. / Jakob", "&nbsp", "(4)", "qB2"),
        new Match("Bye", "Lea / Elias", "&nbsp", "(1)", "qB3"),
        new Match("Bye", "Patrick Ö. / Mario O.", "", "(2)", "qB4"),
    ]),
    new Round("Semifinal B", [
        new Match("Peter P. / Paul", "Lukas / Jakob", "6:0 6:0", "6:2 6:3", "sB1"),
        new Match("Lea / Elias", "Patrick Ö. / Mario O.", "&nbsp", "&nbsp", "sB2"),
    ]),
    new Round("Final B", [
        new Match("Peter P. / Paul", "Lea / Elias", "6:0 6:4", "6:3 0:6 7:6", "fB"),
    ]),
    new Round("Winner B", [
        new Match("Peter P. / Paul", "", "6:4 0:6 10:6", "", "wB"),
    ]),
]);

const womenDoubleDraw = new Tournament("Damen Doppel", [
    new Round("Round Robin 1", [
        new Match("Karin / Rosa", "Amelie / Edith", "2:6 1:6", "", "rr2"),
        new Match("Karin / Rosa", "Marlene / Andrea", "6:7 3:6", "", "rr3"),
        new Match("Karin / Rosa", "Helga / Sabine", "3:6 1:6", "", "rr4"),
    ]),
    new Round("Round Robin 2", [
        new Match("Amelie / Edith", "Karin / Rosa", "6:2 6:1", "", "rr1"),
        new Match("Amelie / Edith", "Marlene / Andrea", "6:1 6:1", "", "rr3"),
        new Match("Amelie / Edith", "Helga / Sabine", "5:7 5:7", "", "rr4"),
    ]),
    new Round("Round Robin 3", [
        new Match("Marlene / Andrea", "Karin / Rosa", "7:6 6:3", "", "rr1"),
        new Match("Marlene / Andrea", "Amelie / Edith", "1:6 1:6", "", "rr2"),
        new Match("Marlene / Andrea", "Helga / Sabine", "2:6 1:6", "", "rr3"),
    ]),
    new Round("Round Robin 4", [
        new Match("Helga / Sabine", "Karin / Rosa", "6:3 6:1", "", "rr1"),
        new Match("Helga / Sabine", "Amelie / Edith", "7:5 7:5", "", "rr2"),
        new Match("Helga / Sabine", "Marlene / Andrea", "6:2 6:1", "", "rr3"),
    ]),
]);

const roundRobinData = [
    { name: "Helga / Sabine", spiele: 3, siege: 3, saetze: "6:0", games: "38:17" },
    { name: "Amelie / Edith", spiele: 3, siege: 2, saetze: "4:2", games: "34:19" },
    { name: "Marlene / Andrea", spiele: 3, siege: 1, saetze: "2:4", games: "18:33" },
    { name: "Karin / Rosa", spiele: 3, siege: 0, saetze: "0:6", games: "16:37" }
];