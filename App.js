import React from "react";
import Homepage from './screens/Homepage';
import Login from './screens/Login';
import Subscribe from './screens/Subscribe';
import Subscribed from './screens/Subscribed';
import Connected from './screens/Connected';
import MdpOublie from './screens/MdpOublie';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from "react-redux";
import Store from './store/configStore'

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Homepage" component={Homepage}/>
          <Stack.Screen name="Login" component={Login}/>
          <Stack.Screen name="Subscribe" component={Subscribe}/>
          <Stack.Screen name="Subscribed" component={Subscribed}/>
          <Stack.Screen name="Connected" component={Connected}/>
          <Stack.Screen name="MdpOublie" component={MdpOublie}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;