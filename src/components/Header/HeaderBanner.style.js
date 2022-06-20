import {StyleSheet} from "react-native";

export const HeaderBannerStyle = StyleSheet.create({
  container: {
    height: 195,
    backgroundColor: '#ffffff'
  },
  banner: {
    backgroundColor: '#2e3192',
    height: 100,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 35
  },
  circleBanner: {
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center'
  },
  logoBackground: {
    justifyContent: 'space-evenly',
    paddingTop: 8,
    paddingBottom: 30,
    alignItems: 'center'
  }
});
