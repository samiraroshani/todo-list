import React from "react";
import {Row, Text, View} from "../../../elements";
import Promotion from "../../../components/Promotion/Promotion";
import DiscountProduct from "../../../components/DiscountProduct";
import TitleBox from "./TitleBox";

const ProductOffers = () => {
  return (
    <View style={{marginTop: 15}}>
      <TitleBox
        title={'شگفت انگیزهای روز'}
        rightComponent={(
          <Row style={{flexDirection: 'row'}}>
            <Text style={{width: 21, height: 22, backgroundColor: '#f27baa', textAlign: 'center', borderRadius: 3, color: '#2e3192'}}>۹</Text>
            <Text style={{marginHorizontal: 2}}>:</Text>
            <Text style={{width: 21, height: 22, backgroundColor: '#f27baa', textAlign: 'center', borderRadius: 3, color: '#2e3192'}}>۱۱</Text>
            <Text style={{marginHorizontal: 2}}>:</Text>
            <Text style={{width: 21, height: 22, backgroundColor: '#f27baa', textAlign: 'center', borderRadius: 3, color: '#2e3192'}}>۳۲</Text>
          </Row>
        )}
      />
      <Promotion style={{paddingLeft: 7}}>
        <DiscountProduct containerStyle={{marginHorizontal: 13, transform: [{scale: -1}]}}/>
        <DiscountProduct containerStyle={{marginHorizontal: 13, transform: [{scale: -1}]}}/>
        <DiscountProduct containerStyle={{marginHorizontal: 13, transform: [{scale: -1}]}}/>
        <DiscountProduct containerStyle={{marginHorizontal: 13, transform: [{scale: -1}]}}/>
        <DiscountProduct containerStyle={{marginHorizontal: 13, transform: [{scale: -1}]}}/>
        <DiscountProduct containerStyle={{marginHorizontal: 13, transform: [{scale: -1}]}}/>
      </Promotion>
    </View>
  )
};

export default ProductOffers;
