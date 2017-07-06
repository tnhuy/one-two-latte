import React, { Component } from 'react';
import '../../css/App.css';
import Header from './header';
import PostIndex from './post_index';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const style = {
  paddingTop: 100
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="App-body">
          <PostIndex style={style} />
        </div>
      </div>
    );
  }
}

export default App;
