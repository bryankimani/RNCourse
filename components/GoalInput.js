import { useState } from 'react';
import { StyleSheet, View, TextInput, Text, Pressable, Modal, Image } from 'react-native';

function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState('');

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    };

    function addGoalHandler() {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    }

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <Image  style={styles.image} source={require('../assets/images/goal.png')} />
                <TextInput placeholder='Your course goal!' 
                    style={styles.textInput} 
                    onChangeText={goalInputHandler}
                    value={enteredGoalText} />
                <View style={styles.buttonContainer}>
                    <Pressable style={styles.buttonCancel} onPress={props.onCancel}>
                        <Text style={styles.textButton}>Cancel</Text>
                    </Pressable>
                    <Pressable style={styles.buttonAdd} onPress={addGoalHandler}>
                        <Text style={styles.textButton}>Add Goal</Text>
                    </Pressable>
                </View>
                
            </View>
        </Modal>
    );
}
export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#311b6b'
    },
    image: {
        width: 100,
        height: 100,
        margin: 20
    },
    textInput: {
        borderWidth: 1,
        color: '#120438',
        borderColor: '#e4d0ff',
        borderRadius: 6,
        backgroundColor: '#e4d0ff',
        width: '100%',
        padding: 16
      },
      buttonContainer: {
        marginTop: 16,
        flexDirection: 'row'
      },
      buttonAdd: {
        flex: 1,
        width: '30%',
        marginHorizontal: 8,
        backgroundColor: "#5e0acc",
        padding: 16,
        borderRadius: 5
      },
      buttonCancel: {
        flex: 1,
        width: '30%',
        marginHorizontal: 8,
        backgroundColor: "#f31282",
        padding: 16,
        borderRadius: 5
      },
      textButton: {
        textAlign: 'center',
        color: "#ffffff",
      }

});