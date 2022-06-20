import React from "react";
import {ImageBackground, Row, Text} from "../../elements";
import AssetsComponent from "../../assets";
import {AssetFilesName} from "../../assets/AssetFiles";
import {TextIconStyle} from "./TextIcon.style";

const TextIcon = (props) => {
  const {containerStyle, textStyle, iconStyle, iconWidth, iconHeight, title, iconName,body} = props;
  return (
    <Row style={{...TextIconStyle.container, ...containerStyle}}>
      <AssetsComponent name={AssetFilesName[iconName]} width={iconWidth} height={iconHeight} style={iconStyle}/>
      <Text style={{...TextIconStyle.subject, ...textStyle}}>
        {title}
        {body}
      </Text>
    </Row>
  )
}
export default TextIcon;

TextIcon.defaultProps = {
  iconWidth: 15,
  iconHeight: 15,
}
