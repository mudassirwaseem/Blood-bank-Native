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
        <Stack.Screen options={{
          title: "Sign Up",
          headerStyle: {
            backgroundColor: 'white',
          },
          headerTitleStyle: {
            fontWeight: 'bold',
          }
        }} name="Contact" component={Contact} />
        <Stack.Screen options={{
          title: "Login",
          headerStyle: {
            backgroundColor: 'white',
          },
          headerTitleStyle: {
            fontWeight: 'bold',
          }
        }} name="About" component={About} />
        <Stack.Screen options={{
          title: "Dashboard",
          headerStyle: {
            backgroundColor: 'white',
          },
          headerTitleStyle: {
            fontWeight: 'bold',
          }
        }} name="Main" component={Main} />
        <Stack.Screen options={{
          title: "Users Data",
          headerStyle: {
            backgroundColor: 'white',
          },
          headerTitleStyle: {
            fontWeight: 'bold',
          }
        }} name="InputF" component={InputF} />
        <Stack.Screen options={{
          title: "Donor Details",
          headerStyle: {
            backgroundColor: 'white',
          },
          headerTitleStyle: {
            fontWeight: 'bold',
          }
        }} name="AllDonors" component={AllDonors} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;