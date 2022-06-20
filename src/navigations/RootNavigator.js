/**
 * The root navigator is used to switch between major navigation flows of your app.
 * Generally speaking, it will contain an auth flow (registration, login, forgot password)
 * and a "main" flow (which is contained in your MainNavigator) which the user
 * will use once logged in.
 */
import * as React from "react"
import {DefaultTheme, NavigationContainer} from "@react-navigation/native"
import BottomTabNavigator from "./TabNavigator"
import {CardStyleInterpolators, createStackNavigator} from "@react-navigation/stack";
import {navigationRef} from './NavigationMiddleware'
import {
  AddressScreen, BlogDetailScreen,
  ContactScreen,
  CreditScreen,
  DiscountedProductsScreen,
  OrderTrackingScreen, ProductDetailScreen,
  SuggestScreen,
  WalletScreen
} from "../screens";
import {typography} from "../themes";
import Header from "../components/Header/Header";

const Stack = createStackNavigator();

export const RootStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#2e3192',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontFamily: typography.bold,
          fontSize: 21
        },
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <Stack.Screen options={{headerShown: false}} name="Home" component={BottomTabNavigator}/>
      <Stack.Screen name="order-tracking" component={OrderTrackingScreen}
                    options={{title: 'پیگیری سفارش', animationEnabled: true}}/>
      <Stack.Screen name="contact" component={ContactScreen}
                    options={{title: 'پشتیبانی', animationEnabled: true}}/>
      <Stack.Screen name="suggest" component={SuggestScreen}
                    options={{title: 'معرفی به دوستان', animationEnabled: true}}/>
      <Stack.Screen name="credit" component={CreditScreen}
                    options={{title: 'افزایش اعتبار', animationEnabled: true}}/>
      <Stack.Screen name="wallet" component={WalletScreen}
                    options={{title: 'کیف پول', animationEnabled: true}}/>
      <Stack.Screen name="orders-list" component={DiscountedProductsScreen}
                    options={{title: 'لیست سفارشات', animationEnabled: true}}/>
      <Stack.Screen
        name="address"
        component={AddressScreen}
        options={{title: 'اطلاعات و آدرس گیرنده', animationEnabled: true}}
      />
      <Stack.Screen
        name="blog-detail"
        options={{
          headerStyle: {
            backgroundColor: '#ffffff'
          },
          headerTintColor: '#2e3192',
          headerTitleStyle: {
            fontFamily: typography.bold,
            fontSize: 15,
            color: '#2e3192'
          },
          title: 'خواص ماهی قزل آلا',
          animationEnabled: true
        }}
        component={BlogDetailScreen}
      />
      <Stack.Screen
        name="product-detail"
        options={{
          headerTitleStyle: {
            fontFamily: typography.bold,
            fontSize: 21,
          },
          header: () => (<Header
            rightIcon="notifications-outline"
            leftIcon="person-add-outline"
          />),
          title: 'محصولات',
          animationEnabled: true
        }}
        component={ProductDetailScreen}
      />
    </Stack.Navigator>
  );
};

export const RootNavigator = React.forwardRef((props, ref) => {
  /*
  * Navigation theming: https://reactnavigation.org/docs/en/next/themes.html
  */
  const navigatorTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      // prevent layout blinking when performing navigation
      background: 'transparent',
    },
  }

  return (
    <NavigationContainer theme={navigatorTheme} {...props} ref={navigationRef}>
      {/*<Alert {...props}/>*/}
      <RootStack/>
    </NavigationContainer>
  )
})

RootNavigator.displayName = "RootNavigator";
