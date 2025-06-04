// Tạo sao nền trời
function createStars() {
    const body = document.querySelector("body");
    for (let i = 0; i < 100; i++) {
        const star = document.createElement("div");
        star.className = "star";
        const size = Math.random() * 1.5;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.top = `${Math.random() * 100}vh`;
        star.style.left = `${Math.random() * 100}vw`;
        star.style.opacity = Math.random();
        body.appendChild(star);
    }
}
createStars();

// Bật nhạc khi user click lần đầu
document.addEventListener("click", () => {
    const music = document.getElementById("bg-music");
    if (music.paused) {
        music.muted = false;
        music.play();
    }
});
