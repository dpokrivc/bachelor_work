import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { Text, Title, Paragraph, Card } from "react-native-paper";

export default class Medicine extends React.Component {
  render() {
    const { title, description, application } = this.props;
    return (
      <View style={styles.container}>
        <Card style={styles.card}>
          <Text style={styles.title}>{title}</Text>
        </Card>
        <Text style={styles.titleText}>Popis:</Text>
        <Paragraph style={styles.description}>{description}</Paragraph>
        <Text style={styles.titleText}>Aplikacia:</Text>
        <Paragraph style={styles.description}>{application}</Paragraph>
        <Text style={styles.titleText}>Graf:</Text>
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
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  welcomeImage: {
    width: 320,
    height: 220,
    resizeMode: "contain",
    marginTop: 3,
    marginLeft: -10
  },
  card: {
    backgroundColor: "skyblue",
    paddingTop: 10
  },
  title: {
    paddingLeft: 10,
    paddingBottom: 20,
    fontSize: 35,
    textAlign: "center",
    textAlignVertical: "center",
    color: "#fff",
    letterSpacing: 3,
    fontWeight: "bold"
  },
  titleText: {
    fontWeight: "bold",
    fontSize: 25,
    textAlign: "center",
    color: "skyblue"
  },
  description: {
    paddingLeft: 10,
    fontSize: 16,
    lineHeight: 20,
    paddingRight: 10,
    textAlign: "center"
  }
});
