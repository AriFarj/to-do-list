import "./style.css";
import {createNewForm} from "./newTaskForm.js"

const navNewTask = document.querySelector('#new')
navNewTask.addEventListener('click', function (e) {
    createNewForm()
})