const addTaskButton = document.getElementById("add-task-btn");
const taskInput = document.getElementById("new-task");
const taskList = document.getElementById("task-list");


addTaskButton.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    if (taskText === "") {
        alert("Please enter a task!")
    }

    else {
        const li = document.createElement("li");
        li.innerHTML = `
                <span class="task-text">${taskText}</span>
                <button class="update-btn">Update</button>
                <button class="remove-btn">Remove</button>
            `;
        taskList.append(li);
        taskInput.value = "";
    }
});

taskList.addEventListener("click", (e) => {
    if (e.target.classList.contains("remove-btn")) {
        e.target.parentElement.remove();
    }

    if (e.target.classList.contains('update-btn')) {
        const taskSpan = e.target.previousElementSibling;
        const currentText = taskSpan.textContent;

        // Prompt the user to enter new text
        const newText = prompt('Edit task:', currentText);

        if (newText !== null) {
            taskSpan.textContent = newText.trim();
        }
    }
});