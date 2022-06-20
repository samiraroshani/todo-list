import * as React from 'react'
import {CardStyleInterpolators, createStackNavigator} from "@react-navigation/stack"
import {
  AccountScreen,
  BasketScreen,
  BlogDetailScreen,
  BlogScreen,
  DiscountedProductsScreen,
  EditProfileScreen,
  FavoriteScreen,
  HomeScreen,
  InvoiceScreen,
  LoginScreen,
  OrderTrackingScreen,
  ProductScreen,
  ProfileScreen,
  RegisterScreen,
  SearchScreen,
  WelcomeScreen
} from "../screens"
import {typography} from '../themes';
import Header from "../components/Header/Header";
import {Plural} from "../screens/Plural/Plural";

/**
 * This type allows TypeScript to know what routes are defined in this navigator
 * as well as what properties (if any) they might take when navigating to them.
 *
 * If no params are allowed, pass through `undefined`. Generally speaking, we
 * recommend using your MobX-State-Tree store(s) to keep application state
 * rather than passing state through navigation params.
 *
 * For more information, see this documentation:
 *   https://reactnavigation.org/docs/params/
 *   https://reactnavigation.org/docs/typescript#type-checking-the-navigator
 */
const Stack = createStackNavigator();

export const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={"dashboard"}
      screenOptions={{
        headerStyle: {
          backgroundColor: '#05445e'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontFamily: typography.bold,
          fontSize: 21
        },
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
      }}>
      <Stack.Screen
        name="dashboard"
        options={{
          headerTitleStyle: {
            fontFamily: typography.bold,
            fontSize: 21,
          },
          header: () => (<Header/>),
          animationEnabled: true
        }}
        component={HomeScreen}
      />
      {/*<Stack.Screen*/}
      {/*  name="blog"*/}
      {/*  options={{*/}
      {/*    headerStyle: {*/}
      {/*      backgroundColor: '#ffffff'*/}
      {/*    },*/}
      {/*    headerTintColor: '#2e3192',*/}
      {/*    headerTitleStyle: {*/}
      {/*      fontFamily: typography.bold,*/}
      {/*      fontSize: 15,*/}
      {/*      color: '#2e3192'*/}
      {/*    },*/}
      {/*    title: 'وبلاگ فیش دلیوری',*/}
      {/*    animationEnabled: true*/}
      {/*  }}*/}
      {/*  component={BlogScreen}*/}
      {/*/>*/}
      <Stack.Screen
        name="Plural"
        options={{
          headerTitleStyle: {
            fontFamily: typography.bold,
            fontSize: 21,
          },
          title: 'گرامر',
          animationEnabled: true
        }}
        component={Plural}
      />
      {/*<Stack.Screen*/}
      {/*  name="product"*/}
      {/*  options={{*/}
      {/*    headerTitleStyle: {*/}
      {/*      fontFamily: typography.bold,*/}
      {/*      fontSize: 21,*/}
      {/*    },*/}
      {/*    title: 'محصولات',*/}
      {/*    animationEnabled: true*/}
      {/*  }}*/}
      {/*  component={ProductScreen}*/}
      {/*/>*/}
    </Stack.Navigator>
  )
};

export const BasketStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={"basket"}
      screenOptions={{
        headerStyle: {
          backgroundColor: '#2e3192'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontFamily: typography.bold,
          fontSize: 21
        },
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
      }}>
      <Stack.Screen
        name="basket"
        component={BasketScreen}
        options={{
          title: 'سبد خرید',
          headerTitleStyle: {
            fontFamily: typography.bold,
            fontSize: 21,
            textAlign: 'center'
          },
          animationEnabled: true
        }}
      />
      <Stack.Screen
        name="order-tracking"
        component={OrderTrackingScreen}
        options={{
          title: 'پیگیری سفارش',
          animationEnabled: true
        }}
      />
      <Stack.Screen
        name="invoice"
        component={InvoiceScreen}
        options={{
          title: 'جزئیات سفارش',
          headerStyle: {
            backgroundColor: '#f2f2f2'
          },
          headerTintColor: '#2e3192',
          headerTitleStyle: {
            fontFamily: typography.bold,
            fontSize: 21,
            color: '#2e3192'
          },
          animationEnabled: true
        }}
      />
    </Stack.Navigator>
  )
};

export const SearchStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={"search"}
      screenOptions={{
        headerStyle: {
          backgroundColor: '#2e3192'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontFamily: typography.bold,
          fontSize: 21
        },
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
      }}>
      <Stack.Screen
        name="search"
        component={SearchScreen}
        options={{
          headerShown: false
        }}
        /*options={{
          header: () => (<Header
            headerTx={trans("editProfileScreen.profile")}
            headerIcon={AssetsFilesName.MessageBottomTab}
            leftIcon="person-add-outline"
          />)
        }}*/
      />
      <Stack.Screen
        name="Plural"
        options={{
          headerTitleStyle: {
            fontFamily: typography.bold,
            fontSize: 21,
          },
          title:'گرامر',
          animationEnabled: true
        }}
        component={Plural}
      />
    </Stack.Navigator>
  )
};

export const FavoriteStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={"favorite"}
      screenOptions={{
        headerStyle: {
          backgroundColor: '#2e3192'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontFamily: typography.bold,
          fontSize: 21
        },
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
      }}>
      <Stack.Screen
        name="favorite"
        options={{
          title: 'لیست علاقمندی ها',
          animationEnabled: true
        }}
        component={FavoriteScreen}
      />
    </Stack.Navigator>
  )
};

export const ProfileStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={"profile"}
      screenOptions={{
        headerStyle: {
          backgroundColor: '#2e3192'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontFamily: typography.bold,
          fontSize: 21
        },
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
      }}>
      <Stack.Screen
        name="profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          animationEnabled: true
        }}
      />
      <Stack.Screen
        name="account"
        component={AccountScreen}
        options={{
          headerShown: false,
          animationEnabled: true
        }}
      />
      <Stack.Screen
        name="edit-profile"
        component={EditProfileScreen}
        options={{
          headerShown: false,
          animationEnabled: true
        }}
      />
      <Stack.Screen
        name="login"
        component={LoginScreen}
        options={{
          headerShown: false,
          animationEnabled: true
        }}
      />
      <Stack.Screen
        name="register"
        component={RegisterScreen}
        options={{
          headerShown: false,
          animationEnabled: true
        }}
      />
      <Stack.Screen
        name="welcome"
        component={WelcomeScreen}
        options={{
          headerShown: false,
          animationEnabled: true
        }}
      />
    </Stack.Navigator>
  )
};

