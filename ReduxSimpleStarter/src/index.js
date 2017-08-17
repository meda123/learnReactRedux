import React, { Component } from 'react'; 
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';





// Create a new component. Should produce some HTML
class App extends Component {
    constructor(props) {
        super(props);

        this.state = { videos: [] };

        YTSearch({key: API_KEY, term:'surfboards'}, (videos) => {
            this.setState ({ videos });
            // abve works when key-val are the same aka {videos: videos}
        });
    }

    render() {
        return (
            <div>
                <SearchBar />
                <VideoList videos={this.state.videos} />
            </div>
        );
    }
   
}



// Render component code 
ReactDOM.render(<App/>, document.querySelector('.container'));
