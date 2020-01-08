function getPeople () {
  fetch('https://uinames.com/api/?ext&region=united states&amount=4')
  .then((response) => {
    console.log(response)
    return response.json();
  })
  .then((myJson) => {
    console.log(myJson);
  });
}

let btn = document.querySelector("#button")
let mainArea = document.querySelector("#root")

btn.addEventListener("click", () => {
  // console.log(myJson)
})