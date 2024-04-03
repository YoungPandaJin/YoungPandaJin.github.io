import { useEffect, useRef } from "react";
import { AiFillFire } from "react-icons/ai";
import "./Skills.scss"
    
const isMobile = () => {
    return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i)
      .test(navigator.userAgent);
};
const sleep = (ms: number | undefined) => new Promise((r) => setTimeout(r, ms));

const skillsLang = [
    { name: "HTML", icon: "devicon-html5-plain colored", link: "https://html.com" },
    { name: "CSS", icon: "devicon-css3-plain colored", link: "https://www.w3.org/TR/CSS/#css" },
    { name: "React", icon: "devicon-react-original colored", link: "https://reactjs.org" },
    { name: "TypeScript", icon: "devicon-typescript-plain colored", link: "https://www.typescriptlang.org" },
    { name: "Java", icon: "devicon-java-plain colored", link: "https://www.oracle.com/java/" },
    { name: "JavaScript", icon: "devicon-javascript-plain colored", link: "https://www.javascript.com" },
    { name: "NodeJS", icon: "devicon-nodejs-plain colored", link: "https://nodejs.org/en/" },
    { name: "Python", icon: "devicon-python-plain colored", link: "https://www.python.org" },
    { name: "Git", icon: "devicon-git-plain colored", link: "https://git-scm.com" },
];

export default function Skills() {
    const mobile = isMobile();
    const skills = useRef<HTMLDivElement[]>([]);
    const skillContainer = useRef<HTMLElement|null>();

    const observer = new IntersectionObserver(async (entry) => {
        if (entry[0].isIntersecting) {
            await sleep(700);
            await onMouseEnter();
            await onMouseLeave();
        }
    });

    const onMouseEnter = async () => {
        for (let i in (skills.current)) {
            (skills.current as any)[i].classList.add("stackHover");
            await sleep(15);
        }
    };

    const onMouseLeave = async () => {
        for (let i in skills.current) {
            (skills.current as any)[i].classList.remove("stackHover");
          await sleep(20);
        }
      };

    
    useEffect(() => {
        // Mobile users don't get skill animations
        if(mobile){
            return;
        }
        skills.current = Array.prototype.slice.call(
            document.getElementsByClassName("skill")
        );
        skillContainer.current = document.getElementById("skillContainer");
        if (skillContainer.current) {
            observer.observe(skillContainer.current);
        }
        return () => { 
            if (skillContainer.current) {
                observer.unobserve(skillContainer.current);
            }
        };
    });

    return (
        <div className="skills-container" id="skillContainer">
            <div className="skills-title" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                <AiFillFire />Skills
            </div>
            <div className="line" />
            <div className="skills">
                {skillsLang.map((_skill, index) => {
                        return mobile ?
                        (
                                <div className="skill" key={index}>
                                <i className={_skill.icon} />
                                <div className="blocky">{_skill.name}</div>
                                <div className="blocky-connector" />
                            </div>
                        ) : 
                        (<a
                            href={_skill.link} className="skill" key={index}
                            target="_blank" rel="noreferrer">
                            <i className={_skill.icon} />
                            <div className="blocky">{_skill.name}</div>
                            <div className="blocky-connector" />
                        </a>);
                    })
                }
            </div>
        </div>
    );
}
