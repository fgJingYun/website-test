// image that changes on click
const image = document.querySelector("img")
let path_1 = "https://web.dev/static/images/blog-header_480.png"
let path_2 = "https://web.dev/static/learn/javascript/card_480.png"

image.addEventListener("click", () => {const mysrc = image.getAttribute("src");  // click: meaning buttons, meaning interacting
    if (mysrc === path_1){
        image.setAttribute("src", path_2);

    }
    else{
        image.setAttribute("src", path_1)
        }
})

// custom username
let title = document.querySelector("h1")
let button = document.querySelector("button")

function setNewTitle(){
    const custom_title = prompt("change the title:");
    localStorage.setItem("title", custom_title);

    title.textContent = `${custom_title}`;
}

button.addEventListener("click", () => {setNewTitle();});

if (!localStorage.getItem("title")){
    setNewTitle();
}
else {
    const storedtitle = localStorage.getItem("title");
    title.textContent = `${storedtitle}!`
}
