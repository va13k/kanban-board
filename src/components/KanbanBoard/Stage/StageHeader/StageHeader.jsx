import StageButton from '../StageButton/StageButton';
import style from './StageHeader.module.css';

export default function StageHeader({ stage, handlerAddTask }) {
    return (
        <div id={stage.getName() + "Header"} className={ style.stageHeader }>
            <StageButton onClick = { handlerAddTask }>+</StageButton>
            <h3 className="StageName">{ stage.getName() }</h3>
            <span className="stageTasksCount">{ stage.getTasks().length }</span>
        </div>
    );
}