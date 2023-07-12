import { StyleSheet, StatusBar } from "react-native";

export const styles = StyleSheet.create({
    safeArea:{
      flex:1
    },
    
    container: {
      flex: 1,
      backgroundColor: '#fff',
      marginHorizontal: 20,
      paddingTop: Platform.OS == 'ios' ? 50 : StatusBar.currentHeight,
    },
    
   
    
    listContainer: {
        marginTop: 25,
        gap:15,
    },
    
    containerItem: {
        flexDirection: 'row', 
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 20,
        backgroundColor: '#D4D7ED',
        paddingHorizontal: 10,
        borderRadius: 10,
        color: '#000',
        shadowColor: "#000000",
        shadowOffset: {
          width: 0,
          height: 7,
        },
        shadowOpacity:  0.21,
        shadowRadius: 7.68,
        elevation: 10,
        
    },
    
    listItem: {
        fontSize: 15,
        fontWeight: 'bold',

    },

    list: {
        gap: 15,
        paddingBottom: 20,

    },

    icon: {
        color: 'red',
        fontSize: 18,
    }
  });
  