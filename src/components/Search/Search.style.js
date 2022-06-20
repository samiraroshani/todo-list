import React from "react";
import {StyleSheet} from "react-native";
import {typography} from "../../themes";

export const SearchStyle = StyleSheet.create({
  container: {
    alignItems: "center",
    marginVertical: 20,
    paddingLeft: 15,
  },
  textStyle: {
    fontFamily: typography.bold,
    fontSize: 14,
    lineHeight: 20,
    color: "#8a8182",
    marginVertical: 15,
    marginBottom: 15,
  },
  textIconContainer: {
    flex: 1,
    marginVertical: 10,
  },
})

