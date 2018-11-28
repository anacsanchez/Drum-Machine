import React, { Component } from 'react';
import { DrumSet } from './index';

class DrumMachine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drumSet: drumKeys
    }
  }

  render() {
    return (
      <div id="drum-machine">
        <DrumSet drumSet={this.state.drumSet} />
      </div>
    )
  }
}

export default DrumMachine;

const drumKeys = [
  {
    key: 'Q',
    description: 'Cowbell',
    source: './assets/drumset/cowbell-ss.wav',
    color: "blue"
  },
  {
    key: 'W',
    description: 'Kick Thump',
    source: './assets/drumset/kick-thump-s.wav',
    color: "red"
  },
  {
    key: 'E',
    description: 'Chirp',
    source: './assets/drumset/perc-chirpy.wav',
    color: "green"
  },
  {
    key: 'A',
    description: 'Ride Cymbal',
    source: './assets/drumset/ride-acoustic-ss.wav',
    color: "pink"
  },
  {
    key: 'S',
    description: 'Shaker',
    source: './assets/drumset/shaker-analog.wav',
    color: "purple"
  },
  {
    key: 'D',
    description: 'Big Snare',
    source: './assets/drumset/snare-big-s.wav',
    color: "teal"
  },
  {
    key: 'Z',
    description: 'Distressed Snare',
    source: './assets/drumset/snare-dist-s.wav',
    color: "darkgreen"
  },
  {
    key: 'X',
    description: 'Vinyl Snare',
    source: './assets/drumset/snare-vinyl02.wav',
    color: "magenta"
  },
  {
    key: 'C',
    description: 'Lo-Fi',
    source: './assets/drumset/tom-lofi.wav',
    color: "orange"
  }
];
