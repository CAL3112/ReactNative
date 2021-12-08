import React from "react";
import Homepage from './screens/Homepage';
import Login from './screens/Login';
import Subscribe from './screens/Subscribe';
import Subscribed from './screens/Subscribed';
import Connected from './screens/Connected';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Homepage" component={Homepage}/>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Subscribe" component={Subscribe}/>
        <Stack.Screen name="Subscribed" component={Subscribed}/>
        <Stack.Screen name="Connected" component={Connected}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;