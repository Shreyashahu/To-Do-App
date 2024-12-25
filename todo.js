let btn = document.querySelector("button");
let int = document.querySelector("input");
let ul = document.querySelector("ul");

btn.addEventListener("click", function(){
    let item = document.createElement("li");
    item.innerText = int.value;
    ul.appendChild(item);
    int.value = "";
});
