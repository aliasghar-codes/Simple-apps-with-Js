let input = document.querySelector("#input");
let ul = document.getElementById("list");
let button = document.querySelector("button");

function addtask(){
    if(input.value === ''){
        alert("You must write something! ")
    }
    else{
        let li = document.createElement("li");
        li.innerText = input.value;
        ul.appendChild(li);
        let span = document.createElement("span");
        span.innerText = "\u00d7"
        li.appendChild(span);
    }
    input.value = '';
    localStorage.setItem("data", ul.innerHTML)
}

input.addEventListener("keydown", (e)=>{
    if(e.keyCode == 13){
        addtask();
    }
})

button.addEventListener("click", ()=>{
    addtask();
})

ul.addEventListener("click", (e)=>{
    if(e.target.tagName == "LI"){
        e.target.classList.toggle("checked");
    }else if(e.target.tagName == "SPAN"){
        e.target.parentElement.remove();
    }
})

ul.innerHTML = localStorage.getItem("data");