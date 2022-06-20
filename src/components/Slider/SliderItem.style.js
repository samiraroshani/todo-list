import {StyleSheet} from "react-native";

export const SliderStyle = StyleSheet.create({
  imageStyle: {
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  buttonStyle: {
    height: 25,
    width: 99,
    borderRadius: 15
  },
  titleStyle: {
    color: 'white',
    fontSize: 10,
  },
  viewStyle: {
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    flexDirection: "column",
    height: 221,
    width: 115,
    backgroundColor: "#2e3192",
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
  },
  rowStyle: {
    flexDirection: 'row-reverse',
    transform: [{ scale: -1 }],
    borderRadius: 10,
    width: 289,
    height: 221,
    marginLeft: 20,
    marginVertical: 15
  },
  textStyle: {
    color: "white",
    fontSize: 17,
  },
})
