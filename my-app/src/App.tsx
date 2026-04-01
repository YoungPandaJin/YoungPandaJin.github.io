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
      audioRef.current.play().catch((error) => {
        console.warn('Autoplay failed:', error);
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
          <header className="App-header">
            <Pages />
          </header>
          <div className="music-controls">
            <Icon
              icon={musicEnabled ? musicIcon : musicOffIcon}
              onClick={() => setMusicEnabled(!musicEnabled)}
              width="32"
              height="32"
              style={{ cursor: 'pointer', color: 'white' }}
            />
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={handleVolumeChange}
            />
          </div>
          <audio ref={audioRef} src={BGM} loop />
        </>
      )}
    </div>
  );
}

export default App;