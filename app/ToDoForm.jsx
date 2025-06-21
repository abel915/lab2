import { useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';

// Accept the onAddTask function as a prop
const ToDoForm = ({ onAddTask }) => {
    const [taskText, setTaskText] = useState('');

    const handleAddTask = () => {
        onAddTask(taskText);
        setTaskText(''); // Clear the input field after adding
    };

    return (
        <View style={styles.form}>
            <TextInput
                style={styles.input}
                placeholder="Add a new task..."
                onChangeText={setTaskText} // Update state on text change
                value={taskText} // Bind input value to state
            />
            <Button title="Add" onPress={handleAddTask} />
        </View>
    );
};

const styles = StyleSheet.create({
    form: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 20,
        marginTop: 20,
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ccc',
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginRight: 10,
    },
});

export default ToDoForm;