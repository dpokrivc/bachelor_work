import * as React from "react";
import { StyleSheet, Button, View } from "react-native";
import { Avatar, Card, Title, Paragraph } from "react-native-paper";

export default class DrugItem extends React.Component {
  render() {
    const { onChange, med } = this.props;
    const { title, paragraph } = med;
    return (
      <Card style={styles.card}>
        <Card.Content>
          <Title>{title}</Title>
          <Paragraph>{paragraph}</Paragraph>
        </Card.Content>
        <Card.Cover
          source={
            __DEV__
              ? require("../assets/images/palceholder.jpeg")
              : require("../assets/images/robot-prod.png")
          }
        />
        <Card.Actions>
          <View style={styles.button}>
            <Button title="Tento liek pouzivam" onPress={() => onChange(med)} />
          </View>
        </Card.Actions>
      </Card>
    );
  }
}
const styles = StyleSheet.create({
  card: {
    marginBottom: 12
  },
  button: {
    flex: 1,
    backgroundColor: "#E6E6FA",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10
  }
});
