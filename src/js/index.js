import "../assets/styles/style.css";
import weatherAPI from "./weatherAPI";
import weatherDisplay from "./weatherDisplay";

const searchForm = document.getElementById("searchForm");
const searchInput = doucment.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
});
