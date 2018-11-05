var clap = new Audio('sounds/clap.wav');
var boom = new Audio('sounds/boom.wav');
var hihat = new Audio('sounds/hihat.wav');
var kick = new Audio('sounds/kick.wav');
var openhat = new Audio('sounds/openhat.wav');
var ride = new Audio('sounds/ride.wav');
var snare = new Audio('sounds/snare.wav');
var tink = new Audio('sounds/tink.wav');
var tom = new Audio('sounds/tom.wav');


// Play drum by keyboard press


document.addEventListener('keydown', (event) => {

   if (event.code == 'KeyA') {
       boom.currentTime = 0;
       clap.play();}

   else if (event.code == 'KeyS') {
       boom.currentTime = 0;
       boom.play();}

   else if (event.code == 'KeyD') {
       boom.currentTime = 0;
       hihat.play();}

   else if (event.code == 'KepF') {
       boom.currentTime = 0;
       kick.play();}

   else if (event.code == 'KeyG') {
       boom.currentTime = 0;
       openhat.play();}

   else if (event.code == 'KeyH') {
       boom.currentTime = 0;
       ride.play();}

   else if (event.code == 'KeyJ') {
       boom.currentTime = 0;
       snare.play();}

   else if (event.code == 'KeyK') {
       boom.currentTime = 0;
       tink.play();}

   else if (event.code == 'KeyL') {
       boom.currentTime = 0;
       tom.play();}

   }
);


// Play music by mouse click

var claplocation = document.getElementById('box-sound');
var boomlocation = document.getElementById('box-sound2');
var hihatlocation = document.getElementById('box-sound3');
var kicklocation = document.getElementById('box-sound4');
var openhatlocation = document.getElementById('box-sound5');
var ridelocation = document.getElementById('box-sound6');
var snarelocation = document.getElementById('box-sound7');
var tinklocation = document.getElementById('box-sound8');
var tomlocation = document.getElementById('box-sound9');

claplocation.addEventListener('click', (event) => {
   clap.play();
})

boomlocation.addEventListener('click', (event) => {
   hihat.play();
})

hihatlocation.addEventListener('click', (event) => {
   boom.play();
})

kicklocation.addEventListener('click', (event) => {
   kick.play();
})

openhatlocation.addEventListener('click', (event) => {
   openhat.play();
})

ridelocation.addEventListener('click', (event) => {
   ride.play();
})

snarelocation.addEventListener('click', (event) => {
   snare.play();
})

tinklocation.addEventListener('click', (event) => {
   tink.play();
})

tomlocation.addEventListener('click', (event) => {
   tom.play();
})