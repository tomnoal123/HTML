const list = document.getElementById('list');
const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
if (tasks.length === 0) {
    const li = document.createElement("li");
    li.textContent = "Brak zadań";
    list.appendChild(li);
}else{
tasks.forEach((task, index) =>{
    const li = document.createElement("li");
    li.textContent = task;
    list.appendChild(li);
    li.textContent = `${index + 1}. ${task}`;
    const btn = document.createElement("button");
    btn.style.marginLeft = "20px";
    btn.style.backgroundColor = "red";
    btn.style.padding = "10px 15px"
    btn.textContent = "Delete task";
    btn.style.color = "white";
    btn.style.borderColor = "#941E04";
    btn.style.borderStyle = "solid";
    btn.style.fontFamily = "Poppins, sans-serif";
    btn.style.borderRadius = "15px";
    btn.style.cursor = "pointer";
    btn.addEventListener("mouseenter", () =>{
        btn.style.opacity = "0.7";
        btn.style.transform = "scale(1.05)";
    btn.addEventListener("mouseleave", () => {
    btn.style.backgroundColor = "red";
    btn.style.transform = "scale(1)";
});
    })
    btn.addEventListener("click", () =>{
        tasks.splice(index, 1);
            localStorage.setItem("tasks", JSON.stringify(tasks));
            location.reload();
    });
    list.appendChild(li);
    li.append(btn);
})};
