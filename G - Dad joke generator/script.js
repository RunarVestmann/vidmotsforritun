async function fetchDadJoke() {
  const response = await fetch("https://icanhazdadjoke.com/", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  const json = await response.json();
  return json.joke;
}

async function generateJoke() {
  const joke = await fetchDadJoke();
  const jokeElement = document.getElementById("joke");
  jokeElement.innerText = joke;
}
