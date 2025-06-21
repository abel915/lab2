/**
 * My To Do List App
 *
 * @format
 */

import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import ToDoForm from './ToDoForm.jsx';
import ToDoList from './ToDoList.jsx';

function App() {
  const [tasks, setTasks] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog',
  ]);

  // Part 1 & 3: The addTask function is implemented here.
  const addTask = (taskText: string) => {
    // Part 4 Enhancement: Prevents adding empty or duplicate tasks.
    if (tasks.includes(taskText) || taskText.trim().length === 0) {
      return;
    }
    setTasks([...tasks, taskText]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentWrapper}>
        <Text style={styles.header}>My To-Do List</Text>
        <ToDoList tasks={tasks} />
        {/* Part 1: The addTask function is passed as a prop here. */}
        <ToDoForm addTask={addTask} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  contentWrapper: {
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
  },
});


export default App;
