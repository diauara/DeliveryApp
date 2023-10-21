import { StyleSheet, Text, View } from "react-native";
import React from "react";

import NavBar from "../components/navBar";
import Search from "../components/search";

const Categories = ({ navigation }) => {
  const NavBarHandler = () => {
    navigation.goBack("SplashScreen");
  };
  return (
    <View>
      <NavBar onPress={NavBarHandler} />
      <View style={styles.container}>
        <View>
          <Text style={styles.headText}>Categories</Text>
          <Search />
        </View>
      </View>
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  headText: {
    fontSize: 34,
    fontWeight: "700",
    lineHeight: 41,
    color: "#2D0C57",
    letterSpacing: 0.41,
  },
});
