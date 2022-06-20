import {StyleSheet} from "react-native";
import {typography} from "../../../themes";

export const CommentWidgetStyle = StyleSheet.create({
  titleWrapper: {
    flex: 1,
    marginHorizontal: 20,
    marginTop: 20,
  },
  title: {
    fontFamily: typography.light,
    fontSize: 12,
    lineHeight: 20,
    color: "#666666",
  }
})