import "../assets/styles/style.css";
import { getData } from "./weatherAPI";
import { setSearchResult } from "./weatherDisplay";

const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
});

searchBtn.addEventListener("click", async () => {
  // If searchInput is empty then just return out of the function
  if (searchInput.value === "") return;
  // If searchInput is NOT empty then call the getData function from weatherAPI.js and store the result in the weatherData variable
  const weatherData = await getData(searchInput.value);
  setSearchResult(weatherData);
  searchInput.value = "";
});
