document.addEventListener("DOMContentLoaded",function(){
    document.getElementById("addtaskbtn").addEventListener("click",addtask)
});
function addtask(){
    let taskinput=document.getElementById("taskinput");
    let tasktext =taskinput.value.trim();


    if(tasktext ===   ""){
        alert("please enter a task");
        return;
    }
    let li = document.createElement("li");



    let taskspan=document.createElement("span");
    taskspan.textContent=tasktext;




    let deletebtn=document.createElement("button");
    deletebtn.textContent="Delete";
    deletebtn.classList.add("delete-btn");
    deletebtn.onclick = function(){
              li.remove();
    };
    li.appendChild(taskspan);
    li.appendChild(deletebtn);
    document.getElementById("tasklist").appendChild(li);


    
    taskinput.value ="";
}