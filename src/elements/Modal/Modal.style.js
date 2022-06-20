import React from "react";
import {StyleSheet} from "react-native";

const ModalStyle = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0
  },
  fullWrapperContent: {
    flex: 1,
    backgroundColor: 'white',
  },
  wrapperContent: {
    flex: 0.5,
    backgroundColor: 'white',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    paddingHorizontal: 30,
    paddingVertical: 15,
  },
  line: {
    width: 50,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#808080',
    alignSelf: 'center'
  },
});
export default ModalStyle;
