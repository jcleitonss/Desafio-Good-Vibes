import {ScrollView,StyleSheet, Text, View, Image} from 'react-native';
import { useRoute } from '@react-navigation/native';
import Style from "./Style/InfoView"


const styles = Style; 

export default function InfoView() {

  const route = useRoute();


    return (

      <ScrollView>
      <View style={styles.container}>

      <View style={styles.container2}>
      
      <Image style={styles.image} 
         source={{
          uri: route.params.data.image}}

      /> 
      </View>


      <View style={styles.container3}>
      
      <Text style={styles.title}>Name</Text>
  
      <View style={styles.container4}>
      <Text>{route.params.data.name}</Text>

        </View>
      
      </View>
   
     
      <View style={styles.container3}>
      
      <Text style={styles.title}>Species</Text>
  
      <View style={styles.container4}>
      <Text>{route.params.data.species}</Text>

        </View>
      
      </View>
      
      <View style={styles.container3}>
      
      <Text style={styles.title}>Type</Text>
  
      <View style={styles.container4}>
      <Text>{route.params.data.type}</Text>

        </View>
      
      </View>

      <View style={styles.container3}>
      
      <Text style={styles.title}>Gender</Text>
  
      <View style={styles.container4}>
      <Text>{route.params.data.gender}</Text>

        </View>
      
      </View>

      <View style={styles.container3}>
      
      <Text style={styles.title}>Origin</Text>
  
      <View style={styles.container4}>
      <Text>{route.params.data.origin.name}</Text>

        </View>
      
      </View>

      <View style={styles.container3}>
      
      <Text style={styles.title}>Atual Location</Text>
  
      <View style={styles.container4}>
      <Text>{route.params.data.location.name}</Text>

        </View>
      
      </View>

      <View style={styles.container3}>
      
      <Text style={styles.title}>Episodies</Text>
  
      <View style={styles.container5}>
 
          { route.params.data.episode.map((item)=> <Text >{item}</Text>)}
          
        </View>
      
      </View>

      </View>
      </ScrollView>
    );
  }

