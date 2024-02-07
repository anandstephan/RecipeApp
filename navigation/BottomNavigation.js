import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Favorite from '../screens/home/Favorite';
import Home from '../screens/home/Home';
import { GlobalStyles } from '../constants/styles';
import { View,Text } from 'react-native';
import Info from '../screens/home/Info';
const BottomTabs = createBottomTabNavigator()
const Stack = createStackNavigator()

const BottomNav = () =>{
  return <BottomTabs.Navigator
  >
  <BottomTabs.Screen 
  name='Home' 
  component={Home}
/>
  <BottomTabs.Screen 
  name='Fav' 
  component={Favorite}

  />
</BottomTabs.Navigator>
}

const BottomNavigation= () =>{
  return  <Stack.Navigator>
  <Stack.Screen name="Bottom" component={BottomNav}
options={{
headerShown:false
}}/>
<Stack.Screen name="Info" component={Info}/>

</Stack.Navigator>
}

export default BottomNavigation