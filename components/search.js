import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { Icon } from "@rneui/base";

const Search = () => {
  return (
    <View style={styles.container}>
      <Icon type="ionicon" name="search" color="#ccc" />
      <TextInput style={styles.textInput} placeholder="Search" />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    width: "auto",
    height: 48,
    marginVertical: 15,
    paddingHorizontal: 22,
    borderRadius: 27,
    flexDirection: "row",
    alignItems: "center",
    border: 1,
    borderColor: "#D9D0E3",
  },
  textInput: {
    width: 290,
    height: 24,
    paddingLeft: 16,
    fontSize: 20,
  },
});
