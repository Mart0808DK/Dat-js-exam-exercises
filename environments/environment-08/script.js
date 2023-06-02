"use strict";

window.addEventListener("load", main)

async function main() {
    const playlist = await getPlaylist()

    playlist.forEach(showPlaylist)
    console.log(playlist);
}

async function getPlaylist() {
    const response = await fetch("playlist.json")

    const data = await response.json();

    return data
}

function showPlaylist(playlists) {
    const myHtml = `
    <li>${playlists.artist}, ${playlists.title}, ${playlists.duration}</li>
    <button class="removeBtn">Remove</button>
    `;

    document.querySelector("#songlist").insertAdjacentHTML("beforeend", myHtml);
    document.querySelector(".removeBtn").addEventListener("click", () => removeBtn(playlists))
}

function removeBtn(playlists) {
    console.log("Hej");
}