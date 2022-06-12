import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView } from 'react-native';

export default function App() {
const [enteredGoalText, setEnteredGoalText] = useState('');
const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  };

  function addGoalHandler() {
    setCourseGoals((currentCourseGoals) => [...currentCourseGoals, enteredGoalText]);
  };
  
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput placeholder='Your course goal!' style={styles.textInput} onChangeText={goalInputHandler}/>
        <Button title='Add Goal' onPress={addGoalHandler}/>
      </View>
      <View style={styles.goalsContainer}>
        <ScrollView>
          { courseGoals.map((goal) => (
            <View style={styles.goalItem} key={goal}>
              <Text style={styles.goalText}>{goal}</Text>
            </View>
            ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 15
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '75%',
    marginRight: 8,
    padding: 8
  },
  goalsContainer: {
    flex: 6
  },
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc'
  },
  goalText: {
    color: '#ffffff'
  }
});
