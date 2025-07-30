const mainPic = document.querySelector('.main-pic');
const audio = document.getElementById('audio');

mainPic.addEventListener('mouseenter', () => {
    audio.play();
});
