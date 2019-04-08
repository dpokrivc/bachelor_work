import React from "react";
import { Picker } from "react-native";
import drugs from "../data/drugs.json";

export default class PickItem extends React.Component {
  state = {
    drugs: null
  };
  componentDidMount() {
    this.setState({ drugs: drugs });
    console.log(drugs);
  }
  render() {
    const { onChange, select } = this.props;
    if (this.state.drugs !== null) {
      return (
        <Picker selectedValue={select} onValueChange={onChange}>
          {this.state.drugs.drugs.map((drug, index) => {
            return <Picker.Item key={index} label={drug.title} value={drug} />;
          })}
        </Picker>
      );
    }
    return null;
  }
}
