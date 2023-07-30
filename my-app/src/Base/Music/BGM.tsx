import React, { useState } from "react";
import { TbMusic, TbMusicOff } from "react-icons/tb";
import "./BGM.scss";

export interface IBGMProps{
    menu: boolean;
}

export default function BGM(props : IBGMProps){
    const [isMuted,setIsMuted] = useState<boolean>(false);

    const bgm = new Audio("../../Assets/Music/BGM.mp3");
    bgm.loop = true;
    bgm.volume = 0.5;

    const toggleMute = () =>{
        setIsMuted(!isMuted);
        bgm.muted =!isMuted;
        bgm.muted ? bgm.pause() : bgm.play();
    }

    return (
		<div className={`BGMButton ${props.menu}` } onClick={toggleMute} >
			{isMuted ? <TbMusicOff/> : <TbMusic/>}
		</div>
	);

}