const sounds = [
    "./Drumkit_Sounds/boom.wav",
    "./Drumkit_Sounds/clap.wav",
    "./Drumkit_Sounds/hihat.wav",
    "./Drumkit_Sounds/kick.wav",
    "./Drumkit_Sounds/openhat.wav",
    "./Drumkit_Sounds/ride.wav",
    "./Drumkit_Sounds/snare.wav",
    "./Drumkit_Sounds/tink.wav",
    "./Drumkit_Sounds/tom.wav"
]

let recording = false;
let playing = false;
let recordSequence = [];
let speed = 1000;
let loopInterval = 1000;
const speedLabel = document.getElementById("speedLabel")
let interval = setInterval(() => { }, 1000);

play = (i) => {
    sound = new Audio(sounds[i]);
    sound.play();
}
playSequence = () => {
    if (!playing)
        return;
    recording = false;
    for (let i = 0; i <= recordSequence.length; i++) {
        setTimeout(() => {
            play(recordSequence[i]);
        }, speed * i);
    }
}
startLoop = () => {
    playing = true;
    recording = false;
    calcIntervalDelay();
    playSequence();
}
endLoop = () => {
    playing = false;
    recording = false;
}
record = () => {
    recordSequence = [];
    recording = true;
}
displayLabel = () => {
    speedLabel.innerHTML = `Delay: ${speed / 1000}s`;
}
faster = () => {
    if (speed == 100)
        return;
    speed -= 100;
    calcIntervalDelay();
    displayLabel();
}
slower = () => {
    speed += 100;
    displayLabel();
    calcIntervalDelay();
}
normalSpeed = () => {
    speed = 1000;
    displayLabel();
    calcIntervalDelay();
}
calcIntervalDelay = () => {
    clearInterval(interval);
    loopInterval = speed * recordSequence.length;
    interval = setInterval(playSequence, loopInterval);
}
