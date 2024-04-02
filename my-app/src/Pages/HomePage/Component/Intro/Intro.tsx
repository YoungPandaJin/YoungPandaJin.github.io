import React from "react";
import { AiOutlineMail, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import "./Intro.scss";
// import tarotCard1 from '../../../../Assets/tarotCardFool.webp';
// import tarotCard2 from '../../../../Assets/tarotCardMagician.webp';

const buttons = [
    { text: "Github", icon: <AiFillGithub />, url: "https://github.com/YoungPandaJin" },
    { text: "LinkedIn", icon: <AiFillLinkedin />, url: "https://www.linkedin.com/in/jinyoung-choi-61aa181ba/" },
    { text: "Email", icon: <AiOutlineMail />, url: "mailto: choij4@rose-hulman.edu" },
]

export default function Intro(){
    
    return (
        <div className="intro">
            <div className="general-container">
                <div className="avatar">
                    <img className="pfp" src="https://github.com/YoungPandaJin.png" alt="PandaJin's pfp" />
                </div>
                {/* <div className="tarot-cards">
                        <img src={tarotCard1} className="tarot-card" alt="Tarot Card 1" />
                        <img src={tarotCard2} className="tarot-card" alt="Tarot Card 2" />
                        {/* Add more tarot cards as needed */}
                {/* </div> */}
                <div className="buttons-container">
                    {buttons.map((data) =>
                        <a href={data.url} key={data.text}
                            target="_blank" rel="noreferrer"
                            className="button">
                            {data.icon}
                            {data.text}
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};