import React from "react";
//mport InputText from "../components/TextInput";
import PickItem from "../components/PickItem";
import ButtonComponent from "../components/ButtonComponent";
import Medicine from "../components/Medicine";
import DrugItem from "../components/DrugItem";
import drugs from "../data/drugs.json";
import Timer from "../components/Timer";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  Button,
  TouchableOpacity,
  View
} from "react-native";
//import { WebBrowser } from "expo";

import { MonoText } from "../components/StyledText";
//import { TextInput } from "react-native-gesture-handler";

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  };
  state = {
    medicine: "",
    isPressedButton: "",
    drugs: null,
    isPressedTimer: false,
    ID: ""
  };
  componentDidMount() {
    this.setState({ drugs: drugs });
  }
  handleButton = () => {
    const { isPressedButton } = this.state;
    this.setState({ isPressedButton: !isPressedButton });
  };
  handleTimer = () => {
    const { isPressedTimer } = this.state;
    this.setState({ isPressedTimer: !isPressedTimer });
  };
  handlePicker = itemValue => {
    const { isPressedButton } = this.state;
    this.setState({ medicine: itemValue, isPressedButton: !isPressedButton });
  };
  handleDrugItem = item => {
    this.setState({ medicine: item });
  };
  render() {
    if (this.state.drugs === null) {
      return null;
    }
    const {
      title,
      description,
      application,
      dosage,
      timing
    } = this.state.medicine;
    if (this.state.isPressedButton) {
      return (
        <PickItem onChange={this.handlePicker} select={this.state.medicine} />
      );
    }
    if (this.state.isPressedTimer) {
      return <Timer dosage={dosage} period={timing} />;
    }
    if (this.state.medicine !== "") {
      return (
        <View style={styles.container}>
          <ScrollView
            style={styles.container}
            contentContainerStyle={styles.contentContainer}
          >
            <View>
              <Medicine
                title={title}
                description={description}
                application={application}
              />
            </View>
            <View style={styles.buttonContainer}>
              <View style={styles.button}>
                <Button title="Upozornenia" onPress={this.handleTimer} />
              </View>
              <View style={styles.button}>
                <Button onPress={this.handleButton} title="Vyberte si liek" />
              </View>
            </View>
          </ScrollView>
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
          <View style={styles.welcomeContainer}>
            <Text style={styles.welcomeText}>Vyberte si liek !</Text>
          </View>
          <View>
            <View>
              {this.state.drugs.drugs.map((drug, key) => {
                return (
                  <DrugItem
                    key={key}
                    med={drug}
                    onChange={this.handleDrugItem}
                  />
                );
              })}
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#7bc2e7"
  },
  button: {
    flex: 1,
    borderRadius: 10,
    backgroundColor: "#fff",
    marginTop: 3,
    marginRight: 5,
    marginLeft: 5,
    marginBottom: 3
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  developmentModeText: {
    marginBottom: 20,
    color: "rgba(0,0,0,0.4)",
    fontSize: 14,
    lineHeight: 19,
    textAlign: "center"
  },
  contentContainer: {
    paddingTop: 30
  },
  welcomeContainer: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: "contain",
    marginTop: 3,
    marginLeft: -10
  },
  welcomeText: {
    fontSize: 28,
    color: "#fff"
  },
  inputName: {
    fontSize: 14,
    marginLeft: 5,
    textAlign: "center"
  },
  getStartedContainer: {
    alignItems: "center",
    marginHorizontal: 50
  },
  homeScreenFilename: {
    marginVertical: 7
  },
  codeHighlightText: {
    color: "rgba(96,100,109, 0.8)"
  },
  codeHighlightContainer: {
    backgroundColor: "rgba(0,0,0,0.05)",
    borderRadius: 3,
    paddingHorizontal: 4
  },
  getStartedText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    lineHeight: 24,
    textAlign: "center"
  },
  tabBarInfoContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3
      },
      android: {
        elevation: 20
      }
    }),
    alignItems: "center",
    backgroundColor: "#fbfbfb",
    paddingVertical: 20
  },
  tabBarInfoText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    textAlign: "center"
  },
  navigationFilename: {
    marginTop: 5
  },
  helpContainer: {
    marginTop: 15,
    alignItems: "center"
  },
  helpLink: {
    paddingVertical: 15
  },
  helpLinkText: {
    fontSize: 14,
    color: "#2e78b7"
  }
});
