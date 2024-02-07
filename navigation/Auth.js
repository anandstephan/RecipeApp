import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/auth/Login';
import Signup from '../screens/auth/Signup';
const Stack = createStackNavigator();
const Auth = ({setIsLogin}) =>{
return  <Stack.Navigator>
           <Stack.Screen name="Login" component={()=><Login setIsLogin={setIsLogin}/>}
      options={{
        headerShown:false
      }}
      />
      <Stack.Screen name="Signup" component={Signup}
        options={{
          headerShown:false
        }}
      />
    </Stack.Navigator>
}

export default Auth