import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

const ToDoList = ({ tasks }) => {
    return (
        <ScrollView>
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
        backgroundColor: '#ffffff',
        padding: 15,
        borderRadius: 10,
        marginBottom: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    taskText: {
        fontSize: 16,
        color: '#333',
    },
});

export default ToDoList;
