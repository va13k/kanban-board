import Stage from './Stage/Stage'

export default function KanbanBoard() {
    const plannedTasks = [
        "Email team for updates",
        "Send out meeting request",
        "Prepare the presentation for the team",
        "Book conference room",
    ];

    const inProgressTasks = [
        "Remove bugs from app",
        "Add features to the project",
    ];

    const doneTasks = [
        "Add backlog to the project",
    ];

    return (
        <main>
            <Stage 
                key="0"
                stageName="Planned"
                stageTasks={ plannedTasks }
            />
            <Stage 
                key="1" 
                stageName="In progress"
                stageTasks={ inProgressTasks }
            />
            <Stage
                key="2"
                stageName="Done"
                stageTasks={ doneTasks }
            />
        </main>
    );
}