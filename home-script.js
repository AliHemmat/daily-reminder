let liElement = document.querySelectorAll("li");
let local = JSON.parse(localStorage.getItem("tasks"));

let work = 0;
let personal = 0;
let shopping = 0;
let health = 0;
let other = 0;

for (let j in local) {
  switch (local[j].type) {
    case "work":
      work++;
      break;
    case "personal":
      personal++;
      break;
    case "other":
      other++;
      break;
    case "health":
      health++;
      break;
    case "shopping":
      shopping++;
      break;
    default:
      break;
  }
}
let taskTypes = document.querySelector(".task-types");
if (work) {
  taskTypes.innerHTML = `<div class="work-label work">
  <h4>Work</h4>
  <small id="ws">${work} tasks</small>
  </div>`;
}
if (personal) {
  taskTypes.innerHTML += `<div class="personal-label personal">
  <h4>Personal</h4>
  <small id="ps">${personal} tasks</small>
  </div>`;
}
if (shopping) {
  taskTypes.innerHTML += `<div class="shopping-label shopping">
<h4>Shopping</h4>
<small id="ss">${shopping} tasks</small>
</div>`;
}
if (health) {
  taskTypes.innerHTML += `<div class="health-label health">
  <h4>Health</h4>
  <small id="hs">${health} tasks</small>
  </div>`;
}
if (other) {
  taskTypes.innerHTML += `<div class="other-label other">
  <h4>Other</h4>
  <small id="os">${other} tasks</small>
  </div>`;
}
let now = new Date();
let todayTasks = 0;
let taskLeft = 0;
for (let i = 0; i < local.length; i++) {
  let temp = local[i].time / 2 + 7;
  temp = now.getMinutes() > 30 ? (temp = temp - 0.5) : temp + 0;
  let newDate = local[i].date;
  let dateTemp = newDate[8] + newDate[9];
  if (dateTemp == now.getDate()) {
    todayTasks++;
    if (temp < now.getHours()) {
      continue;
    } else {
      taskLeft++;
      liElement[+local[i].time - 1].innerHTML = `
    <div class="${local[i].type}-label">
              <h4> ${local[i].taskname} </h4>
              <small> ${local[i].description} </small>
      </div>
    `;
    }
  }
}
let allTasks = document.querySelector(".all-tasks");
allTasks.textContent = `Today you have ${todayTasks} tasks`;
let createdTasks = document.querySelector(".number-created-tasks");
createdTasks.textContent = local.length;
document.querySelector(".left-tasks h2").textContent = taskLeft;
