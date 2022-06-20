import {StyleSheet} from "react-native";
import {typography} from "../../../themes";

export const CommentItemStyle = StyleSheet.create({
  commentContainer: {
    marginHorizontal: 15,
    backgroundColor: "white",
    marginVertical: 5,
    flex: 1,
  },
  replyComment: {
    marginRight: 30,
    marginLeft: 15,
    backgroundColor: "#f2f2f2",
    marginVertical: 5,
    flex: 1,
  },
  descriptionWrapper: {
    marginVertical: 15,
    alignItems: 'center',
  },
  detailWrapper: {
    alignItems: "center",
    justifyContent: 'flex-end',
    flex: 1,
  },
  textDescription: {
    fontFamily: typography.light,
    flexShrink: 1,
    fontSize: 10,
    lineHeight: 20,
    color: "#999999",
    marginHorizontal: 5,
    height: 20
  },
  timeWrapper: {
    width: 120,
    alignItems: "center",
    marginHorizontal: 10,
  },
  time: {
    paddingHorizontal: 10,
  },
  dateStyle: {
    fontFamily: typography.light,
    fontSize: 10,
    lineHeight: 14,
    color: "#999999",
    paddingTop: 5,
  },
  reply: {
    marginRight: 20,
    marginLeft: 10
  },
  commentWrapper: {
    marginHorizontal: 15,
    alignItems: "center",
  },
  comment: {
    fontSize: 15,
    lineHeight: 22,
    color: "#2e3192",
  }
})