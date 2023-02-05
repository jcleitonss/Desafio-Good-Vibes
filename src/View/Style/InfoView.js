import { StyleSheet} from 'react-native';

  export default Style = StyleSheet.create({
   
    container: {
      flex: 1,
      alignItems:'center',
      margin: 10,
        },

    container2: {
      flex: 1,
      shadowColor: 'black',
      shadowRadius: 6,
      elevation: 15,
      backgroundColor: 'white',
     borderRadius: 50
      },
  
      container3: {
      flex: 1,
      margin: 30,
      alignItems:'center',
      borderColor: 'black',
      borderWidth: 3,
      shadowColor: 'black',
      shadowOffset: { width: 2, height: 3 },
      shadowRadius: 6,
      width: 340,
      elevation: 15,
      backgroundColor: 'white',
      borderRadius: 30
      },            
  

     container4: {
     flex: 1,
     margin: 20,
     alignItems:'center',
     position:'absolute',
     top:30,
     shadowColor: 'black',
     shadowOffset: { width: 2, height: 3 },
     shadowRadius: 6,
     width: 340,
     elevation: 15,
     backgroundColor: 'white',
     padding:10,
     borderRadius: 50
     },      
                      
     title: {
     fontSize:26,
     height:70         
     },     
                            
                            
     container5: {
     margin: -15,
     alignItems:'center',
     shadowColor: 'black',
     shadowOffset: { width: 2, height: 3 },
     shadowRadius: 6,
     width: 340,
     elevation: 15,
     backgroundColor: 'white',
     padding:10,
     borderRadius: 50
     },      
                                  
     title: {
     fontSize:26,
     height:70
     },    
 
   
    
  image: {
    position: "relative",
    width: 200,
    height: 180,
    borderRadius: 30,
    margin:15,
    borderColor: 'black',
    borderWidth: 5,
  },

  });
