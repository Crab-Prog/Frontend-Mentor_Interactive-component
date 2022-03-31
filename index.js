const btn1 = document.querySelector("#btn1");
btn1 = addEventListener("click", function onClick(){
    btn1.style.backgroundColor = 'hsl(25, 97%, 53%)';
    btn1.style.color = 'var(--white)';
    btn1.style.display = "block";
    btn2.style.display = "none";
    btn3.style.display = "none";
    btn4.style.display = "none";
    btn5.style.display = "none";
})
const btn2 = document.querySelector("#btn2");
btn2 = addEventListener("click", function onClick(){
    btn2.style.backgroundColor = 'hsl(25, 97%, 53%)';
    btn2.style.color = 'var(--white)';
    btn1.style.display = "none";
    btn2.style.display = "block";
    btn3.style.display = "none";
    btn4.style.display = "none";
    btn5.style.display = "none";
})
const btn3 = document.querySelector("#btn3");
btn3 = addEventListener("click", function onClick(){
    btn3.style.backgroundColor = 'hsl(25, 97%, 53%)';
    btn3.style.color = 'var(--white)';
    btn1.style.display = "none";
    btn2.style.display = "none";
    btn3.style.display = "block";
    btn4.style.display = "none";
    btn5.style.display = "none";
})
const btn4 = document.querySelector("#btn4");
btn4 = addEventListener("click", function onClick(){
    btn4.style.backgroundColor = 'hsl(25, 97%, 53%)';
    btn4.style.color = 'var(--white)';
    btn1.style.display = "none";
    btn2.style.display = "none";
    btn3.style.display = "none";
    btn4.style.display = "block";
    btn5.style.display = "none";
})
const btn5 = document.querySelector("#btn5");
btn5 = addEventListener("click", function onClick(){
    btn5.style.backgroundColor = 'hsl(25, 97%, 53%)';
    btn5.style.color = 'var(--white)';
    btn1.style.display = "none";
    btn2.style.display = "none";
    btn3.style.display = "none";
    btn4.style.display = "none";
    btn5.style.display = "block";
})
const container = document.querySelector(".container");
const thankCard = document.querySelector(".thankCard");
const button = document.querySelector(".button");
button = addEventListener("click", function onClick(){
    container.style.display = "none";
    thankCard.style.display = "block";


})