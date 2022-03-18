submitTask.addEventListener("click", () => {
  // task.insertAdjacentHTML("afterbegin",renderNewTask());
  const checkBoxValue = userInput[0].value;
  const dateTimeValue = userInput[1].value;
  const descValue = userInput[2].value;

  toggleCheckBox();

  const newTask = {
    id: Math.floor(Math.random() * 9999).toString(),
    checking: checkBoxValue,
    date: dateTimeValue,
    description: descValue,
  };
  tasks.push(newTask);
  console.log(newTask);
});

function toggleCheckBox() {
  cb.addEventListener("click", () => {
    if (cb.checked === false) {
      cb.checked = true;
    }
    if (cb.checked === true) {
      alert("Your task is completed.")
    }
  });
  submitTask.style.display = "none";
  deleteTask.style.display = "block";
};


addTask.addEventListener('click', () => {
  renderNewTask();
});