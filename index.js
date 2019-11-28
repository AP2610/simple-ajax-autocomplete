// TODO: Autocomplete the input with AJAX calls.
const input = document.querySelector("#search");
const list = document.querySelector("#results");

input.addEventListener("keyup", (event) => {
  event.preventDefault();
  list.style.visibility = "visible";
  if (input.value === "") {
    list.style.visibility = "hidden";
  }

  fetch(`https://wagon-dictionary.herokuapp.com/autocomplete/${input.value}`)
    .then(response => response.json())
    .then((data) => {
      list.innerHTML = "";
      const results = data.words;
      if (results) {
        results.forEach((result) => {
          list.insertAdjacentHTML("beforeend", `<li>${result}</li>`);
        });
      } else {
        console.log("Please enter a word");
      }   
    });
});
