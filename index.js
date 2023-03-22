console.log("Made By Hamza Younis 1248");
// Intializing Variables
let myProgressBar = document.getElementById("myProgressBar");
let masterPlay = document.getElementById("masterPlay");
let audioElement = new Audio("")
let songItems = Array.from(document.getElementsByClassName("songItem"));
let gif = document.getElementById("gif");
let indexnumber = 0;
let previous = document.getElementById('previous');
let next = document.getElementById('next');
let songnameDisplay = document.getElementById('songDisplay');
songnameDisplay.innerText = "";


// Array of Songs

let songs = [
    { songname: "Main Royaaa ", songPath: "https://github.com/Dumbass-Coder/Music-Website/blob/main/Musics/song1.mp3?raw=true", songCover: "Music Covers/cover1.jpg" },
    { songname: "Ertugrul Music", songPath: "https://github.com/Dumbass-Coder/Music-Website/blob/main/Musics/song2.mp3", songCover: "Music Covers/cover2.jpg" },
    { songname: "O Re Piya", songPath: "https://github.com/Dumbass-Coder/Music-Website/blob/main/Musics/song3.mp3", songCover: "Music Covers/cover3.jpg" },
    { songname: "Anuv Jain  GUL Studio", songPath: "https://github.com/Dumbass-Coder/Music-Website/blob/main/Musics/song4.mp3", songCover: "Music Covers/cover4.jpg" },
    { songname: "Tujhe Bhula Mashup", songPath: "https://github.com/Dumbass-Coder/Music-Website/blob/main/Musics/song5.mp3", songCover: "Music Covers/cover5.jpg" },
    { songname: "Waqt Ki Baatein", songPath: "https://github.com/Dumbass-Coder/Music-Website/blob/main/Musics/song6.mp3", songCover: "Music Covers/cover6.jpg" },
    { songname: "Ye jism hai toh kya", songPath: "https://github.com/Dumbass-Coder/Music-Website/blob/main/Musics/song7.mp3", songCover: "Music Covers/cover7.jpg" }
]
songItems.forEach((element, i) => {
    console.log(element, i);
    element.getElementsByTagName("img")[0].src = songs[i].songCover;
    element.getElementsByClassName("song-name")[0].innerText = songs[i].songname;
});
//Add event listner
masterPlay.addEventListener("click", () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove("fa-play")
        masterPlay.classList.add("fa-pause")
        gif.style.opacity = "1";


    } else {
        audioElement.pause();
        masterPlay.classList.add("fa-play")
        masterPlay.classList.remove("fa-pause")
        gif.style.opacity = "0";

    }

})

//ProgressBar
audioElement.addEventListener("timeupdate", () => {

    let position = (audioElement.currentTime / audioElement.duration) * 100;
    myProgressBar.value = position;
})

myProgressBar.addEventListener("change", () => {
    audioElement.currentTime = (myProgressBar.value * audioElement.duration) / 100;
})

const makeallstop = () => {
    Array.from(document.getElementsByClassName("songPlay")).forEach((element) => {
        element.classList.add('fa-play')
        element.classList.remove('fa-pause')

    }
    )
}

Array.from(document.getElementsByClassName("songPlay")).forEach((element) => {
    element.addEventListener("click", (e) => {
        indexnumber = parseInt(e.target.id);
        // console.log(e.target);
        makeallstop(e);
        masterPlay.classList.remove("fa-play")
        masterPlay.classList.add("fa-pause")
        songnameDisplay.innerText = songs[indexnumber - 1].songname;
        if (audioElement.paused || audioElement.currentTime <= 0) {
            e.target.classList.remove('fa-play')
            e.target.classList.add('fa-pause')
            masterPlay.classList.remove("fa-play")
            masterPlay.classList.add("fa-pause")
            audioElement.src = `https://github.com/Dumbass-Coder/Music-Website/blob/main/Musics/song${indexnumber}.mp3`;
            audioElement.play();
            gif.style.opacity = "1";


        } else {
            audioElement.currentTime = 0;
            audioElement.pause();
            e.target.classList.remove('fa-pause')
            e.target.classList.add('fa-play')
            masterPlay.classList.add("fa-play")
            masterPlay.classList.remove("fa-pause")
            gif.style.opacity = "0";

        }
    })

});
next.addEventListener('click', () => {
    if (indexnumber >= 7) {
        indexnumber = 1;
    } else {
        indexnumber += 1;

    }
    songnameDisplay.innerText = songs[indexnumber - 1].songname;

    masterPlay.classList.remove("fa-play")
    masterPlay.classList.add("fa-pause")
    audioElement.currentTime = 0;
    audioElement.src = `https://github.com/Dumbass-Coder/Music-Website/blob/main/Musics/song${indexnumber}.mp3`;
    audioElement.play();
    gif.style.opacity = "1";
    Array.from(document.getElementsByClassName("songPlay")).forEach((element) => {
        element.classList.add('fa-play')
        element.classList.remove('fa-pause')

    }
    )
    document.getElementById(`${indexnumber}`).classList.remove('fa-play');
    document.getElementById(`${indexnumber}`).classList.add('fa-pause');
});


previous.addEventListener('click', () => {
    if (indexnumber <= 1) {
        indexnumber = 7;
    } else {
        indexnumber -= 1;

    }
    masterPlay.classList.remove("fa-play")
    masterPlay.classList.add("fa-pause")
    audioElement.currentTime = 0;
    audioElement.src = `https://github.com/Dumbass-Coder/Music-Website/blob/main/Musics/song${indexnumber}.mp3`;
    audioElement.play();
    gif.style.opacity = "1";
    songnameDisplay.innerText = songs[indexnumber - 1].songname;
    Array.from(document.getElementsByClassName("songPlay")).forEach((element) => {
        element.classList.add('fa-play')
        element.classList.remove('fa-pause')

    }
    )
    document.getElementById(`${indexnumber}`).classList.remove('fa-play');
    document.getElementById(`${indexnumber}`).classList.add('fa-pause');
})
masterPlay.addEventListener("click", () => {
    if (masterPlay.classList.contains("fa-play")) {

        document.getElementById(`${indexnumber}`).classList.add('fa-play');
        document.getElementById(`${indexnumber}`).classList.remove('fa-pause');
    }
    else {

        document.getElementById(`${indexnumber}`).classList.remove('fa-play');
        document.getElementById(`${indexnumber}`).classList.add('fa-pause');
    }

})
