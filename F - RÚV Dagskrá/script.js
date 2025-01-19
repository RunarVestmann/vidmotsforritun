// Sadly this api url isn't available as of 16 January 2025
const API_URL = "https://apis.is/tv/ruv";

async function fetchData() {
    const response = await fetch(API_URL);
    const json = await response.json();

    const container = document.getElementById("container");

    const elementStringList = json.results.map(function (element) {
        const startTime = new Date(element.startTime).toLocaleTimeString();
        return `
        <div>
            <h2>${element.title}</h2>
            <p>Upphafstími: ${startTime}</p>
            <p>Lengd: ${element.duration}</p>
            <p>Lýsing: ${element.description}</p>
        </div>
    `;
    });

    container.innerHTML = elementStringList.join("");
}

fetchData();