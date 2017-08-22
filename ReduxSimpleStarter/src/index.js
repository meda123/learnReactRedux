import _ from 'lodash';
import React, { Component } from "react";
import ReactDOM from "react-dom";
import YTSearch from "youtube-api-search";

import SearchBar from "./components/search_bar";
import VideoList from "./components/video_list";
import VideoDetail from "./components/video_detail";

//Get your own Youtube API Key and paste it inside the '' below.
const API_KEY = '';

// Create a new component. Should produce some HTML
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('surfboards');
  }


  videoSearch(term) {
    YTSearch({key: API_KEY, term: term},videos => {
        this.setState({
          videos: videos,
          selectedVideo: videos[0]
        });
      });
  }

  render() {
    // Get version of inner function every 300 milliseconds
    const videoSearch = _.debounce((term) => {this.videoSearch(term) }, 300);

    return (
      <div>
        <SearchBar onSearchTermChange = {term => this.videoSearch(term)}/>
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
          videos={this.state.videos}
        />
      </div>
    );
  }
}

// Render component code
ReactDOM.render(<App />, document.querySelector(".container"));
