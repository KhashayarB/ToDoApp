submitTask.addEventListener("click", () => {
  let checkBoxValue = cb.checked;
  const dateTimeValue = userInput[1].value;
  const descValue = userInput[2].value;
  toggleCheckBox();

  const newTask = {
    id: Math.random().toString(),
    checking: checkBoxValue,
    date: dateTimeValue,
    description: descValue,
  };
  // renderNewTask(
  //   newTask.id,
  //   newTask.checking,
  //   newTask.date,
  //   newTask.description
  // );
  tasks.push(newTask);
  console.log(tasks);
});

addTask.addEventListener("click", () => {
  task.insertAdjacentHTML("afterbegin", renderNewTask());
  renderNewTask(task);
});
