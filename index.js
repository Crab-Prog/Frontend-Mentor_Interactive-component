btn1.addEventListener("click", function onClick(){
    btn1.style.backgroundColor = 'var(--paragraph-color)';
    btn1.style.color = 'var(--white)';
    btn1.style.display = "block";
    btn2.style.display = "hidden";
    btn3.style.display = "hidden";
    btn4.style.display = "hidden";
    btn5.style.display = "hidden";
    const selectNumbers = document.querySelector(".selectNumbers");
    selectNumbers.innerHTML = `You selected ${btn1.value} out of 5`;
})
const btn2 = document.querySelector("#btn2");
btn2.addEventListener("click", function onClick(){
    btn2.style.backgroundColor = 'var(--paragraph-color)';
    btn2.style.color = 'var(--white)';
    btn1.style.display = "hidden";
    btn2.style.display = "block";
    btn3.style.display = "hidden";
    btn4.style.display = "hidden";
    btn5.style.display = "hidden";
    const selectNumbers = document.querySelector(".selectNumbers");
    selectNumbers.innerHTML = `You selected ${btn2.value} out of 5`;
})
const btn3 = document.querySelector("#btn3");
btn3.addEventListener("click", function onClick(){
    btn3.style.backgroundColor = 'var(--paragraph-color)';
    btn3.style.color = 'var(--white)';
    btn1.style.display = "hidden";
    btn2.style.display = "hidden";
    btn3.style.display = "block";
    btn4.style.display = "hidden";
    btn5.style.display = "hidden";
    const selectNumbers = document.querySelector(".selectNumbers");
    selectNumbers.innerHTML = `You selected ${btn3.value} out of 5`;
})
const btn4 = document.querySelector("#btn4");
btn4.addEventListener("click", function onClick(){
    btn4.style.backgroundColor = 'var(--paragraph-color)';
    btn4.style.color = 'var(--white)';
    btn1.style.display = "hidden";
    btn2.style.display = "hidden";
    btn3.style.display = "hidden";
    btn4.style.display = "block";
    btn5.style.display = "hidden";
    const selectNumbers = document.querySelector(".selectNumbers");
    selectNumbers.innerHTML = `You selected ${btn4.value} out of 5`;
})
const btn5 = document.querySelector("#btn5");
btn5.addEventListener("click", function onClick(){
    btn5.style.backgroundColor = 'var(--paragraph-color)';
    btn5.style.color = 'var(--white)';
    btn1.style.display = "hidden";
    btn2.style.display = "hidden";
    btn3.style.display = "hidden";
    btn4.style.display = "hidden";
    btn5.style.display = "block";
    const selectNumbers = document.querySelector(".selectNumbers");
    selectNumbers.innerHTML = `You selected ${btn5.value} out of 5`;
})

const container = document.querySelector(".container");
const thankCard = document.querySelector(".thank-card");
const button = document.querySelector(".button");
button.addEventListener("click", function onClick(){
    container.style.display = "none";
    thankCard.style.display = "flex";
})
