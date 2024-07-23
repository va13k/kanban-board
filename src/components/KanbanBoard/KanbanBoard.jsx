import StageComponent from './Stage/Stage'
import Stage from './Stage.js'

export default function KanbanBoard() {
    const plannedStage = new Stage(
        "Planned",
        [
            "Email team for updates",
            "Send out meeting request",
            "Prepare the presentation for the team",
            "Book conference room",
        ]
    );

    const inProgressStage = new Stage(
        "In progress",
        [
            "Remove bugs from app",
            "Add features to the project",
        ]
    );

    const doneStage = new Stage(
        "Done",
        [
        "Add backlog to the project",
        ]
    );

    const allStages = [plannedStage, inProgressStage, doneStage];

    return (
        <main>
            {
                allStages.map(
                    (stage, index) => <StageComponent key={ index } stage={ stage } />
                )
            }
        </main>
    );
}