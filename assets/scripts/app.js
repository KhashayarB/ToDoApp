const listAllContainer = document.querySelector("[all-tasks]");
const listDisplayContainer = document.querySelector(
  "[data-list-display-container]"
);
const newTaskForm = document.querySelector("[data-new-task-form]");
const tasksContainer = document.querySelector("[data-tasks]");

const LOCAL_STORAGE_LIST_KEY = "task.lists";
const LOCAL_STORAGE_SELECTED_LIST_ID_KEY = "task.selectedListId";
let lists = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || [];
let selectedListId = localStorage.getItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY);

let listAll = [];
let listActive = [];
let listComplete = [];

function renderLists() {
  lists.forEach((lists) => {
    const listElement = document.createElement("li");
    listElement.dataset.listId = list.id;
    listElement.classList.add("list-name");
    listElement.innerHTML = list.name;
    listAllContainer.appendChild(listElement);
  });
}

function createTask(name) {
  return {
    id: Date.now().toString(),
    date: Date.now().toString,
    name: name,
    complete: false,
  };
}

newTaskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const taskName = newTaskInput.value;
  if (taskName == null || taskName === "") return;
  const task = createTask(taskName);
  newTaskInput.value = null;
  const selectedList = lists.find((list) => list.id === selectedListId);
  selectedList.tasks.push(task);
  saveAndRender();
});

function renderTasks(selectedList) {
  selectedList.tasks.forEach((task) => {
    const taskElement = document.importNode(taskTemplate.content, true);
    const checkbox = taskElement.querySelector("input");
    checkbox.id = task.id;
    checkbox.checked = task.complete;
    const label = taskElement.querySelector("label");
    label.htmlFor = task.id;
    label.append(task.name);
    tasksContainer.appendChild(taskElement);
  });
}
