import * as React from "react";
import { View, StyleSheet, Button } from "react-native";
import { Card, Paragraph, Title } from "react-native-paper";
import { Notifications, Permissions, Constants } from "expo";

let YOUR_PUSH_TOKEN = "";

export default class Timer extends React.Component {
  state = {
    notification: {}
  };

  registerForPushNotificationsAsync = async () => {
    if (Constants.isDevice) {
      const { status: existingStatus } = await Permissions.getAsync(
        Permissions.NOTIFICATIONS
      );
      let finalStatus = existingStatus;
      if (existingStatus !== "granted") {
        const { status } = await Permissions.askAsync(
          Permissions.NOTIFICATIONS
        );
        finalStatus = status;
      }
      if (finalStatus !== "granted") {
        alert("Failed to get push token for push notification!");
        return;
      }
      let token = await Notifications.getExpoPushTokenAsync();
      YOUR_PUSH_TOKEN = token;
      console.log("Here1: ", YOUR_PUSH_TOKEN);
    } else {
      alert("Must use physical device for Push Notifications");
    }
  };
  componentDidMount() {
    this.registerForPushNotificationsAsync();
    this._notificationSubscription = Notifications.addListener(this.listen);
  }
  componentWillUnmount() {
    this._notificationSubscription &&
      this._notificationSubscription.remove(this.listen);
  }
  listen = notification => {
    this.setState({ notification: notification });
    console.log("notification", notification);
  };
  sendPushNotification = async () => {
    const message = {
      to: YOUR_PUSH_TOKEN,
      sound: "true",
      title: "AHOJ",
      body: "Je potrebne si vziat dalsi liek!"
    };
    let t = new Date();
    t.setSeconds(t.getSeconds() + 20);
    const schedulingOptions = {
      repeat: "minute"
    };

    console.log("Here:", YOUR_PUSH_TOKEN);
    alert("Notifikacie nastavene");
    // Notifications.cancelAllScheduledNotificationsAsync();
    Notifications.scheduleLocalNotificationAsync(message, schedulingOptions);
  };
  cancelNotification = async () => {
    Notifications.cancelAllScheduledNotificationsAsync();
  };

  render() {
    const { dosage, period } = this.props;
    return (
      <View style={styles.container}>
        <Title style={styles.title}>Upozornenie</Title>
        <Paragraph style={styles.paragraph}>
          Davka o objeme {dosage} sa odporuca brat kazdych {period} hodin
        </Paragraph>
        <Card>
          <Button
            title={"Potvrdit"}
            onPress={() => this.sendPushNotification()}
          />
        </Card>
        <Card>
          <Button
            title={"Zrusit upozornenia"}
            onPress={() => this.cancelNotification()}
          />
        </Card>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1",
    padding: 8,
    paddingBottom: 10
  },
  title: {
    color: "skyblue",
    letterSpacing: 3,
    fontSize: 28,
    textAlign: "center"
  },
  paragraph: {
    fontSize: 15,
    textAlign: "center",
    paddingBottom: 10
  }
});
