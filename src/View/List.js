import { StyleSheet} from 'react-native';


export default Style = StyleSheet.create({
   
    container: {
      flex: 1,
      
    },

    icon:{
      flex:1,
      position: "absolute",
      fontSize: 30,
      top: 60,
      left: 160,
     
      
    },

    icon2:{
      flex:1,
      position: "absolute",
      fontSize: 30,
      top: 60,
      left: 230
      
    },

    container2: {
      flex: 1,
      margin: 5,
      shadowColor: 'black',
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 6,
      shadowOpacity: 0.26,
      elevation: 8,
      backgroundColor: 'white',
      padding: 10,
      borderRadius: 30
          },

    text: {
      flex:1,
      position: "absolute",
      fontSize: 13,
      top: 15,
      alignItems:'center',
      left: 120
    },
    
  image: {
    padding:50,
    position: "relative",
    width: 66,
    height: 58,
    borderRadius: 30,
    overflow: 'hidden',
    backgroundColor: 'white',
    
  },
  });