import React, { useState, useEffect } from "react";
import { TbMusic, TbMusicOff } from "react-icons/tb";
import music from "../../Assets/BGM.mp3"
import "./BGM.scss"

export interface IBGMProps {
    menu: boolean;
}

export default function BGM(props: IBGMProps) {
    const [isMuted, setIsMuted] = useState<boolean>(true);
    const [bgm] = useState(new Audio(music));

    const toggleMute = () => {
        setIsMuted(prevIsMuted => !prevIsMuted);
        bgm.muted = !isMuted;
        bgm.muted ? bgm.pause() : bgm.play();
    }

    useEffect(() => {
        bgm.loop = true;
        bgm.volume = 0.40;
    }, [bgm]);

    return (
        <div className={`BGMButton ${props.menu && 'hideButton'}`} onClick={toggleMute}>
            {isMuted ? <TbMusicOff /> : <TbMusic />}
        </div>
    );
}
