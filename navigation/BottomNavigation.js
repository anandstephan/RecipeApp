import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Favorite from '../screens/home/Favorite';
import Home from '../screens/home/Home';
import { GlobalStyles } from '../constants/styles';
import { View,Text,Pressable } from 'react-native';
import Info from '../screens/home/Info';
import { deleteUserDetail } from '../storage/storage';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon1 from 'react-native-vector-icons/Entypo';
import Icon2 from 'react-native-vector-icons/MaterialIcons';

const BottomTabs = createBottomTabNavigator()
const Stack = createStackNavigator()

const BottomNav = ({setIsLogin}) =>{
  return <BottomTabs.Navigator
  screenOptions={{
    headerStyle:{backgroundColor:GlobalStyles.colors.primary500},
    headerTintColor:"white",
    tabBarStyle:{backgroundColor:GlobalStyles.colors.primary500},
    tabBarActiveTintColor:GlobalStyles.colors.accent500,
  }}
  >
  <BottomTabs.Screen 
  name='Home' 
  component={Home}
  options={{
    tabBarIcon:(({color,size}) =>     <Icon1 name="home" size={size} color={color} />),
    headerRight: () => (
      <View style={{marginRight:20}}>
        
      <Pressable onPress={()=>{
        deleteUserDetail()
        setIsLogin(prev=>!prev)
      }}>
      <Icon name="logout" size={30} color="#FFFFFF" />
      </Pressable>
    
      </View>
    ),
  }}
/>
  <BottomTabs.Screen 
  name='Fav' 
  component={Favorite}
  options={{
    tabBarIcon:(({color,size}) =>     <Icon2 name="favorite" size={size} color={color} />),
    headerRight: () => (
      <View style={{marginRight:20}}>
        
      <Pressable onPress={()=>{
        deleteUserDetail()
        setIsLogin(prev=>!prev)
      }}>
      <Icon name="logout" size={30} color="#FFFFFF" />
      </Pressable>
    
      </View>
    ),
  }}
  
  />
</BottomTabs.Navigator>
}

const BottomNavigation= ({setIsLogin}) =>{
  return  <Stack.Navigator
  screenOptions={{
    headerStyle:{backgroundColor:GlobalStyles.colors.primary500},
    headerTintColor:"white",
    tabBarStyle:{backgroundColor:GlobalStyles.colors.primary500},
    tabBarActiveTintColor:GlobalStyles.colors.accent500,
  }}
  >
  <Stack.Screen name="Bottom" component={()=><BottomNav setIsLogin={setIsLogin}/>}
options={{
headerShown:false
}}/>
<Stack.Screen name="Info" component={Info}
  options={{
    headerRight: () => (
      <View style={{marginRight:20}}>
        
      <Pressable onPress={()=>{
        deleteUserDetail()
        setIsLogin(prev=>!prev)
      }}>
      <Icon name="logout" size={30} color="#FFFFFF" />
      </Pressable>
    
      </View>
    ),
  }}
/>

</Stack.Navigator>
}

export default BottomNavigation