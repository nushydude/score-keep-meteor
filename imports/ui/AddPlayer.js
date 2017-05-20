import React, {Component} from 'react';

import {Players} from './../api/players';


class AddPlayer extends Component {

  handleSubmit(e) {
    e.preventDefault();
    const playerName = e.target.playerName.value;
    if (playerName) {
      Players.insert({
        name: playerName,
        score: 0
      });
      e.target.playerName.value = "";
    }
  }


  render() {
    return (
      <div className="item">
        <form className="form" onSubmit={this.handleSubmit.bind(this)}>
          <input className="form__input" type="text" name="playerName" placeholder="Player name"/>
          <button className="button">Add Player</button>
        </form>
      </div>
    );
  }
}

export default AddPlayer;
