let ul = document.getElementById("putData");
let input = document.getElementById("input");
let submit = document.getElementById("submit");

submit.addEventListener("click", () => {
    if (input.value === "") {
        alert(new Error("You must write something!"));
    } else {
        mainLogic()
    }
})

input.addEventListener('keydown', function(event) {
    if (event.keyCode === 13) {
        if (input.value === "") {
            alert(new Error("You must write something"));
        } else {
            mainLogic()
        }
    }
});

function mainLogic() {
    value = input.value;
    ul.innerHTML += `<div class="note">
    <li><i class="ri-checkbox-blank-circle-line"></i> <span>${value}</span> </li><i class="ri-close-fill"></i></div>`;
    input.value = "";

    localStorage.setItem("Data", ul.innerHTML);

    let close = Array.from(document.querySelectorAll(".ri-close-fill"));
    let tasks = Array.from(document.querySelectorAll(".note"));
    let checks = Array.from(document.querySelectorAll(".note li i"));

    close.forEach((x, idx) => {
        x.addEventListener("click", () => {
            tasks[idx].remove();
            localStorage.setItem("Data", ul.innerHTML);
        })
    })

    checks.forEach((check, idx) => {
        check.addEventListener("click", () => {
            ticks(check, idx);
        })
    })
}

function ticks(check, idx) {
    let lis = Array.from(document.querySelectorAll("li span"));

    check.classList.toggle("ri-checkbox-circle-line");
    check.classList.toggle("ri-checkbox-blank-circle-line");

    if (check.classList.contains("ri-checkbox-circle-line")) {
        lis[idx].style.textDecoration = "line-through";
    } else {
        lis[idx].style.textDecoration = "none";
    }
}

ul.innerHTML = localStorage.getItem("Data");
