console.log("Exercise 2")

const main = document.querySelector("#display-box")

function insertText(element) {
    main.innerHTML = document.querySelector(element).innerHTML
}