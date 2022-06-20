import React from 'react';
import {Text, TouchableOpacity, Row} from "../../elements";
import AssetsComponent from "../../assets";
import {AssetFilesName} from "../../assets/AssetFiles";
import {HeaderStyle} from "./Header.style";
import Image from "../../elements/Image/Image";
import AssetsFilesName from "../../assets/AssetFiles";
import {useNavigation} from '@react-navigation/native';
import {typography} from "../../themes";

const Header = ({containerStyle, circleBannerStyle, isLoggedIn}) => {
  const navigation = useNavigation();
  return (
    <Row style={{
      height: 82,
      backgroundColor: '#05445e',
      justifyContent: "space-between",
      alignItems: "center"
    }}>
      <Row style={{
        marginHorizontal: 10,
        justifyContent: "center",
        alignItems: "center",
        width: 48,
        height: 48
      }}>
        <TouchableOpacity>
          <AssetsComponent name={AssetFilesName.menu} width={25}/>
        </TouchableOpacity>
      </Row>
      <Row style={{
        flex: 1,
        alignItems: "center"
      }}>
        <Text style={{
          fontFamily: typography.bold,
          fontSize: 20,
          color: "#ffffff"
        }}>
          گرامر انگلیسی
        </Text>
      </Row>
      <Row style={{
        marginHorizontal: 10,
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        width: 48,
        height: 48
      }}>
        <TouchableOpacity>
          <AssetsComponent name={AssetFilesName.searchPlural} width={25} height={25}/>
        </TouchableOpacity>
      </Row>
    </Row>
  )
}

export default Header;
