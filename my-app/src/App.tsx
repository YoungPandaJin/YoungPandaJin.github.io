import React, { useState, useEffect, useRef } from 'react';
import { Icon } from '@iconify/react';
import musicIcon from '@iconify-icons/tabler/music';
import musicOffIcon from '@iconify-icons/tabler/music-off';
import MusicPrompt from './Layout/MusicPrompt';
import Pages from './Pages/Pages';
import BGM from './Assets/WispX(ToT).mp3';
import { ANIMATION_DURATION, DEFAULT_VOLUME } from './shared/constants';
import './App.scss';

function App() {
  const [musicPrompt, setMusicPrompt] = useState(true);
  const [musicEnabled, setMusicEnabled] = useState(false);
  const [volume, setVolume] = useState(DEFAULT_VOLUME);
  const [animationClass, setAnimationClass] = useState('');
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleMusicAccept = () => {
    setAnimationClass('fade-out');
    setTimeout(() => {
      setMusicEnabled(true);
      setMusicPrompt(false);
      setAnimationClass('fade-in');
    }, ANIMATION_DURATION);
  };

  const handleMusicDecline = () => {
    setAnimationClass('fade-out');
    setTimeout(() => {
      setMusicPrompt(false);
      setAnimationClass('fade-in');
    }, ANIMATION_DURATION);
  };

  const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(event.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
    if (musicEnabled && audioRef.current) {
      audioRef.current.play().catch(() => {
        setMusicEnabled(false);
      });
    } else if (audioRef.current) {
      audioRef.current.pause();
    }
  }, [musicEnabled, volume]);

  return (
    <div className={`App ${animationClass}`}>
      {musicPrompt ? (
        <MusicPrompt onAccept={handleMusicAccept} onDecline={handleMusicDecline} />
      ) : (
        <>
          <main className="App-header">
            <Pages />
          </main>
          <div className="music-controls" role="group" aria-label="Music controls">
            <button
              onClick={() => setMusicEnabled(!musicEnabled)}
              aria-label={musicEnabled ? 'Mute background music' : 'Play background music'}
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
            >
              <Icon
                icon={musicEnabled ? musicIcon : musicOffIcon}
                width="32"
                height="32"
                style={{ color: 'white' }}
              />
            </button>
            <label className="sr-only" htmlFor="volume-slider">Volume</label>
            <input
              id="volume-slider"
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={handleVolumeChange}
              aria-label="Volume"
            />
          </div>
          <audio ref={audioRef} src={BGM} loop />
        </>
      )}
    </div>
  );
}

export default App;