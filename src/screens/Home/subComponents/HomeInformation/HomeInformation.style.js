import React from "react";
import {StyleSheet} from "react-native";

const HomeInformationStyle = StyleSheet.create({
  pinkWrapper: {
    backgroundColor: '#ff7bac',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: 20
  },
  boxInfo: {
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
    padding: 10,
    marginVertical: 10
  },
  boxTitle: {
    color: '#2e3192',
    fontSize: 16,
    marginVertical: 5
  },
  boxContent: {
    fontSize: 10,
    lineHeight: 16
  },
  boxButtonStyle: {
    flexDirection: 'row',
    marginVertical: 10,
    height: 30,
    width: 125,
    alignSelf: 'center',
    borderRadius: 15,
    borderColor: '#ff7bac',
    borderWidth: 2
  },
  boxButtonTitle: {
    color: '#2e3192'
  },
  boxButtonIcon: {
    width: 10,
    height: 12,
    tintColor: '#2e3192'
  },
  contactInfo: {
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
    paddingVertical: 25
  },
  supportTitle: {
    color: '#2e3192',
    fontSize: 20
  },
  supportInfo: {
    color: '#ff7bac',
    fontSize: 10
  },
  contactWrapper: {
    marginVertical: 15
  },
  contactRow: {
    marginHorizontal: 30,
    height: 50,
    alignItems: 'center'
  },
  contactTitle: {
    color: '#2e3192',
    fontSize: 16,
    marginHorizontal: 10,
    lineHeight: 28
  },
  social: {
    width: '100%',
    height: 45
  },
  socialWrapper: {
    marginHorizontal: 30,
    flex: 1,
    backgroundColor: '#2e3192',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center'
  },
  socialItem: {
    marginHorizontal: 15
  },
  purchaseInfo: {
    marginHorizontal: 20,
    flex: 1,
    borderRadius: 25,
    marginVertical: 15,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  alignItemsCenter: {
    alignItems: 'center'
  },
  purchaseTitle: {
    fontSize: 8,
    color: '#2e3192'
  },
  fishDelivery: {
    paddingVertical: 30,
    paddingHorizontal: 20,
    backgroundColor: '#2e3192',
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22
  },
  fishDeliveryTitle: {
    fontSize: 23,
    color: '#ff7bac'
  },
  fishDeliveryContent: {
    fontSize: 10,
    color: '#b3b3b3',
    lineHeight: 16,
    marginTop: 30,
    marginBottom: 10
  },
  readMore: {
    flexDirection: 'row',
    height: 30,
    width: 125,
    alignSelf: 'center',
    borderWidth: 0
  },
  readMoreIcon: {
    width: 10,
    height: 12
  },
  white: {
    color: '#ffffff'
  },
});
export default HomeInformationStyle;
