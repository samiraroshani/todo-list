import {Dimensions, StyleSheet} from "react-native";

const {width} = Dimensions.get('window');
const boxWidth = (width - 100) / 2;

export const ProductCategoryStyle = StyleSheet.create({
    container: {
      marginHorizontal: 10,
      marginVertical: 6
    },
    ImageBackgroundWrapper: {
      width: boxWidth,
      height: boxWidth
    },
    ImageBackground: {
      justifyContent: "flex-end"
    },
    HalfCircle: {
      width: boxWidth,
      height: boxWidth / 2,
      backgroundColor: "#2e3192",
      borderBottomRightRadius: boxWidth / 2,
      borderBottomLeftRadius: boxWidth / 2
    },
    HalfCircleWrapper: {
      flex: 1,
      alignItems: "center",
      justifyContent: 'space-between',
      paddingTop: 7,
      paddingBottom: 14
    },
    TextStyle: {
      fontSize: 12,
      lineHeight: 25,
      letterSpacing: 0,
      textAlign: "center",
      color: "#ffffff",
      alignContent: "center"
    }
  }
)
