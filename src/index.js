import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, StatusBar, Platform, SafeAreaView, FlatList, Modal, TouchableOpacity } from 'react-native';
import styles from './styles';
import { useState } from 'react';
import { InputTask } from './components';

export default function App() {
  const [task, setTask] = useState('');
  const [borderColor, setBordercolor] = useState('#C5C9E7');
  const [tasks, setTasks] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  const onHandlerFocus = () => {
    setBordercolor('#424D9E');
  };

  const onHandlerBlur = () => {
    setBordercolor('#C5C9E7');
  };

  const onHandlerChangetext = (Text) => {
    setTask(Text)
  };
  
  const onHandlercreateTask = () => {
    console.log("onHandlerCreateTask");
    console.warn({ task });
    setTasks([
      ...tasks,
      {
        id: Date.now().toString(),
        value: task,
      },
    ]);

    setTask('');
  };
  const onHandlerModal = (item) => {
    setIsVisible(true)
    setSelectedTask(item)
  };

  const onHandleDelete = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    setIsVisible(false);
  };

const renderItem = ({ item }) => (
  <TouchableOpacity onPress={() => onHandlerModal(item.id)} style={styles.containerItem}>
  <Text style={styles.listItem}>{item.value}</Text>
  <Text style={styles.icon}>x</Text>
  </TouchableOpacity>
);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <InputTask 
        onHandlerBlur={onHandlerBlur}
        onHandlerChangetext={onHandlerChangetext}
        onHandlercreateTask={onHandlercreateTask}
        onHandlerFocus={onHandlerFocus}
        task={task}
        />
          <FlatList
            data={tasks}
            renderItem={renderItem}
            contentContainerStyle={styles.list}
            style={styles.listContainer}
            alwaysBounceVertical={false}
            keyExtractor={(item) => item.id}
          />
        
      </View>
      <Modal visible={isVisible} animationType='slide'>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Detalle</Text>
          <View style={styles.modalDetailContainer}>
            <Text style={styles.modalDetailMessage}>Estas seguto de querer borrar el item?</Text>
            <Text>{selectedTask?.value}</Text>
          </View>
          <View style={styles.modalButtonContainer}>
            <Button
              title='cancelar'
              color='blue'
              onPress={() => setIsVisible(false)}
              style={styles.Button}
              />
            
            <Button 
            title="Eliminar" 
            color="red" 
            onPress={() => onHandleDelete(selectedTask?.id)
            } />
            

          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

