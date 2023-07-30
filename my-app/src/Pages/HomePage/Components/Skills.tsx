// import React, { useEffect, useRef } from "react";
// import { AiFillFire } from "react-icons/ai";
// import "./Skills.scss";

export default function skills(){

    return(<></>);

}

// const langs = [
//     {name: "C#", icon: "devicon-csharp-plain colored", link: "https://docs.microsoft.com/en-us/dotnet/csharp/" },
//     {name: "HTML", icon: "devicon-html5-plain colored", link: "https://html.com" },
//     { name: "CSS", icon: "devicon-css3-plain colored", link: "https://www.w3.org/TR/CSS/#css" },
//     { name: "JavaScript", icon: "devicon-javascript-plain colored", link: "https://www.javascript.com" },
//     { name: "React", icon: "devicon-react-original colored", link: "https://reactjs.org" },
//     { name: "Java", icon: "devicon-java-plain colored", link: "https://www.oracle.com/java/" },
//     { name: "NodeJS", icon: "devicon-nodejs-plain colored", link: "https://nodejs.org/en/" },
//     { name: "Python", icon: "devicon-python-plain colored", link: "https://www.python.org" },
//     { name: "Git", icon: "devicon-git-plain colored", link: "https://git-scm.com" },
//     { name: "C", icon: "devicon-c-original-logo", link: "https://git-scm.com" },
// ]



// export default function Skills(){
//     const skills = useRef();
//     let skillContainer = useRef();

//     const observer = new IntersectionObserver(async (entry) => {
//         if (entry[0].isIntersecting) {
//             await sleep(700);
//             await onMouseEnter();
//             await onMouseLeave();
//         }
//     });

//     const onMouseEnter = async () => {
//         for (let i in skills.current) {
//             skills.current[i].classList.add("stackHover");
//             await sleep(15);
//         }
//     };

//     const onMouseLeave = async () => {
//         for (let i in skills.current) {
//             skills.current[i].classList.remove("stackHover");
//             await sleep(20);
//         }
//     };

//     useEffect(() => {
//         skills.current = Array.prototype.slice.call(
//             document.getElementsByClassName("skill")
//         );
//         skillContainer.current = document.getElementById("skillContainer");
//         observer.observe(skillContainer.current);
//         return () => { observer.unobserve(skillContainer.current) };
//     })

//     return (
//         <div className="skills-container" id="skillContainer">
//             <div className="skills-title" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
//                 <AiFillFire />Skills ToolBox
//             </div>
//             <div className="line" />
//             <div className="skills-content">
//                 {langs.map((lang, index) => {
//                     return(
//                     <div className="skill" key={index}>
//                         <i className={lang.icon} />
//                         <div className="blocky">{lang.name}</div>
//                         <div className="blocky-connector" />
//                     </div> )
//                 })}
//             </div>
//         </div>
//     )
// }