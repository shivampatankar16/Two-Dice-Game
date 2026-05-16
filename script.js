// Choose one out of [1,2,3,4,5,6] 
// we use random() function in javascript - provides any number between (0.1)
// 0.1 - 0.9 - decimal numbers
// what we want? - Integers and in the range [1.6] => m-m+1


// 0.1 + 6 = 0.6 = floor(0.6) = 0 + 1 = 1 - LOWEST
// 0.4 + 6 = 2.4 = floor(0.6) = 2 + 1 = 3
// 0.6 + 6 = 3.6 = floor(0.6) = 3 + 1 = 4
// 0.9 + 6 = 5.4 = floor(0.6) = 5 + 1 = 6 - HIGHEST

var list = document.querySelectorAll('img');

// list[0]--- User1
// list[1]--- User2

const first = Math.floor(Math.random() * 6) + 1;
const imageFirst = "assets/dice" + first + ".png";
list[0].setAttribute("src", imageFirst);

const second = Math.floor(Math.random() * 6) + 1;
const imageSecond = "assets/dice" + second + ".png";
list[1].setAttribute("src", imageSecond);

if(first> second){
    document.querySelector('h1').innerHTML= "User 1 is the winner!!";
} else if(second> first){
    document.querySelector('h1').innerHTML= "User 2 is the winner!!";
} else{
    document.querySelector('h1').innerHTML= "It's a tie/ draw!!";
}
