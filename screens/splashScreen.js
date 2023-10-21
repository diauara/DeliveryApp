import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Icon, Image } from "@rneui/base";
import GreenButton from "../components/button";
import TransparentButton from "../components/button2";

const SplashScreen = ({ navigation }) => {
  const pressHandler = () => {
    navigation.navigate("TabBar");
  };
  return (
    <View style={styles.container}>
      <View style={styles.topHalf}>
        <Image
          source={require("../assets/images/LOGO.png")}
          style={styles.image}
        />
      </View>
      <View style={styles.bottomHalf}>
        <View style={styles.contentStyle}>
          <View style={styles.boxView}>
            <Icon type="ionicon" name="cube" size={40} color="#2D0C57" />
          </View>
          <Text
            style={{
              display: "flex",
              fontSize: 34,
              fontWeight: "800",
              color: "#2D0C57",
              textAlign: "center",
              lineHeight: 41,
              letterSpacing: 0.41,
            }}
          >
            Non-Contact Deliveries
          </Text>
          <Text
            style={{
              display: "flex",
              fontSize: 17,
              fontWeight: "400",
              color: "#2D0C57",
              textAlign: "center",
              lineHeight: 25.5,
              letterSpacing: -0.41,
            }}
          >
            When placing an order, select the option “Contactless delivery” and
            the courier will leave your order at the door.
          </Text>
          <View>
            <GreenButton name="ORDER NOW" onPress={pressHandler} />
            <TransparentButton name="DISMISS" />
          </View>
        </View>
      </View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(126, 25, 255, 0.60)",
  },
  topHalf: {
    flex: 0.3,
  },
  image: {
    width: 100,
    height: 100,
    marginTop: 50,
  },
  bottomHalf: {
    flex: 0.7,
    backgroundColor: "#F6F5F5",
    borderTopRightRadius: 29,
    borderTopLeftRadius: 29,
  },
  contentStyle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: 30,
  },
  boxView: {
    backgroundColor: "white",
    padding: 32,
    borderRadius: 50,
  },
});
