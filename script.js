let canOpenLetter = false;

window.addEventListener("load", () => {
    setTimeout(() => {
        document.querySelector(".wrapper").classList.add("open");
        canOpenLetter = true;
    }, 1500);
});

const wrapper = document.querySelector(".wrapper");
const audio = document.querySelector("#bgMusic");

wrapper.addEventListener("click", () => {

    if (!canOpenLetter) {
        return;
    }

    wrapper.classList.add("expanded");

    audio.currentTime = 0;
    audio.volume = 0.6;
	console.log(audio);

    audio.play().catch(err => {
        console.log("Audio blocked:", err);
    });
});