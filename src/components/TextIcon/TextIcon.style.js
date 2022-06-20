import {StyleSheet} from "react-native";
import {typography} from "../../themes";

export const TextIconStyle = StyleSheet.create({
  container: {
    height: 32,
    backgroundColor: "transparent",
    alignItems: "center",
    paddingHorizontal: 7,
  },
  subject: {
    marginHorizontal: 19,
    fontSize: 12,
    color: "#ffffff",
    fontFamily: typography.primary,
    lineHeight: 20,
  }
});
