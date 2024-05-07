const inputBox = document.querySelector("#input-box");

const listContainer = document.querySelector(".list-container");

//function of adding task
function addTask() {
  if (inputBox.value === "") {
    alert("please add your text");
  } else {
    //creating li element
    let createList = document.createElement("li");
    createList.classList = "check-box";
    createList.innerHTML = inputBox.value;
    listContainer.appendChild(createList);
    //Creating cross mark button
    let creatCrossIcon = document.createElement("span");
    creatCrossIcon.innerHTML = "\u00d7";
    createList.appendChild(creatCrossIcon);
  }
  inputBox.value = "";
}
