function toggleBGM() {
    var bgm = document.getElementById("bgm");
    if (bgm.paused) {
        bgm.play();
    } else {
        bgm.pause();
    }
}