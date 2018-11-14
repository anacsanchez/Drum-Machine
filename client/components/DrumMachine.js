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
    source: './assets/drumset/cowbell-808.wav'
  },
  {
    key: 'W',
    description: 'Kick Thump',
    source: './assets/drumset/kick-thump.wav'
  },
  {
    key: 'E',
    description: 'Chirp',
    source: './assets/drumset/perc-chirpy.wav'
  },
  {
    key: 'A',
    description: 'Ride Cymbal',
    source: './assets/drumset/ride-acoustic01.wav'
  },
  {
    key: 'S',
    description: 'Shaker',
    source: './assets/drumset/shaker-analog.wav'
  },
  {
    key: 'D',
    description: 'Big Snare',
    source: './assets/drumset/snare-big.wav'
  },
  {
    key: 'Z',
    description: 'Distressed Snare',
    source: './assets/drumset/snare-dist01.wav'
  },
  {
    key: 'X',
    description: 'Vinyl Snare',
    source: './assets/drumset/snare-vinyl02.wav'
  },
  {
    key: 'C',
    description: 'Lo-Fi',
    source: './assets/drumset/tom-lofi.wav'
  }
];
