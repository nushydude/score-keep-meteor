import React, { Component } from 'react';
import PropTypes from 'prop-types';

import AddPlayer from './AddPlayer.js';
import PlayersList from './PlayersList.js';
import TitleBar from './TitleBar.js';

class App extends Component {
  render() {
      return (
        <div>
          <TitleBar title={this.props.title} subtitle={this.props.subtitle} />
          <div className="wrapper">
            <PlayersList players={this.props.players} />
            <AddPlayer />
          </div>
        </div>
      );
  }
}

App.propTypes = {
  title: PropTypes.string.isRequired,
  players: PropTypes.array.isRequired
};

export default App;
