import { useState } from 'react';
import StageHeader from './StageHeader/StageHeader';
import StageTasks from './StageTasks/StageTasks';
import style from './Stage.module.css';

export default function Stage({ stage }) {
    const [currentStage, setCurrentStage] = useState(stage);

    function handleAddTask() {
        const newTask = prompt("Write new task", "Task #" + currentStage.getTasks().length);
        if(newTask) {
            setCurrentStage(currentStage.addTask(newTask));
        }
    }

    function handleRemoveTask(index) {
        const confirmDeletion = confirm("Are you sure to delete this task?");
        if(confirmDeletion) {
            setCurrentStage(currentStage.removeTask(index));
        }
    }

    return (
        <div className={ style.stage + " " + currentStage.getName().split(' ').join('_').toLowerCase() }>
            <StageHeader
                stage={ currentStage }
                handlerAddTask={ handleAddTask }
            />
            <StageTasks
                stage={ currentStage }
                handlerRemoveTask={ handleRemoveTask }
            />
        </div>
    );
}