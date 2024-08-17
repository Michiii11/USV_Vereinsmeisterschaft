function getDraw(type, elem) {
    if(elem){
        document.querySelector("p.active").classList.remove("active");
        elem.classList.add("active");
    }

    let draw

    if(document.querySelector("main").classList.contains("big")){
        document.querySelector("main").classList.remove("big")
    }

    document.querySelector("main").style.height = "100%"
    document.querySelector("main").style.width = "max(100%, 1000px)"

    switch (type) {
        case 'menSingle': draw = menSingleDraw; printDraw(16); break;
        case 'menDouble': draw = menDoubleDraw; printDraw(16);
            document.querySelector("main").style.width = "max(100%, 1750px)"
            break;
        case 'womenSingle': draw = womenSingleDraw; printDraw(8); break;
        case 'womenDouble': printDraw(4); womenDoubleDraw(); return;
    }


    draw.forEach(round => {
        round.forEach(match => {
            let bracket = document.querySelector(`.${match.className}`);
            if (bracket) {
                let player1 = bracket.querySelectorAll("div.person")[0].querySelectorAll("p");
                if(bracket.querySelectorAll("div.person")[1]) {
                    let player2 = bracket.querySelectorAll("div.person")[1].querySelectorAll("p");
                    player2[0].innerHTML = match.player2
                    if(match.result2){
                        player2[1].innerHTML = match.result2
                    }
                }

                player1[0].innerHTML = match.player1

                if(match.result1){
                    player1[1].innerHTML = match.result1
                }
            }
        });
    });
}

function womenDoubleDraw(){
    let nameFields =  document.querySelectorAll("table th:not(.black)")
    for (let i = 0; i < nameFields.length; i++) {
        nameFields[i].innerHTML = womenDoublePlayer[i]
    }

    let resultFields =  document.querySelectorAll("table td")
    for (let i = 0; i < resultFields.length; i++) {
        resultFields[i].innerHTML = womenDoubleResults[i]
    }
}
function printDraw(type){
    if(type === 16){
        document.querySelector("main").innerHTML = `
        <div class="left">
            <div class="column" style="--top: 6.25%;">
                <div class="bracket wB">
                    <div class="person"><p></p><p></p></div>
                </div>
            </div>

            <div class="column" style="grid-template-rows: 1fr; --top: 6.25%;">
                <div class="bracket fB">
                    <div class="person"><p></p><p></p></div>
                    <div class="person"><p></p><p></p></div>
                </div>
            </div>

            <div class="column" style="grid-template-rows: 1fr 1fr; --top: 6.25%;">
                <div class="bracket sB1">
                    <div class="person"><p></p><p></p></div>
                    <div class="person"><p></p><p></p></div>
                </div>
                <div class="bracket sB2">
                    <div class="person"><p></p><p></p></div>
                    <div class="person"><p></p><p></p></div>
                </div>
            </div>

            <div class="column" style="grid-template-rows: repeat(4, 1fr); --top: 6.25%;">
                <div class="bracket qB1">
                    <div class="person"><p></p><p></p></div>
                    <div class="person"><p></p><p></p></div>
                </div>
                <div class="bracket qB2">
                    <div class="person"><p></p><p></p></div>
                    <div class="person"><p></p><p></p></div>
                </div>
                <div class="bracket qB3">
                    <div class="person"><p></p><p></p></div>
                    <div class="person"><p></p><p></p></div>
                </div>
                <div class="bracket qB4">
                    <div class="person"><p></p><p></p></div>
                    <div class="person"><p></p><p></p></div>
                </div>
            </div>

            <div class="column" style="grid-template-rows: 1fr 1fr 1fr 1fr;">
                <div class="bracket r2B1">
                    <div class="person"><p></p><p></p></div>
                    <div class="person"><p></p><p></p></div>
                </div>
                <div class="bracket r2B2">
                    <div class="person"><p></p><p></p></div>
                    <div class="person"><p></p><p></p></div>
                </div>
                <div class="bracket r2B3">
                    <div class="person"><p></p><p></p></div>
                    <div class="person"><p></p><p></p></div>
                </div>
                <div class="bracket r2B4">
                    <div class="person"><p></p><p></p></div>
                    <div class="person"><p></p><p></p></div>
                </div>
            </div>
        </div>
        <div class="center column">
            <div class="bracket r1">
                <div class="person"><p></p><p></p></div>
                <div class="person"><p></p><p></p></div>
            </div>
            <div class="bracket r2">
                <div class="person"><p></p><p></p></div>
                <div class="person"><p></p><p></p></div>
            </div>
            <div class="bracket r3">
                <div class="person"><p></p><p></p></div>
                <div class="person"><p></p><p></p></div>
            </div>
            <div class="bracket r4">
                <div class="person"><p></p><p></p></div>
                <div class="person"><p></p><p></p></div>
            </div>
            <div class="bracket r5">
                <div class="person"><p></p><p></p></div>
                <div class="person"><p></p><p></p></div>
            </div>
            <div class="bracket r6">
                <div class="person"><p></p><p></p></div>
                <div class="person"><p></p><p></p></div>
            </div>
            <div class="bracket r7">
                <div class="person"><p></p><p></p></div>
                <div class="person"><p></p><p></p></div>
            </div>
            <div class="bracket r8">
                <div class="person"><p></p><p></p></div>
                <div class="person"><p></p><p></p></div>
            </div>
        </div>
        <div class="right">
            <div class="column" style="grid-template-rows: 1fr 1fr 1fr 1fr;">
                <div class="bracket qA1">
                    <div class="person"><p></p><p></p></div>
                    <div class="person"><p></p><p></p></div>
                </div>
                <div class="bracket qA2">
                    <div class="person"><p></p><p></p></div>
                    <div class="person"><p></p><p></p></div>
                </div>
                <div class="bracket qA3">
                    <div class="person"><p></p><p></p></div>
                    <div class="person"><p></p><p></p></div>
                </div>
                <div class="bracket qA4">
                    <div class="person"><p></p><p></p></div>
                    <div class="person"><p></p><p></p></div>
                </div>
            </div>

            <div class="column" style="grid-template-rows: 1fr 1fr;">
                <div class="bracket sA1">
                    <div class="person"><p></p><p></p></div>
                    <div class="person"><p></p><p></p></div>
                </div>
                <div class="bracket sA2">
                    <div class="person"><p></p><p></p></div>
                    <div class="person"><p></p><p></p></div>
                </div>
            </div>

            <div class="column" style="grid-template-rows: 1fr;">
                <div class="bracket fA">
                    <div class="person"><p></p><p></p></div>
                    <div class="person"><p></p><p></p></div>
                </div>
            </div>

            <div class="column" style="--top: 6.25%;">
                <div class="bracket wA">
                    <div class="person"><p></p><p></p></div>
                </div>
            </div>
        </div>
        `
    }

    if(type === 8){
        document.querySelector("main").style.height = "50%"
        document.querySelector("main").style.width = "max(75%, 800px)"

        document.querySelector("main").innerHTML = `
        <div class="left">
            <div class="column" style="--top: 12.5%;">
                <div class="bracket wB">
                    <div class="person"><p></p><p></p></div>
                </div>
            </div>

            <div class="column" style="grid-template-rows: 1fr; --top: 12.55%;">
                <div class="bracket fB">
                    <div class="person"><p></p><p></p></div>
                    <div class="person"><p></p><p></p></div>
                </div>
            </div>

            <div class="column" style="grid-template-rows: 1fr 1fr; --top: 12.50%;">
                <div class="bracket sB1">
                    <div class="person"><p></p><p></p></div>
                    <div class="person"><p></p><p></p></div>
                </div>
                <div class="bracket sB2">
                    <div class="person"><p></p><p></p></div>
                    <div class="person"><p></p><p></p></div>
                </div>
            </div>

            <div class="column" style="grid-template-rows: repeat(2, 1fr);">
                <div class="bracket r2B1">
                    <div class="person"><p></p><p></p></div>
                    <div class="person"><p></p><p></p></div>
                </div>
                <div class="bracket r2B2">
                    <div class="person"><p></p><p></p></div>
                    <div class="person"><p></p><p></p></div>
                </div>
            </div>
        </div>
        <div class="center column" style="grid-template-rows: repeat(4, 1fr);">
            <div class="bracket r1">
                <div class="person"><p></p><p></p></div>
                <div class="person"><p></p><p></p></div>
            </div>
            <div class="bracket r2">
                <div class="person"><p></p><p></p></div>
                <div class="person"><p></p><p></p></div>
            </div>
            <div class="bracket r3">
                <div class="person"><p></p><p></p></div>
                <div class="person"><p></p><p></p></div>
            </div>
            <div class="bracket r4">
                <div class="person"><p></p><p></p></div>
                <div class="person"><p></p><p></p></div>
            </div>
        </div>
        <div class="right">
            <div class="column" style="grid-template-rows: 1fr 1fr;">
                <div class="bracket sA1">
                    <div class="person"><p></p><p></p></div>
                    <div class="person"><p></p><p></p></div>
                </div>
                <div class="bracket sA2">
                    <div class="person"><p></p><p></p></div>
                    <div class="person"><p></p><p></p></div>
                </div>
            </div>

            <div class="column" style="grid-template-rows: 1fr;">
                <div class="bracket fA">
                    <div class="person"><p></p><p></p></div>
                    <div class="person"><p></p><p></p></div>
                </div>
            </div>

            <div class="column" style="--top: 6.25%;">
                <div class="bracket wA">
                    <div class="person"><p></p><p></p></div>
                </div>
            </div>
        </div>
        `
    }

    if(type === 4){
        document.querySelector("main").innerHTML = `
        <table>
            <tr>
                <th class="black"></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
            </tr>

            <tr>
                <th></th>
                <th class="black"></th>
                <td></td>
                <td></td>
                <td></td>
            </tr>

            <tr>
                <th></th>
                <td></td>
                <th class="black"></th>
                <td></td>
                <td></td>
            </tr>

            <tr>
                <th></th>
                <td></td>
                <td></td>
                <th class="black"></th>
                <td></td>
            </tr>
            
            <tr>
                <th></th>
                <td></td>
                <td></td>
                <td></td>
                <th class="black"></th>
            </tr>
        </table>
        `
    }
}


getDraw("menSingle")
