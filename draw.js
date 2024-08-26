let menSingleDraw = [
    [ // Round 1
        {player1: "Michi", player2: "David L.", className: "r1"},
        {player1: "Severin", player2: "Andi", className: "r2"},
        {player1: "David K.", player2: "Jakob", className: "r3"},
        {player1: "Lukas L.", player2: "Elias", className: "r4"},
        {player1: "Thomas", player2: "Herbert", className: "r5"},
        {player1: "Lukas P.", player2: "Julian", className: "r6"},
        {player1: "Peter P.", player2: "Gerhard", className: "r7"},
        {player1: "Peter S.", player2: "Patrick", className: "r8"},
    ],
    [ // Quarterfinal A
        {player1: "ㅤ", result1: "26.08. 18:00", player2: "Severin", result2: "6:1 6:2", className: "qA1"},
        {player1: "Jakob", result1: "6:0 7:6", player2: "ㅤ", result2: "29.08. 14:00", className: "qA2"},
        {player1: "ㅤ", result1: "28.08. 17:00", player2: "", result2: "", className: "qA3"},
        {player1: "Peter P.", result1: "6:2 6:2", player2: "Patrick", result2: "6:2 6:0", className: "qA4"},
    ],
    [ // Semifinal A
        {player1: "", result1: "", player2: "", result2: "", className: "sA1"},
        {player1: "", result1: "", player2: "ㅤ", result2: "29.08. 08:30", className: "sA2"},
    ],
    [ // Final A
        {player1: "", result1: "", player2: "", result2: "", className: "fA"},
    ],
    [ // Winner A
        {player1: "", result1: "", className: "wA"},
    ],
    [ // Round 2 B
        {player1: "", result1: "", player2: "Andi", result2: "", className: "r2B1"},
        {player1: "David K.", result1: "", player2: "", result2: "", className: "r2B2"},
        {player1: "", result1: "", player2: "", result2: "", className: "r2B3"},
        {player1: "Gerhard", result1: "", player2: "Peter S.", result2: "", className: "r2B4"},
    ],
    [ // Quarterfinal B
        {player1: "", result1: "", player2: "ㅤ", result2: "(3)", className: "qB1"},
        {player1: "", result1: "", player2: "ㅤ", result2: "(4)", className: "qB2"},
        {player1: "", result1: "", player2: "ㅤ", result2: "(1)", className: "qB3"},
        {player1: "", result1: "", player2: "ㅤ", result2: "(2)", className: "qB4"},
    ],
    [ // Semifinal B
        {player1: "", result1: "", player2: "", result2: "", className: "sB1"},
        {player1: "", result1: "", player2: "", result2: "", className: "sB2"},
    ],
    [ // Final B
        {player1: "", result1: "", player2: "", result2: "", className: "fB"},
    ],
    [ // Winner B
        {player1: "", result1: "", className: "wB"},
    ],
    [ // Semifinal C
        {player1: "ㅤ", result1: "(5)", player2: "ㅤ", result2: "(6)", className: "rC1"},
        {player1: "ㅤ", result1: "(7)", player2: "ㅤ", result2: "(8)", className: "rC2"},
    ],
    [ // Final C
        {player1: "", result1: "", player2: "", result2: "", className: "fC"},
    ],
    [ // Winner B
        {player1: "", result1: "", className: "wC"},
    ],
];

let menDoubleDraw = [
    [ // Round 1
        {player1: "Lea / Elias", player2: "Bye", className: "r1"},
        {player1: "Thomas / David", player2: "Peter P. / Paul", className: "r2"},
        {player1: "Patrick Ö. / Mario O.", player2: "Patrick P. / Mario V.", className: "r3"},
        {player1: "Bye", player2: "Herbert / Gerhard", className: "r4"},
        {player1: "Peter S. / Andi", player2: "Bye", className: "r5"},
        {player1: "Bye", player2: "Daniel / Philipp", className: "r6"},
        {player1: "Lukas P. / Jakob", player2: "Bye", className: "r7"},
        {player1: "Bye", player2: "Michi / Lukas L.", className: "r8"},
    ],
    [ // Quarterfinal A
        {player1: "Lea / Elias", result1: "", player2: "", result2: "", className: "qA1"},
        {player1: "ㅤ", result1: "28.08. 19:00", player2: "Herbert / Gerhard", result2: "", className: "qA2"},
        {player1: "Peter S. / Andi", result1: "", player2: "Daniel / Philipp", result2: "", className: "qA3"},
        {player1: "Lukas P. / Jakob", result1: "", player2: "Michi / Lukas L.", result2: "", className: "qA4"},
    ],
    [ // Semifinal A
        {player1: "", result1: "", player2: "", result2: "", className: "sA1"},
        {player1: "ㅤ", result1: "26.08. 20:00", player2: "ㅤ", result2: "28.08. 16:00", className: "sA2"},
    ],
    [ // Final A
        {player1: "", result1: "", player2: "", result2: "", className: "fA"},
    ],
    [ // Winner A
        {player1: "", result1: "", className: "wA"},
    ],
    [ // Round 2 B
        {player1: "Bye", result1: "", player2: "", result2: "", className: "r2B1"},
        {player1: "", result1: "", player2: "Bye", result2: "", className: "r2B2"},
        {player1: "Bye", result1: "", player2: "Bye", result2: "", className: "r2B3"},
        {player1: "Bye", result1: "", player2: "Bye", result2: "", className: "r2B4"},
    ],
    [ // Round 3 B
        {player1: "", result1: "", player2: "ㅤ", result2: "(3)", className: "qB1"},
        {player1: "", result1: "", player2: "ㅤ", result2: "(4)", className: "qB2"},
        {player1: "Bye", result1: "", player2: "ㅤ", result2: "(1)", className: "qB3"},
        {player1: "Bye", result1: "", player2: "ㅤ", result2: "(2)", className: "qB4"},
    ],
    [ // Round 4 B
        {player1: "", result1: "", player2: "", result2: "", className: "sB1"},
        {player1: "", result1: "", player2: "", result2: "", className: "sB2"},
    ],
    [ // Round 5 B
        {player1: "", result1: "", player2: "", result2: "", className: "fB"},
    ],
    [ // Winner B
        {player1: "", result1: "", className: "wB"},
    ],
];

let womenSingleDraw = [
    [ // Round 1
        {player1: "Helga", player2: "Andrea", className: "r1"},
        {player1: "Edith", player2: "Karin", className: "r2"},
        {player1: "Amelie", player2: "Marlene", className: "r3"},
        {player1: "Rosa", player2: "Lea", className: "r4"}
    ],
    [ // Semifinal A
        {player1: "Helga", result1: "6:0 6:0", player2: "Karin", result2: "6:2 6:3", className: "sA1"},
        {player1: "ㅤ", result1: "29.08. 17:00", player2: "Lea", result2: "6:0 6:0", className: "sA2"},
    ],
    [ // Final A
        {player1: "", result1: "", player2: "", result2: "", className: "fA"},
    ],
    [ // Winner A
        {player1: "", result1: "", className: "wA"},
    ],
    [ // Round 2 B
        {player1: "Andrea", result1: "", player2: "Edith", result2: "", className: "r2B1"},
        {player1: "", result1: "", player2: "Rosa", result2: "", className: "r2B2"},
    ],
    [ // Semifinal B
        {player1: "", result1: "", player2: "ㅤ", result2: "(2)", className: "sB1"},
        {player1: "", result1: "", player2: "ㅤ", result2: "(1)", className: "sB2"},
    ],
    [ // Final B
        {player1: "", result1: "", player2: "", result2: "", className: "fB"},
    ],
    [ // Winner B
        {player1: "", result1: "", className: "wB"},
    ],
];

let womenDoublePlayer = [
    "Karin / Rosa", "Amelie / Edith", "Marlene / Andrea", "Helga / Sabine",
    "Karin / Rosa", "Amelie / Edith", "Marlene / Andrea", "Helga / Sabine",
]
let womenDoubleResults = [
    "", "6:7 3:6", "29.08. 18:00",
    "", "26.08. 18:00", "",
    "7:6 6:3", "26.08. 18:00", "30.08. 14:00",
    "29.08. 18:00", "", "30.08. 14:00"
]