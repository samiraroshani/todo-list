import React from "react";
import {ImageBackground, Text, View, TouchableOpacity} from "../../elements";
import AssetsComponent from "../../assets";
import {AssetFilesName} from "../../assets/AssetFiles";
import {Dimensions} from "react-native";
import {ProductCategoryStyle} from "./ProductCategory.style";

const {width} = Dimensions.get('window');
const boxWidth = (width - 100) / 2;

const ProductCategory = (props) => {
  return (
    <TouchableOpacity
      linkTo={"Plural"}
      style={[ProductCategoryStyle.container, props.containerStyle]}>
      <View style={ProductCategoryStyle.ImageBackgroundWrapper}>
        <ImageBackground
          style={ProductCategoryStyle.ImageBackground}
          borderRadius={boxWidth}
          width={boxWidth}
          height={boxWidth}
          source={{uri: "https://allthatsinteresting.com/wordpress/wp-content/uploads/2014/10/betta-fish-photography-visarute-angkatavanich.jpg"}}>
          <View style={ProductCategoryStyle.HalfCircle}>
            <View style={ProductCategoryStyle.HalfCircleWrapper}>
              <Text style={ProductCategoryStyle.TextStyle}>
                انواع ماهی
              </Text>
              <AssetsComponent name={AssetFilesName.arrowLeft} width={8} height={9}/>
            </View>
          </View>
        </ImageBackground>
      </View>
    </TouchableOpacity>

  )
}
export default ProductCategory;
