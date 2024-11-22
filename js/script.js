let menuTag = document.querySelector('.menuTag');
let lightDark = document.querySelector('.lightDark');
let body = document.querySelector('body');
let video = document.querySelector('video');
let dark = false;
let navigation = document.querySelector('.navigation');

menuTag.onclick = function() {
    menuTag.classList.toggle('active');
    navigation.classList.toggle('active');
};

lightDark.onclick = function() {
    dark = !dark;
    lightDark.classList.toggle('active');
    body.classList.toggle('dark');
    if (dark) {
        video.setAttribute('src', 'rain-forest-2.mp4'); // Dark mode video
    } else {
        video.setAttribute('src', 'rain-forest-1.mp4'); // Light mode video
    }
};
