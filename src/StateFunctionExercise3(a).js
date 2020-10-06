import React, { useState } from "react";

const AudioControls = () => {
  const [volume, setVolume] = useState(89);
  const [treble, setTreble] = useState(32);
  const [mid, setMid] = useState(50);
  const [bass, setBass] = useState(41);

  const incVol = () => {
    setVolume((volume) => volume + 1);
  };

  const decVol = () => {
    setVolume((volume) => volume - 1);
  };

  const incTreble = () => {
    setTreble((treble) => treble + 1);
  };

  const decTreble = () => {
    setTreble((treble) => treble - 1);
  };

  const incMid = () => {
    setMid((mid) => mid + 1);
  };

  const decMid = () => {
    setMid((mid) => mid - 1);
  };

  const incBass = () => {
    setBass((bass) => bass + 1);
  };

  const decBass = () => {
    setBass((bass) => bass - 1);
  };

  return (
    <div className="audio-controls">
      <ul className="audio-list">
        <li>
          <div class="audio-settings">
            <button class="btn" onClick={decVol}>
              -
            </button>
            <div class="vol-no">
              <div className="audio-no">{volume}</div>
              <div>VOLUME</div>
            </div>
            <button class="btn" onClick={incVol}>
              +
            </button>
          </div>
        </li>
        <li>
          <div class="audio-settings">
            <button class="btn" onClick={decTreble}>
              -
            </button>
            <div class="vol-no">
              <div className="audio-no">{treble}</div>
              <div>TREBLE</div>
            </div>
            <button class="btn" onClick={incTreble}>
              +
            </button>
          </div>
        </li>
        <li>
          <div class="audio-settings">
            <button class="btn" onClick={decMid}>
              -
            </button>
            <div class="vol-no">
              <div className="audio-no">{mid}</div>{" "}
              <div className="gap">MID</div>
            </div>
            <button class="btn" onClick={incMid}>
              +
            </button>
          </div>
        </li>
        <li>
          <div class="audio-settings">
            <button class="btn" onClick={decBass}>
              -
            </button>
            <div class="vol-no">
              <div className="audio-no">{bass}</div>{" "}
              <div className="gap">BASS</div>
            </div>
            <button class="btn" onClick={incBass}>
              +
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default AudioControls;
