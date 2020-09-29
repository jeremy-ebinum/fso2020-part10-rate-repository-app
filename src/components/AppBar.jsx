import React, { useContext, useCallback } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Link, useHistory } from "react-router-native";
import { useApolloClient } from "@apollo/react-hooks";
import Constants from "expo-constants";
import theme from "../theme";

import AuthStorageContext from "../contexts/AuthStorageContext";
import useAuthorizedUser from "../hooks/useAuthorizedUser";
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
  const apolloClient = useApolloClient();
  const authStorage = useContext(AuthStorageContext);
  const history = useHistory();
  const { authorizedUser } = useAuthorizedUser();

  const routeTabPress = useCallback((path) => {
    history.push(path);
  }, []);

  const signOut = useCallback(async (path) => {
    await authStorage.removeAccessToken();
    apolloClient.resetStore();
    history.push(path);
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView} horizontal>
        <Link
          to="/"
          title="Repositories"
          path="/"
          cb={routeTabPress}
          component={AppBarTab}
        ></Link>
        <>
          {authorizedUser === null && (
            <Link
              to="/signin"
              title="Sign in"
              path="/signin"
              cb={routeTabPress}
              component={AppBarTab}
            ></Link>
          )}
          {authorizedUser && (
            <AppBarTab title="Sign out" path="/" cb={signOut}></AppBarTab>
          )}
        </>
      </ScrollView>
    </View>
  );
};

export default AppBar;
