import React from "react";
import {Image as ImageUI} from "react-native";
import ImageStyle from "./Image.Style"

const Image = (props) => {
  const {style, height, width, resizeMode, source} = props;
  return (
    <ImageUI
      style={[
        ImageStyle.img,
        style,
        {
          width: width,
          height: height,
          resizeMode: resizeMode,
        }
      ]}
      source={source}
    />
  )
};

Image.defaultProps = {
  width: 50,
  height: 50,
  style: {},
  resizeMode: "contain",
  uri: ""
}
export default Image;
