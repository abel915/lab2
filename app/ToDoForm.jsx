import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

// Part 1: The addTask prop is destructured here.
const ToDoForm = ({ addTask }) => {
    // Part 2: State is managed for the input field.
    const [taskText, setTaskText] = useState('');

    const handleAddTask = () => {
        addTask(taskText);
        // Part 4 Enhancement: The input is cleared after submission.
        setTaskText('');
    };

    return (
        <View style={styles.form}>
            {/* Part 2: The TextInput is fully implemented. */}
            <TextInput
                style={styles.input}
                placeholder="Add a new task..."
                onChangeText={setTaskText}
                value={taskText}
                placeholderTextColor="#999"
            />
            {/* Part 2: The button calls the handler on press. */}
            <Pressable style={styles.addButton} onPress={handleAddTask}>
                <Text style={styles.addButtonText}>Add</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    form: {
        flexDirection: 'row',
        marginTop: 20,
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#dcdcdc',
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginRight: 10,
        borderRadius: 10,
        backgroundColor: '#fff',
        fontSize: 16,
    },
    addButton: {
        backgroundColor: '#007AFF',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    addButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default ToDoForm;
