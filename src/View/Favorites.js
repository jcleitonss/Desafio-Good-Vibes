import {SafeAreaView} from 'react-native';
import GetAllObjects from '../Model/GetAllObjects';
import { useState} from "react";
import List from './Components/List';




export default function Favorites({navigation}) {
  const [Data, setData] = useState(null);

  
  async function GetAll(){
   
         


    var data;
    var result;

    data = await  GetAllObjects();
    
       result = data.map(c => JSON.parse(c[1]))
       setData(result);
   

  };


  
   
  
  if (Data == null) {
    GetAll();
    
  }

  if (Data != null) {
 
 
  return (

    <SafeAreaView >
      
     <List data={Data} navigation={navigation} />
  

    </SafeAreaView>
  );
}
  }
  
