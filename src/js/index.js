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
  if (searchInput.value === "") return;
  const weatherData = await getData(searchInput.value);
  setSearchResult(weatherData);
});
