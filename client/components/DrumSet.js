import React, { Component } from 'react';
import { DrumPad } from './index';

class DrumSet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      soundDescrip: '',
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
    let drumPad = this.state.keyList.find(drumKey => drumKey.key == evt.key)
    if (drumPad) {
      drumPad.audio.play()
    }
    this.setState({ soundDescrip: drumPad.description })
  }

  addDrumPad = (key, audio, description) => {
    this.setState({
      keyList: [...this.state.keyList, { key, audio, description }]
    })
  }

  render() {
    return (
      <div id="display">
        <div id="sound-descrip">
          {this.state.soundDescrip}
        </div>
        <div id="drum-pads">
        {
          this.props.drumSet.map((drumKey, i) => {
            return <DrumPad addDrumPad={this.addDrumPad} drumKey={drumKey} key={i}/>
          })
        }
        </div>
    </div>
    )
  }
}

export default DrumSet;
