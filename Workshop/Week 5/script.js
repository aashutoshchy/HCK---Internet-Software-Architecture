// Accessing button from HTML

const button = document.querySelector("#button");

// Accessing details
const movieTitle = document.querySelector("#title");
const year = document.querySelector("#year");
const rating = document.querySelector("#rating");
const genre = document.querySelector("#genre");
const poster = document.querySelector("img");
const director = document.querySelector("#director");
const stars = document.querySelector("#stars");
const plot = document.querySelector("#plot");
const duration = document.querySelector("#duration");

// Event Listener
button.addEventListener("click", () => {
  const searchBox = document.querySelector("#searchBox").value;
  movieFind(searchBox);
});

// Writing function movieFind by async and await.
let movieFind = async (searchBox) => {
  try {
    let response = await fetch(
      `https://www.omdbapi.com/?t=${searchBox}&apikey=9ceaf3a1`
    );

    let data = await response.json();

    movieTitle.textContent = data.Title;
    rating.innerHTML = `Rating </br> Rotten Tomatoes: ${data.Ratings[0].Value} </br> Rotten Tomatoes: ${data.Ratings[1].Value} </br> Rotten Tomatoes: ${data.Ratings[2].Value} </br>`;
    genre.textContent = `Genre: ${data.Genre}`;
    director.textContent = `Directed by: ${data.Director}`;
    stars.textContent = `Starring: ${data.Actors}`;
    plot.textContent = `Plot: ${data.Plot}`;
    year.textContent = `Year: ${data.Year}`;
    duration.textContent = `Duration: ${data.Runtime}`;
    poster.src = data.Poster;

    if (data.Response === "False") {
      throw new Error(data.Error);
    }
  } catch (error) {
    alert(error);
  }
};
