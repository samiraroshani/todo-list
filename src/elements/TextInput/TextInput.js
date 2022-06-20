import {TextInput as TextInputUI} from "react-native";
import React from "react";
import {TextInputStyle} from "./TextInput.Style";
import AssetsComponent from "../../assets";
import {AssetFilesName} from "../../assets/AssetFiles";
import Row from '../Row';

const TextInput = (props) => {
  const {containerStyle, iconName, style, ...rest} = props;

  return (
    <Row style={[{
      flex: 1,
      borderRadius: 23,
      backgroundColor: "#ffffff",
      borderColor: "#2e3192",
      borderWidth: 1,
      alignItems: 'center',
      paddingHorizontal: 12,
      marginVertical: 10,
      justifyContent: "space-between",
      marginHorizontal: 16,
    }, containerStyle]}>
      {iconName ? (<AssetsComponent name={AssetFilesName[iconName]} width={27} height={28}/>) : null}
      <TextInputUI
        style={[TextInputStyle.input, style]}
        {...rest}
      />
    </Row>
  )
}
export default TextInput;

TextInput.defaultProps = {
  iconName: null
}
