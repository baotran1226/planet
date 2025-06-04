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
// Danh sách các bài hát theo thứ tự
const songs = [
    "./audio/space-music-1.mp3",
    "./audio/space-music-2.mp3",
    "./audio/space-music-3.mp3"
];

let currentSongIndex = 0;
const music = document.getElementById("bg-music");
let isFirstClick = true;

// Sự kiện click toàn màn hình
document.addEventListener("click", () => {
    if (isFirstClick) {
        // Bật tiếng và phát bài đầu tiên
        music.muted = false;
        music.play();
        isFirstClick = false;
    } else {
        // Phát bài kế tiếp trong danh sách
        currentSongIndex = (currentSongIndex + 1) % songs.length;
        music.src = songs[currentSongIndex];
        music.play();
    }
});


