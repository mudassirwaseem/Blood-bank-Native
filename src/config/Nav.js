import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screren/Home'
import Contact from '../screren/Contact'
import About from '../screren/About'
import Main from '../screren/main'
import InputF from '../screren/Input'
import AllDonors from '../screren/AllDonors'


const Stack = createStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{
          title: "Home Screen",
          headerStyle: {
            backgroundColor: 'white',
          },
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} name="Home" component={Home} />
        <Stack.Screen name="Contact" component={Contact} />
        <Stack.Screen options={{ title: "Login" }} name="About" component={About} />
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="InputF" component={InputF} />
        <Stack.Screen name="AllDonors" component={AllDonors} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;