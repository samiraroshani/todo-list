import React from "react";
import {TouchableOpacity as TouchableOpacityUI} from "react-native";
import {useNavigation} from '@react-navigation/native';

const TouchableOpacity = (props) => {
  const navigation = useNavigation();
  const {children, linkTo, params, onPress, ...rest} = props;

  const _onPress = () => {
    if (onPress && typeof onPress === "function") {
      onPress();
    }
    if (linkTo) {
      navigation.navigate(linkTo, params)
      return null;
    }
  }
  return (
    <TouchableOpacityUI onPress={_onPress} {...rest}>
      {children}
    </TouchableOpacityUI>
  )
};

export default TouchableOpacity;
