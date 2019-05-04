import React from "react";
import { Button, StyleSheet, View, ScrollView } from "react-native";
import Medicine from "../components/Medicine";

export default class Detail extends React.Component {
  static navigationOptions = {
    title: "Moj liek"
  };
  state = {
    dosage: "",
    period: ""
  };
  handleTimer = () => {
    let medicine = this.props.navigation.getParam("medicine");
    this.props.navigation.navigate("Notification", {
      dosage: medicine.dosage,
      period: medicine.timing
    });
  };

  render() {
    const medicine = this.props.navigation.getParam("medicine");
    const {
      title,
      application,
      description,
      graphName,
      sideeffects
    } = medicine;
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container}>
          <View>
            <Medicine
              title={title}
              description={description}
              application={application}
              graphName={graphName}
              sideeffects={sideeffects}
            />
            <View style={styles.button}>
              <Button
                color="#7bc2e7"
                onPress={this.handleTimer}
                title="Upozornenia"
              />
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
  }
});
