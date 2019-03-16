import React, { Component } from "react";
import { AppRegistry, TextInput } from "react-native";

export default class InputText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }
  render() {
    return (
      <TextInput
        style={{ height: 40 }}
        placeholder="Napiste meno"
        onChangeText={text => this.setState({ text })}
      />
    );
  }
}

AppRegistry.registerComponent("my_work", () => InputText);
