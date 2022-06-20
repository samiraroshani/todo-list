import React from "react";
import {ImageBackground, Row, Text, View, TouchableOpacity} from "../../elements";
import AssetsComponent from "../../assets";
import {AssetFilesName} from "../../assets/AssetFiles";
import {DiscountProductStyle} from "./DiscountProduct.style";

const DiscountProduct = (props) => {
  const {type, containerStyle, hasCounter} = props;

  return (
    <TouchableOpacity
      linkTo={'product-detail'}
      style={{
        ...DiscountProductStyle.container,
        ...(type === "vertical" ? {
          width: 150,
          height: 250
        } : {}),
        ...containerStyle
      }}>
      <ImageBackground
        style={DiscountProductStyle.imageBackgroundStyle}
        width={type === "vertical" ? 150 : 135}
        height={type === "vertical" ? 190 : 110}
        borderRadius={10}
        source={{uri: "https://s3.envato.com/files/323078234/front%20view%20(fresh%20fish)%20with%20lemon%20slices%20on%20wooden%20background%20food%20seafood%20dish%20ocean.jpg"}}>
        <Row style={DiscountProductStyle.rowStyle}>
          <View style={DiscountProductStyle.heartWrapper}>
            <AssetsComponent name={AssetFilesName.heart} width={11} height={10}/>
          </View>
          <View style={DiscountProductStyle.discountWrapper}>
            <AssetsComponent
              name={AssetFilesName.discount}
              width={27}
              height={26}
              style={{
                alignItems: "center",
                justifyContent: "center",
                paddingBottom: 8
              }}
            >
              <Text style={DiscountProductStyle.textDiscount}>
                ۲۰%
              </Text>
            </AssetsComponent>
          </View>
        </Row>
        {hasCounter ? (
          <View style={DiscountProductStyle.timeView}>
            <View style={DiscountProductStyle.timeViewStyle}>
              <Text style={DiscountProductStyle.textTime}>
                ۹ : ۱۱ : ۳۲
              </Text>
            </View>
          </View>) : null}
      </ImageBackground>
      <Row style={{
        ...DiscountProductStyle.row,
        ...(type === "vertical" ? {
          flexDirection: 'column',
          alignItems: 'flex-end',
          justifyContent: 'space-evenly'
        } : {})
      }}>
        <View style={DiscountProductStyle.titleWrapper}>
          <Text style={DiscountProductStyle.title}>
            ماهی قزل آلا
          </Text>
          <Text style={DiscountProductStyle.description}>
            ماهی پاک شده
          </Text>
        </View>
        <Row>
          <View style={{
            ...DiscountProductStyle.priceWrapper,
            ...(type === "vertical" ? {
              flex: 1,
              flexDirection: 'row-reverse',
              justifyContent: 'space-between'
            } : {})
          }}>
            <Text style={DiscountProductStyle.price}>
              ۳۵۰/۰۰۰ ت
            </Text>
            <Text style={DiscountProductStyle.discount}>
              ۲۵۰/۰۰۰ ت
            </Text>
          </View>
        </Row>
      </Row>
    </TouchableOpacity>
  )
};

export default DiscountProduct;

DiscountProduct.defaultProps = {
  type: 'normal'
}

