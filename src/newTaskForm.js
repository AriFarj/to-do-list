import { newTask } from "./newTaskClass"

// respone to new task button
// then build dom elements for form

export function createNewForm() {
    console.log("createNewForm")
    const contentContainer = document.querySelector('.content-container');

    const taskContainer = document.createElement('div');
    taskContainer.classList.add('task-create-container');
    contentContainer.appendChild(taskContainer);
    const taskForm = document.createElement('div');
    taskForm.classList.add('task-form');
    taskContainer.appendChild(taskForm);

    const taskheader = document.createElement('div');
    taskheader.classList.add('new-task-header');
    taskForm.appendChild(taskheader);

    const taskH2 = document.createElement('h2');
    taskH2.innerText = "Create a New Task";
    taskheader.appendChild(taskH2);

    const inputFields = document.createElement('div');
    inputFields.classList.add('input-fields');
    taskForm.appendChild(inputFields);

    const taskTitleInput = document.createElement('input')
    taskTitleInput.setAttribute('type', 'text');
    taskTitleInput.setAttribute('name', "task-title");
    taskTitleInput.setAttribute('placeholder', 'Title');
    taskTitleInput.setAttribute('maxlength', '30');
    inputFields.appendChild(taskTitleInput);

    const taskTextArea = document.createElement('textarea');
    taskTextArea.setAttribute('name', 'task-description');
    taskTextArea.setAttribute('placeholder', 'To Do...')
    inputFields.appendChild(taskTextArea);

    const optionsContainer = document.createElement('div');
    optionsContainer.classList.add('options-container');
    taskForm.appendChild(optionsContainer);

    const fieldsContainer = document.createElement('div');
    fieldsContainer.classList.add('fields-container');
    optionsContainer.appendChild(fieldsContainer)

    const fieldSet1 = document.createElement('fieldset');
    fieldsContainer.appendChild(fieldSet1);
    const fieldSet2 = document.createElement('fieldset');
    fieldsContainer.appendChild(fieldSet2);

    const dateLegend = document.createElement('legend');
    dateLegend.innerText = 'Due Date';
    fieldSet1.appendChild(dateLegend);

    const dateInput = document.createElement('input');
    dateInput.type = 'date'
    dateInput.id = 'due-date';
    fieldSet1.appendChild(dateInput);

    const priorityLegend = document.createElement('legend');
    priorityLegend.innerText = 'Priority'
    fieldSet2.appendChild(priorityLegend);

    const prioritySelect = document.createElement('select');
    fieldSet2.appendChild(prioritySelect);

    const highPriority = document.createElement('option');
    const mediumPriority = document.createElement('option');
    const lowPriority = document.createElement('option');

    highPriority.value = 'high';
    highPriority.innerText= 'High';
    mediumPriority.value = 'medium';
    mediumPriority.innerText= 'Medium';
    lowPriority.value = 'low';
    lowPriority.innerText= 'Low';

    prioritySelect.appendChild(highPriority);
    prioritySelect.appendChild(mediumPriority);
    prioritySelect.appendChild(lowPriority);

    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('button-container');
    optionsContainer.appendChild(buttonContainer);

    const buttonConfirm = document.createElement('button');
    buttonConfirm.title = 'add  task';
    buttonConfirm.innerText =  'V';
    buttonContainer.appendChild(buttonConfirm);

    const buttonClose = document.createElement('button');
    buttonClose.title = 'close';
    buttonClose.innerText =  'X';
    buttonContainer.appendChild(buttonClose);
}

