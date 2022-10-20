import Loging from "./screens/Loging"
import Dashboard from "./screens/Dashboard"
import CRegister from "./screens/CRegister"
import CarDetailsSave from "./screens/CarDetailsSave"


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import React from 'react';
const App=()=>{
  return(
    <NavigationContainer>
<Stack.Navigator>
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="Loging" component={Loging} />
      <Stack.Screen name="CRegister" component={CRegister} />
      <Stack.Screen name="CarDetailsSave" component={CarDetailsSave} />
    </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App