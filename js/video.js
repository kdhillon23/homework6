var video;
var volume;
var button;

function getVid() {
    video = document.getElementById("myVideo");
    console.log(video);

}


function playVid() {
    video.play();
    console.log("Play Video");
    volume.innerHTML = (slider.volume * 100) + "%";


}

function pauseVid() {
    video.pause();
    console.log("Pause Video");
}

function decreaseSpeed() {
    let speed = video.playbackRate *= .2;
    video.playbackRate -= speed;
    console.log("Speed is " + video.playbackRate);
}
// in class reference 
function increaseSpeed() {
    let speed = video.playbackRate * .25;
    video.playbackRate += speed;
    console.log("Speed is " + video.playbackRate);

}

function skipAhead() {
    if (video.currentTime + 60 < video.duration) {
        video.currentTime += 60;
        console.log("Current location is " + video.currentTime);
    } else {
        video.currentTime = 0;
        video.playbackRate = 1;
        console.log("Current speed is " + video.currentTime);

    }

}


function mute() {

    if (video.muted) {
        video.muted = false;
        console.log("Unmuted");
        buttom = document.querySelector("#mute");
        button.innerHTML = "Mute";
    } else {
        video.muted = true;
        console.log("Muted");
        buttom = document.querySelector("#mute");
        button.innerHTML = "Unmute";

    }
}
// in class reference 
function changeVolume() {
    let slider = document.querySelector("#volumeSlider");
    console.log(slider.value);
    video.volume = (slider.value / 100);
    console.log("Volume is " + video.volume);
    volume.innerHTML = video.volume * 100 + "%";
    


}
//
// in class reference 
function gray() {
    video.classList.add("grayscale");
    console.log("In grayscale");
}
//
function color() {
    video.classList.remove("grayscale");
    console.log("In color");
}
