/*  ----------------
click section
-------------*/

function player1Handler() {

    const playerDetail = document.getElementsByTagName("li");
    if (playerDetail.length > 4) {
        alert("you have reached your max limt");
    }

    else {

        const name = document.getElementById('player-1-name').innerText;
        // console.log(name);
        const mainDiv = document.getElementById("select-id-players");
        const playerNameli = document.createElement("li");

        playerNameli.innerHTML = `<p>${name}</p>`;
        mainDiv.appendChild(playerNameli);
        document.getElementById("btn-1").disabled = true;
    }
}
function player2Handler() {

    const playerDetail = document.getElementsByTagName("li");
    if (playerDetail.length > 4) {
        alert("you have reached your max limt");
    }

    else {

        const name = document.getElementById('player-2-name').innerText;
        // console.log(name);
        const mainDiv = document.getElementById("select-id-players");
        const playerNameli = document.createElement("li");

        playerNameli.innerHTML = `<p>${name}</p>`;
        mainDiv.appendChild(playerNameli);
        document.getElementById("btn-2").disabled = true;
    }
}
function player3Handler() {

    const playerDetail = document.getElementsByTagName("li");
    if (playerDetail.length > 4) {
        alert("you have reached your max limt");
    }

    else {

        const name = document.getElementById('player-3-name').innerText;
        // console.log(name);
        const mainDiv = document.getElementById("select-id-players");
        const playerNameli = document.createElement("li");

        playerNameli.innerHTML = `<p>${name}</p>`;
        mainDiv.appendChild(playerNameli);
        document.getElementById("btn-3").disabled = true;
    }
}
function player4Handler() {

    const playerDetail = document.getElementsByTagName("li");
    if (playerDetail.length > 4) {
        alert("you have reached your max limt");
    }

    else {

        const name = document.getElementById('player-4-name').innerText;
        // console.log(name);
        const mainDiv = document.getElementById("select-id-players");
        const playerNameli = document.createElement("li");

        playerNameli.innerHTML = `<p>${name}</p>`;
        mainDiv.appendChild(playerNameli);
        document.getElementById("btn-4").disabled = true;
    }
}
function player5Handler() {

    const playerDetail = document.getElementsByTagName("li");
    if (playerDetail.length > 4) {
        alert("you have reached your max limt");
    }

    else {

        const name = document.getElementById('player-5-name').innerText;
        // console.log(name);
        const mainDiv = document.getElementById("select-id-players");
        const playerNameli = document.createElement("li");

        playerNameli.innerHTML = `<p>${name}</p>`;
        mainDiv.appendChild(playerNameli);
        document.getElementById("btn-5").disabled = true;

    }
}
function player6Handler() {

    const playerDetail = document.getElementsByTagName("li");
    if (playerDetail.length > 4) {
        alert("you have reached your max limt");
    }

    else {

        const name = document.getElementById('player-6-name').innerText;
        // console.log(name);
        const mainDiv = document.getElementById("select-id-players");
        const playerNameli = document.createElement("li");

        playerNameli.innerHTML = `<p>${name}</p>`;
        mainDiv.appendChild(playerNameli);
        document.getElementById("btn-6").disabled = true;

    }
}
function player7Handler() {

    const playerDetail = document.getElementsByTagName("li");
    if (playerDetail.length > 4) {
        alert("you have reached your max limt");
    }

    else {

        const name = document.getElementById('player-7-name').innerText;
        // console.log(name);
        const mainDiv = document.getElementById("select-id-players");
        const playerNameli = document.createElement("li");

        playerNameli.innerHTML = `<p>${name}</p>`;
        mainDiv.appendChild(playerNameli);
        document.getElementById("btn-7").disabled = true;
    }
}
function player8Handler() {
    const playerDetail = document.getElementsByTagName("li");
    if (playerDetail.length > 4) {
        alert("you have reached your max limt");
    }

    else {

        const name = document.getElementById('player-8-name').innerText;
        // console.log(name);
        const mainDiv = document.getElementById("select-id-players");
        const playerNameli = document.createElement("li");

        playerNameli.innerHTML = `<p>${name}</p>`;
        mainDiv.appendChild(playerNameli);
        document.getElementById("btn-8").disabled = true;
    }
}
function player9Handler() {

    const playerDetail = document.getElementsByTagName("li");
    if (playerDetail.length > 4) {
        alert("you have reached your max limt");
    }

    else {

        const name = document.getElementById('player-9-name').innerText;
        // console.log(name);
        const mainDiv = document.getElementById("select-id-players");
        const playerNameli = document.createElement("li");

        playerNameli.innerHTML = `<p>${name}</p>`;
        mainDiv.appendChild(playerNameli);
        document.getElementById("btn-9").disabled = true;

    }
}


// player budget



function perPlayerBudget() {


    const budgetAmount = parseInt(document.getElementById('budget').value);
    // console.log(budgetAmount);
    const playerDetail = document.getElementsByTagName("li");

    const totalExpense = budgetAmount * playerDetail.length;

    document.getElementById('player-expense').innerText = totalExpense;

}

function calculateTotal() {

    const managerAmount = parseInt(document.getElementById('Manager').value);
    const coachAmount = parseInt(document.getElementById('coach').value);
    const playerExpenses = parseInt(document.getElementById('player-expense').innerText);



    const total = totalAdder(managerAmount, coachAmount, playerExpenses);


    document.getElementById('total-calculation').innerText = total;


}





 /*--------------------
  EXTRA FUNCTION ADDED ↓↓↓↓↓↓↓↓↓↓ 
  --------------------*/

function totalAdder(num1, num2, num3) {

    total = num1 + num2 + num3;
    return total;

}







































