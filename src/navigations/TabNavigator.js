import * as React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {Row, Text} from "../elements"
import {Image, StyleSheet} from 'react-native';
import {typography} from "../themes"
import {ProfileStack, HomeStack, SearchStack, BasketStack, FavoriteStack} from "./MainNavigator"
import AssetsFilesName from '../assets/AssetFiles'

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName={"home"}
      tabBarOptions={{
        keyboardHidesTabBar: true,
        activeTintColor: '#ff7bac',
        inactiveTintColor: '#2e3192',
        style: styles.tab,
        labelStyle: styles.label
      }}
    >
      <Tab.Screen
        name="profile"
        component={ProfileStack}
        options={{
          tabBarLabel: 'پروفایل',
          tabBarIcon: ({color, size, focused}) => (
            <Image
              source={focused ? AssetsFilesName.profileActive : AssetsFilesName.profile}
              resizeMode={"contain"}
              style={focused ? styles.profileIconActive : styles.profileIcon}
            />
          )
        }}
      />
      <Tab.Screen
        name="favorite"
        component={FavoriteStack}
        options={{
          tabBarLabel: 'علاقمندی',
          tabBarIcon: ({color, size, focused}) => (
            <Image
              source={focused ? AssetsFilesName.favoriteActive : AssetsFilesName.favorite}
              resizeMode={"contain"}
              style={styles.favoriteIcon}
            />
          )
        }}
      />
      <Tab.Screen
        name="basket"
        component={BasketStack}
        options={{
          tabBarLabel: 'سبد خرید',
          tabBarIcon: ({color, size, focused}) => (
            <Row>
              <Image
                source={focused ? AssetsFilesName.basketActive : AssetsFilesName.basket}
                resizeMode={"contain"}
                style={styles.basketIcon}
              />
              <Row style={{...styles.basketCounter, ...(focused ? {backgroundColor: '#2e3192'} : {})}}>
                <Text style={{color: 'white', lineHeight: 12, marginTop: 5}}>۲</Text>
              </Row>
            </Row>
          )
        }}
      />
      <Tab.Screen
        name="search"
        component={SearchStack}
        options={{
          tabBarLabel: 'جستجو',
          tabBarIcon: ({color, size, focused}) => (
            <Image
              source={focused ? AssetsFilesName.searchActive : AssetsFilesName.search}
              resizeMode={"contain"}
              style={styles.searchIcon}
            />
          )
        }}
      />
      <Tab.Screen
        name="home"
        component={HomeStack}
        options={{
          tabBarLabel: 'خانه',
          tabBarIcon: ({color, size, focused}) => (
            <Image
              source={AssetsFilesName.home}
              resizeMode={"contain"}
              style={focused ? styles.homeIconActive : styles.homeIcon}
            />
          )
        }}
      />
    </Tab.Navigator>
  )
}

export default BottomTabNavigator

export const styles = StyleSheet.create({
  tab: {
    backgroundColor: 'white',
    height: 75
  },
  label: {
    fontFamily: typography.primary,
    fontSize: 10,
    margin: 0,
    padding: 0,
    marginBottom: 5
  },
  homeIcon: {
    width: 39,
    height: 30,
    marginTop: 10,
    tintColor: '#2e3192'
  },
  homeIconActive: {
    width: 39,
    height: 30,
    marginTop: 10,
    tintColor: '#ff7bac'
  },
  searchIcon: {
    width: 30,
    height: 30,
    marginTop: 10
  },
  favoriteIcon: {
    width: 30,
    height: 30,
    marginTop: 10
  },
  profileIcon: {
    width: 30,
    height: 30,
    marginTop: 10,
    tintColor: '#2e3192'
  },
  profileIconActive: {
    width: 30,
    height: 30,
    marginTop: 10
  },
  basketIcon: {
    width: 30,
    marginTop: 10,
    height: 30
  },
  basketCounter: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff7bac',
    width: 15,
    height: 15,
    borderRadius: 15,
    position: 'absolute',
    bottom: 0,
    left: -5
  }
});
