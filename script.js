function addTask() {
  let items = [];
  if (localStorage.getItem("tasks") == null) {
    items[0] = {
      taskname: document.querySelector(".add-task-input").value,
      date: document.querySelector(".date-input").value,
      time: document.querySelector(".time-input").value,
      type: document.querySelector('input[name="tasktype"]:checked').value,
      description: document.querySelector(".description-input").value,
    };
    localStorage.setItem("tasks", JSON.stringify(items));
  } else {
    items = JSON.parse(localStorage.getItem("tasks"));
    items.push({
      taskname: document.querySelector(".add-task-input").value,
      date: document.querySelector(".date-input").value,
      time: document.querySelector(".time-input").value,
      type: document.querySelector('input[name="tasktype"]:checked').value,
      description: document.querySelector(".description-input").value,
    });

    localStorage.setItem("tasks", JSON.stringify(items));
  }
  location.reload();
}
