import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      
      input: {
        flex: 0.95,
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 10,
        color: '#000',
        borderColor: '#000',
        fontSize: 15,
      },
});

export default styles;