const inputBox = document.querySelector("#input-box");

const listContainer = document.querySelector(".list-container");

//function of adding task
function AddTask() {
  if (inputBox.value === "") {
    alert("please add your text");
  } else {
    //creating li element
    let createList = document.createElement("li");
    createList.classList = "check-box";
    createList.innerHTML = inputBox.value;
    listContainer.appendChild(createList);
    //Creating cross mark button
    let creatCrossIcon = document.createElement("img");
    creatCrossIcon.classList("cross-icon");
    creatCrossIcon.src = "./asset/x-circle-regular-24.png";
    createList.appendChild(creatCrossIcon);
  }
  inputBox.value = "";
}
