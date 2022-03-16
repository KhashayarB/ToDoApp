const addTask = document.getElementById("addTask");
const allTask = document.getElementById("allTask");
const activeTask = document.getElementById("activeTask");
const cTask = document.getElementById("cTask");
const submitTask = document.getElementById("submitTask");
const task = document.getElementById("rowTask");
const userInput = task.querySelectorAll("input");
const tasks = [];

const renderNewTask = (id, checkBox, dateTime, desc) => {
  task.innerHTML =
    '<div class="row mt-4">' +
    '<div class="col-1">' +
    '<div class="col-12 check-box">' +
    '<form><input type="checkbox" id="i">' +
    '<label for="i" class="checkbox">' +
    '<div class="checkbox__inner">' +
    '<div class="green__ball"></div>' +
    "</div>" +
    "</label></form>" +
    " </div>" +
    " </div>" +
    '<div class="col-3">' +
    '<div class="col-12 check-date p-2">' +
    '<form><input type="datetime-local" required /></form>' +
    "</div>" +
    "</div>" +
    '<div class="col-8">' +
    '<div class="row check-task p-2">' +
    '<div class="col-10">' +
    '<input type="text" placeholder="Your Task Goes Here..." required />' +
    "</div>" +
    '<div class="col-2 add-task">' +
    ' <button id="submitTask"> Submit <i class="fas fa-save"></i> </button>' +
    "</div>" +
    "</div>" +
    "</div>";
};
