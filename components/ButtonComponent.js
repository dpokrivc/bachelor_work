import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { MonoText } from "../components/StyledText";

export default class ButtonComponent extends React.Component {
  render() {
    const { onChange, title } = this.props;
    return (
      <TouchableOpacity onPress={onChange} style={styles.button}>
        <MonoText>{title}</MonoText>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  }
});
