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
  const [isLogin,setIsLogin] = useState(false)
  
  const focused = useIsFocused()
  useEffect(()=>{
    async function getDetail(){
      const res = await getUserDetail()
      if(res!==null)
      setIsLogin(prev => !prev)
    }
    getDetail()
  },[])

  return isLogin ? <BottomNavigation setIsLogin={setIsLogin}/> :<Auth setIsLogin={setIsLogin}/>
}

export default Navigation