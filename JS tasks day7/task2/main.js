const form = document.getElementById("form");
const input = document.getElementById("Tasks");
const list = document.getElementById("list");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let items = input.value.trim();
  if (items !== "") {
    let newItem = document.createElement("li");
    newItem.textContent = items;
    list.appendChild(newItem);
    //##############################################################
    let comBtn = document.createElement("button");
    comBtn.setAttribute("class", "comBtn");
    comBtn.innerHTML = "Complete";
    newItem.appendChild(comBtn);
    comBtn.style.backgroundColor = "green";

    comBtn.addEventListener("click", () => {
      list.style.color = "grey";
      list.style.textDecoration = "line-through";
      comBtn.style.textDecoration="none"
    });

    //##############################################################
    let delBtn = document.createElement("button");
    delBtn.setAttribute("class", "delBtn");
    delBtn.innerHTML = "delete";
    newItem.appendChild(delBtn);
    delBtn.style.backgroundColor = "red";

    delBtn.addEventListener("click", () => {
      list.removeChild(newItem);
    });
    //##########################################################################

    input.value = "";
    input.focus();
  }
});
