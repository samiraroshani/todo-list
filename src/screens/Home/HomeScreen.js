import React, {useEffect, useState} from 'react';
import {ScrollView, showMessage, Text, View} from 'react-native';
import SliderItem from "../../components/Slider/SliderItem";
import Promotion from "../../components/Promotion/Promotion";
import Offers from "./subComponents/offers";
import PromotionButton from "./subComponents/PromotionButton";
import HeaderBanner from "../../components/Header/HeaderBanner";
import ProductOffers from "./subComponents/ProductOffers";
import BlogOffers from "../Blog/subComponents/BlogOffers";
import HomeInformation from "./subComponents/HomeInformation";
import TextIcon from "../../components/TextIcon";
import AssetsComponent from "../../assets";
import {AssetFilesName} from "../../assets/AssetFiles";
import {typography} from "../../themes";
import {Button, Divider, Image, Row, TextInput, TouchableOpacity} from "../../elements";
import Grammar from "../../components/Grammar";
import {GrammarStyle} from "../../components/Grammar/Grammar.style";
import FetchData from "../../helpers/FetchData";

export const HomeScreen = () => {
  // const [data, setData] = useState(null);
  //
  // useEffect(() => {
  //   FetchData('notToken', 'posts', 'get')
  //     .then(res => {
  //       console.log('res',res)
  //       setData(res?.data);
  //     })
  //     .catch((error) => {
  //       showMessage({
  //         message: "خطایی رخ داده است.",
  //         type: 'danger',
  //         icon: {icon: 'warning', position: 'right'}
  //       })
  //     })
  // }, []);

  return (
    <ScrollView style={{backgroundColor: 'white', flex: 1}}>

      <Grammar/>
      <Grammar/>
      <Grammar/>
      <Grammar isGreen={true}/>
      <Grammar isGreen={true}/>


      <PromotionButton/>
      {/*<Promotion>*/}
      {/*  <SliderItem/>*/}
      {/*  <SliderItem/>*/}
      {/*  <SliderItem/>*/}
      {/*  <SliderItem/>*/}
      {/*</Promotion>*/}
      {/*<Offers/>*/}
      {/*<ProductOffers/>*/}
      {/*<BlogOffers/>*/}
      {/*<HomeInformation/>*/}
    </ScrollView>
  )
};
