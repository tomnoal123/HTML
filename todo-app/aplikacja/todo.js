const create = document.getElementById('create');
const input = document.getElementById('task-input');

create.addEventListener("click", function () {
        const value = input.value;
    if(value.trim() === ""){
        return;
    }
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(value);
    localStorage.setItem("tasks", JSON.stringify(tasks));

    input.value = "";
});

