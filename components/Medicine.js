import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { MonoText } from "../components/StyledText";

export default class Medicine extends React.Component {
  render() {
    const { title, description, application } = this.props;
    return (
      <View>
        <MonoText style={styles.title}>{title}</MonoText>
        <MonoText>Opis: {description}</MonoText>
        <MonoText>Aplikacia :{application}</MonoText>
        <Image
          source={
            __DEV__
              ? require("../assets/images/first.png")
              : require("../assets/images/robot-prod.png")
          }
          style={styles.welcomeImage}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  welcomeImage: {
    width: 320,
    height: 220,
    resizeMode: "contain",
    marginTop: 3,
    marginLeft: -10
  },
  title: {
    paddingLeft: 10,
    fontSize: 26
  }
});
