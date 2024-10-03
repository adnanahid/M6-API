function loadPost() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => posts(data));
}
function posts(parameter) {
  const containers = document.getElementById("container");
  for (const post of parameter) {
      const postDiv = document.createElement("div");
    postDiv.innerHTML = `
        <h3>UserId: ${post.id}</h3>
        <h4>Title: ${post.title}</h4>
    `;
    containers.appendChild(postDiv);
}
}
loadPost();
