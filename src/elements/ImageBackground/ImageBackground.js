import React from "react";
import {ImageBackground as ImageBackgroundUI} from "react-native";

const ImageBackground = (props) => {
  const {source, style, width, height, resizeMode, children, ...rest} = props;
  return (
    <ImageBackgroundUI
      style={{
        ...style,
        resizeMode: resizeMode,
        width: width,
        height: height,

      }}
      source={source}
      {...rest}>
      {children}
    </ImageBackgroundUI>
  )
}

ImageBackground.defaultProps = {
  width: 50,
  height: 50,
  style: {},
  resizeMode: "contain",
  uri: ""
}


export default ImageBackground;