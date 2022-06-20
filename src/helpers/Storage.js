import AsyncStorage from '@react-native-async-storage/async-storage';
import {showMessage} from 'react-native-flash-message';

export const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    showMessage({
      message: '.خطایی رخ داده است. لطفا مجددا تلاش فرمایید',
      type: 'danger',
      icon: {icon: 'warning', position: 'left'},
    });
  }
};

export const getData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);

    if (value !== null) {
      return value;
    }
  } catch (e) {
    showMessage({
      message: '.خطایی رخ داده است. لطفا مجددا تلاش فرمایید',
      type: 'danger',
      icon: {icon: 'warning', position: 'right'},
    });
  }
};


export const removeData = async (key) => {
  try {
    await AsyncStorage.removeItem(key);

    return true;
  } catch (exception) {
    return false;
  }
};
