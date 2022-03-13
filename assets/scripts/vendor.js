const addTask = document.getElementById("addTask");
const allTask = document.getElementById("allTask");
const activeTask = document.getElementById("activeTask");
const cTask = document.getElementById("cTask");

const task = document.getElementById("rowTask");

const newTask =
  '<div class="row mt-4">' +
  '<div class="col-1">' +
  '<div class="col-12 check-box">' +
  '<form><input type="checkbox" /></form>' +
  " </div>" +
  " </div>" +
  '<div class="col-3">' +
  '<div class="col-12 check-date">' +
  '<form><input type="datetime-local" required /></form>' +
  "</div>" +
  "</div>" +
  '<div class="col-8">' +
  '<div class="col-12 check-task">' +
  '<input type="text" placeholder="Your Task Goes Here..." required />' +
  "</div>" +
  "</div>" +
  "</div>";
