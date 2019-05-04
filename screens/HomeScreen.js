import React from "react";
import DrugItem from "../components/DrugItem";
import drugs from "../data/drugs.json";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: "Zoznam liekov"
  };
  state = {
    medicine: "",
    drugs: null
  };
  componentDidMount() {
    this.setState({ drugs: drugs });
  }
  handleDrugItem = item => {
    this.setState({ medicine: item });
    this.props.navigation.navigate("Detail", { medicine: item });
  };
  render() {
    if (this.state.drugs === null) {
      return null;
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
  contentContainer: {
    paddingTop: 30
  },
  welcomeContainer: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20
  },

  welcomeText: {
    fontSize: 28,
    color: "#fff"
  }
});
