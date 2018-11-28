import React, { Component } from 'react';
import { DrumPad } from './index';

class DrumSet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      descrip:'Start Playing!',
      keyList: []
    }
  }

  componentWillMount() {
    document.addEventListener('keydown', this.hitDrumPad);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.hitDrumPad);
  }

  hitDrumPad = (evt) => {
    let drumPad = this.state.keyList.find(drumKey => drumKey.key == evt.key.toUpperCase());
    if (drumPad) {
      drumPad.audio.play();
      this.setState({ descrip: drumPad.description });
    }

  }

  addDrumPad = (key, audio, description) => {
    this.setState({
      keyList: [...this.state.keyList, { key, audio, description}]
    });
  }

  render() {
    return (
      <div id="display">
        <div id="drum-pads">
        {
          this.props.drumSet.map((drumKey, i) => {
            return <DrumPad hitDrumPad={this.hitDrumPad} addDrumPad={this.addDrumPad} drumKey={drumKey} key={i}/>
          })
        }
        </div>
        <div id="sound-descrip">
          {this.state.descrip}
        </div>
    </div>
    )
  }
}

export default DrumSet;
