import {StyleSheet} from "react-native";

export const DiscountProductStyle = StyleSheet.create({
  container: {
    flexDirection: "column",
    backgroundColor: "#ddd",
    width: 135,
    height: 160,
    borderRadius: 10,
  },
  imageBackgroundStyle: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  rowStyle: {
    justifyContent: "space-between",
  },
  heartWrapper: {
    width: 21,
    height: 21,
    backgroundColor: "white",
    borderRadius: 15,
    marginHorizontal: 5,
    marginVertical: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  discountWrapper: {
    width: 27,
    height: 26,
    marginHorizontal: 10,
  },
  textDiscount: {
    fontSize: 7,
    color: "white",
    fontFamily: "KaraLight",
  },
  row: {
    justifyContent: "space-between",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    alignItems: "center",
    flexGrow: 1,
  },
  titleWrapper: {
    marginHorizontal: 5,
  },
  title: {
    fontSize: 9,
    color: "#2e3192",
    fontFamily: "KaraSemiBold",
  },
  price: {
    fontSize: 9,
    color: "#666",
    fontFamily: "KaraLight",
    textDecorationLine: 'line-through',
    textDecorationStyle: "solid",
    textDecorationColor: "#000",
  },
  priceWrapper: {
    marginHorizontal: 5,
  },
  description: {
    fontSize: 7.5,
    color: "#2e3192",
    fontFamily: "KaraLight",
  },
  discount: {
    fontSize: 9,
    fontFamily: "KaraSemiBold",
    color: 'green',
  },
  textTime: {
    color: "#fff",
    fontSize: 15,
    fontFamily: "KaraLight",
  },
  timeView: {
    width: 90,
    height: 26,
    backgroundColor: "#2e3192",
    marginBottom: 16,
    marginLeft: -5,
    borderBottomRightRadius: 13,
    borderTopRightRadius: 13,
    alignItems: "center",
    alignContent: "center",
  },
  timeViewStyle: {
    width: 77,
    height: 26,
    justifyContent: "center",
    alignItems: "center",
  },

})
