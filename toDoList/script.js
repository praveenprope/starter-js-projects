const inputValue = document.querySelector('#todo-input');
const addButton = document.querySelector('#add-btn');
const toDoList = document.querySelector('#todo-list');

addButton.addEventListener('click', () => {
    if (inputValue.value.trim() !== "") {
        addTODO();
    } else {
        console.log('🤔 Task cannot be empty!');
    }
});

const addTODO = () => {
    let deleteButton = document.createElement('button');
    let editButton = document.createElement('button');
    let saveButton = document.createElement('button');
    let textValue = inputValue.value;
    inputValue.value = "";
    let newToDo = document.createElement('li');
    newToDo.textContent = textValue;

    deleteButton.textContent = "❌ Delete";
    editButton.textContent = "✏️ Edit";
    saveButton.textContent = "💾 Save";

    newToDo.appendChild(deleteButton);
    newToDo.appendChild(editButton);
    toDoList.appendChild(newToDo);

    deleteButton.addEventListener('click', (e) => {
        e.target.parentNode.remove();
    });

    let currentTask;

    editButton.addEventListener('click', (e) => {
        currentTask = e.target.parentNode.firstChild;
        inputValue.value = currentTask.textContent;
        addButton.replaceWith(saveButton);
    });

    saveButton.addEventListener('click', () => {
        if (inputValue.value.trim() !== "") {
            currentTask.textContent = inputValue.value.trim();
            inputValue.value = "";
            saveButton.replaceWith(addButton);
        } else {
            console.log('🤔 Task cannot be empty!');
        }
    });
};
