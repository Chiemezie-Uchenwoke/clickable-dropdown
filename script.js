alert("Hello World!");

let clickEffect = document.querySelector("button");

clickEffect.addEventListener("click", dropReveal);

function dropReveal(){
    var chooseElement = document.querySelector(".drop-content");
    chooseElement.classList.toggle("show-content");
}