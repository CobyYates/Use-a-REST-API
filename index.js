async function getAPIData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data)
    return data;
  } catch (error) {
    console.error(error);
  }
}

const theData = getAPIData('https://uinames.com/api/?ext&region=united states&amount=10').then(data => {
  let card = document.querySelector("#root")

  card.textContent = data[0].name
  
})

// const ul = document.getElementById("userList");
// let page = 1;

// const url = `https://randomuser.me/api/?results=10&seed=uvu${page}`;

// const nextBtn = document.getElementById("nextBtn");

// nextBtn.onclick = function() {
//   ul.innerHTML = "";
//   page++;

//   console.log(url);
//   console.log(url);

//   fetch(url + "&page=" + page)
//     .then(resp => resp.json())
//     .then(data => {
//       const users = data.results;

//       // users.forEach(user => {
//       //   console.log(user)
//       // });
//       // or

//       users.map(user => {
//         // console.log(user)

//         let img = createEl("img"),
//           p = createEl("p");
//         li = createEl("li");

//         img.src = user.picture.thumbnail;
//         p.innerHTML = `${user.name.first} ${user.name.last}`;

//         li.appendChild(img);
//         li.appendChild(p);

//         ul.appendChild(li);
//       });
//     });
// };

// let users = fetch(url);

// users
//   .then(function(resp) {
//     return resp.json();
//   })
//   .then(function(data) {
//     // console.log(data);

//     const users = data.results;

//     // users.forEach(user => {
//     //   console.log(user)
//     // });
//     // or

//     users.map(user => {
//       // console.log(user)

//       let img = createEl("img"),
//         p = createEl("p"),
//         li = createEl("li")

//       img.src = user.picture.thumbnail;
//       p.innerHTML = `${user.name.first} ${user.name.last}`;

//       li.appendChild(img);
//       li.appendChild(p);

//       ul.appendChild(li);
//     });
//   });

// function createEl(el) {
//   return document.createElement(el);
// }
