import AsyncStorage from '@react-native-async-storage/async-storage';


export default async function Save(item) {

  var id = String(item.id);


  try {
    const jsonValue = JSON.stringify(item);
    await AsyncStorage.setItem(id, jsonValue);
  
  } catch (e) {
    // save error
  }

;
 
}
