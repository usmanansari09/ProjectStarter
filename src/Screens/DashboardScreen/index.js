/* eslint-disable no-alert */
import React, { useState } from "react"
import {
  Image,
  SafeAreaView,
  TouchableOpacity,
  Text,
  ScrollView,
  View,
  TouchableWithoutFeedback,
  TouchableHighlight,
  FlatList
} from "react-native"
import { connect } from "react-redux"
import { Images, Colors, Constants, Fonts } from "../../Theme"
import styles from "./style"
import useHook from "./hook"
import MyFlashMessage from "../../Components/MyFlashMessage"
import { Avatar } from "react-native-elements"
import LinearGradient from "react-native-linear-gradient"
import { LineChart } from "react-native-chart-kit"
import { UserSvg } from "../../Theme/SVG"
import { InputField, ButtonComponent, NavigationHeader } from "../../Components"
const DashboardScreen = props => {
  const { textOnchange, login, setIsLoading, secondFlashMessage } = useHook()
  const mostValueableAssetsList = [
    {
      id: 0,
      name: "Usman",
      message: "abxs",
      count: "USD: 2, 897.00",
      quantity: 1233
    },
    {
      id: 1,
      name: "Ali",
      message: "absdsads",
      count: "USD: 2, 897.00",
      quantity: 433
    },
    {
      id: 2,
      name: "Ansari",
      message: "dsdsfs",
      count: "USD: 2, 897.00",
      quantity: 332
    }
  ]
  const trendingList = [
    {
      id: 0,
      name: "Usman",
      message: "abxs",
      count: "2, 897.00",
      quantity: "30%"
    },
    {
      id: 1,
      name: "Ali",
      message: "sdf",
      count: "2, 897.00",
      quantity: "18%"
    },
    {
      id: 2,
      name: "Ansari",
      message: "dsdsfs",
      count: "2, 897.00",
      quantity: "85%"
    }
  ]
  const mostValueableAssets = (item, index) => {
    return (
      <TouchableWithoutFeedback onPress={() => {}}>
        <View style={styles.mainCardView}>
          <View style={styles.mainSubCardView}>
            <View style={styles.subCardView}>
              <UserSvg
                fill={Colors.WHITE}
                width={60}
                height={60}
                style={{ borderRadius: 100 }}
              />
            </View>
            <View style={styles.flatListItems}>
              <Text style={styles.TextName}>
                {item.name.length < 7
                  ? `${item.name}`
                  : `${item.name.substring(0, 7)}...`}
              </Text>
              <View style={styles.ViewtextMessage}>
                <Text style={styles.textMessage}>
                  {item.message.length < 7
                    ? `${item.message}`
                    : `${item.message.substring(0, 7)}...`}
                </Text>
              </View>
              <View style={styles.ViewtextMessage}>
                <Text style={styles.quantityText}>QTY: {item.quantity}</Text>
              </View>
            </View>
          </View>
          <View style={styles.amountView}>
            <Text style={styles.amountText}>{item.count}</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    )
  }
  const trending = (item, index) => {
    return (
      <TouchableWithoutFeedback onPress={() => {}}>
        <View style={styles.TrendingmainCardView}>
          <View style={styles.TrendingmainSubCardView}>
            <View style={styles.TrendingsubCardView}>
              <UserSvg
                fill={Colors.BLACK}
                width={27}
                height={27}
                style={{ borderRadius: 100 }}
              />
            </View>
            {/* <Text numberOfLines={1} style={{}}>{`sdfsdfdsfsdfdssdfsdfsdfsdfsdfsdfsd`.length < 8 ? 'sdgdfas' : `ffgdfgdfdfgsdfsdfsdfsf`.substring(0, 5)}"usman"</Text> */}
            <View style={styles.TrendingflatListItems}>
              <Text style={styles.TrendingTextName}>
                {item.name.length < 6
                  ? `${item.name}`
                  : `${item.name.substring(0, 5)}..`}
              </Text>
              <Text style={styles.TrendingtextMessage}>
                {item.message.length < 6
                  ? `${item.message}`
                  : `${item.message.substring(0, 5)}..`}
              </Text>
            </View>
          </View>
          <View style={styles.TrendingViewtextMessage}>
            <Text style={styles.TrendingquantityText}>{item.quantity}</Text>
          </View>
          <View style={styles.TrendingamountView}>
            <Text style={styles.TrendingamountText}>{item.count}</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    )
  }

  return (
    <LinearGradient
      colors={["#CD8A30", "#FFFFFF", "#FFFFFF"]}
      style={styles.linearGradient}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{}}
      >
        <View style={styles.subContainer}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around"
            }}
          >
            <Avatar
              containerStyle={styles.avatar}
              size={45}
              rounded
              source={{
                uri: "https://uifaces.co/our-content/donated/6MWH9Xi_.jpg"
              }}
            />
            <InputField
              //label="Password"
              placeholder="Search"
              disableFullscreenUI={true}
              inputContainerStyle={styles.input}
              onChangeText={text => textOnchange(text, "search")}
            />
          </View>
          <View style={styles.labeled}>
            <View style={styles.totalIncome}>
              <View style={styles.CircleIncome}></View>
              <Text style={styles.legendColor}>Total Income</Text>
            </View>

            <View style={styles.totalExpenses}>
              <View style={styles.CircleExpenses}></View>
              <Text style={styles.legendColor}>Total Expenses</Text>
            </View>
          </View>

          <View style={styles.linechart}>
            <LineChart
              data={{
                labels: [" jan", " feb", " mar", " apr", " june", " july"],
                datasets: [
                  {
                    data: [10, -4, 6, -8, 80, 20],
                    strokeWidth: 2,
                    color: (opacity = 1) => `rgba(132, 189, 21, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`
                  },
                  {
                    data: [5, 8, 6, 9, 8, 2, -2],
                    strokeWidth: 2,
                    color: (opacity = 1) => `rgba(240, 23, 23, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`
                  }
                ]
                // legend: ['car', 'bike'],
              }}
              width={Constants.windowWidth} // from react-native
              height={220}
              yAxisLabel="$"
              yAxisSuffix="k"
              yAxisInterval={1} // optional, defaults to 1
              chartConfig={{
                // backgroundColor: "#e26a00",
                backgroundGradientFromOpacity: 0,
                backgroundGradientToOpacity: 0,
                // backgroundGradientFrom: "#fb8c00",
                //backgroundGradientFromOpacity: 0,
                //backgroundGradientTo: "#f2cfa0",
                decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(145, 45, 45, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                style: {
                  borderRadius: 16
                }
                // propsForDots: {
                //   r: "6",
                //   strokeWidth: "2",
                //   stroke: "#ffa726"
                // }
              }}
              bezier
              withInnerLines={false}
              style={{
                marginVertical: 8
              }}
            />
          </View>
          <View style={{}}>
            <Text style={styles.Assest}>Most Valuable Assets</Text>
            <FlatList
              data={mostValueableAssetsList}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item, index) => index}
              ListHeaderComponent={
                <View style={styles.ListHeaderComponentView} />
              }
              ListFooterComponent={
                <View style={styles.ListFooterComponentView} />
              }
              renderItem={
                ({ item, index }) => mostValueableAssets(item, index) //this is a main view
              }
            />
          </View>

          <View style={{}}>
            <Text style={styles.Assest}>Trending</Text>
            <FlatList
              data={trendingList}
              showsVerticalScrollIndicator={false}
              keyExtractor={(item, index) => index}
              ListHeaderComponent={
                <View style={styles.TrendingListHeaderComponentView} />
              }
              ListFooterComponent={
                <View style={styles.TrendingListFooterComponentView} />
              }
              renderItem={({ item, index }) => trending(item, index)}
            />
          </View>
        </View>
        <MyFlashMessage innerRef={secondFlashMessage} position="bottom" />
      </ScrollView>
    </LinearGradient>
  )
}

export default connect()(DashboardScreen)
