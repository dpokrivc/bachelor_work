import React from "react";
import { View, StyleSheet, Image, ScrollView } from "react-native";
import { Text, Paragraph, Card, IconButton } from "react-native-paper";

export default class Medicine extends React.Component {
  state = {
    resizingMode: false
  };
  resizeImage = () => {
    this.setState({ resizingMode: true });
  };
  reduceImage = () => {
    this.setState({ resizingMode: false });
  };
  render() {
    const {
      title,
      description,
      application,
      graphName,
      sideeffects
    } = this.props;
    const graphNames = {
      gentamicin: require("../assets/images/gent.png"),
      vankomicin: require("../assets/images/vanko.png"),
      penicilinG: require("../assets/images/peni.png")
    };
    if (this.state.resizingMode) {
      return (
        <View style={styles.container}>
          <Card style={styles.card}>
            <Text style={styles.title}>{title}</Text>
          </Card>
          <Text style={styles.titleText}>Popis:</Text>
          <Paragraph style={styles.description}>{description}</Paragraph>
          <Text style={styles.titleText}>Aplikácia:</Text>
          <Paragraph style={styles.description}>{application}</Paragraph>
          <Text style={styles.titleText}>Vedľajšie účinky:</Text>
          <Paragraph style={styles.description}>{sideeffects}</Paragraph>
          <Text style={styles.titleText}>Graf:</Text>
          <ScrollView
            horizontal={true}
            minimumZoomScale={1}
            maximumZoomScale={5}
          >
            <Image
              source={graphNames[graphName]}
              style={styles.fullScreenImage}
            />
          </ScrollView>
          <View style={styles.buttonContainer}>
            <IconButton
              style={styles.button}
              icon="zoom-in"
              size={45}
              color="skyblue"
              onPress={this.resizeImage}
            />
            <IconButton
              style={styles.button}
              icon="zoom-out"
              size={45}
              color="skyblue"
              onPress={this.reduceImage}
            />
          </View>
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <Card style={styles.card}>
          <Text style={styles.title}>{title}</Text>
        </Card>
        <Text style={styles.titleText}>Popis:</Text>
        <Paragraph style={styles.description}>{description}</Paragraph>
        <Text style={styles.titleText}>Aplikacia:</Text>
        <Paragraph style={styles.description}>{application}</Paragraph>
        <Text style={styles.titleText}>Vedľajšie účinky:</Text>
        <Paragraph style={styles.description}>{sideeffects}</Paragraph>
        <Text style={styles.titleText}>Graf:</Text>
        <Image source={graphNames[graphName]} style={styles.welcomeImage} />
        <View style={styles.buttonContainer}>
          <IconButton
            style={styles.button}
            icon="zoom-in"
            size={45}
            color="skyblue"
            onPress={this.resizeImage}
          />
          <IconButton
            style={styles.button}
            icon="zoom-out"
            size={45}
            color="skyblue"
            onPress={this.reduceImage}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  button: {},
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  fullScreenImage: {
    width: 700,
    height: 400,
    borderRadius: 20,
    marginRight: 10,
    marginLeft: 5
  },
  welcomeImage: {
    width: 330,
    height: 300,
    resizeMode: "stretch",
    marginTop: 3,
    marginBottom: 5
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
