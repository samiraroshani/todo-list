import {StyleSheet} from "react-native";
import {typography} from "../../themes";

export const GrammarStyle = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#f8f8f8",
  },
  container: {
    flex: 1,
    backgroundColor: "#d4f1f4",
    marginHorizontal: 15,
    borderRadius: 10,
  },
  textIconStyle: {
    flexDirection: "row-reverse",
    marginHorizontal: 7,
  },
  textIconTextStyle: {
    fontSize: 15,
    color: '#05445e',
    fontFamily: typography.primary,
  },
  imageContainer: {
    flex: 1,
    alignItems: "center",
  },
  textIconContainer: {
    flexDirection: "row-reverse",
    marginHorizontal: 7,
  },
  whiteBoxContainer: {
    backgroundColor: "#f8f8f8",
    alignSelf: "flex-end",
    height: 148,
    width: 233,
    marginVertical: 21,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  whiteBoxText: {
    fontFamily: typography.primary,
    fontSize: 12,
    color: "#189ab4",
    marginHorizontal: 14,
    marginVertical: 6,
  },
  exampleContainer: {
    flex: 1,
    backgroundColor: "#ffffff",
    marginHorizontal: 15,
    marginVertical: 10,
    borderRadius: 10,
  },
  exampleText: {
    fontFamily: typography.bold,
    fontSize: 15,
    color: "#05445e",
    textAlign: "center",
    marginVertical: 16,
  },
  buttonContainer: {
    flex: 1,
    marginVertical: 35,
    justifyContent: "space-between",
    marginHorizontal: 20,
  },
  buttonStyle: {
    width: 150,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#189ab4",
    border: 1,
  },
  buttonTitleStyle: {
    fontFamily: typography.primary,
    fontSize: 15,
    textAlign: "center",
    color: "#ffffff",
  },
  greenBox: {
    backgroundColor: "#d4f1f4",
    height: 100,
    marginHorizontal: 15,
    borderRadius: 10,
  },
  viewButton: {
    backgroundColor: "#ffffff",
    marginHorizontal: 20,
    marginVertical: 15,
    height: 60,
    justifyContent: "center",
    borderRadius: 10,
  },
  completeButton: {
    borderRadius: 20,
    backgroundColor: "#05445e",
    marginHorizontal: 15,
  },
  completeButtonText: {
    fontFamily: typography.primary,
    fontSize: 15,
    textAlign: "center",
    color: "#ffffff",
  }
})