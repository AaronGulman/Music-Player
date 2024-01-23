const musicContainer = document.querySelector('.music-container')
const playBtn = document.querySelector('#play')
const prevBtn = document.querySelector('#prev')
const nextBtn = document.querySelector('#next')
const audio = document.querySelector('#audio')
const progress = document.querySelector('.progress')
const progressContainer = document.querySelector('.progress-container')
const title = document.querySelector('#title')
const cover = document.querySelector('#cover')


//sontTitles

const songs = ['Numb','One more light','Somewhere I belong']

//keepTrackOfSongs

let songIndex = 2;

//initially load song info DOM
loadSong(songs[songIndex])


//update song details

function loadSong(song){
	title.innerText = song;
	audio.src= `./music/${song}.mp3`
	cover.src=`./images/${song}.jpeg`
}