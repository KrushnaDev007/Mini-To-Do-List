let tasks = [];

const input = document.getElementById("taskInput");
const list = document.getElementById("list");
const error = document.getElementById("error");

function render() {
  list.innerHTML = "";
  tasks.forEach((task, i) => {
    const li = document.createElement("li");
    if (task.done) li.classList.add("done");

    const span = document.createElement("span");
    span.textContent = task.text;
    span.onclick = () => { tasks[i].done = !tasks[i].done; render(); };

    const del = document.createElement("button");
    del.textContent = "Delete";
    del.onclick = () => { tasks.splice(i, 1); render(); };

    li.append(span, del);
    list.appendChild(li);
  });
}

function addTask() {
  const text = input.value.trim();
  if (!text) { error.textContent = "Please enter a task."; return; }
  error.textContent = "";
  tasks.push({ text, done: false });
  input.value = "";
  render();
}

document.getElementById("addBtn").onclick = addTask;
input.addEventListener("keydown", e => { if (e.key === "Enter") addTask(); });