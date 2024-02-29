// Players name
var player1 = "Player 1";
var player2 = "Player 2";

// Function to change the player name 
function editNames() {
    player1 = prompt("Change Player 1 name");
    player2 = prompt("Change player 2 name");
    
    if(player1.length<3 || player2.length<3) {
        alert('Please enter a valid name 😏');
        return;
    }
    document.querySelector("#p1name p").innerHTML = player1;
    document.querySelector("#p2name p").innerHTML = player2;
}


// Rolling the dice
function rollTheDice() {
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomDiceImg = "dice" + randomNumber1 + ".png";
    var randomImgSrc = "images/" + randomDiceImg;
    var img1 = document.querySelectorAll("img")[0];
    img1.setAttribute("src", randomImgSrc);

    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    var randomImgSrc2 = "./images/dice" + randomNumber2 + ".png";
    document.querySelectorAll("img")[1].setAttribute("src", randomImgSrc2);

    //Player winning annoucement
    if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = (player1 + " Wins🎉");
    } else if (randomNumber2 > randomNumber1) {
        document.querySelector("h1").innerHTML = (player2 +" Wins🎉");
    } else {
        document.querySelector("h1").innerHTML = "☠️ Draw ☠️";
    }
}

