let local = JSON.parse(localStorage.getItem("tasks"));
let element = document.querySelector("section");

for (let i in local) {
  let divElement = document.createElement("div");
  divElement.classList.add(`${local[i].type}-label`);
  element.appendChild(divElement);
  divElement.innerHTML = `
  <input type="image" src="./assets/edit.png" class="edit" onclick="trashShow()" />
  <div class="task-info" id="${i}">
    <h3>${local[i].taskname}</h3>
    <small>${local[i].description}</small>
  </div>
  <input type="image" src="./assets/trash.png" class="trash" onclick="deleteTask()"/>`;
}
function showSearch() {
  let search = document.querySelector(".search-input");
  search.style.visibility = "visible";
  search.focus();
  document.querySelector(".close").style.visibility = "visible";
  document.querySelector(".back").style.visibility = "hidden";
}
function hideSearch() {
  let search = document.querySelector(".search-input");
  search.style.visibility = "hidden";
  document.querySelector(".close").style.visibility = "hidden";
  document.querySelector(".back").style.visibility = "visible";
  location.reload();
}
function trashShow() {
  document.addEventListener(
    "click",
    function (e) {
      e = e || window.event;
      if (e.target.className == "edit") {
        let target = e.target;
        let trash = target.parentNode.querySelector(".trash");
        target.parentNode.style.backgroundColor = "#fbd2e3";
        target.parentNode.style.color = "#ee2375";
        trash.style.visibility = "visible";
        target.parentNode.querySelector(".edit").style.visibility = "hidden";
        target.parentNode.style.marginLeft = "-10rem";
      } else location.reload();
    },
    false
  );
}

function deleteTask() {
  document.addEventListener(
    "click",
    function (e) {
      e = e || window.event;
      let target = e.target;
      if (target.className == "trash") {
        let newLocal = [...local];
        let index = target.parentNode.querySelector(".task-info").id;
        newLocal.splice(index, 1);
        console.log(local, newLocal);
        localStorage.setItem("tasks", JSON.stringify(newLocal));
        location.reload();
      }
    },
    false
  );
}

function search() {
  let searchElement = document.getElementById("search-field");
  let filter = searchElement.value;
  let task = document.querySelectorAll(".task-info h3");
  for (let i = 0; i < task.length; i++) {
    let content = task[i].textContent;
    console.log(content.includes(filter), filter);
    if (!content.includes(filter)) {
      let parent = task[i].parentNode;
      parent.parentNode.style.display = "none";
    } else {
      let parent = task[i].parentNode;
      parent.parentNode.style.display = "";
    }
  }
}
