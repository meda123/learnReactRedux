import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);

    // Term stands for search-term
    // We only change state in the constructor func
    this.state = {
      term: ""
    };
  }

  render() {
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={event =>
            this.setState({
              term: event.target.value
            })}
        />
      </div>
    );
  }
}

export default SearchBar;
