import AsyncStorage from '@react-native-async-storage/async-storage';


export default async function Remove(item) {

  var id = String(item.id);

  try {
    await AsyncStorage.removeItem(id)
  } catch(e) {
    // remove error
  }
;
 
}
