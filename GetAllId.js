import AsyncStorage from '@react-native-async-storage/async-storage';


export default async function getAllKeys () {
 
    
  let keys = []
  try {
    keys = await AsyncStorage.getAllKeys()
     return keys;
     } catch(e) {

  }


}