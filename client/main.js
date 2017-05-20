import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';

// thisis for MiniMongo
// it uses the same MongoDB collection as the one on the server
import {Players} from './../imports/api/players';

import App from './../imports/ui/App.js';

Meteor.startup(() => {
  Tracker.autorun(() => {
    let players = Players.find({}, {
      sort: {
        score: -1
      }
    }).fetch();

    let title = 'Score Keep';
    let subtitle = 'Created by Anusha Dharmasena';
    
    ReactDOM.render(<App title={title} subtitle={subtitle} players={players} />, document.getElementById('app'));
  });
});
