document.getElementsByTagName("button")[0].addEventListener("click",function(){
    var p1 = Math.floor(Math.random() * 6) + 1;
    var p2 = Math.floor(Math.random() * 6) + 1;
    console.log(p1 + " " + p2);
    var img1 = "./images/dice" + p1 + ".png";
    var img2 = "./images/dice" + p2 + ".png";
    function anim(){
        document.getElementById("img1").style.transform = "rotateY(180deg)";
        document.getElementById("img1").style.transition = "all 1s";
        document.getElementById("img2").style.transform = "rotateY(180deg)";
        document.getElementById("img2").style.transition = "all 1s";
        document.getElementById("img1").src = img1;
        document.getElementById("img2").src = img2;
    }
    anim();
    if (p1 === p2) {
        document.querySelector(".container h1").textContent = "🚩 Match is draw 🚩";
    } else if (p1 > p2) {
        document.querySelector(".container h1").textContent = "🚩 Player 1 is winner!";
    } else {
        document.querySelector(".container h1").textContent = "Player 2 is winner! 🚩";
    }
})