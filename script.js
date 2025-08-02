function getDraw(type, elem) {
    if(elem){
        document.querySelector("p.active").classList.remove("active");
        elem.classList.add("active");
    }

    let draw

    document.querySelector("main.cEvent").style.display = "none"

    if(document.querySelector("main").classList.contains("big")){
        document.querySelector("main").classList.remove("big")
    }

    document.querySelector("main").style.height = "100%"
    document.querySelector("main").style.width = "max(100%, 1000px)"
    if(document.querySelector("span")){
        document.querySelectorAll("span").forEach(elem=>{elem.style.left = "80%"})
    }


    switch (type) {
        case 'menSingle': draw = menSingleDraw; printDraw(16); addCEvent();
            document.querySelector("main.cEvent").style.display = "flex"
            break;
        case 'menDouble': draw = menDoubleDraw; printDraw(16);
            document.querySelector("main").style.width = "max(100%, 1750px)"
            if(document.querySelector("span")) {
                document.querySelectorAll("span").forEach(elem => {
                    elem.style.left = "88%"
                })
                document.querySelectorAll("span.right").forEach(elem => {
                    elem.innerHTML = ""
                })
            }
            break;
        case 'menDouble8': draw = menDoubleDraw; printDraw(8);
            document.querySelector("main").style.width = "max(100%, 1750px)"
            if(document.querySelector("span")) {
                document.querySelectorAll("span").forEach(elem => {
                    elem.style.left = "88%"
                })
                document.querySelectorAll("span.right").forEach(elem => {
                    elem.innerHTML = ""
                })
            }break;
        case 'womenSingle': draw = womenSingleDraw; printDraw(8); break;
        case 'womenDouble': printDraw(4); fillRoundRobinMatrix(womenDoubleDraw); return;
    }

    draw.rounds.forEach(round => {
        round.matches.forEach(match => {
            let bracket = document.querySelector(`.${match.className}`);
            if (bracket) {
                let player1 = bracket.querySelectorAll("div.person")[0].querySelectorAll("p");
                if(bracket.querySelectorAll("div.person")[1]) {
                    let player2 = bracket.querySelectorAll("div.person")[1].querySelectorAll("p");
                    player2[0].innerHTML = match.player2
                    player2[1].innerHTML = match.result2
                }

                player1[0].innerHTML = match.player1
                player1[1].innerHTML = match.result1
            }
        })
    });
}

function fillRoundRobinMatrix(tournament) {
    // Teams aus der ersten Runde extrahieren
    const teams = [
        tournament.rounds[0].matches[0].player1,
        tournament.rounds[0].matches[0].player2,
        tournament.rounds[0].matches[1].player2,
        tournament.rounds[0].matches[2].player2
    ];
    const table = document.querySelector("table:not(.erg)");
    if (!table) return;

    // Alle Matches sammeln
    const matches = tournament.rounds.flatMap(r => r.matches);

    // Kopf- und Seitenzeile füllen
    for (let i = 0; i < teams.length; i++) {
        if (table.rows[0] && table.rows[0].cells[i + 1])
            table.rows[0].cells[i + 1].textContent = teams[i];
        if (table.rows[i + 1] && table.rows[i + 1].cells[0])
            table.rows[i + 1].cells[0].textContent = teams[i];
    }

    // Ergebnisse in beide Richtungen eintragen
    for (let i = 0; i < teams.length; i++) {
        for (let j = 0; j < teams.length; j++) {
            if (i === j) continue;
            const match = matches.find(m =>
                m.player1 === teams[i] && m.player2 === teams[j]
            );
            if (match && table.rows[i + 1] && table.rows[i + 1].cells[j + 1]) {
                table.rows[i + 1].cells[j + 1].textContent = match.result1;
            }
            // Rückspiel (aus Sicht von j)
            const reverseMatch = matches.find(m =>
                m.player1 === teams[j] && m.player2 === teams[i]
            );
            if (reverseMatch && table.rows[j + 1] && table.rows[j + 1].cells[i + 1]) {
                table.rows[j + 1].cells[i + 1].textContent = reverseMatch.result1;
            }
        }
    }
}

function printDraw(type){
    if (type === 16) {
        const main = document.querySelector("main");
        main.innerHTML = "";

        function createBracket(bracketClass, persons = 2, span = null) {
            const div = document.createElement("div");
            div.className = `bracket ${bracketClass}`;
            for (let i = 0; i < persons; i++) {
                const person = document.createElement("div");
                person.className = "person";
                person.innerHTML = "<p></p><p></p>";
                div.appendChild(person);
            }
            if (span) {
                const s = document.createElement("span");
                if (span.className) s.className = span.className;
                s.textContent = span.text;
                div.appendChild(s);
            }
            return div;
        }

        // Linke Seite
        const left = document.createElement("div");
        left.className = "left";
        [
            { style: { "--top": "6.25%" }, brackets: [ ["wB", 1] ] },
            { style: { "grid-template-rows": "1fr", "--top": "6.25%" }, brackets: [ ["fB", 2] ] },
            { style: { "grid-template-rows": "1fr 1fr", "--top": "6.25%" }, brackets: [ ["sB1", 2], ["sB2", 2] ] },
            { style: { "grid-template-rows": "repeat(4, 1fr)", "--top": "6.25%" }, brackets: [ ["qB1", 2], ["qB2", 2], ["qB3", 2], ["qB4", 2] ] },
            { style: { "grid-template-rows": "1fr 1fr 1fr 1fr" }, brackets: [
                    ["r2B1", 2, { className: "right", text: "(5)" }],
                    ["r2B2", 2, { className: "right", text: "(6)" }],
                    ["r2B3", 2, { className: "right", text: "(7)" }],
                    ["r2B4", 2, { className: "right", text: "(8)" }]
                ] }
        ].forEach(col => {
            const column = document.createElement("div");
            column.className = "column";
            Object.entries(col.style).forEach(([k, v]) => column.style.setProperty(k, v));
            col.brackets.forEach(([cls, persons, span]) => column.appendChild(createBracket(cls, persons, span)));
            left.appendChild(column);
        });

        // Mitte
        const center = document.createElement("div");
        center.className = "center column";
        for (let i = 1; i <= 8; i++) {
            center.appendChild(createBracket(`r${i}`));
        }

        // Rechte Seite
        const right = document.createElement("div");
        right.className = "right";
        [
            { style: { "grid-template-rows": "1fr 1fr 1fr 1fr" }, brackets: [
                    ["qA1", 2, { text: "(1)" }],
                    ["qA2", 2, { text: "(2)" }],
                    ["qA3", 2, { text: "(3)" }],
                    ["qA4", 2, { text: "(4)" }]
                ] },
            { style: { "grid-template-rows": "1fr 1fr" }, brackets: [ ["sA1", 2], ["sA2", 2] ] },
            { style: { "grid-template-rows": "1fr" }, brackets: [ ["fA", 2] ] },
            { style: { "--top": "6.25%" }, brackets: [ ["wA", 1] ] }
        ].forEach(col => {
            const column = document.createElement("div");
            column.className = "column";
            Object.entries(col.style).forEach(([k, v]) => column.style.setProperty(k, v));
            col.brackets.forEach(([cls, persons, span]) => column.appendChild(createBracket(cls, persons, span)));
            right.appendChild(column);
        });

        main.appendChild(left);
        main.appendChild(center);
        main.appendChild(right);
    }

    if (type === 8) {
        const main = document.querySelector("main");
        main.style.height = "50%";
        main.style.width = "max(75%, 800px)";
        main.innerHTML = "";

        function createBracket(bracketClass, persons = 2, span = null) {
            const div = document.createElement("div");
            div.className = `bracket ${bracketClass}`;
            for (let i = 0; i < persons; i++) {
                const person = document.createElement("div");
                person.className = "person";
                person.innerHTML = "<p></p><p></p>";
                div.appendChild(person);
            }
            if (span) {
                const s = document.createElement("span");
                if (span.className) s.className = span.className;
                s.textContent = span.text;
                div.appendChild(s);
            }
            return div;
        }

        // Linke Seite
        const left = document.createElement("div");
        left.className = "left";
        [
            { style: { "--top": "12.5%" }, brackets: [ ["wB", 1] ] },
            { style: { "grid-template-rows": "1fr", "--top": "12.55%" }, brackets: [ ["fB", 2] ] },
            { style: { "grid-template-rows": "1fr 1fr", "--top": "12.50%" }, brackets: [ ["sB1", 2], ["sB2", 2] ] },
            { style: { "grid-template-rows": "repeat(2, 1fr)" }, brackets: [ ["r2B1", 2], ["r2B2", 2] ] }
        ].forEach(col => {
            const column = document.createElement("div");
            column.className = "column";
            Object.entries(col.style).forEach(([k, v]) => column.style.setProperty(k, v));
            col.brackets.forEach(([cls, persons, span]) => column.appendChild(createBracket(cls, persons, span)));
            left.appendChild(column);
        });

        // Mitte
        const center = document.createElement("div");
        center.className = "center column";
        center.style.setProperty("grid-template-rows", "repeat(4, 1fr)");
        for (let i = 1; i <= 4; i++) {
            center.appendChild(createBracket(`r${i}`));
        }

        // Rechte Seite
        const right = document.createElement("div");
        right.className = "right";
        [
            { style: { "grid-template-rows": "1fr 1fr" }, brackets: [
                    ["sA1", 2, { text: "(1)" }],
                    ["sA2", 2, { text: "(2)" }]
                ] },
            { style: { "grid-template-rows": "1fr" }, brackets: [ ["fA", 2] ] },
            { style: { "--top": "6.25%" }, brackets: [ ["wA", 1] ] }
        ].forEach(col => {
            const column = document.createElement("div");
            column.className = "column";
            Object.entries(col.style).forEach(([k, v]) => column.style.setProperty(k, v));
            col.brackets.forEach(([cls, persons, span]) => column.appendChild(createBracket(cls, persons, span)));
            right.appendChild(column);
        });

        main.appendChild(left);
        main.appendChild(center);
        main.appendChild(right);
    }

    if (type === 4) {
        const main = document.querySelector("main");
        main.innerHTML = "";

        // Erzeuge das Grundgerüst
        const wrapper = document.createElement("div");
        wrapper.className = "roundRobin";

        // Erste Tabelle (Matrix)
        const table = document.createElement("table");
        for (let i = 0; i <= roundRobinData.length; i++) {
            const tr = document.createElement("tr");
            for (let j = 0; j <= roundRobinData.length; j++) {
                if (i === 0 && j === 0) {
                    const th = document.createElement("th");
                    th.className = "black";
                    tr.appendChild(th);
                } else if (i === 0) {
                    const th = document.createElement("th");
                    th.textContent = "";
                    tr.appendChild(th);
                } else if (j === 0) {
                    const th = document.createElement("th");
                    th.textContent = "";
                    tr.appendChild(th);
                } else if (i === j) {
                    const th = document.createElement("th");
                    th.className = "black";
                    tr.appendChild(th);
                } else {
                    const td = document.createElement("td");
                    td.textContent = ""; // Hier könnten Spielergebnisse eingetragen werden
                    tr.appendChild(td);
                }
            }
            table.appendChild(tr);
        }
        wrapper.appendChild(table);

        // Ergebnistabelle
        const ergTable = document.createElement("table");
        ergTable.className = "erg";
        const header = document.createElement("tr");
        ["Spieler", "Spiele", "Siege", "Sätze", "Games"].forEach(text => {
            const th = document.createElement("th");
            th.textContent = text;
            header.appendChild(th);
        });
        ergTable.appendChild(header);

        roundRobinData.forEach(row => {
            const tr = document.createElement("tr");
            [row.name, row.spiele, row.siege, row.saetze, row.games].forEach(val => {
                const td = document.createElement("td");
                td.textContent = val;
                tr.appendChild(td);
            });
            ergTable.appendChild(tr);
        });
        wrapper.appendChild(ergTable);

        main.appendChild(wrapper);
    }
}

function addCEvent() {
    const main = document.querySelector("main.cEvent");
    main.style.height = "50%";
    main.style.width = "max(75%, 800px)";
    main.innerHTML = "";

    function createBracket(bracketClass, persons = 2) {
        const div = document.createElement("div");
        div.className = `bracket ${bracketClass}`;
        for (let i = 0; i < persons; i++) {
            const person = document.createElement("div");
            person.className = "person";
            person.innerHTML = "<p></p><p></p>";
            div.appendChild(person);
        }
        return div;
    }

    // Linke Seite (leer)
    const left = document.createElement("div");
    left.className = "left";

    // Mitte
    const center = document.createElement("div");
    center.className = "center column";
    center.style.setProperty("grid-template-rows", "repeat(2, 1fr)");
    ["rC1", "rC2"].forEach(cls => {
        center.appendChild(createBracket(cls));
    });

    // Rechte Seite
    const right = document.createElement("div");
    right.className = "right";
    [
        { style: { "grid-template-rows": "1fr" }, brackets: [ ["fC", 2] ] },
        { style: { "--top": "6.25%" }, brackets: [ ["wC", 1] ] }
    ].forEach(col => {
        const column = document.createElement("div");
        column.className = "column";
        Object.entries(col.style).forEach(([k, v]) => column.style.setProperty(k, v));
        col.brackets.forEach(([cls, persons]) => column.appendChild(createBracket(cls, persons)));
        right.appendChild(column);
    });

    main.appendChild(left);
    main.appendChild(center);
    main.appendChild(right);
}

getDraw("menSingle")
