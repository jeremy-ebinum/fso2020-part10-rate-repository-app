import React from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";
import Text from "./Text";

const styles = StyleSheet.create({
  container: { marginLeft: 10, marginRight: 10 },
  text: {
    color: "#ffffff",
  },
});

const AppBarTab = ({ title }) => {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback
        onPress={() => Alert.alert("Under Construction")}
      >
        <Text fontWeight="bold" style={styles.text}>
          {title}
        </Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default AppBarTab;
