import React from 'react';
import StageHeader from './StageHeader.jsx';
import StageTasks from './StageTasks.jsx';
import { useState } from 'react';

export default function Stage({ stageName, stageTasks }) {
    const [tasks, setTasks] = useState(stageTasks);

    function handleAddTask() {
        const newTask = prompt("Write new task", "Task #" + tasks.length);
        if(newTask) {
            setTasks((prevTasks) => [...prevTasks, newTask]);
        }
    }

    function handleRemoveTask(index) {
        const updatedTasks = tasks.filter(
            (_task, idx) => idx !== index
        );
        setTasks(updatedTasks);
    }

    return (
        <div className={ "stage " + stageName.split(' ').join('_').toLowerCase() }>
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