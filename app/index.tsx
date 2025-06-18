/**
 * My To Do List App
 *
 * @format
 */

import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

// 1. Import your new components
import ToDoList from './ToDoList.jsx';
import ToDoForm from './ToDoForm.jsx';

function App() {
  return (
    <SafeAreaView>
      {/* 2. Render the components */}
      <ToDoList />
      <ToDoForm />
    </SafeAreaView>
  );
}

// Note: No styles are needed here anymore since they were moved
// to their respective components. You can delete the styles const.
const styles = StyleSheet.create({}); // Or remove completely

export default App;