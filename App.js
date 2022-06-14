import { useState } from 'react';
import { StyleSheet, View, FlatList, Pressable, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function endAddGoalHandler() {
    setModalIsVisible(false);
  }

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals, 
      {text: enteredGoalText, id: Math.random().toString()}
    ]);
    endAddGoalHandler();
  };

  function deleteGoalHandler(id) {
      setCourseGoals(currentCourseGoals => {
        return currentCourseGoals.filter((goal) => goal.id !== id);
      });
  };
  
  return (
    <>
    <StatusBar style='light' />
    <View style={styles.appContainer}>
      <Pressable onPress={startAddGoalHandler} style={styles.addNewGoalButton}>
        <Text style={styles.addNewGoalText}>Add New Goal</Text>
      </Pressable>
      <GoalInput visible={modalIsVisible} onAddGoal={addGoalHandler} onCancel={endAddGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList 
          data={courseGoals} 
          renderItem={(itemData) => {
            return (
              <GoalItem 
                text={itemData.item.text} 
                id={itemData.item.id}
                onDeleteItem={deleteGoalHandler} />
            );
           }}
           keyExtractor={(item, index) => {
             return  item.id;
           }}
         />
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 15
  },
  goalsContainer: {
    flex: 6
  },
  addNewGoalButton: {
    padding: 15,
    backgroundColor: "#a065ec",
    borderRadius: 5
  },
  addNewGoalText: {
    textAlign: 'center',
    color: "#ffffff"
  }
});
