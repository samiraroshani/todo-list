import Text from "../../../elements/Text";
import Row from "../../../elements/Row";
import React from "react";

const TitleBox = ({title, rightComponent}) => {
  return (
    <Row style={{marginVertical: 15, paddingHorizontal: 30, justifyContent: 'space-between', alignItems: 'center'}}>
      <Text style={{color: '#2e3192', fontSize: 16}}>{title}</Text>
      {rightComponent ? rightComponent : null}
    </Row>
  )
};

export default TitleBox;
