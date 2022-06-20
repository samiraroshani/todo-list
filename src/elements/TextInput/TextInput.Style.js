import {StyleSheet} from "react-native";
import {typography} from "../../themes";

export const TextInputStyle = StyleSheet.create({
  input: {
    backgroundColor: "transparent",
    borderWidth: 0,
    fontSize: 16,
    lineHeight: 20,
    color: "#999",
    paddingHorizontal: 15,
    flex: 1,
    height: 45,
    textAlign: "right",
    fontFamily: typography.primary,
    marginHorizontal: 10,
  }
})
