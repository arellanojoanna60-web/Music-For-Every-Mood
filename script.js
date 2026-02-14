function playSong(url) {
    const player = document.getElementById("audioPlayer");
    player.src = url;
    player.play();

    const playlist = document.getElementById("playlistItems");
    const li = document.createElement("li");
    li.textContent = "Now Playing: " + url.split("/").pop();
    playlist.appendChild(li);
}

function openModal() {
    document.getElementById("authModal").style.display = "flex";
}

function closeModal() {
    document.getElementById("authModal").style.display = "none";
}
