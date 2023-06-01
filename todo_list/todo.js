let list = [];
let ulList = document.getElementById('list');

function add(){
    let task = document.getElementById('task').value;
    if(task===""){
        alert("Task input should not be empty");
    } else {
        let li = document.createElement('li');
        li.textContent = task;
        ulList.appendChild(li);
        task = '';
        document.getElementById('task').value = '';
    }
    
}
