var started = false;

if(!started){
let button = document.querySelector(".txt");
button.addEventListener("click", function () {
    this.innerText = "Choose any of These!!";
main();
})
started = true;
}
else if (started){
    button.innerText = "Try Again!";
}



/*
1.Snake
2.water
3.gun*/
//  let click = document.querySelectorAll("button").values;
//  console.log(click);


function main() {


    document.getElementById("myBtn").addEventListener("click", userValueSnake);
    document.getElementById("myBtn1").addEventListener("click", userValueWater);
    document.getElementById("myBtn2").addEventListener("click", userValueGun);


    function userValueSnake() {
        let a = Math.floor(Math.random() * 3);

        if (a == 2) {
            //   document.getElementById("gun1").innerHTML ="Computer selected Gun";
            //   document.getElementById("snake").innerHTML ="You selected Snake";
            document.getElementById("winf").innerHTML = "Computer Wins!!";

        }

        else if (a == 0) {
            //  document.getElementById("snake1").innerHTML  ="Computer selected Snake";
            //  document.getElementById("snake").innerHTML ="You selected Snake";
            document.getElementById("winf").innerHTML = "Draw";
        }
        else if (a == 1) {
            //   document.getElementById("water1").innerHTML ="Computer selected Water";
            //   document.getElementById("snake").innerHTML ="You selected Snake";
            document.getElementById("winf").innerHTML = "You Wins!!!!";
        }

    }
    function userValueWater() {
        let a = Math.floor(Math.random() * 3);
        if (a == 2) {
            //   document.getElementById("gun1").innerHTML ="Computer selected Gun";
            //   document.getElementById("snake").innerHTML ="You selected Water";
            document.getElementById("winf").innerHTML = "Computer Wins!!";

        }

        else if (a == 0) {

            //  document.getElementById("snake1").innerHTML ="Computer selected Snake";
            //  document.getElementById("snake").innerHTML ="You selected Water";
            document.getElementById("winf").innerHTML = "Computer Wins!!";
        }
        else if (a == 1) {
            //    document.getElementById("water1").innerHTML  ="Computer selected Water";
            //    document.getElementById("snake").innerHTML ="You selected Water";
            document.getElementById("winf").innerHTML = "Draw";
        }
    }
    function userValueGun() {
        let a = Math.floor(Math.random() * 3);
        if (a == 2) {
            //   document.getElementById("gun1").innerHTML ="Computer selected Gun";
            //   document.getElementById("snake").innerHTML ="You selected Gun";
            document.getElementById("winf").innerHTML = "Draw";

        }

        else if (a == 0) {
            //  document.getElementById("snake1").innerHTML  ="Computer selected Snake";
            //  document.getElementById("snake").innerHTML ="You selected Gun";
            document.getElementById("winf").innerHTML = "You Win!!";
        }
        else if (a == 1) {
            //   document.getElementById("water1").innerHTML ="Computer selected Water";
            //   document.getElementById("snake").innerHTML ="You selected Gun";
            document.getElementById("winf").innerHTML = "Computer Wins!!";
        }

    }
    count++;
}
