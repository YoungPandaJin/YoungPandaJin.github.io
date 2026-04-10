import Project1 from './Project1/Project.png';

export interface Project {
  title: string;
  description: string[];
  images: string[];
  links?: { label: string; url: string }[];
  technologies?: string[];
}

const projects: Project[] = [
  {
    title: "Portfolio",
    description: [
      "My personal portfolio built from scratch with React, TypeScript, and SCSS.",
      "Features smooth page transitions, a starry animated background, background music with volume control, and a hidden easter egg.",
      "Fully responsive and deployed to GitHub Pages.",
    ],
    images: [Project1],
    links: [
      { label: "GitHub", url: "https://github.com/YoungPandaJin/YoungPandaJin.github.io" },
      { label: "Live Demo", url: "https://youngpandajin.github.io/" },
    ],
    technologies: ["React", "TypeScript", "SCSS"],
  },
];

export default projects;
