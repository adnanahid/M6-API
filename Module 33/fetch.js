function clicks() {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((json) => console.log(json));
}

function clicks2() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((json) => data(json));
}

function data(parameters) {
  console.log(parameters[0].name);
}

function clicks3() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((json) => console.log(json.map((names) => names.name)));
}

function clicks4() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((json) => names(json));
}

function names(parameters) {
  const ul = document.getElementById("li-container");
  for (let data of parameters) {
    const li = document.createElement("li");
    li.innerText = data.name;
    ul.appendChild(li);
  }
}
