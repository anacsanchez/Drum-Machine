import React from 'react';

const DrumPad = ({ addDrumPad, drumKey }) => {
  const { key, source, description } = drumKey;
  return (
    <div className="drum-pad" id={key}>
      <audio onLoadedData={(evt) => addDrumPad(key, evt.target, description)} src={source}></audio>
      {key}
    </div>
  )
}

export default DrumPad;
