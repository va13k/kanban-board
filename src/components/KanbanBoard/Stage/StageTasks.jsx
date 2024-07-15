import StageButton from './StageButton/StageButton';
import style from './StageTasks.module.css';

export default function StageTasks({ label, tasks, handlerRemoveTask }) {
    return (
        <div id={ label + "Tasks" } className={style.stageTasks}> 
            {tasks.map((task, index) => (
                <div
                    key={index}
                    id={label + "Task" + index}
                    className={style.stageTask + " " + label.split(' ').join('_').toLowerCase() + "Task"}
                >
                    <p className="stageTaskName">{ task }</p>
                    <StageButton onClick={ () => handlerRemoveTask(index) }>x</StageButton>
                </div>
            ))}
        </div>
    );
}