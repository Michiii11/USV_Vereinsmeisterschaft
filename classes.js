class Match {
    constructor(player1, player2, result1 = "", result2 = "", className = "") {
        this.player1 = player1;
        this.player2 = player2;
        if(result1 === "") result1 = " ";
        this.result1 = result1;
        if(result2 === "") result2 = " ";
        this.result2 = result2;
        this.className = className;
    }
}

class Round {
    constructor(name, matches = []) {
        this.name = name;
        this.matches = matches;
    }
}

class Tournament {
    constructor(name, rounds = []) {
        this.name = name;
        this.rounds = rounds;
    }
}