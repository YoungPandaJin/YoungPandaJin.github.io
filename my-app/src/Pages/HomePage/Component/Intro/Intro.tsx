import React from "react";
import { AiOutlineMail, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import "./Intro.scss";

const buttons = [
    { text: "Github", icon: <AiFillGithub />, url: "https://github.com/YoungPandaJin" },
    { text: "LinkedIn", icon: <AiFillLinkedin />, url: "https://www.linkedin.com/in/jinyoung-choi-61aa181ba/" },
    { text: "Email", icon: <AiOutlineMail />, url: "mailto: choij4@rose-hulman.edu" },
]

// const cards = [
//     {
//         style: {

//         }
//     },
//     {
//         style: {
            
//         }
//     },
//     {
//         style: {
            
//         }
//     }

// ]

export default function Intro(){
    
    return (
        <div className="intro">
            <div className="general-container">
                <div className="avatar">
                    <img className="pfp" src="https://github.com/YoungPandaJin.png" alt="PandaJin's pfp" />
                </div>
                <div className="buttons-container">
                {buttons.map((data) =>
                <a href={data.url} key={data.text}
                    target="_blank" rel="noreferrer"
                    className="button"
                >
                    {data.icon}
                    {data.text}
                </a>
                )}
                </div>
                {/* <div className="cards-container">
                    {cards.map((data) => 
                        <div className="card" style={data.style}></div> 
                    )}
                </div> */}
            </div>
        </div>
    );
};