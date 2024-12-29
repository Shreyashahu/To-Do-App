let btn = document.querySelector("button");
let int = document.querySelector("input");
let ul = document.querySelector("ul");

btn.addEventListener("click", function(){
    let item = document.createElement("li");
    item.innerText = int.value;
    
    let delBtn = document.createElement("button");
    delBtn.innerText = "delete";
    delBtn.classList.add("delete");
    li.appendChild(delBtn);
    
    ul.appendChild(item);
    int.value = "";
});

ul.addEventListener("click", function(event){
    if(event.target.nodeName == "BUTTON"){
        let item = event.target.parentElement;
        item.remove();
    }     
});
