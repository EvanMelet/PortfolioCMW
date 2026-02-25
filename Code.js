//constantes
const playButton = document.querySelector('.play');
const videoTop = document.querySelector('.video-top video');
const videoBottom = document.querySelector('.video-bottom video');

//detecter clic sur le bouton play 
playButton.addEventListener('click', () => {
    //lancer les deux vidéos
    videoTop.play();
    videoBottom.play();
});