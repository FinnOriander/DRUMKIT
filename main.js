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



play = (i) => {
    sound = new Audio(sounds[i]);
    sound.play();
}

