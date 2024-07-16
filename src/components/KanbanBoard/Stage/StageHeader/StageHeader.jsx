import StageButton from '../StageButton/StageButton';
import style from './StageHeader.module.css';

export default function StageHeader({ label, tasksCounter, handlerAddTask }) {
    return (
        <div id={label + "Header"} className={ style.stageHeader }>
            <StageButton onClick = { handlerAddTask }>+</StageButton>
            <h3 className="StageName">{ label }</h3>
            <span className="stageTasksCount">{ tasksCounter }</span>
        </div>
    );
}