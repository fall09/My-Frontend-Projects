// Görev ekleme fonksiyonu
function addTask() {
    const inputBox = document.getElementById("input-box");
    const taskList = document.getElementById("task-list");
    const taskText = inputBox.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    // Yeni bir görev öğesi oluştur
    const taskItem = document.createElement("li");
    taskItem.classList.add("task");

    const taskContent = document.createElement("p");
    taskContent.textContent = taskText;

    const checkIcon = document.createElement("img");
    checkIcon.src = "assets/unchecked.png";
    checkIcon.alt = "Check Icon";
    checkIcon.onclick = () => toggleTask(taskItem, checkIcon);

    const deleteIcon = document.createElement("img");
    deleteIcon.src = "assets/delete.png";
    deleteIcon.alt = "Delete Icon";
    deleteIcon.onclick = () => deleteTask(taskItem);

    taskItem.appendChild(taskContent);
    taskItem.appendChild(checkIcon);
    taskItem.appendChild(deleteIcon);
    taskList.appendChild(taskItem);

    // Giriş kutusunu temizle
    inputBox.value = "";
}

// Görevi tamamlandı olarak işaretleme
function toggleTask(taskItem, checkIcon) {
    if (checkIcon.src.includes("unchecked.png")) {
        checkIcon.src = "assets/checked.png";
        taskItem.classList.add("completed");
    } else {
        checkIcon.src = "assets/checked.png";
        taskItem.classList.remove("completed");
    }
}

function deleteTask(taskItem) {
    taskItem.remove();
}
