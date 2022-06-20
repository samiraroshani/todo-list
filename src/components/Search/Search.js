import React from "react";
import {Image, Row, Text, View} from "../../elements";
import {SearchStyle} from "./Search.style";

const Search = (props) => {
  const {title, width, height, source, resizeMode, containerStyle} = props;

  return (
    <View style={[SearchStyle.container, containerStyle]}>
      <Image
        style={{borderRadius: 10}}
        width={width}
        height={height}
        resizeMode={resizeMode}
        source={source}
      />
      <Text style={SearchStyle.textStyle}>
        {title}
      </Text>
    </View>
  )
};
export default Search;

Search.defaultProps = {
  width: 90,
  height: 90,
  source: {uri: "https://cdn.zeplin.io/6134b0d0fa42962e788d68ab/assets/9d36f4bf-c599-449d-b0d3-45755ca11f4d.png"},
  title: 'ماهی قزل'
}
