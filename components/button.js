import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React from "react";

const GreenButton = ({ name, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.text}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default GreenButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0BCE83",
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderRadius: 8,
    width: 250,
    marginTop: 10,
  },
  text: {
    fontSize: 15,
    fontWeight: "600",
    color: "white",
    textAlign: "center",
  },
});
