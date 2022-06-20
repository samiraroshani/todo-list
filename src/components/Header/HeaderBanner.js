import React from 'react';
import {View, ImageBackground, Text} from "../../elements";
import AssetsComponent from "../../assets";
import {AssetFilesName} from "../../assets/AssetFiles";
import {HeaderBannerStyle} from "./HeaderBanner.style";

const HeaderBanner = ({containerStyle, circleBannerStyle, isLoggedIn}) => {
  return (
    <View style={{...HeaderBannerStyle.container, ...containerStyle, ...(isLoggedIn ? {marginBottom: 20} : {})}}>
      <View style={HeaderBannerStyle.banner}>
        <View style={{...HeaderBannerStyle.circleBanner, ...circleBannerStyle}}>
          <AssetsComponent
            style={HeaderBannerStyle.logoBackground}
            name={isLoggedIn ? AssetFilesName.avatar : AssetFilesName.logo}
            width={120}
            height={120}
          />
        </View>
        {isLoggedIn ? (<Text style={{fontSize: 15, color: '#2e3192'}}>ایرانیان</Text>) : null}
      </View>
    </View>
  )
}

export default HeaderBanner;
