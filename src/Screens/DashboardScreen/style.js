import { StyleSheet } from "react-native"

import { Images, Colors, Fonts, Constants } from "../../Theme"

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    flex: 1
  },
  subContainer: { flexGrow: 1, marginVertical: 20, paddingVertical: 10 },
  avatar: { marginTop: 10 },
  input: { width: "87%" },
  CircleIncome: {
    height: 14,
    width: 14,
    borderRadius: 50 / 2,
    backgroundColor: "#f01717",
    marginRight: 10
  },
  CircleExpenses: {
    height: 14,
    width: 14,
    borderRadius: 50 / 2,

    backgroundColor: "#84bd15",
    marginRight: 10
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15
  },
  legendColor: {
    top: -3,
    fontWeight: "normal",
    fontStyle: "normal",
    fontSize: 13,
    lineHeight: 18,
    color: Colors.LEGENDCOLOR
  },
  labeled: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 60
  },
  totalIncome: { flexDirection: "row", marginRight: 10 },
  totalExpenses: { flexDirection: "row" },
  linechart: {
    marginTop: 60
  },
  mainCardView: {
    width: Constants.windowWidth / 2 + 10,
    padding: 20,
    height: 160,
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: Colors.PRIMARY_01_1,
    borderRadius: 5,
    shadowColor: Colors.SHADOW,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 5,
    marginTop: 20,
    marginBottom: 6,
    marginLeft: 5,
    marginRight: 16
  },
  subCardView: {
    height: 80,
    width: 80,
    borderRadius: 100,
    backgroundColor: Colors.ICON_BG,
    borderColor: Colors.ICON_BG,
    borderWidth: 1,
    borderStyle: "solid",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10
  },
  Assest: {
    marginLeft: 5,
    marginTop: 10,
    fontSize: 20,
    color: Colors.TEXTCOLOR,
    fontStyle: Fonts.OpenSans,
    fontWeight: "600",
    lineHeight: 28
  },
  mainSubCardView: {
    flexDirection: "row"
  },
  flatListItems: { flex: 1, alignItems: "flex-end", marginTop: 7 },
  TextName: {
    fontSize: 13,
    color: Colors.TEXTCOLOR,
    fontWeight: "normal",
    fontFamily: Fonts.OpenSans,
    textTransform: "capitalize",
    fontStyle: "normal",
    lineHeight: 18
  },
  textMessage: {
    color: Colors.SUB_HEADING,
    fontSize: 16,
    fontFamily: Fonts.OpenSans,
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: 22
  },
  ViewtextMessage: {
    borderWidth: 0
  },
  quantityText: {
    color: Colors.TEXTCOLOR,
    fontSize: 13,
    fontWeight: "bold",
    fontFamily: Fonts.OpenSans,
    fontStyle: "normal",
    lineHeight: 18
  },
  amountView: {
    height: 30,
    alignItems: "center",
    justifyContent: "center"
  },
  amountText: {
    color: Colors.TEXTCOLOR_GRAY,
    fontWeight: "800",
    fontFamily: Fonts.OpenSans,
    fontStyle: "normal",
    fontSize: 20,
    lineHeight: 27
  },
  ListFooterComponentView: {
    width: "100%",
    height: 28
  },
  ListHeaderComponentView: {
    width: "100%"
  },
  // trending

  TrendingmainCardView: {
    height: 80,
    width: "97%",
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: Colors.CARD_BG,
    borderRadius: 5,
    shadowColor: Colors.SHADOW,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 16,
    paddingRight: 14,
    marginTop: 20,
    marginBottom: 6,
    marginLeft: 5,
    marginRight: 16
  },
  TrendingsubCardView: {
    height: 40,
    width: 40,
    borderRadius: 25,
    backgroundColor: Colors.TRENDINGPROFILE_BG,
    borderColor: Colors.ICON_BG,
    borderWidth: 1,
    borderStyle: "solid",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20
  },
  TrendingmainSubCardView: {
    flexDirection: "row"
  },
  TrendingflatListItems: {
    marginLeft: 12,
    justifyContent: "center",
    marginTop: 5
  },
  TrendingTextName: {
    fontSize: 13,
    fontStyle: "normal",
    lineHeight: 15,
    color: Colors.TEXTCOLOR,
    fontWeight: "normal",
    fontFamily: Fonts.OpenSans
  },
  TrendingtextMessage: {
    color: Colors.SUB_HEADING,
    fontSize: 16,
    fontFamily: Fonts.OpenSans,
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: 19
  },
  TrendingViewtextMessage: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center"
  },
  TrendingquantityText: {
    color: Colors.TEXTCOLOR,
    fontSize: 13,
    lineHeight: 15,
    fontWeight: "500",
    fontStyle: "normal",
    fontFamily: Fonts.OpenSans
  },
  TrendingamountView: {
    justifyContent: "center"
  },
  TrendingamountText: {
    color: Colors.BLACK,
    fontWeight: "500",
    fontFamily: Fonts.OpenSans,
    fontSize: 16,
    lineHeight: 19,
    fontStyle: "normal"
  },
  TrendingListFooterComponentView: {
    width: "100%",
    height: 28
  },
  TrendingListHeaderComponentView: {
    width: "100%"
  }
})

export default styles
