const form = document.getElementById('task');

const GetData = (key) => {
    const ls = localStorage.getItem(key)
    if(ls) return JSON.parse(ls)
    return null
}

const SaveData = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value))
}

const startData = GetData('tasks')
if(startData){
    startData.forEach(function({id, text}){
        createElement(id, text)
    })
}

function newElement(){
    let text = form.querySelector('#inputText').value;
    if (text === "") {
        alert("Введите значение");
        return;
    }
    const time = Date.now();
    const item = {text, id:time}
    
    let data = GetData('tasks')
    if(!data){
        data = []   
    }
    data.push(item)
    SaveData('tasks', data)
    createElement(time, text);
}

function RemoveItem(index, item){
    item.remove()
    const newData = GetData('tasks').filter(item => item.id !== index)
    SaveData('tasks', newData)
}

function createElement(index, text) {
    let task = document.createElement("li");
    task.id = `${index}`
    task.innerText = text;
    task.addEventListener('click', function (){
        task.className = (task.className == 'done' ? 'none' : "done");
    });
    let deleteButton = document.createElement("span");
    deleteButton.innerText = 'ʘ'
    deleteButton.onclick = () => {RemoveItem(index, task)}
    task.appendChild(deleteButton);
    form.querySelector(".list").appendChild(task)
}

function clearList(){
    SaveData('tasks', [])
    document.querySelectorAll('.list li').forEach(item => item.remove())
}