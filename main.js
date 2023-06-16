let inputBox = document.getElementById("input");
let list = document.getElementById("list");

function addTask(){
    if(inputBox.value === ''){
        alert("You must write something!");
    }
    else{
        let list = document.getElementById("list");

        let li = document.createElement("li");
        li.className = "task";
        
        let iconCircle = document.createElement("i");
        iconCircle.className = "fa-regular fa-circle";
        
        let taskText = document.createTextNode(inputBox.value);
        
        let span = document.createElement("span");
            span.className = "close";
            span.innerHTML = "X";
        
        
        li.appendChild(iconCircle);
        li.appendChild(taskText);
        li.appendChild(span);
        
        list.appendChild(li);
        
         
    }
    inputBox.value = "";
    saveData();
}

list.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      let icon = e.target.querySelector("i.fa-regular.fa-circle");
      let checkIcon = e.target.querySelector("i.fa-solid.fa-circle-check");
      if (icon) {
        icon.remove();
      }
      if (checkIcon) {
        checkIcon.remove();
      }
      let iconCircle = document.createElement("i");
      iconCircle.className = "fa-regular fa-circle";
      let iconCheck = document.createElement("i");
      iconCheck.className = "fa-solid fa-circle-check";
      if (e.target.classList.contains("checked")) {
        e.target.prepend(iconCheck);
      } else {
        e.target.prepend(iconCircle);
      }
      saveData();
    } else if (e.target.classList.contains("close")) {
      e.target.closest("li").remove();
      e.stopPropagation();
      saveData();
    }
  }, false);
  
  
  
  function saveData(){
    localStorage.setItem("data", list.innerHTML);
  }

  function showTask(){
    list.innerHTML = localStorage.getItem("data");
  }
  showTask()

