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
    key: 'q',
    description: 'Cowbell',
    source: './assets/drumset/cowbell-808.wav'
  },
  {
    key: 'w',
    description: 'Kick Thump',
    source: './assets/drumset/kick-thump.wav'
  },
  {
    key: 'e',
    description: 'Chirp',
    source: './assets/drumset/perc-chirpy.wav'
  },
  {
    key: 'a',
    description: 'Ride Cymbal',
    source: './assets/drumset/ride-acoustic01.wav'
  },
  {
    key: 's',
    description: 'Shaker',
    source: './assets/drumset/shaker-analog.wav'
  },
  {
    key: 'd',
    description: 'Big Snare',
    source: './assets/drumset/snare-big.wav'
  },
  {
    key: 'z',
    description: 'Distressed Snare',
    source: './assets/drumset/snare-dist01.wav'
  },
  {
    key: 'x',
    description: 'Vinyl Snare',
    source: './assets/drumset/snare-vinyl02.wav'
  },
  {
    key: 'c',
    description: 'Lo-Fi',
    source: './assets/drumset/tom-lofi.wav'
  }
];
