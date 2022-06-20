import React from 'react';
import {View, Text, Button, Row, Divider, TouchableOpacity} from '../../../../elements'
import HomeInformationStyle from "./HomeInformation.style";
import {AssetFilesName} from "../../../../assets/AssetFiles";
import AssetsComponent from "../../../../assets";

const HomeInformation = () => {
  return (
    <View>
      <View style={HomeInformationStyle.pinkWrapper}>
        <View style={HomeInformationStyle.boxInfo}>
          <Text style={HomeInformationStyle.boxTitle}>معرفی به دوستان</Text>
          <Text style={HomeInformationStyle.boxContent}>
            با معرفی فیش دلیوری به دوستان خود، در سفارش بعدی 20 % تخفیف بگیرید. دوستانتان هم در اولین سفارش، 20 % تخفیف
            میگیرند!
          </Text>
          <Button
            buttonStyle={HomeInformationStyle.boxButtonStyle}
            icon={'arrowLeftBlue'}
            iconStyle={HomeInformationStyle.boxButtonIcon}
            titleStyle={HomeInformationStyle.boxButtonTitle}
            title={'دریافت تخفیف'}/>
        </View>
        <View style={HomeInformationStyle.boxInfo}>
          <Text style={HomeInformationStyle.boxTitle}>خرید عمده یا سازمانی</Text>
          <Text style={HomeInformationStyle.boxContent}>
            راهکارهای ویژه فیش دلیوری برای تامین مواد اولیه رستورانها، خرید گروهی محصولات توسط سازمانها یا شرکتها، تامین
            کالا برای تجار
          </Text>
          <Button
            buttonStyle={HomeInformationStyle.boxButtonStyle}
            icon={'arrowLeftBlue'}
            iconStyle={HomeInformationStyle.boxButtonIcon}
            titleStyle={HomeInformationStyle.boxButtonTitle}
            title={'ثبت درخواست'}/>
        </View>
      </View>

      <View style={HomeInformationStyle.contactInfo}>
        <Text style={HomeInformationStyle.supportTitle}>میزبان صدای گرمتان هستیم</Text>
        <Text style={HomeInformationStyle.supportInfo}>۷ روز هفته / 24 ساعته</Text>

        <View style={HomeInformationStyle.contactWrapper}>
          <Divider/>
          <Row style={HomeInformationStyle.contactRow}>
            <AssetsComponent name={AssetFilesName.telephone} resizeMode={"contain"} width={30} height={26}/>
            <Text style={HomeInformationStyle.contactTitle}>6666666-021</Text>
          </Row>
          <Divider/>
          <Row style={HomeInformationStyle.contactRow}>
            <AssetsComponent name={AssetFilesName.mobile} resizeMode={"contain"} width={27} height={29}/>
            <Text style={HomeInformationStyle.contactTitle}>6666666-021</Text>
          </Row>
          <Divider/>
          <Row style={HomeInformationStyle.contactRow}>
            <AssetsComponent name={AssetFilesName.email} resizeMode={"contain"} width={24} height={19}/>
            <Text
              style={HomeInformationStyle.contactTitle}>info@fishdelivery</Text>
          </Row>
          <Divider/>
        </View>

        <Row style={HomeInformationStyle.social}>
          <Row style={HomeInformationStyle.socialWrapper}>
            <TouchableOpacity style={HomeInformationStyle.socialItem} onPress={() => alert('instagram')}>
              <AssetsComponent name={AssetFilesName.instagram} resizeMode={"cover"} width={32} height={32}/>
            </TouchableOpacity>
            <TouchableOpacity style={HomeInformationStyle.socialItem} onPress={() => alert('telegram')}>
              <AssetsComponent name={AssetFilesName.telegram} resizeMode={"cover"} width={32} height={32}/>
            </TouchableOpacity>
            <TouchableOpacity style={HomeInformationStyle.socialItem} onPress={() => alert('aparat')}>
              <AssetsComponent name={AssetFilesName.aparat} resizeMode={"cover"} width={32} height={32}/>
            </TouchableOpacity>
            <TouchableOpacity style={HomeInformationStyle.socialItem} onPress={() => alert('twitter')}>
              <AssetsComponent name={AssetFilesName.twitter} resizeMode={"cover"} width={32} height={32}/>
            </TouchableOpacity>
          </Row>
        </Row>
      </View>

      <Row style={{width: '100%'}}>
        <Row style={HomeInformationStyle.purchaseInfo}>
          <TouchableOpacity style={HomeInformationStyle.alignItemsCenter} onPress={() => alert('ضمانت بازگشت کالا')}>
            <Text style={HomeInformationStyle.purchaseTitle}>ضمانت بازگشت کالا</Text>
            <AssetsComponent name={AssetFilesName.returnGuarantee} resizeMode={"contain"} width={48} height={53}/>
          </TouchableOpacity>
          <TouchableOpacity style={HomeInformationStyle.alignItemsCenter} onPress={() => alert('ضمانت اصالت کالا')}>
            <Text style={HomeInformationStyle.purchaseTitle}>ضمانت اصالت کالا</Text>
            <AssetsComponent name={AssetFilesName.productGuarantee} resizeMode={"contain"} width={48} height={53}/>
          </TouchableOpacity>
          <TouchableOpacity style={HomeInformationStyle.alignItemsCenter} onPress={() => alert('خدمات پس از فروش')}>
            <Text style={HomeInformationStyle.purchaseTitle}>خدمات پس از فروش</Text>
            <AssetsComponent name={AssetFilesName.salesService} resizeMode={"contain"} width={54} height={53}/>
          </TouchableOpacity>
          <TouchableOpacity style={HomeInformationStyle.alignItemsCenter} onPress={() => alert('تحویل سریع و آسان')}>
            <Text style={HomeInformationStyle.purchaseTitle}>تحویل سریع و آسان</Text>
            <AssetsComponent name={AssetFilesName.fastDelivery} resizeMode={"contain"} width={65} height={53}/>
          </TouchableOpacity>
        </Row>
      </Row>

      <View style={HomeInformationStyle.fishDelivery}>
        <Text style={HomeInformationStyle.fishDeliveryTitle}>از فیش دلیوری آنلاین و تازه بگیر!</Text>
        <Text style={HomeInformationStyle.fishDeliveryContent}>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون
          بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع
          با هدف بهبود ابزارهای کاربردی می باشد.
        </Text>
        <Button
          buttonStyle={HomeInformationStyle.readMore}
          icon={'arrowLeft'}
          iconStyle={HomeInformationStyle.readMoreIcon}
          titleStyle={HomeInformationStyle.white}
          title={'نمایش بیشتر'}/>
      </View>


    </View>
  )
};


export default HomeInformation;
