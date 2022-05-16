import React, { useContext } from "react"
import { Provider } from "react-redux"
import "react-native-gesture-handler"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import {
  configureStore,
  createReducer,
  combineReducers
} from "@reduxjs/toolkit"

import { screens } from "@screens"
import { hooks, slices, navigators, initialRoute } from "@modules"
import { connectors } from "@store"

import Splash from './modules/splash/index';
import Welcome from './modules/welcome/index';
import Login from './modules/login/index';
import Register from './modules/registration/index';
import EmailVerification from './modules/verify-email/index';
import EmailVerificationSuccess from './modules/email-verification-success/index';
import EmailVerificationError from './modules/email-verification-error/index';
import RegistrationSuccess from './modules/registration-success/index';
import Dashboard from './modules/dashboard/index';
import ResetPasswordError from './modules/reset-password-error/index';
import SetNewPassword from './modules/set-new-password/index';
import ResetPassword from './modules/reset-password/index';


const Stack = createStackNavigator()

import { GlobalOptionsContext, OptionsContext, getOptions } from "@options"

const getNavigation = (modules, screens, initialRoute) => {
  const Navigation = () => {
    const routes = modules.concat(screens).map(([name, Navigator]) => {
      const Component = () => {
        return (
          <OptionsContext.Provider value={getOptions(Navigator)}>
            <Navigator />
          </OptionsContext.Provider>
        )
      }
      return <Stack.Screen key={name} name={name} component={Component} />
    })
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={Splash}   options={{headerShown: false, }}/>
        <Stack.Screen name="Welcome" component={Welcome} options={{headerShown: false, }}/>
        <Stack.Screen name="Login" component={Login} options={{headerShown: false, }}/>

        <Stack.Screen name="Dashboard" component={Dashboard}/>

        <Stack.Screen name="Register" component={Register} options={{
          title: 'Back', headerStyle: { backgroundColor: '#CD8A30',},
          headerTintColor: '#fff', headerTitleStyle: {fontWeight: 'bold',},}}/>

        <Stack.Screen name="EmailVerification" component={EmailVerification} options={{
          title: 'Back', headerStyle: { backgroundColor: '#CD8A30',},
          headerTintColor: '#fff', headerTitleStyle: {fontWeight: 'bold',},}}/>

        <Stack.Screen name="EmailVerificationSuccess" component={EmailVerificationSuccess} options={{
          title: 'Back', headerStyle: { backgroundColor: '#CD8A30',},
          headerTintColor: '#fff', headerTitleStyle: {fontWeight: 'bold',},}}/>

        <Stack.Screen name="EmailVerificationError" component={EmailVerificationError} options={{
          title: 'Back', headerStyle: { backgroundColor: '#CD8A30',},
          headerTintColor: '#fff', headerTitleStyle: {fontWeight: 'bold',},}}/>

        <Stack.Screen name="RegistrationSuccess" component={RegistrationSuccess} options={{
          title: 'Back', headerStyle: { backgroundColor: '#CD8A30',},
          headerTintColor: '#fff', headerTitleStyle: {fontWeight: 'bold',},}}/>

        <Stack.Screen name="ResetPasswordError" component={ResetPasswordError} options={{
          title: 'Back', headerStyle: { backgroundColor: '#CD8A30',},
          headerTintColor: '#fff', headerTitleStyle: {fontWeight: 'bold',},}}/>

        <Stack.Screen name="SetNewPassword" component={SetNewPassword} options={{
          title: 'Back', headerStyle: { backgroundColor: '#CD8A30',},
          headerTintColor: '#fff', headerTitleStyle: {fontWeight: 'bold',},}}/>

          <Stack.Screen name="ResetPassword" component={ResetPassword} options={{
          title: 'Back', headerStyle: { backgroundColor: '#CD8A30',},
          headerTintColor: '#fff', headerTitleStyle: {fontWeight: 'bold',},}}/>






      </Stack.Navigator>
      </NavigationContainer>
    )
  }
  return Navigation
}

const getStore = (slices, globalState) => {
  const reducers = Object.fromEntries(
    slices.map(([name, slice]) => [name, slice.reducer])
  )

  const appReducer = createReducer(globalState, _ => {
    return globalState
  })

  const reducer = combineReducers({
    app: appReducer,
    ...reducers
  })

  return configureStore({
    reducer: reducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware()
  })
}

const App = () => {
  const global = useContext(GlobalOptionsContext)
  const Navigation = getNavigation(navigators, screens, initialRoute)
  const store = getStore([...slices, ...connectors], global)

  let effects = {}
  hooks.map(([_, hook]) => {
    effects[hook.name] = hook()
  })

  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  )
}

export default App
