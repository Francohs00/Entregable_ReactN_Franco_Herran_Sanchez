import { Button, TextInput, View } from "react-native"
import { styles } from './styles';


const InputTask = ({ onHandlerFocus, onHandlerBlur, onHandlerChangetext, task, onHandlercreateTask}) => {
    return(
        <View style={styles.inputContainer}>
        <TextInput 
        style={styles.input} 
        placeholder='agregar item'
        autoCapitalize='none'
        autoCorrect={false}
        cursorColor='#424D9E'
        selectionColor='#D4D7ED'
        placeholderTextColor='#C5C9E7'
        onFocus={onHandlerFocus}
        onBlur={onHandlerBlur} 
        onChangeText={onHandlerChangetext}
        value={task}
         />
        <Button disabled={task.length===0} title='Crear' color='blue' onPress={onHandlercreateTask} />
      </View>
    );
};

export default InputTask;