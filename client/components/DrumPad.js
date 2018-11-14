import React from 'react';

const DrumPad = ({ addDrumKey, drumKey }) => {
  const { key, source, description } = drumKey;
  return (
    <div className="drum-pad" id={key}>
      <audio onLoadedData={(evt) => addDrumKey(key, evt.target, description)} src={source}></audio>
      {key}
    </div>
  )
}

export default DrumPad;
