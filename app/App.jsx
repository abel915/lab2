import { useState } from 'react';
import ToDoList from './ToDoList';

function App() {
    // Part A: Define a state variable and initialize it with a hard-coded list of tasks.
    const [tasks, setTasks] = useState([
        'Do laundry',
        'Go to gym',
        'Walk dog'
    ]);

    return (
        <div className="App">
            <h1>My To-Do List</h1>
            {/* Part B, Step 1: Pass the tasks array to the ToDoList component using the tasks prop. */}
            <ToDoList tasks={tasks} />
        </div>
    );
}

export default App;