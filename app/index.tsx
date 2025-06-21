/**
 * My To Do List App
 *
 * @format
 */

import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';

import ToDoForm from './ToDoForm.jsx';
import ToDoList from './ToDoList.jsx';

function App() {
  // Initialize state with a list of tasks
  const [tasks, setTasks] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog',
  ]);

  // FIX 1: Add the ': string' type to the taskText parameter.
  const addTask = (taskText: string) => {
    // Prevent adding empty tasks
    if (taskText.trim().length > 0) {
      setTasks([...tasks, taskText]);
    }
  };

  return (
    <SafeAreaView>
      {/* Pass the tasks array to the ToDoList component */}
      <ToDoList tasks={tasks} />

      {/* Pass the addTask function to the ToDoForm component */}
      <ToDoForm onAddTask={addTask} />
    </SafeAreaView>
  );
}

// FIX 2: The unused 'styles' constant has been removed.

export default App;