import * as React from "react"
import AssetsFiles from "./AssetFiles"
import FastImage from "react-native-fast-image"

const AssetsComponent = (props) => {
  const {name, width, height, style, resizeMode, ...otherProps} = props;

  if (AssetsFiles[name] !== undefined) {
    return (
      <FastImage
        resizeMode={resizeMode}
        source={AssetsFiles[name]}
        style={{
          height: height || "70%",
          width: width || "70%",
          ...style
        }}
        {...otherProps}/>
    )
  }

  return null
};

AssetsComponent.defaultProps = {
  resizeMode: "contain",
}

export default AssetsComponent
