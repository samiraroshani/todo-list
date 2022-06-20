import React from "react";
import Row from '../Row';
import View from '../View';

const Divider = ({style}) => {
  return (
    <Row style={{width: '100%', alignSelf: 'center'}}>
      <View style={{flex: 1, height: 2, backgroundColor: '#2e3192', ...style}}/>
    </Row>
  )
};

export default Divider;
