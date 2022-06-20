import React from "react";
import {Button, Image, Row, Text, View} from "../../elements";
import AssetsComponent from "../../assets";
import {AssetFilesName} from "../../assets/AssetFiles";
import {SliderStyle} from "./SliderItem.style";
import TouchableOpacity from "../../elements/TouchableOpacity/TouchableOpacity";

const SliderItem = () => {
  return (

    <TouchableOpacity
      linkTo={'product-detail'}
      style={SliderStyle.rowStyle}>
      <View style={SliderStyle.viewStyle}>

        <Text style={SliderStyle.textStyle}>فیش باکس</Text>

        <Button
          buttonStyle={SliderStyle.buttonStyle}
          titleStyle={SliderStyle.titleStyle}
          title={'خرید باکس ها'}
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
        source={{uri: 'https://cdn.zeplin.io/6134b0d0fa42962e788d68ab/assets/93f24cb7-1778-4051-a860-66bc8c1b1dfe.png'}}
        width={174}
        height={222}
        resizeMode={"cover"}
      >
      </Image>
    </TouchableOpacity>
  )
};

export default SliderItem;
