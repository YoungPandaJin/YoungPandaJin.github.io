import Project1 from './Project1/Project.png';
import Project2 from './Project2/PandaJin.png';

export interface Projects {
  title: string;
  description: string[];
  images: string[];
  links?: { label: string; url: string }[];
  technologies?: string[];
}

const projects: Projects[] = [
  {
    title: "Portfolio",
    description: [
      "This is my portfolio website. I used React, TypeScript, and SCSS to build this website.",
      "I used React Hooks to manage the state of the website.",
      "I used TypeScript to write the code and SCSS to style the website.",
      "This is where I am going to update my projects. Currently its done for now, but I might add more later"
    ],
    images: [Project1],
    links: [
      { label: "GitHub", url: "https://github.com/YoungPandaJin" },
      { label: "Live Demo", url: "https://github.com/YoungPandaJin" },
    ],
    technologies: ["React", "TypeScript", "SCSS"],
  },
  {
    title: "Ai \"Friend\" (WIP)",
    description: [
      "This uses uses a python and pytorch to react sarcastically to what I speak. (Warning will interrupt you)",
      "I used python to write the code andused speech recognition to get the audio from the user.",
      "Then I get the response by using a dataset from huggingface and by converting the text to speech I can output it",
    ],
    images: [Project2],
    links: [
      { label: "GitHub", url: "https://github.com/YoungPandaJin" },
      { label: "Live Demo", url: "https://github.com/YoungPandaJin" },
    ],
    technologies: ["Python", "Pytorch", "Speech Recognition"],
  },
];

export default projects;
