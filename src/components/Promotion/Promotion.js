import Row from "../../elements/Row";
import SliderItem from "../Slider/SliderItem";
import {ScrollView} from "react-native";
import React from "react";

const Promotion = (props) => {
  const {style, containerStyle, children, ...rest} = props;
  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={{
        transform: [{scale: -1}],
        paddingLeft: 20,
        ...style
      }}
      {...rest}>
      <Row style={{paddingLeft: 30, paddingRight: 10, ...containerStyle}}>
        {children}
      </Row>
    </ScrollView>
  )
};

export default Promotion;
