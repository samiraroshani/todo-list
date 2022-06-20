import View from '../View';
import React from 'react';
import ModalStyle from './Modal.style';
import RNModal from "react-native-modal";
import Row from "../Row/Row";
import Text from "../Text/Text";
import Button from "../Button/Button";
import {typography} from "../../themes";
import TouchableOpacity from "../TouchableOpacity/TouchableOpacity";
import AssetsComponent from "../../assets";
import {AssetFilesName} from "../../assets/AssetFiles";

const Modal = ({hasRightComponent, title, children, isVisible, toggleModal, wrapperContentStyle, modalStyle, full}) => {
  if (full) {
    return (
      <RNModal
        style={{margin: 0, ...modalStyle}}
        backdropColor={"#2e3192"}
        onBackdropPress={() => toggleModal()}
        isVisible={isVisible}>
        <View style={[ModalStyle.fullWrapperContent, wrapperContentStyle]}>
          <Row style={{
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 10,
            height: 70,
            backgroundColor: '#e6e6e6'
          }}>
            {hasRightComponent ? (<Button
              buttonStyle={{
                backgroundColor: '#ff7bac',
                height: 30,
                width: 90,
                paddingHorizontal: 10,
                borderWidth: 0
              }}
              titleStyle={{
                color: 'white'
              }}
              title={"حذف همه"}
            />) : null}
            <Text style={{color: '#2e3192', fontSize: 21, fontFamily: typography.bold}}>{title}</Text>
            <TouchableOpacity
              onPress={() => toggleModal()}
              style={{width: 90}}>
              <AssetsComponent style={{marginHorizontal: 20}} name={AssetFilesName.close} width={20} height={20}/>
            </TouchableOpacity>
          </Row>
          {children}
        </View>
      </RNModal>
    )
  }

  return (
    <RNModal
      style={ModalStyle.modal}
      backdropColor={"#2e3192"}
      onBackdropPress={() => toggleModal()}
      isVisible={isVisible}>
      <View style={[ModalStyle.wrapperContent, wrapperContentStyle]}>
        <View style={ModalStyle.line}/>
        {children}
      </View>
    </RNModal>
  )
};

export default Modal;

Modal.defaultProps = {
  full: undefined,
  title: 'فیلترها',
  hasRightComponent: true
}
