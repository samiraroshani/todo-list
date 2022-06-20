/**
 * this navigator used if user is not logged in
 */
import React from "react"
import {CardStyleInterpolators, createStackNavigator} from "@react-navigation/stack"
import HomeScreen from "../screens"

const Stack = createStackNavigator()

export function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        headerShown: false,
        gestureEnabled: true,
      }}
      initialRouteName="signin"
    >
      <Stack.Screen name="signin" component={HomeScreen}/>
      <Stack.Screen name="register" component={HomeScreen}/>
      <Stack.Screen name="otp" component={HomeScreen}/>
      <Stack.Screen name="password" component={HomeScreen}/>
    </Stack.Navigator>
  )
}

