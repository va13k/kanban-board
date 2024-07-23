import StageButton from '../StageButton/StageButton';
import style from './StageTasks.module.css';

export default function StageTasks({ stage, handlerRemoveTask }) {
    return (
        <div id={ stage.getName() + "Tasks" } className={style.stageTasks}> 
            {stage.getTasks().map((task, index) => (
                <div
                    key={index}
                    id={ stage.getName() + "Task" + index}
                    className={style.stageTask + " " + stage.getName().split(' ').join('_').toLowerCase() + "Task"}
                >
                    <p className="stageTaskName">{ task }</p>
                    <StageButton onClick={ () => handlerRemoveTask(index) }>x</StageButton>
                </div>
            ))}
        </div>
    );
}