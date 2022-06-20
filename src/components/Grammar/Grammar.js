import React, {useEffect, useState} from "react";
import TextIcon from "../TextIcon";
import {typography} from "../../themes";
import {Divider} from "../../elements";
import {showMessage, View} from "react-native";
import FetchData from "../../helpers/FetchData";


const Grammar = (props) => {
  const {isGreen} = props
  //const [data, setData] = useState([]);

  useEffect(() => {
    FetchData('notToken', 'posts', 'get')
      .then(res => {
        console.log('res', res)
        //setData(res?.data);
      })
      .catch((error) => {
        showMessage({
          message: "خطایی رخ داده است.",
          type: 'danger',
          icon: {icon: 'warning', position: 'right'}
        })
      })
  }, []);


  return (
    <View style={{
      flex: 1,
      backgroundColor: (isGreen ? "#05445e" : null)
    }}>
      {/*{data.map((item, index) => {*/}
      {/*  return (*/}
          <TextIcon
            containerStyle={{
              flexDirection: "row-reverse",
              marginHorizontal: 20,
              height:70,

            }}
            iconName={isGreen ? 'plural' : 'englishMenu'}
            title={isGreen ? "Singular and plural nouns" : "نام ها"}
            iconWidth={20}
            iconHeight={20}
            textStyle={{
              fontSize: 15,
              color: (isGreen ? "#75e6da" : "#189ab4"),
              fontFamily: typography.primary,
            }}

          />
     {/*  )*/}
     {/*})}*/}
      <Divider style={{
        backgroundColor: (isGreen ? "#d4f1f4" : "#2e3192"),
        marginHorizontal: 27,
      }}/>
    </View>
  )
}
export default Grammar;