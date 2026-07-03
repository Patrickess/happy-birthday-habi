let canOpenLetter = false;

window.addEventListener("load", () => {
    setTimeout(() => {
        document.querySelector(".wrapper").classList.add("open");
        canOpenLetter = true;
    }, 1500);
});

const wrapper = document.querySelector(".wrapper");
const audio = document.querySelector("#bgMusic");

audio.loop = true;

wrapper.addEventListener("click", () => {
    if (!canOpenLetter) {
        return;
    }

    wrapper.classList.add("expanded");

    audio.volume = 0.6;

    console.log(audio);

    // 👉 spustí jen pokud ještě nehraje
    if (audio.paused) {
        audio.play().catch(err => {
            console.log("Audio blocked:", err);
        });
    }
});