import "./Homepage.scss"
import Intro from "./Component/Intro/Intro";
import Bio from "./Component/Bio/Bio"
import Skills from "./Component/Skills/Skills";
import Spacer from "./Component/Spacer/Spacer";
import React from "react";
// import layer1 from "../../Assets/layer1.svg"

export default function HomePage(){
    const [turnOnSkills, setTurnOnSkills] = React.useState(false);
    const [turnOnProjects, setTurnOnProjects] = React.useState(false);
    const [turnOnExperience, setTurnOnExperience] = React.useState(false);
    function turnOffAll() {
        setTurnOnSkills(false);
        setTurnOnProjects(false);
        setTurnOnExperience(false);
    }

    const bubblesContainerRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        const bubblesContainer = bubblesContainerRef.current;
        if (bubblesContainer) {
            for (let i = 1; i <= 50; i++) {
                const span = document.createElement('span');
                const randomValue = Math.floor(Math.random() * 30) + 1; // Generates a random value between 1 and 30
                span.style.setProperty('--i', randomValue.toString());
                bubblesContainer.appendChild(span);
            }
        }
    }, []);


    return (
        <>
            <div className="bubbles" id="bubbles-container" ref={bubblesContainerRef}/>
            <div className="homepage-container">
                <Intro/>
                <Spacer color={'white'} type={'noMargin'}/>

                <Bio/>
                <Spacer color={'white'} type={'button'}/>
                
                <div className="button-container">
                    <button onClick={() => {
                        turnOffAll();
                        setTurnOnSkills(!turnOnSkills)}} 
                        className="skillButton">
                        Skills
                    </button>
                    <button onClick={() => {
                        turnOffAll();
                        setTurnOnProjects(!turnOnProjects)}} 
                        className="projectsButton">
                        Projects
                    </button>
                    <button onClick={() => {
                        turnOffAll();
                        setTurnOnExperience(!turnOnExperience)}} 
                        className="experienceButton">
                        Experience
                    </button>
                </div>
                <Spacer color={'white'} type={'endButton'}/>

                {turnOnSkills && <Skills/>}
                {/* <Spacer pic={layer1} type={""} /> */}
            </div>

        </>
    )

}