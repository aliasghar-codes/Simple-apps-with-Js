let audio = new Audio(),
    forward = document.getElementById("forward"),
    backward = document.getElementById("backward"),
    play = document.getElementById("play"),
    poster = document.querySelector(".right"),
    songsContainer = document.querySelector(".songs-container"),
    songProgress = document.getElementById("song-controller"),
    songName = document.querySelector(".song-info h1")
    slider = document.querySelector('.volume-controller .volume-slider'),
    flag = true,
    selectedSong = 0;

const songData = [
    {
        name: "Pehle Bhi Main",
        url: "./songs/Pehle Bhi Main.mp3",
        image: "./images/animal.jpg",
        duration: "04:10"
    },
    {
        name: "Apna Bana Le",
        url: "./songs/Apna Bana Le.mp3",
        image: "./images/bhediya.jpg",
        duration: "03:24"
    },
    {
        name: "Bepanah Ishq",
        url: "./songs/Bepanah Ishq.mp3",
        image: "./images/bepanah.jpg",
        duration: "04:43"
    },
    {
        name: "Heeriye",
        url: "./songs/Heeriye.mp3",
        image: "./images/heeriye.jpg",
        duration: "03:19"
    },
    {
        name: "Kesariya",
        url: "./songs/Kesariya.mp3",
        image: "./images/kesariya.jpg",
        duration: "02:52"
    },
    {
        name: "Tera Ye Ishq Mera Fitoor",
        url: "./songs/Tera Ye Ishq Mera Fitoor.mp3",
        image: "./images/Shamshera.jpg",
        duration: "05:08"
    },
    {
        name: "Arjan Vailly Ne",
        url: "./songs/Arjan Vailly Ne.mp3",
        image: "./images/animal.jpg",
        duration: "03:02"
    },
    {
        name: "Ek Ladki Ko Dekha",
        url: "./songs/Ek Ladki Ko Dekha.mp3",
        image: "./images/ek-ladki-ko-dekha.jpg",
        duration: "02:50"
    },
    {
        name: "Humko Tumse Pyaar Hua",
        url: "./songs/Humko Tumse Pyaar Hua.mp3",
        image: "./images/humko-tumse-pyar-hua.jpg",
        duration: "04:22"
    },
    {
        name: "Maan Meri Jaan",
        url: "./songs/Maan Meri Jaan.mp3",
        image: "./images/man-meri-jan.jpg",
        duration: "04:18"
    },
    {
        name: "Tera Fitoor",
        url: "./songs/Tera Fitoor.mp3",
        image: "./images/tera-yeh-ishq-mera-fitoor.jpg",
        duration: "05:33"
    },
    {
        name: "Tere Hawaale",
        url: "./songs/Tere Hawaale.mp3",
        image: "./images/lal-singh.jpg",
        duration: "05:50"
    }
]

function main() {
    songsContainer.innerHTML = "";
    songData.forEach((element, id) => {
        songsContainer.innerHTML += `
        <div class="song" id="${id}">
                <div class="sleft">
                    <img src="${element.image}" alt="">
                    <h3>${element.name}</h3>
                </div>
                <p>${element.duration}</p>
            </div>
        `;
    })

    audio.src = songData[selectedSong].url;

    for (let element of songsContainer.children) {
        element.addEventListener("mouseenter", () => {
            element.style.backgroundColor = "rgba(255, 255, 255, 0.050)";
        })
        element.addEventListener("mouseleave", () => {
            element.style.backgroundColor = "transparent";
        })
    }
}
main();

function resetState(){
    songsContainer.innerHTML = "";
    songData.forEach((element, id) => {
        songsContainer.innerHTML += `
        <div class="song" id="${id}">
                <div class="sleft">
                    <img src="${element.image}" alt="">
                    <h3>${element.name}</h3>
                </div>
                <p>${element.duration}</p>
            </div>
        `;
    })

    for (let element of songsContainer.children) {
        element.addEventListener("mouseenter", () => {
            element.style.backgroundColor = "rgba(255, 255, 255, 0.050)";
        })
        element.addEventListener("mouseleave", () => {
            element.style.backgroundColor = "transparent";
        })
    }
}

songsContainer.addEventListener("click", function (value) {
    resetState();
    for (let element of songsContainer.children) {
        element.querySelector("img").classList.remove("image-animation");
    }
    selectedSong = value.target.id;
    audio.src = songData[selectedSong].url;
    audio.play();
    poster.style.backgroundImage = `url(${songData[selectedSong].image})`;
    play.innerHTML = `<i class="ri-pause-fill"></i>`;
    flag = false;
    let songContainer = document.querySelectorAll(".song")[selectedSong];
    if (selectedSong == 0) {
        backward.style.opacity = "0.5";
        forward.style.opacity = "1";
    } else if (selectedSong == songData.length - 1) {
        forward.style.opacity = "0.5";
        backward.style.opacity = "1";
    } else if (selectedSong < songData.length) {
        forward.style.opacity = "1";
        backward.style.opacity = "1";
    }
    songContainer.querySelector("img").classList.add("image-animation");
    songContainer.querySelector("p").innerHTML = `<div class="boxContainer">
    <div class="box box1"></div>
    <div class="box box2"></div>
    <div class="box box3"></div>
    <div class="box box4"></div>
    <div class="box box5"></div>
</div>`;
})

function playfunction() {
    resetState();
    let selectedSongContainer = document.querySelectorAll(".song")[selectedSong];
    if (flag) {
        play.innerHTML = `<i class="ri-pause-fill"></i>`;
        // audio.src = songData[selectedSong].url;
        audio.play();
        for (let element of songsContainer.children) {
            element.querySelector("img").classList.remove("image-animation");
        }
        selectedSongContainer.querySelector("img").classList.add("image-animation");
        selectedSongContainer.querySelector("p").innerHTML = `
        <div class="boxContainer">
            <div class="box box1"></div>
            <div class="box box2"></div>
            <div class="box box3"></div>
            <div class="box box4"></div>
            <div class="box box5"></div>
        </div >`;
    } else {
        play.innerHTML = `<i class="ri-play-fill"></i>`;
        // audio.src = songData[selectedSong].url;
        audio.pause();
        selectedSongContainer.querySelector("img").classList.remove("image-animation");
    }
    flag = !flag;
}

function changeAppearence() {
    resetState();
    for (let element of songsContainer.children) {
        element.querySelector("img").classList.remove("image-animation");
    }
    songName.innerHTML = songData[selectedSong].name
    play.innerHTML = `<i class="ri-pause-fill"></i>`;
    poster.style.backgroundImage = `url(${songData[selectedSong].image})`;
    audio.src = songData[selectedSong].url;
    audio.play();
    flag = false;
    let selectedSongContainer = document.querySelectorAll(".song")[selectedSong];
    selectedSongContainer.querySelector("img").classList.add("image-animation");
    selectedSongContainer.querySelector("p").innerHTML = `
        <div class="boxContainer">
            <div class="box box1"></div>
            <div class="box box2"></div>
            <div class="box box3"></div>
            <div class="box box4"></div>
            <div class="box box5"></div>
        </div >`;
}

play.addEventListener("click", playfunction)

forward.addEventListener("click", () => {
    if (selectedSong < songData.length - 1) {
        selectedSong++;
        backward.style.opacity = "1";
        changeAppearence();
    }
})

backward.addEventListener("click", () => {
    if (selectedSong > 0) {
        selectedSong--;
        forward.style.opacity = "1";
        changeAppearence();
    }
})

setInterval(() => {
    if (selectedSong === 0) {
        backward.style.opacity = "0.5";
    } else if (selectedSong === songData.length - 1) {
        forward.style.opacity = "0.5";
    }
}, 100)

if (audio.play) {
    setInterval(() => {
        songProgress.value = audio.currentTime;
        songProgress.max = Number.parseInt(audio.duration);
    }, 500);
    setInterval(() => {
        if (audio.currentTime == audio.duration) {
            console.log("finished")
            selectedSong++;
            backward.style.opacity = "1";
            changeAppearence();
        }
    }, 3000);
}

songProgress.addEventListener("change", () => {
    audio.currentTime = songProgress.value;
    audio.play();
    play.innerHTML = `<i class="ri-pause-fill"></i>`;
    flag = false;
    let selectedSongContainer = document.querySelectorAll(".song")[selectedSong];
    selectedSongContainer.querySelector("img").classList.add("image-animation");
    selectedSongContainer.querySelector("p").innerHTML = `
        <div class="boxContainer">
            <div class="box box1"></div>
            <div class="box box2"></div>
            <div class="box box3"></div>
            <div class="box box4"></div>
            <div class="box box5"></div>
        </div >`;
})

slider.addEventListener('input', function setVolume() {
    audio.volume = slider.value;
});

document.addEventListener("keypress", (e) => {
    if (e.keyCode === 32) {
        playfunction();
    }
})