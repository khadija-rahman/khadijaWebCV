const carousel = document.querySelector('.carousel');
const slides = carousel.querySelectorAll('.carousel>div.slide');
const numSlides = slides.length;
const leftButton = carousel.querySelector('.carouselLeft');
const rightButton = carousel.querySelector('.carouselRight');
const pauseButton = carousel.querySelector('.pause');
const playButton = carousel.querySelector('.play');
let playMode;
startPlayMode();

function getActiveSlideIndex() {
    for (let i = 0; i < numSlides; i++) {
        if (slides[i].classList.contains("active")) return i;
    }
}

function change(direction) {
    const currentSlideIndex = getActiveSlideIndex();
    const newSlideIndex = currentSlideIndex + direction;

    if (newSlideIndex >= 0 && newSlideIndex < numSlides) {
        slides[currentSlideIndex].classList.remove("active");
        slides[newSlideIndex].classList.add("active");
    } else {
        slides[0].classList.add("active");
    }
}

function cycle() {
    change(1);
}

function startPlayMode() {
    playMode = setInterval(cycle, 10000);
}

function stopPlayMode() {
    clearTimeout(playMode);
}

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '37') {
        change(-1);
    } else if (e.keyCode == '39') {
        change(1);
    }

}

leftButton.addEventListener('click', function () {
    change(-1);
});
rightButton.addEventListener('click', function () {
    change(1);
});

pauseButton.addEventListener('click', function () {
    pauseButton.style.visibility = "hidden";
    playButton.style.visibility = "visible";
    stopPlayMode();
});
playButton.addEventListener('click', function () {
    pauseButton.style.visibility = "visible";
    playButton.style.visibility = "hidden";
    startPlayMode();
});

document.onkeydown = checkKey;