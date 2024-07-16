import { useState } from 'react';
import StageHeader from './StageHeader/StageHeader.jsx';
import StageTasks from './StageTasks/StageTasks.jsx';
import style from './Stage.module.css';

export default function Stage({ stageName, stageTasks }) {
    const [tasks, setTasks] = useState(stageTasks);

    function handleAddTask() {
        const newTask = prompt("Write new task", "Task #" + tasks.length);
        if(newTask) {
            setTasks((prevTasks) => [...prevTasks, newTask]);
        }
    }

    function handleRemoveTask(index) {
        const confirmDeletion = confirm("Are you sure to delete this task?");
        if(confirmDeletion) {
            const updatedTasks = tasks.filter(
                (_task, idx) => idx !== index
            );
            setTasks(updatedTasks);
        }
    }

    return (
        <div className={ style.stage + " " + stageName.split(' ').join('_').toLowerCase() }>
            <StageHeader
                label={ stageName }
                tasksCounter={ tasks.length }
                handlerAddTask={ handleAddTask }
            />
            <StageTasks
                label={ stageName }
                tasks={ tasks }
                handlerRemoveTask={ handleRemoveTask }
            />
        </div>
    );
}