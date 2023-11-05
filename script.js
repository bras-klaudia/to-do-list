{
    let tasks = [];
    let hideDoneTasks = false;

    const addNewTask = (newTaskContent) => {
        tasks = [
            ...tasks,
            { content: newTaskContent },
        ];
        render();
    };

    const removeTask = (taskIndex) => {
      tasks =   [
        ...tasks.slice(0, taskIndex);
        ...tasks.slice(taskIndex + 1);
      ];
        render();
    };

    const toggleTaskDone = (taskIndex) => {
        tasks = [
       ...tasks.slice(0, taskIndex),
       {
        ...tasks[taskIndex],
        done: !tasks[taskIndex].done,
       }
       ...tasks.slice(taskIndex + 1),

        ];

        render();
    };

    const markAllTaskDone = () => {
        tasks = tasks.map((task) => ({
                ...task,
                done: true,
            }));

            render();
    };

    const toggleHiddenDoneTasks = () => {
        hideDoneTasks = !hideDoneTasks;
        render();
    };

    const bindRemoveEvents = () => {
        const removeButtons = document.querySelectorAll(".js-remove");

        removeButtons.forEach((removeButton, index) => {
            removeButton.addEventListener("click", () =>
                removeTask(index));
        });
    };


    const bindToggleDoneEvents = () => {
        const toggleDoneButtons = document.querySelectorAll(".js-toggleDone");

        toggleDoneButtons.forEach((toggleDoneButton, index) => {
            toggleDoneButton.addEventListener("click", () => {
                toggleTaskDone(index);
            });
        });
    };

    const renderTasks = () => {
        const taskToHTML = task =>  `
          <li class="
          tasks__item${task.done && hideDoneTasks ? "tasks__item--hiden" : " " } js-task
          ">
          
          <button class="tasks__button tasks__button--toggleDone js-toggleDone">
            ${task.done ? "✔" : ""}
          </button>
        
          <span class="${task.done ? "tasks__content--done" : ""}" >
          ${task.content}
          </span>
          <button class="tasks__button tasks__button--remove js-remove"> 🗑</button>

          </li>
        `;
      const tasksElement = document.querySelector("js-tasks");
      tasksElement.innerHTML = tasks.map(taskToHTML).join("");
    };

    const renderButtons = () => {
    };


    const bindButtonsEvents = () => {

        //if must be included

    };


    const render = () => {
        renderTasks();
        renderButtons();

        bindRemoveEvents();
        bindToggleDoneEvents();
        bindButtonsEvents();
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const newTaskElement = document.querySelector(".js-newTask");
        const newTaskContent = newTaskElement.value.trim();

        if (newTaskContent !== "") {
            addNewTask(newTaskContent);
            newTaskElement.value = "";
        }
        newTaskElement.focus();
    };

    const init = () => {
        render();

        const form = document.querySelector(".js-form");

        form.addEventListener("submit", onFormSubmit);
    };

    init();

}

