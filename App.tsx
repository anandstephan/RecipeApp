import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Navigation from './navigation/Navigation';


function App(): React.JSX.Element {


  return (
 <NavigationContainer>
  <Navigation/>
 </NavigationContainer>
  );
}



export default App;
