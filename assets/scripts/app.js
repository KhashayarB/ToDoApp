// submitTask.addEventListener("click", () => {
//   let checkBoxValue = cb.checked;
//   const dateTimeValue = userInput[2].value;
//   const descValue = userInput[3].value;
//   toggleCheckBox();

//   const newTask = {
//     id: Math.random().toString(),
//     checking: checkBoxValue,
//     date: dateTimeValue,
//     description: descValue,
//   };
//   renderNewTask(
//     newTask.id,
//     newTask.checking,
//     newTask.date,
//     newTask.description
//   );
//   tasks.push(newTask);
//   console.log(tasks);
// });

addTask.addEventListener("click", () => {
  // task.insertAdjacentHTML("afterbegin", () => {
  let checkBoxValue = cb.checked;
  const dateTimeValue = userInput[2].value;
  const descValue = userInput[3].value;
  toggleCheckBox();
  const newTask = {
    id: Math.random().toString(),
    checking: checkBoxValue,
    date: dateTimeValue,
    description: descValue,
  };

  //renderNewTask();
  submitTask.addEventListener("click", () => {
    renderNewTask(
      newTask.id,
      newTask.checking,
      newTask.date,
      newTask.description
    );
  });
  tasks.push(newTask);
  console.log(tasks);
  // });
  // renderNewTask(task);
});

allTask.addEventListener("click", () => {
  function list() {
    let taskList = document.getElementById("task-task");
    let listItem = " ";
    for (let task of tasks) {
      taskList.innerHTML += task;
    }
    taskList.innerHTML = listItem;
  }
  list();
});
