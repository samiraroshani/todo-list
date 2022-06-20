import React from "react";
import {Button, Image, Text, View} from "../../../../elements";
import AssetsComponent from "../../../../assets";
import {AssetFilesName} from "../../../../assets/AssetFiles";
import {SliderStyle} from "./SliderItem.style";
import TouchableOpacity from "../../../../elements/TouchableOpacity/TouchableOpacity";
import {Dimensions} from "react-native";

const {width} = Dimensions.get('window');

const SliderItem = ({id, title, imageUrl, fullWidth}) => {
  return (
    <TouchableOpacity
      linkTo={'product'}
      style={[SliderStyle.rowStyle, fullWidth ? {width: width - 60} : {}]}>
      <View style={SliderStyle.viewStyle}>

        <Text style={SliderStyle.textStyle}>{title}</Text>

        <Button
          buttonStyle={SliderStyle.buttonStyle}
          titleStyle={SliderStyle.titleStyle}
          title={'خرید'}
          icon={'arrowLeft'}
          iconStyle={{
            width: 10,
            height: 12
          }}
          rightComponent={<AssetsComponent name={AssetFilesName.arrowLeft} width={10} height={12}/>}
        />
      </View>
      <Image
        style={SliderStyle.imageStyle}
        source={{uri: imageUrl}}
        width={fullWidth ? width - (60 + 115) : 174}
        height={222}
        resizeMode={"cover"}
      >
      </Image>
    </TouchableOpacity>
  )
};

SliderItem.defaultProps = {
  id: 0,
  title: "فیش باکس",
  imageUrl: "https://cdn.zeplin.io/6134b0d0fa42962e788d68ab/assets/93f24cb7-1778-4051-a860-66bc8c1b1dfe.png"
}

export default SliderItem;
