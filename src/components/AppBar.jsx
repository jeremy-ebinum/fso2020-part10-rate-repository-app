import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Link } from "react-router-native";
import Constants from "expo-constants";
import theme from "../theme";

import AppBarTab from "./AppBarTab";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    paddingTop: Constants.statusBarHeight,
    paddingBottom: Constants.statusBarHeight,
    backgroundColor: theme.colors.appBarBg,
  },
  scrollView: {
    flexDirection: "row",
    marginHorizontal: 20,
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView} horizontal>
        <Link to="/" title="Repositories" path="/" component={AppBarTab}></Link>
        <Link
          to="/signin"
          title="Sign In"
          path="/signin"
          component={AppBarTab}
        ></Link>
      </ScrollView>
    </View>
  );
};

export default AppBar;
