import React from "react";
import "./Projects.scss"

const projects = [
    {
        icon: "https://github.com/YoungPandaJin.png",
        link: "https://youngpandajin.github.io/",
        name: "Portfolio site",
        description: "Well I don't reccomend clicking on the link as this will just lead you back to this page. But go ahead and have fun. "
    }
]


export default function Projects(){

    return (
        <div className="projects">
            <div className="project-title">
                <h1>Personal Projects</h1>
            </div>
        </div>

    )

}