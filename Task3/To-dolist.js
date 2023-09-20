        function addTask() {
            var taskInput = document.getElementById("task");
            var taskText = taskInput.value.trim();
            if (taskText !== "") {
                var todoList = document.getElementById("todo-list");
                var listItem = document.createElement("li");
                listItem.className = "todo-item";
                listItem.innerHTML = `
                    <span>${taskText}</span>
                    <button onclick="removeTask(this)">Remove</button>`;
                    todoList.appendChild(listItem);
                taskInput.value = "";
            }
        }

        function removeTask(button) {
            var listItem = button.parentElement;
            listItem.remove();
        }
