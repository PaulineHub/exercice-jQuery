/* 
quand on clique sur le bouton, la 1ere boite apparait et le bouton disparait
quand on clique sur une boite, la suivante apparait jusqu'a ce que les 3 boites soient visibles
on clique sur la derniere boite, une image s'ajoute au background
*/

/* JAVASCRIPT

const bouton = document.querySelector(".button");
const case1 = document.querySelector(".case--couleur1");
const case2 = document.querySelector(".case--couleur2");
const case3 = document.querySelector(".case--couleur3");

bouton.addEventListener("click", function(){
    case1.classList.add("show");
    bouton.classList.add("hide");
});

case1.addEventListener("click", function(){
    case2.classList.add("show");
});

case2.addEventListener("click", function(){
    case3.classList.add("show");
});

case3.addEventListener("click", function(){
    const background = document.querySelector(".background");
    background.classList.add("background--image");
});

*/

//jQUERY

$(".button").on("click", function (){
    $(".case--couleur1").addClass("show");
    $(".button").addClass("hide");
})

$(".case--couleur1").on("click", function (){
    $(".case--couleur2").addClass("show");
})

$(".case--couleur2").on("click", function (){
    $(".case--couleur3").addClass("show");
})

$(".case--couleur3").on("click", function (){
    $(".background").addClass("background--image");
})