const form = document.getElementById('task');

for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(localStorage.length-1-i)
    const element = localStorage.getItem(key);
    createElement(key, element)
}

function newElement(){
    let text = form.querySelector('#inputText').value;
    if (text === "") {
        alert("Введите значение");
        return;
    }
    time = Date.now();
    createElement(time, text);
    localStorage.setItem(time, text);
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
    deleteButton.addEventListener('click', function (){
        localStorage.removeItem(`${task.id}`);
        task.remove();
    });
    task.appendChild(deleteButton);
    form.querySelector(".list").appendChild(task)
}