const currentTimeDiv = document.getElementById("currentTime"),
selects = document.querySelectorAll("select"),
ring = new Audio("assets/ringtone.mp3"),
alarmBtn = document.querySelector("button"),
clockImg = document.querySelector(".clockBox img"),
alarmTime = document.querySelector(".alarmTime");
let timeOfAlarm, alarmPosition = false; 

for(let i = 0; i < 60; i++){
    if(i < 10){
        i = "0" + i;
    }
    option = document.createElement("option");
    option.value = i;
    option.innerText = i;
    selects[1].firstElementChild.insertAdjacentElement("afterend", option);
}

for(let i = 1; i < 13; i++){
    if(i < 10){
        i = "0" + i;
    }
    option = document.createElement("option");
    option.value = i;
    option.innerText = i;
    selects[0].firstElementChild.insertAdjacentElement("afterend", option);
}

setInterval(()=>{
    let time = new Date(),
    hours = time.getHours(),
    hours12 = hours % 12 || 12,
    minutes = time.getMinutes(),
    seconds = time.getSeconds(),
    ampm = "AM";
    
    hours >= 12 ? ampm = "PM": ampm;
    hours12 < 10 ? hours12 = "0" + hours12 : hours12;
    minutes < 10 ? minutes = "0" + minutes : minutes;
    seconds < 10 ? seconds = "0" + seconds : seconds;
    
    let currentTime = `${hours12}:${minutes}:${seconds} ${ampm}`;
    currentTimeDiv.innerText = currentTime;
    
    if(timeOfAlarm == `${hours12}:${minutes}:${ampm}`){
        ring.play();
        ring.loop = true;
        clockImg.src = "assets/running watch.png";
    }
}, 1000)

alarmBtn.addEventListener("click", ()=>{
    let setTime = `${selects[0].value}:${selects[1].value}:${selects[2].value}`;

    if(setTime.includes("Hour") || setTime.includes("Minute") || setTime.includes("AM/PM") ){
        alert("Please select a valid Time");
    }else if(alarmPosition === false){
        alarmTime.style.opacity = ".5";
        alarmTime.style.pointerEvents = "none";
        alarmBtn.innerText = "Clear Alarm";
        timeOfAlarm = setTime;
        alarmPosition = true;
    }else if(alarmPosition){
        ring.pause();
        clockImg.src = "assets/clock.svg";
        alarmTime.style.opacity = "1";
        alarmTime.style.pointerEvents = "auto";
        alarmBtn.innerText = "Set Alarm";
        timeOfAlarm = "";
        alarmPosition = false;
    }
})