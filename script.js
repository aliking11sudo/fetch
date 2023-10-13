const container = document.getElementById("container");
const table = document.getElementById("table");
const btn = document.getElementById("btn");
btn.addEventListener("click", (e) => {
  e.preventDefault();
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      const tbody = document.createElement("tbody");
      data.map((item) => {
        const dataOne = document.createElement("tr");
        dataOne.innerHTML = `
          <td> ${item.id} </td>
          <td> ${item.name} </td>
          <td> ${item.username} </td>
          <td> ${item.email} </td>
          `;
        tbody.appendChild(dataOne);
      });
      table.style.display = "block";
      table.appendChild(tbody);
    });
});
