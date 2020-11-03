import { App } from './app';
import { parse, formatDistanceToNow } from 'date-fns';

const Doc = (function () {
  // Tasks DOM
  const itemBoard = document.getElementById('item-board');
  const taskModal = document.getElementById('task-modal');
  const taskForm = document.getElementById('task-form');
  document.getElementById('due-time').defaultValue = '18:00';
  // Projects DOM
  const projectList = document.getElementById('project-list');
  const projModal = document.getElementById('project-modal');
  const projForm = document.getElementById('project-form');

  const closeBtn = document.querySelectorAll('.close-btn');
  const projMenu = document.getElementById('project-menu')

  closeBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
      projModal.style.height = '0%';
      taskModal.style.height = '0%';
    });
  });

  document.getElementById('filter-btn').addEventListener('click', () => {
    document.getElementById('filterContent').classList.toggle('show');
  });

  document.getElementById('filter-done').addEventListener('click', () => {
    App.toggleFilter('done')
    displayTasks()
    document.getElementById('doneTick').classList.toggle('hide')
  });

  document.getElementById('filter-urgent').addEventListener('click', () => {
    App.toggleFilter('urgent')
    displayTasks()
    document.getElementById('urgentTick').classList.toggle('hide')

  });

  document.getElementById('sort-btn').addEventListener('click', () => {
    document.getElementById('sortContent').classList.toggle('show');
  });

  document.getElementById('sort-due').addEventListener('click', () => {
    App.dueDateSort()
    displayTasks()
  });

  document.getElementById('sort-added').addEventListener('click', () => {
    App.addedDateSort()
    displayTasks()
  });

  window.onclick = function (event) {
    let sortContent = document.getElementById('sortContent')
    let filterContent = document.getElementById('filterContent')

    if (!event.target.matches('.btn')) {
      if (sortContent.classList.contains('show')) {
        sortContent.classList.remove('show');
      }
      if (filterContent.classList.contains('show')) {
        filterContent.classList.remove('show');
      }
    }

    if (event.target.matches('.project-list li')) {
      if (projMenu.classList.contains('show-menu')) {
        projMenu.classList.remove('show-menu')
      }
    }
  }

  document.getElementById('menu-btn').addEventListener('click', () => {
    projMenu.classList.toggle('show-menu');
  })

  document.getElementById('new-task-btn').addEventListener('click', () => {
    taskModal.style.height = '100%';
  });

  document.getElementById('task-submit').addEventListener('click', () => {
    taskModal.style.display = 'none';
    const newTask = App.newItem(taskForm);
    taskForm.reset();
    appendTask(newTask);
  });

  document.getElementById('new-proj-btn').addEventListener('click', () => {
    projModal.style.height = '100%';
  });

  document.getElementById('project-submit').addEventListener('click', () => {
    projModal.style.display = 'none';
    const newProject = App.addNewProject(projForm.title.value);
    appendProject(newProject);
    projForm.reset();
    displayTasks();
  });

  document.getElementById('proj-del-btn').addEventListener('click', () => {
    if (confirm("Delete project?")) {
      App.deleteProject();
      displayProjectList();
      displayTasks();
    }
  });

  document.getElementById('mobile-add-btn').addEventListener('click', () => {
    taskModal.style.height = '100%';
  });

  function appendProject(project) {
    const li = document.createElement('li');
    li.textContent = project.title;
    li.setAttribute('class', 'project-title');
    li.addEventListener('click', () => {
      App.setActiveProject(project);
      highlightTitle(li);
      displayTasks();
    });
    if (project === App.getActiveProject()) {
      highlightTitle(li);
    }
    projectList.appendChild(li);
  }

  function appendTask(task) {
    let dueDate
    try {
      dueDate = 'Due ' + formatDistanceToNow(
        parse(task.dueDate, 'yyyy-MM-dd HH:mm', new Date()), { addSuffix: true })
        + ` (${task.dueDate})`;
    } catch {
      dueDate = 'No deadline specified'
    }
    const taskCard = document.createElement('div');
    const delBtn = document.createElement('div');
    const taskNotes = document.createElement('div')
    const doneBtn = document.createElement('div')
    const log = document.createElement('div')
    log.textContent = task.log
    log.classList.add('log', 'hide')
    taskNotes.innerHTML = `<p class="task-notes">${task.notes}</p>`
    taskNotes.setAttribute('class', 'hide')
    taskCard.setAttribute('class', 'task-card');
    delBtn.setAttribute('class', 'del-btn');
    delBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
    delBtn.addEventListener('click', () => {
      App.deleteTask(task);
      displayTasks();
    });
    doneBtn.setAttribute('class', 'done-btn')
    doneBtn.innerHTML = '<i class="far fa-check-circle"></i>'
    doneBtn.addEventListener('click', () => {
      App.toggleDone(task)
      doneBtn.classList.toggle('task-done')
      taskCard.classList.toggle('task-card-done')
      if (App.getFilters().done == true) {
        taskCard.classList.toggle('hide')
      }
    })

    taskCard.innerHTML = `
        <h3 class="task-title">${task.title}</h3>
        <div class="task-content"><span class="task-due">
        <time>${dueDate}</time></span>
        `;

    if (task.priority == 'high') {
      taskCard.classList.add('urgent');
    } else if (task.priority == 'med') {
      taskCard.classList.add('medium-pri');
    } else if (task.priority == 'low') {
      taskCard.classList.add('low-pri');
    }

    if (task.done === true) {
      taskCard.classList.add('task-card-done')
      doneBtn.classList.add('task-done')
    }
    taskCard.appendChild(doneBtn)
    taskCard.appendChild(delBtn);
    taskCard.appendChild(taskNotes);
    taskCard.appendChild(log)

    itemBoard.appendChild(taskCard);
    taskCard.addEventListener('click', () => {
      taskNotes.classList.toggle('hide')
    });
  }

  function displayProjectList() {
    projectList.textContent = '';
    for (const i of App.getProjects()) {
      appendProject(i);
    }
  }

  function displayTasks(taskList = App.getActiveItems()) {
    document.getElementById('project-title').textContent =
      App.getActiveProject().title;
    itemBoard.textContent = '';

    if (taskList.length == 0) {
      itemBoard.textContent =
        "Press the '+' button to add a task to this project."
    } else {
      for (const i of taskList) {
        appendTask(i);
      }
    }
  }

  function highlightTitle(li) {
    const projectTitles = document.querySelectorAll('.project-title');
    for (const i of projectTitles) {
      i.style.backgroundColor = 'transparent';
    }
    li.style.backgroundColor = '#a7dbf3';
  }

  return {
    displayProjectList,
    displayTasks
  }
})();

export { Doc }