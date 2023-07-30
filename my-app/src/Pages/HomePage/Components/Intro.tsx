import React from "react";
import { AiOutlineMail, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import "./Intro.scss";

const buttons = [
    { text: "Github", icon: <AiFillGithub />, url: "https://github.com/YoungPandaJin" },
    { text: "Email", icon: <AiOutlineMail />, url: "mailto: choij4@rose-hulman.edu" },
    { text: "LinkedIn", icon: <AiFillLinkedin/> , url: "linkedin.com/in/jinyoung-choi-61aa181ba"}
]


export default function Intro(){
    
    return (
        <div className="intro">
            <div className="avatar">
                <img src = "https://github.com/YoungPandaJin.png" alt="YoungPandaJin's pfp" />
            </div>

            <div className="button-container">
                {buttons.map((data) => 
                    <a href={data.url}
                    key={data.text}
                    target="_blank"
                    rel="noreferrer"
                    className="button">
                    {data.icon}
                    {data.text}
                    </a>
                )}
            </div>
        </div>
    )
  }