const inputBox = document.getElementById("input-box");
const listCointer = document.getElementById("list-container");

function addTask(){
    if (inputBox.value ==''){
        alert("Write Something");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listCointer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

listCointer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
      e.target.classList.toggle("checked");
    }
    else if(e.target.tagName ==="SPAN"){
      e.target.parentElement.remove();
    }  
  },false);

  function saveData(){
    localStorage.setItem("data", listCointer.innerHTML);
  }
  function showTask(){
    listCointer.innerHTML = localStorage.getItem("data");

  }
  showTask();   