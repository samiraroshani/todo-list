import {StyleSheet} from "react-native";

export const HeaderStyle = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    height: 60,
    backgroundColor: '#ffffff',
    elevation: 5,
    justifyContent: 'space-between',
    alignItems: 'center'
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
    alignItems: 'center'
  }
});
