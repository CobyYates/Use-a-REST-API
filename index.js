async function getAPIData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

class Person {
  constructor(name, surname, email, age, phone, birthday, photo) {
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.age = age;
    this.phone = phone;
    this.birthday = birthday;
    this.photo = photo;
  }
}

const NewPerson = new Person(
  "Kevin",
  "Hart",
  "kevin.hart@comedy.com",
  40,
  "(123) 456 7890",
  { mdy: "06/19/1987" },
  "https://media.todaybirthdays.com/upload/2015/11/29/kevin-hart.jpg"
);

let mainArea = document.querySelector("main");

const theData = getAPIData(
  `https://uinames.com/api/?ext&region=united states&amount=15`
).then(data => {
  data.map(user => {
    populateDOM(user);
  });
  addButton();
});

function addButton() {
  let btn = document.createElement("button");
  btn.setAttribute("class", "btn");
  btn.textContent = "ADD";
  mainArea.appendChild(btn);

  btn.addEventListener("click", function() {
    populateDOM(NewPerson);
  });
}

function populateDOM(single_user) {
  let card = document.createElement("div"),
    name = document.createElement("p"),
    email = document.createElement("p"),
    age = document.createElement("p"),
    phone = document.createElement("p"),
    img = document.createElement("img"),
    add = document.createElement("button")

  name.textContent = `Name: ${single_user.name} ${single_user.surname}`;
  email.textContent = `Email: ${single_user.email}`;
  age.textContent = `Age: ${single_user.age}`;
  phone.textContent = `Phone: ${single_user.phone}`;
  add.textContent = `Add ${single_user.name} to Favorites`
  img.src = single_user.photo;

  card.appendChild(img);
  card.appendChild(name);
  card.appendChild(age);
  card.appendChild(phone);
  card.appendChild(email);
  card.appendChild(add);
  mainArea.appendChild(card);

  add.addEventListener("click", function() {
    var x = document.querySelector(".sBar1");
    x.textContent = `${single_user.name} added`
    // x.className = "show";
    x.classList.toggle("show")
    setTimeout(function() {
      x.classList.toggle("show")
    }, 3000);
  })
}

