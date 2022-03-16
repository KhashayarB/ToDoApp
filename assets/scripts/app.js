submitTask.addEventListener("click", () => {
  // task.insertAdjacentHTML("afterbegin", newTask);
  let checkBoxValue = userInput[0].value;
  const dateTimeValue = userInput[1].value;
  const descValue = userInput[2].value;
   toggleCheckBox();

  console.log(cb);
  //   var btnChecking = document.getElementById("checkbox");
  //   btnChecking = document.addEventListener("click", function check() {
  //     btnChecking.checked = true;
  //   });

  //   btnChecking = document.addEventListener("click", function uncheck() {
  //     btnChecking.checked = false;
  //   });

  //   const validateChecking = () => {
  //     var checkVar = document.querySelectorAll("[name=checkbox]");
  //     var count = 0;
  //     const checks = [];

  //     for (var i = 0; i < checkVar.length; i++) {
  //       if (checkVar[i].checked) {
  //         count++;
  //         checks.push(checkVar[i].value);
  //       }
  //     }
  //     console.log(checks);
  //   };

  //   checkBoxValue = btnChecking;
  //   function trueCheckbox() {
  //     checkBoxValue = document.getElementById("checkbox").value = true;
  //     return checkBoxValue;
  //   }

     const newTask = {
       id: Math.random().toString(),
       checking: checkBoxValue,
       date: dateTimeValue,
       description: descValue,
     };
     tasks.push(newTask);
     console.log(tasks);
    
   
});
