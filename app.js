const playButton = document.getElementById("play");
const popup = document.getElementById("popup");
const continueButton = document.getElementById("continueButton");
const usernameInput = document.getElementById("usernameInput");

playButton.addEventListener("click", () => {
    popup.style.display = "block";
});

continueButton.addEventListener("click", () => {
    const username = usernameInput.value;
    localStorage.setItem("username", username);
    popup.style.display = "none";
    const storedUsername = localStorage.getItem("username");
    window.location.href = './game/game.html'
});
