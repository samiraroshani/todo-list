import React from "react";
import {View as ViewUI} from "react-native";

const View = (props) => {
  const {style, children} = props
  return (
    <ViewUI style={style}>
      {children}
    </ViewUI>
  )
}
export default View;