import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import theme from "../theme";

import FormikTextInput from "./FormikTextInput";
import Text from "./Text";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "#ffffff",
    padding: 15,
  },
  signinBtn: {
    padding: 15,
    backgroundColor: theme.colors.primary,
    borderRadius: 4,
  },
  signinBtnText: {
    color: "#ffffff",
    alignSelf: "center",
  },
});

const SignInForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput name="username" placeholder="Username" />
      <FormikTextInput name="password" placeholder="Password" secureTextEntry />
      <TouchableOpacity onPress={onSubmit} activeOpacity={0.8}>
        <View style={styles.signinBtn}>
          <Text style={styles.signinBtnText} fontWeight="bold">
            Sign in
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default SignInForm;
