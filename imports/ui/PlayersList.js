import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FlipMove from 'react-flip-move';

import Player from './Player';

class PlayersList extends Component {
  renderPlayers() {
    if (this.props.players.length === 0) {
      return (
        <div className="item">
          <p className="item__message item__message--empty">Add your first player to get started</p>
        </div>
      );
    }
    return this.props.players.map(player => (
      <Player key={player._id} player={player} />
    ));
  }

  render() {
    return (
      <div>
        <FlipMove maintainContainerHeight={true}>
          {this.renderPlayers()}
        </FlipMove>
      </div>
    );
  }
}

PlayersList.propTypes = {
  players: PropTypes.array.isRequired,
};

export default PlayersList;
