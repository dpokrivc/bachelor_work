import React from "react";
import { Picker } from "react-native";

export default class PickItem extends React.Component {
  render() {
    const { onChange, select } = this.props;
    return (
      <Picker selectedValue={select} onValueChange={onChange}>
        <Picker.Item label="Vankomicin" value="vankomicin" />
        <Picker.Item label="Gentamicin" value="gentamicin" />
        <Picker.Item label="Penicilin G" value="penicilin g" />
        <Picker.Item label="Metronidazol" value="metronidazol" />
      </Picker>
    );
  }
}
