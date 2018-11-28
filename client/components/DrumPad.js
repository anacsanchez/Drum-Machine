import React from 'react';

const DrumPad = ({ addDrumPad, drumKey, hitDrumPad }) => {
  const { key, source, description, color } = drumKey;
  return (
    <div className="drum-pad" style={{backgroundColor: color}} onPlaying={() => document.getElementById(key).classList.add('active')} onTimeUpdate={() => document.getElementById(key).classList.remove('active')} onLoadedData={(evt) => addDrumPad(key, evt.target, description)} onClick={() => hitDrumPad({key: key})} id={key}>
      <audio className="clip" id={key} src={source}></audio>
      {key}
    </div>
  )
}

export default DrumPad;
