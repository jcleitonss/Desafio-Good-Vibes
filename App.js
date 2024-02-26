
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MaterialIcons, Fontisto } from "@expo/vector-icons";
import Home from './src/View/Home.js';
import Favorites from './src/View/Favorites';
import InfoView from './src/View/InfoView.js';



const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App({navigation}) {

  return(



<NavigationContainer  >
   
<Tab.Navigator initialRouteName="CHARACTERS" >


      <Tab.Screen
        name="CHARACTERS"
        component={MainStackNavigator}
        headerTitleAlign={"center"}    options={{   
           tabBarIcon: ({ tintColor }) => (
            <Fontisto name="nav-icon-list" size={24} color="blue" />), 
         headerTitleAlign: "center",
       
        headerTitle: ("R&M"),
      
     }}
        // options={{
        //   tabBarIcon: 'home-account',
        // }}
      />
   
      <Tab.Screen
        name="FAVORITES"
        component={Favorites}
         headerTitleAlign={"center"}   options={{  
        tabBarIcon: ({ tintColor }) => ( 
       <MaterialIcons name="favorite" size={28} color="blue" /> ),
          headerTitleAlign: "center",
        headerTitle: ("FAVORITES"),   }}
        


        // options={{
        //   tabBarIcon: 'bell-outline',
        // }}
      />
      
    </Tab.Navigator>

</NavigationContainer >);
  
}




const  MainStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home" >
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}
       />
      <Stack.Screen name="Info" component={InfoView}  options={{ headerShown: false }} />

    </Stack.Navigator>
  );
}
