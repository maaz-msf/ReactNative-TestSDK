/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginView } from './Clazz/LoginActivity';
import { ProfileView } from './Clazz/ProfileActivity';
import APIDataView from './Clazz/APIData';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: true }}>
        <Stack.Screen name="Login" component={LoginView} />
        <Stack.Screen name="Profile" component={ProfileView} options={{ title: "Profile" }} />
        <Stack.Screen name="API" component={APIDataView} options={{ title: "API Data" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
  },
});

export default App;
