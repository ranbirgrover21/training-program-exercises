console.log("Exercise 2")

const main = document.querySelector("#display-box")

const button1 = document.querySelector(".button-1");
button1.addEventListener('click', () => {
    const text1 = document.getElementById("text1").innerHTML;
    main.innerHTML = text1;
  });

const button2 = document.querySelector(".button-2");
button2.addEventListener('click', () => {
    const text2 = document.getElementById("text2").innerHTML;
    main.innerHTML = text2;
})

const button3 = document.querySelector(".button-3");
button3.addEventListener('click', () => {
    const text3 = document.getElementById("text3").innerHTML;
    main.innerHTML = text3;
})