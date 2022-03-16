submitTask.addEventListener("click", () => {
  // task.insertAdjacentHTML("afterbegin", newTask);
  const checkBoxValue = userInput[0].value;
  const dateTimeValue = userInput[1].value;
  const descValue = userInput[2].value;

  const newTask = {
    id: Math.random().toString(),
    checking: checkBoxValue,
    date: dateTimeValue,
    description: descValue,
  };
  tasks.push(newTask);
  console.log(newTask);
});
