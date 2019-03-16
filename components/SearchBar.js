import React from "react";
import { SearchBar } from "react-native-elements";

export default class Search extends React.Component {
  state = {
    search: ""
  };
  updateSearch = search => {
    this.setState({ search });
  };
  render() {
    const { search } = this.state.search;
    return (
      <SearchBar
        placeholder="Vyhladat"
        onChangeText={this.updateSearch}
        value={search}
      />
    );
  }
}