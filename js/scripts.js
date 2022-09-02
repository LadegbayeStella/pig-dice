// $(document).ready(function () {
//     //     $("#mybtn").submit(function (e) {
//     //         e.preventDefault();

//     //         let diceRandom = math.floor(math.radom() * 6 + 1);
//     //         let location = "img/" + "dice2" + "diceRandom" + ".png";
//     //         let img1 = $("img")[0];
//     //         img1.setAttribute("src", location);

//     // //     })
//     // $("#mybtn").submit(function (e) {
//     //     e.preventDefault();
//     function dicegame() {
//         let diceRandom = Math.floor(Math.random() * 6 + 1);
//         // console.log(diceRandom);
//         // $("#myh1").innerHTML = "<img  src='dice2/" + dicegame + ".png'/>";

//     }

//     let location = "img/" + "dice2" + diceRandom + ".png";
//     let img1 = document.querySelectorAll(" img")[0];
//     img1.setAttribute("src", location);

//     let diceRandom2 = Math.floor(M ath.random() * 6 + 1);
//     let location2 = "img/" + "dice2" + diceRandom2 + ".png";
//     let img2 = document.querySelectorAll("img")[1];
//     img1.setAttribute("src", location2);
// });

const dice = document.getElementById("dice-btn");

function diceGame() {
    //DICE 1
    let randomDice = Math.floor(Math.random() * 6 + 1);
    let diceLocation = "img/" + "dice" + randomDice + ".png";
    let img1 = document.querySelectorAll("img")[0];
    img1.setAttribute("src", diceLocation);

    //DICE 2
    let randomDice2 = Math.floor(Math.random() * 6 + 1);
    let diceLocation2 = "img/" + "dice" + randomDice2 + ".png";
    let img2 = document.querySelectorAll("img")[1];
    img2.setAttribute("src", diceLocation2);

   
	if (randomDice > randomDice2) {
		document.querySelector("h1").innerHTML = " &#127942; Player 1 Win !";
	}
	else if (randomDice < randomDice2) {
		document.querySelector("h1").innerHTML = "Player 2 Win ! &#127942; ";
	}
	else if (randomDice = randomDice2) {
		document.querySelector("h1").innerHTML = "&#127942; Draw!&#127942;";
	}
	else {
		document.querySelector("h1").innerHTML = "Something Error!"
	}
	dice.innerHTML = "Play Again"
}
