console.log("Hello World")

const button = document.getElementById("request")

button.addEventListener('click', () => {
    console.log("Clicked");
    target_div = document.getElementById("target")

    fetch("fetch_data")
        .then(response => response.json())
        .then(data => {
            console.log(data)
            target.innerText = data
        })
        .catch(error => console.error(error))
    //target_div.innerText = "Hello World"
})