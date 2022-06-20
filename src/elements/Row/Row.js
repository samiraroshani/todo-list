import React from "react";
import View from "../View";

const Row = (props) => {
  const {style, ...rest} = props;

  return (
    <View style={[{flexDirection: "row-reverse"}, style]} {...rest}/>
  )
};

export default Row
