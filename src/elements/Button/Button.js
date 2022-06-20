import React from "react";
import Text from '../Text';
import {Style} from './Button.style';
import AssetsComponent from "../../assets";
import {AssetFilesName} from "../../assets/AssetFiles";
import TouchableOpacity from '../TouchableOpacity';

const Button = (props) => {
  const {buttonStyle, title, titleStyle, icon, iconStyle, ...rest} = props;

  return (
    <TouchableOpacity style={[Style.btn, buttonStyle]} {...rest}>
      {icon ? (<AssetsComponent
        style={{...Style.btnIcon, ...iconStyle}}
        name={AssetFilesName[icon]}
      />) : null}

      <Text style={[Style.btnText, titleStyle]}>
        {title}
      </Text>
    </TouchableOpacity>
  )
};

export default Button;

