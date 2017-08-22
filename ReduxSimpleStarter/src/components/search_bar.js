import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);

    // Term stands for search-term
    // We only change state in the constructor func
    this.state = {term: ""};
  }

  render() {
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  }


onInputChange(term) {
  // Sets state of component
  this.setState({term});
  // Fires off the on-call function
  this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
