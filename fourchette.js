var randomNumber = Math.random();
var numberEnlarge = randomNumber * 500;
var numberRound = Math.round(numberEnlarge);
var tries = 0;





debugger;
console.log(numberRound);
while (numberRound !== guess) {
    
    var guess = prompt("Devine le nombre entre 0 et 499. Il te reste " + (10 - tries) + " coups");
    var guess = parseInt(guess);
    tries++;

   if (tries <= 10) {

            if (guess > numberRound) {
            alert("C'est un nombre plus petit")
        } else if (guess === numberRound) {
            alert("Bravo, Tu as gagné en " + tries + " coups")
        } else if (tries === 9) {
            alert("Dernière chance!") 
        }
        else {
            alert("C'est un nombre plus grand") 
        }
    } else {
        alert("Perdu, tu as eu tes 10 essais");
        break;
    }

}