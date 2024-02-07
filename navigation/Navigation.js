import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/auth/Login';  
import { useIsFocused, useNavigation } from '@react-navigation/native';

import { useEffect, useState } from 'react';
import { getUserDetail } from '../storage/storage';
import Signup from '../screens/auth/Signup';
import Auth from './Auth';
import BottomNavigation from './BottomNavigation';
const Stack = createStackNavigator();

const  Navigation = () => {
  const navigation = useNavigation()
  const [initialRouteName,setInitialRouteName] = useState('Login')
  
  const focused = useIsFocused()
  if(focused){

  }
  useEffect(()=>{
    async function getDetail(){
      const res = await getUserDetail()
      console.log("hi,",res)
      setInitialRouteName('Feed')
    }
    // getDetail()
  },[])

  return false ? <Auth/> : <BottomNavigation/>
}

export default Navigation