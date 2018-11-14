import React from 'react';

const DrumPad = ({ addDrumPad, drumKey, hitDrumPad }) => {
  const { key, source, description } = drumKey;
  return (
    <div className="drum-pad" onClick={() => hitDrumPad({key: key})} id={key}>
      <audio className="clip" id={key} onLoadedData={(evt) => addDrumPad(key, evt.target, description)} src={source}></audio>
      {key}
    </div>
  )
}

export default DrumPad;
