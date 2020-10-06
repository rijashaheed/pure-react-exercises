import React, { useState } from "react";

const AudioControlsB = () => {
  const [audio, setAudio] = useState({
    volume: 23,
    bass: 12,
    mid: 40,
    treble: 30,
  });

  const decVol = () =>
    setAudio({
      ...audio,
      volume: audio.volume - 1,
    });

  const incVol = () =>
    setAudio({
      ...audio,
      volume: audio.volume + 1,
    });

  const decTreble = () =>
    setAudio({
      ...audio,
      treble: audio.treble - 1,
    });

  const incTreble = () =>
    setAudio({
      ...audio,
      treble: audio.treble + 1,
    });

  const decMid = () =>
    setAudio({
      ...audio,
      mid: audio.mid - 1,
    });

  const incMid = () =>
    setAudio({
      ...audio,
      mid: audio.mid + 1,
    });

  const decBass = () =>
    setAudio({
      ...audio,
      bass: audio.bass - 1,
    });

  const incBass = () =>
    setAudio({
      ...audio,
      bass: audio.bass + 1,
    });
  return (
    <div className="audio-controls">
      <ul className="audio-list">
        <li>
          <div class="audio-settings">
            <button class="btn" onClick={decVol}>
              -
            </button>
            <div class="vol-no">
              <div className="audio-no">{audio.volume}</div>
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
              <div className="audio-no">{audio.treble}</div>
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
              <div className="audio-no">{audio.mid}</div>{" "}
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
              <div className="audio-no">{audio.bass}</div>{" "}
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
export default AudioControlsB;
