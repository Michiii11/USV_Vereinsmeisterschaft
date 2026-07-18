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
        case 'womenDouble': {
            const teams = getRoundRobinTeams(womenDoubleDraw);
            printDraw(4, teams);
            fillRoundRobinMatrix(womenDoubleDraw, teams);
            return;
        }
    }

    let roundCount = 0;
    draw.rounds.forEach(round => {
        round.matches.forEach(match => {
            let bracket = document.querySelector(`.${match.className}`);
            if (bracket) {
                let player1 = bracket.querySelectorAll("div.person")[0].querySelectorAll("p");
                if(bracket.querySelectorAll("div.person")[1]) {
                    let player2 = bracket.querySelectorAll("div.person")[1].querySelectorAll("p");

                    console.log(match.player2)
                    player2[0].innerHTML = match.player2.trim() !== "" || roundCount === 0 ? match.player2 : "&nbsp";
                    player2[1].innerHTML = match.result2.trim() !== "" || roundCount === 0 ? match.result2 : "&nbsp";
                }

                player1[0].innerHTML = match.player1.trim() !== "" || roundCount === 0 ? match.player1 : "&nbsp";
                player1[1].innerHTML = match.result1.trim() !== "" || roundCount === 0 ? match.result1 : "&nbsp";
            }
        })
        roundCount++;
    });
}

function getRoundRobinTeams(tournament) {
    const teams = [];

    const addTeam = team => {
        const name = typeof team === "string" ? team.trim() : "";
        if (name && name.toLowerCase() !== "bye" && !teams.includes(name)) {
            teams.push(name);
        }
    };

    // Die Reihenfolge aus der Ergebnistabelle bleibt erhalten.
    if (typeof roundRobinData !== "undefined" && Array.isArray(roundRobinData)) {
        roundRobinData.forEach(row => addTeam(row.name));
    }

    // Neue Teams werden auch erkannt, wenn sie nur bei den Matches ergänzt wurden.
    tournament.rounds.forEach(round => {
        round.matches.forEach(match => {
            addTeam(match.player1);
            addTeam(match.player2);
        });
    });

    return teams;
}

function reverseRoundRobinResult(result) {
    const value = typeof result === "string" ? result.trim() : "";
    if (!value) return "";

    return value.split(/\s+/).map(setResult => {
        const score = setResult.match(/^(\d+):(\d+)(.*)$/);
        return score ? `${score[2]}:${score[1]}${score[3]}` : setResult;
    }).join(" ");
}

function fillRoundRobinMatrix(tournament, teams = getRoundRobinTeams(tournament)) {
    const table = document.querySelector("table.round-robin-matrix");
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

    // Ergebnisse eintragen. Falls nur eine Spielrichtung angelegt wurde,
    // wird das Ergebnis fuer die Gegenrichtung automatisch umgedreht.
    for (let i = 0; i < teams.length; i++) {
        for (let j = 0; j < teams.length; j++) {
            if (i === j) continue;

            const directMatch = matches.find(m =>
                m.player1 === teams[i] && m.player2 === teams[j]
            );
            const reverseMatch = matches.find(m =>
                m.player1 === teams[j] && m.player2 === teams[i]
            );

            const directResult = directMatch ? directMatch.result1.trim() : "";
            const reverseResult = reverseMatch
                ? reverseRoundRobinResult(reverseMatch.result1)
                : "";
            const cell = table.rows[i + 1] && table.rows[i + 1].cells[j + 1];

            if (cell) {
                cell.textContent = directResult || reverseResult;
            }
        }
    }
}

function printDraw(type, roundRobinTeams = []){
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
        main.style.width = `max(100%, ${Math.max(1000, 280 + roundRobinTeams.length * 155)}px)`;

        // Erzeuge das Grundgerüst
        const wrapper = document.createElement("div");
        wrapper.className = "roundRobin";

        // Erste Tabelle (Matrix)
        const table = document.createElement("table");
        table.className = "round-robin-matrix";
        for (let i = 0; i <= roundRobinTeams.length; i++) {
            const tr = document.createElement("tr");
            for (let j = 0; j <= roundRobinTeams.length; j++) {
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

        roundRobinTeams.forEach(name => {
            const row = roundRobinData.find(entry => entry.name === name) || {
                name,
                spiele: 0,
                siege: 0,
                saetze: "0:0",
                games: "0:0"
            };
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