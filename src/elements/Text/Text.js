import {Text as TextUI} from "react-native";
import React from "react";
import TextStyle from "./Text.style";

const Text = (props) => {
  const {style, children, ...rest} = props;

  return (
    <TextUI style={[TextStyle.title, style]} {...rest}>{children}</TextUI>
  )
};
export default Text;