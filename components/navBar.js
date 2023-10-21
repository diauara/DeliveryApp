import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Icon } from "@rneui/base";

const NavBar = ({ onPress }) => {
  return (
    <View styles={styles.container}>
      <View style={styles.nav}>
        <TouchableOpacity onPress={onPress}>
          <Icon type="ionicon" name="arrow-back-outline" style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NavBar;

const styles = StyleSheet.create({
  container: {},
  nav: {
    width: "100%",
    height: "auto",
    paddingTop: 50,
    alignItems: "flex-start",
  },
  icon: {
    paddingLeft: 20,
    paddingBottom: 10,
  },
});
// rgba(0, 0, 0, 0)
