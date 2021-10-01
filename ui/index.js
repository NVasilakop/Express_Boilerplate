const audio = document.querySelector("audio");
const item = document.getElementById("dn");
const unmutedButton = document.getElementById("unmuted");
const mutedButton = document.getElementById("muted");
const soundBarButtons = document.getElementsByClassName("sound-bars-btn")
const shuffleButton = document.getElementById("shuffle-btn")
const audio_player = document.getElementById("audio_player")

item.addEventListener("click",()=>{
      changeMood();
      findAudio(document.getElementById("dn").checked);
      checkIfAudioIsOn();
    })

function changeMood(){
  if (document.getElementById("dn").checked) {
    var mainContainer = document.getElementById("mainContainer");
    mainContainer.style.backgroundColor = "#ff000080"
  }
  else{
    document.getElementById('mainContainer').style.backgroundColor = '';
  }
}

function findAudio(bad){
if (bad) {
    document.getElementById("my-audio").setAttribute('src','https://www.bensound.com/bensound-music/bensound-moose.mp3')
}
else{
    document.getElementById("my-audio").setAttribute('src','https://www.bensound.com/bensound-music/bensound-jazzyfrenchy.mp3');
}
audio.volume = 0.2;
audio.play()
}


function checkIfAudioIsOn(){
    console.log("Audio is paused: " +audio.paused)
    if(!audio.paused){
        Array.prototype.forEach.call(soundBarButtons, (soundBarButton) => {
            soundBarButton.style.visibility = 'visible';
        });
        mutedButton.style.visibility='visible';
        unmutedButton.style.visibility = '';
        shuffleButton.style.visibility = 'visible';
        audio_player.style.visibility = 'visible';

    }
    else{
        Array.prototype.forEach.call(soundBarButtons, (soundBarButton) => {
            soundBarButton.style.visibility = '';
        });
        mutedButton.style.visibility='';
        unmutedButton.style.visibility = 'visible';
        shuffleButton.style.visibility = '';
        audio_player.style.visibility = '';

    }
}

function mute(){
    mutedButton.style.visibility = ''
    unmutedButton.style.visibility='visible'
    audio.volume=0;
}
function unmute(){
    unmutedButton.style.visibility = ''
    mutedButton.style.visibility='visible'
    audio.volume=0.2
}

function volume(action){
if(action && audio.volume <= 1){
    audio.volume += 0.2
}
if(!action && audio.volume >=0.2){
    audio.volume -= 0.2
}
}