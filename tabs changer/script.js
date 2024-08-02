let tabs = document.querySelectorAll(".container h3");
let divs = document.querySelectorAll('.card');

tabs.forEach((tab, index)=>{
    tab.addEventListener("click", ()=>{
        divs.forEach((div)=>{
            div.classList.remove("active");
        })
        tabs.forEach((tab)=>{
            tab.classList.remove("active");
        })
        tabs[index].classList.add("active");
        divs[index].classList.add("active");
    })
})

// *************************************************

let first = document.getElementById("ht");
let second = document.getElementById("cs");
let third = document.getElementById("js");
let headings = Array.from(document.getElementsByClassName("headings"));

headings[0].style.color = "orange";

headings.forEach((item, idx)=>{
    item.addEventListener("click",()=>{
        if(idx == 1){
            second.style.transform = 'translateX(0%)';
            first.style.transform = 'translateX(120%)';
            third.style.transform = 'translateX(120%)';
            headings[1].style.color = "orange";
            headings[0].style.color = "black";
            headings[2].style.color = "black";
        } else if(idx == 2){
            third.style.transform = 'translateX(0%)';
            second.style.transform = 'translateX(120%)';
            first.style.transform = 'translateX(120%)';
            headings[2].style.color = "orange";
            headings[0].style.color = "black";
            headings[1].style.color = "black";
        } else if(idx == 0){
            first.style.transform = 'translateX(0%)';
            third.style.transform = 'translateX(120%)';
            second.style.transform = 'translateX(120%)';
            headings[0].style.color = "orange";
            headings[1].style.color = "black";
            headings[2].style.color = "black";
        }
    })
})