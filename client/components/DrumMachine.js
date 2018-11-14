import React, { Component } from 'react';
import { DrumPad } from './index';

class DrumMachine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currSound: '',
      keyList: []
    }
  }

  componentWillMount() {
    document.addEventListener('keydown', this.hitDrumPad)
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.hitDrumPad)
  }

  hitDrumPad = (evt) => {
    let drumKey = this.state.keyList.find(thisKey => thisKey.key == evt.key)
    if (drumKey) {
      drumKey.audio.play()
    }
    this.setState({ currSound: drumKey.description })
  }

  addDrumPad = (key, audio, description) => {
    console.log(key, audio, description)
    this.setState({
      keyList: [...this.state.keyList, { key, audio, description }]
    })
  }

  render() {
    return (
      <div id="drum-machine" >
        <div id="display">
          <div id="sound-descrip">
            {this.state.currSound}
          </div>
          <div id="drum-pads">
          {
            drumKeys.map((drumKey, i) => {
              return <DrumPad addDrumKey={this.addDrumPad} drumKey={drumKey} key={i}/>
            })
          }
          </div>
        </div>
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
    description: '',
    source: ''
  },
  {
    key: 'a',
    description: '',
    source: ''
  },
  {
    key: 's',
    description: '',
    source: ''
  },
  {
    key: 'd',
    description: '',
    source: ''
  },
  {
    key: 'z',
    description: '',
    source: ''
  },
  {
    key: 'x',
    description: '',
    source: ''
  },
  {
    key: 'c',
    description: '',
    source: ''
  }
];
