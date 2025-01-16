const API_URL = "https://api.pokemontcg.io/v2/cards?q=name:";

async function fetchCards() {
    const searchTerm = document.getElementById("search").value;

    const response = await fetch(API_URL + searchTerm);
    const json = await response.json();

    const container = document.getElementById("container");

    container.innerHTML = "";

    for (let i = 0; i < json.data.length; i += 1) {
        const image = document.createElement("img");
        image.src = json.data[i].images.small;
        container.appendChild(image);
    }
}