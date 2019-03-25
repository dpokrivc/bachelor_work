import React from "react";
//mport InputText from "../components/TextInput";
import PickItem from "../components/PickItem";
import ButtonComponent from "../components/ButtonComponent";
import Medicine from "../components/Medicine";
import drugs from "../data/drugs.json";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
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
    ID: ""
  };
  componentDidMount() {
    this.setState({ drugs: drugs });
  }
  handleButton = () => {
    const { isPressedButton } = this.state;
    this.setState({ isPressedButton: !isPressedButton });
  };
  handlePicker = itemValue => {
    const { isPressedButton } = this.state;
    this.setState({ medicine: itemValue, isPressedButton: !isPressedButton });
  };
  render() {
    // console.log("Here:", this.state.Drugs);
    // console.log("Here:", this.state.drugs);
    if (this.state.drugs === null) {
      return null;
    }
    const { title, description, application, id } = this.state.medicine;
    if (this.state.isPressedButton) {
      return (
        <PickItem onChange={this.handlePicker} select={this.state.medicine} />
      );
    }
    console.log("M", this.state.medicine);
    if (this.state.medicine !== "") {
      return (
        <View style={styles.container}>
          <ScrollView
            style={styles.container}
            contentContainerStyle={styles.contentContainer}
          >
            <View style={styles.welcomeContainer}>
              <MonoText style={styles.welcomeText}> Vitajte </MonoText>
            </View>

            <View style={styles.getStartedContainer}>
              <MonoText style={styles.getStartedText}>
                Toto je aplikacia, ktora vam pomaha pri davkovani liekov
              </MonoText>
            </View>
            <View>
              <ButtonComponent
                onChange={this.handleButton}
                title="Vyberte si liek"
              />
            </View>
            <View>
              <Medicine
                title={title}
                description={description}
                application={application}
              />
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
            <MonoText style={styles.welcomeText}> Vitajte </MonoText>
            {/* <Image
                 source={
                   __DEV__
                     ? require('../assets/images/robot-dev.png')
                     : require('../assets/images/robot-prod.png')
                 }
                 style={styles.welcomeImage}
               /> */}
          </View>

          <View style={styles.getStartedContainer}>
            <MonoText style={styles.getStartedText}>
              Toto je aplikacia, ktora vam pomaha pri davkovani liekov
            </MonoText>
          </View>
          <View>
            <ButtonComponent
              onChange={this.handleButton}
              title="Vyberte si liek"
            />
            <Text>{this.state.id}</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
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
    fontSize: 28
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
