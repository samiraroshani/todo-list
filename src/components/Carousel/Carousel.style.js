import {Dimensions, StyleSheet} from "react-native"

const {width} = Dimensions.get('screen');

export const CarouselStyle = StyleSheet.create({
  IMAGE_CONTAINER: {
    resizeMode: 'contain',
    height: 350,
    width: width - 40,
    borderRadius: 10,
    marginHorizontal: 20
  },
  CONTAINER: {
    flexDirection: 'row',
    width: width,
  },
  INDICATOR_CONTAINER: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: width,
    bottom: 10,
    zIndex: 2,
    alignSelf: 'center',
  },
  INACTIVE_INCIDATOR: {
    width: 5,
    height: 5,
    borderRadius: 4,
    marginHorizontal: 3,
    marginBottom: 10,
    backgroundColor: '#2e3192',
  },
  ACTIVE_INDICATOR: {
    width: 7,
    height: 7,
    backgroundColor: '#ff7bac',
  },
  IMAGE_TEXT: {
    alignSelf: 'center',
  },
  IMAGE: {
    alignSelf: 'center',
    tintColor: 'green'
  }
})
