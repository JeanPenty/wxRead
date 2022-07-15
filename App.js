import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AppNavigator from "./src/navigator/appNavigator";
function Home() {
    return (
        <AppNavigator/>
    );
}

const Stack = createNativeStackNavigator();


export default function App() {
  return (
      <NavigationContainer>
          <Stack.Navigator  initialRouteName={"Home"}>
              <Stack.Screen name="Home" component={Home} options={{
                  headerShown: false,
              }}/>
          </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
