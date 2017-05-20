import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {Players} from './../api/players';

class Player extends Component {
  render() {
    const { _id, name, score } = this.props.player;

    return (
      <div className="item">
        <div className="player">
          <div>
            <h3 className="player__name">
              {name}
            </h3>
            <p className="player__stats">
              {score} point(s)
            </p>
          </div>          
          <div className="player__actions">
            <button className="button button--round" onClick={() => {
                Players.update({_id}, {$inc: {score: -1}});
              }}
            >
              -1
            </button>
            <button className="button button--round" onClick={() => {
                Players.update({_id}, {$inc: {score: +1}});
              }}
            >
              +1
            </button>
            <button className="button button--round" onClick={() => Players.remove({_id})}>X</button>
          </div>
        </div>
      </div>
    );
  }
}

Player.propTypes = {
  player: PropTypes.object.isRequired,
};

export default Player;
