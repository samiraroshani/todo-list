import React, {useState} from "react";
import {Button, Divider, Row, Text, TextInput, View} from "../../../elements";
import {ScrollView} from "react-native";
import {CommentWidgetStyle} from "./CommentWidget.style";
import {typography} from "../../../themes";
import {RegisterScreenStyle} from "../../../screens/Profile/RegisterScreen/RegisterScreen.style";
import CommentItem from "../CommentItem/CommentItem";
import Modal from "../../../elements/Modal";

const CommentWidget = (props) => {
  const [filterModalVisible, setFilterModalVisible] = useState(false);

  const toggleFilterModal = () => {
    setFilterModalVisible(!filterModalVisible);
  };
  const {title, btnStyle, commentsCount} = props;

  return (
    <View>
      <Row style={{marginVertical: 8}}>
        <Button
          onPress={toggleFilterModal}
          buttonStyle={[RegisterScreenStyle.button, btnStyle]}
          titleStyle={[RegisterScreenStyle.buttonTitle, {color: "#ffffff"}]}
          title={title}
        />
      </Row>
      <Modal
        title={'دیدگاه ها'}
        full={true}
        hasRightComponent={false}
        toggleModal={() => toggleFilterModal()}
        isVisible={filterModalVisible}>
        <ScrollView>
          <Row style={{
            marginVertical: 15,
            marginHorizontal: 25,
          }}>
            <Text style={{
              fontFamily: typography.bold,
              fontSize: 10,
              lineHeight: 15,
              color: "#2e3192"
            }}>
              ارسال دیدگاه
            </Text>
          </Row>
          <TextInput
            containerStyle={{
              flex: 0,
              borderWidth: 0,
              backgroundColor: "#e6e6e6",
              marginVertical: 0,
              marginBottom: 5,
            }}
            placeholder={"نام و نام خانوادگی"}
            style={{
              fontFamily: typography.light,
              fontSize: 10,
              lineHeight: 9,
              color: "#666666",
              paddingHorizontal: 16,
              marginHorizontal: 0,
            }}
          />
          <TextInput
            containerStyle={{
              flex: 0,
              borderWidth: 0,
              backgroundColor: "#e6e6e6",
              marginVertical: 0,
              marginBottom: 5,
            }}
            placeholder={"ایمیل"}
            style={{
              fontFamily: typography.light,
              fontSize: 10,
              lineHeight: 9,
              color: "#666666",
              paddingHorizontal: 16,
              marginHorizontal: 0,
            }}
          />
          <TextInput
            multiline={true}
            containerStyle={{
              flex: 0,
              borderWidth: 0,
              backgroundColor: "#e6e6e6",
              marginVertical: 0,
              borderRadius: 10,
              height: 100,
            }}
            placeholder={"متن دیدگاه"}
            style={{
              fontFamily: typography.light,
              fontSize: 10,
              lineHeight: 9,
              color: "#666666",
              paddingHorizontal: 16,
              marginHorizontal: 0,
              paddingTop: 0,
            }}
          />
          <Row style={{marginVertical: 8, marginHorizontal: 14,}}>
            <Button
              onPress={toggleFilterModal}
              buttonStyle={RegisterScreenStyle.button}
              titleStyle={[RegisterScreenStyle.buttonTitle, {color: "#ffffff"}]}
              title={"ارسال دیدگاه"}
            />
          </Row>
          <Row style={CommentWidgetStyle.titleWrapper}>
            <Text style={CommentWidgetStyle.title}>
              {`${commentsCount} دیدگاه`}
            </Text>
          </Row>
          <Divider style={{backgroundColor: "#2e3192", marginTop: 5, marginHorizontal: 15}}/>
          <CommentItem title={'ایران'} dateTime={'۱۱ مهر ۱۴۰۰'} comment={'مشتی هستی'}/>
          <CommentItem isReply={true} title={'تهران'} dateTime={'۱۲ اردیبهشت ۱۴۰۰'} comment={'ممنون از پیگیری'}/>
          <CommentItem title={'کرج'} dateTime={'۱۰ مهر ۱۴۰۰'} comment={'محصولات عالی هستند'}/>
          <CommentItem isReply={true} title={'محمدرضا اشتری سیستانی بروجردی'} dateTime={'۱۰ شهریور ۱۴۰۰'}
                       comment={'محصولات بسیار تازه هستند '}/>
        </ScrollView>
      </Modal>
    </View>
  )
};

export default CommentWidget;

CommentWidget.defaultProps = {
  commentsCount: 0,
  title: "ارسال دیدگاه"
}