import React from "react";
import { TouchableOpacity, StyleSheet, View } from "react-native";
import { Button } from "react-native-paper";
import { MonoText } from "../components/StyledText";

export default class ButtonComponent extends React.Component {
  render() {
    const { onChange, title } = this.props;
    return (
      <View>
        <View>
          <Button title={title} onPress={onChange} />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    flex: 1,
    backgroundColor: "#E6E6FA",
    borderRadius: 30
  }
});
