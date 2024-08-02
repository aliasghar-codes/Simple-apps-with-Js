let url = "https://official-joke-api.appspot.com/jokes/random";
let h2 = document.querySelector("#joke");
let getJoke = document.querySelector("button");

getJoke.addEventListener("click",request);

async function request(){
    let request = await fetch(url);
    let robject = await request.json();
    h2.innerHTML = `${robject.setup} <br /> ${robject.punchline}`;
}