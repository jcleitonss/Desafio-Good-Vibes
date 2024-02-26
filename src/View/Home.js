import {SafeAreaView } from 'react-native';
import { useState} from "react";
import List from "./Components/List";



export default function Home({navigation}) {
    
const [Data, setData] = useState(null);



const CallChild = () => {
  Load();
};


async function Load() {
 
  await fetch("https://rickandmortyapi.com/api/character")
  .then((response) => response.json())
  .then((data) => setData(data.results) )
 
 
 

}


  
       if (Data == null) {

        Load()
         
       }

  
      if (Data != null) {  

       

        // console.log(message)
        return (

        <SafeAreaView >
  
         <List data={Data} f={CallChild} navigation={navigation} />


        </SafeAreaView>
      );
      
    }
   }

  
   
