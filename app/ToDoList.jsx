import { ScrollView, StyleSheet, Text, View } from 'react-native';

// Accept `tasks` as a prop
const ToDoList = ({ tasks }) => {
    return (
        <ScrollView>
            {/* Map over the tasks array to render each task */}
            {tasks.map((task, index) => (
                <View key={index} style={styles.task}>
                    <Text style={styles.taskText}>{task}</Text>
                </View>
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    task: {
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#ccc',
        marginHorizontal: 20, // Added for consistent spacing
    },
    taskText: {
        fontSize: 16,
    },
});

export default ToDoList;