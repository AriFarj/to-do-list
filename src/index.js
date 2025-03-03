import "./style.css";
import {createNewForm} from "./newTaskForm.js"


const navNewTask = document.querySelector('#new')
navNewTask.addEventListener('click', function (e) {
    createNewForm()
})

export const overlay = document.querySelector('.overlay');

document.addEventListener('click',(e) => {
    if (e.target == overlay) {
        console.log('overlay')
        overlay.style.display = 'none';
        const taskCont = document.querySelector('.task-create-container');
        taskCont.remove();
    }
})