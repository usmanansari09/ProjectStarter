// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Provider } from 'react-redux';
import { Store } from './Store';
import { Home, Calendar, Notification } from './Theme/SVG';
import MyFlashMessage from "../src/Components/MyFlashMessage";

const Tab = createMaterialBottomTabNavigator();

import {
  HomeScreen,
  LoginScreen,
  SplashScreen,
  SignupScreen,
  WelcomeScreen,
  ForgetPassword,
  DashboardScreen
} from './Screens';

function MyBottomTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#7de2bb"
      inactiveColor="#919191"
      // eslint-disable-next-line react-native/no-inline-styles
      barStyle={{ backgroundColor: '#FFF', height: 90 }}
      labeled={false}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Assets',
          tabBarIcon: ({ color }) => <Home fill={color} stroke={color} width={25} height={35} />,
        }}
      />
      <Tab.Screen
        name="Transactions"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => <Notification fill={color} width={25} height={35} />,
        }}
      />
      <Tab.Screen
        name="Calendar"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => <Calendar fill={color} width={25} height={35} />,
        }}
      />
      <Tab.Screen
        name="Notification"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => <Notification fill={color} width={25} height={35} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => <Notification fill={color} width={45} height={35} />,
        }}
      />
    </Tab.Navigator>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            gestureEnabled: false,
          }}
        >
          {/* <Stack.Screen name="VerifyPawtai" component={VerifyPawtai} /> */}

          <Stack.Screen name="SplashScreen" component={SplashScreen} />
          <Stack.Screen name="HomeScreen" component={MyBottomTabs} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="SignupScreen" component={SignupScreen} />
          <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />

          <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
          <Stack.Screen name="DashboardScreen" component={DashboardScreen} />
        </Stack.Navigator>
        <MyFlashMessage />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
