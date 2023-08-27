// selecting the buttons
let dice = document.querySelector(".dice");
let p = document.querySelector("q");
let num = document.querySelector(".ad-num")
// initailize
fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => {
        num.innerHTML = data.slip.id;
        p.innerHTML = data.slip.advice ;
    })
    .catch((error) => {
        console.error("Error fetching advice:", error);
    });
// real work
dice.onclick = function(){
    fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => {
        num.innerHTML = data.slip.id;
        p.innerHTML = data.slip.advice ;
    })
    .catch((error) => {
        console.error("Error fetching advice:", error);
    });
}
