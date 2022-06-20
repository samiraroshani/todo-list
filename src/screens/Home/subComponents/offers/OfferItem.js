import React from "react";
import AssetsComponent from "../../../../assets";
import {AssetFilesName} from "../../../../assets/AssetFiles";
import {View, TouchableOpacity, Text} from "../../../../elements";
import {Dimensions} from "react-native";

const {width, height} = Dimensions.get('window');


const OfferItem = ({title, icon}) => {
  return (
    <TouchableOpacity
      linkTo={"product"}
      style={{
        flexDirection: 'row-reverse',
        paddingHorizontal: 10,
        margin: 5,
        backgroundColor: '#cccccc',
        borderRadius: 7,
        width: (width - 70) / 2,
        height: 50,
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
      <AssetsComponent name={icon} width={30} height={30} resizeMode={'contain'}/>
      <View style={{flex: 1, justifyContent: 'space-between', alignItems: 'center'}}>
        <Text style={{fontSize: 10, color: '#2e3192', alignSelf: 'flex-start'}}>{title}</Text>
        <AssetsComponent name={AssetFilesName.arrowLeft} width={10} height={12}/>
      </View>
    </TouchableOpacity>
  )
};

export default OfferItem;

OfferItem.defaultProps = {
  title: 'مخصوص ورزشکاران',
  icon: AssetFilesName.homeBall
}
