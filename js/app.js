'use strict';




setTimeout(function askName() {
    var name = prompt('Please enter your name');
    var wel = name.toUpperCase();
    var askName = document.getElementById('askName')

    if (wel.length > 0 & wel != "null") {
        var message = ' Welcome ' + wel + '!';
        askName.innerText = message;
    } else if (name != "null") {
        var message = ' Fine don\'t tell me';
        askName.innerText = message;
    } else {
        var message = ' Hitting cancel I see.';
        askName.innerText = message;
    }

}, 1000)
setTimeout(function questionOne() {
    var que = prompt('Was I born in Johnstown, Pa? Yes or No (y/n)');
    var queProper = que.toLowerCase();
    var questionOne = document.getElementById('questionOne');
    while (queProper !== "yes" && queProper !== "no" && queProper !== "y" && queProper !== "n" && que !== null) {
        que = prompt("Please enter Yes or No (y/n)");
        queProper = que.toLowerCase();
    }

    if (queProper == "yes" || queProper == "y") {
        var message = "Correct I was Born there"
        // console.log('Question one correct!');
        var pop = alert('Correct')
        questionOne.innerText = message;
    } else if (queProper == "no" || queProper == "n") {
        var message = "Sorry that is incorrect.";
        questionOne.innerText = message;
    }
}, 1000)
setTimeout(function questionTwo() {
    var que = prompt('Was i Raised in Johnstown, PA? Yes or No (y/n)');
    var queProper = que.toLowerCase();
    var questionTwo = document.getElementById('questionTwo');
    while (queProper !== "yes" && queProper !== "no" && queProper !== "y" && queProper !== "n" && que !== null) {
        que = prompt("Please enter Yes or No (y/n)");
        queProper = que.toLowerCase();
    }

    if (queProper == "yes" || queProper == "y") {
        var message = "Sorry that is incorrect"

        questionTwo.innerText = message;
    } else if (queProper == "no" || queProper == "n") {
        var message = "Correct, I was raised in Cleveland Ohio.";
        // console.log('Question two correct!');
        var pop = alert('Correct!');
        questionTwo.innerText = message;
    }



}, 1000
);
setTimeout(function questionThree() {
    var que = prompt('Did I study Criminal Justice at Cleveland State? Yes or No (y/n)');
    var queProper = que.toLowerCase();
    var questionThree = document.getElementById('questionThree');
    while (queProper !== "yes" && queProper !== "no" && queProper !== "y" && queProper !== "n" && que !== null) {
        que = prompt("Please enter Yes or No (y/n)");
        queProper = que.toLowerCase();
    }

    if (queProper == "yes" || queProper == "y") {
        var message = "Sorry that is incorrect"

        questionThree.innerText = message;
    } else if (queProper == "no" || queProper == "n") {
        var message = "Correct, I studied Computer Science at Cleveland State.";
        // console.log('Question three correct!');
        var pop = alert('Correct!');
        questionThree.innerText = message;
    }



}, 1000
);
setTimeout(function questionFour() {
    var que = prompt('Do I work IT in the US ARMY? Yes or No (y/n)');
    var queProper = que.toLowerCase();
    var questionFour = document.getElementById('questionFour');
    while (queProper !== "yes" && queProper !== "no" && queProper !== "y" && queProper !== "n" && que !== null) {
        que = prompt("Please enter Yes or No (y/n)");
        queProper = que.toLowerCase();
    }

    if (queProper == "yes" || queProper == "y") {
        var message = "Yes, I certainly do";
        // console.log('Question Four correct!');
        var pop = alert('Correct!');
        questionFour.innerText = message;
    } else if (queProper == "no" || queProper == "n") {
        var message = "Sorry for both of us that is what i do";
        questionFour.innerText = message;
    }



}, 1000
);

setTimeout(function questionFive() {
    var que = prompt('Am I CCNA cerified? Yes or No (y/n)');
    var queProper = que.toLowerCase();
    var questionFive = document.getElementById('questionFive');
    while (queProper !== "yes" && queProper !== "no" && queProper !== "y" && queProper !== "n" && que !== null) {
        que = prompt("Please enter Yes or No (y/n)");
        queProper = que.toLowerCase();
    }

    if (queProper == "yes" || queProper == "y") {
        var message = "Sorry that is incorrect, I am Sec+ certified though";

        questionFive.innerText = message;
    } else if (queProper == "no" || queProper == "n") {
        var message = "Correct, I am Sec+ certified.";
        // console.log('Question Five correct!');
        var pop = alert('Correct!');
        questionFive.innerText = message;
    }
}, 1000);


// LAB 2 No FuNCtIOn zONe

//  question 6
// 4 attempts
// exit loop if answered correctly
// continue 4 iterations until limitis reached


var numGuess = prompt('What place in my top ten movies does the movie "Wanted" hold? please enter a number 1-10');
var i = 0;


while (isNaN(numGuess) && i < 3 || numGuess < 1 && i < 3 || numGuess > 10 && i < 3) {
    numGuess = prompt('Please Enter a number 1-10');
    console.log(i);
    i++;
}
if (i == 3) {
    var attempt = alert('Too many attempts')
}
if (numGuess == 4) {
    console.log(`Correct`)
    var queSixAlert = alert(`Correct`)
} else if (i !== 3) {
    var queSixAlert = alert(`Incorrect`)

}

// Question 7

var movies = ['memento', 'inception', 'mandella effect', 'the double', 'sinister', 'hereditary', 'once upon a time in hollywood'
    , 'pulp fiction', 'the professional'];

var movGuess = prompt('What is the title of one of my top ten favorite movies to exculde the one included in question six');




var x;
var guess = false;

for (x = 0; x < movies.length; x++) {

    if (movGuess.toLowerCase() === movies[x]) {
        console.log(`correct`);
        var pop = alert(`Correct`);
        x = movies.length;
        guess = true;
    }
    console.log(x);
    console.log(guess);
}

 var count = 0;


while (guess === false && count < 5) 
{

    var movGuess = prompt('You may try again a favorite movie of mine?');
    for (var i = 0; i < movies.length; i++) {

        if (movGuess.toLowerCase() == movies[i]) {
            console.log(correct);
            var pop = alert('Correct')
            i = movies.length;
            guess = true;
        }
    }
    count++;
}

var message = ' ';
var space = ' '
for( var i = 0; i < movies.length; i++){
   
    message = message + space + movies[i];
    console.log(i);
}

var opt = alert('Correct options were' + message);


