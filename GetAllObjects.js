import AsyncStorage from '@react-native-async-storage/async-storage';
import getAllKeys from "./GetAllId";


export default async function GetAllObjects () {


    
    var keys = await getAllKeys();
    let values;
    try {
      values = await AsyncStorage.multiGet(keys)
    return values;
    } catch(e) {
      // read error
    }
   
  }