import React from "react";
import AssetsComponent from "../../assets";

const Icon = (props) => {
  const {name} = props;
  return (
    <AssetsComponent {...props}/>
  )
};
export default Icon