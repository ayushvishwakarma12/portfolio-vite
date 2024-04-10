import {
  HTML,
  CSS,
  TailwindCSS,
  ReactJS,
  NextJS,
  Redux,
  Bootstrap,
  JavaScript,
  Python,
  ExpressJS,
  NodeJS,
  MySql,
  MongoDB,
  Git,
  GitHub,
} from "./Icons";

export const skills = [
  {
    category: "Frontend",
    skillsName: [
      { name: "HTML", percentage: 90, skillIcon: HTML },
      { name: "CSS", percentage: 80, skillIcon: CSS },
      { name: "JavaScript", percentage: 85, skillIcon: JavaScript },
      { name: "React.js", percentage: 90, skillIcon: ReactJS },
      { name: "Next.JS", percentage: 50, skillIcon: NextJS },
      { name: "Redux", percentage: 50, skillIcon: Redux },
      { name: "TailwindCSS", percentage: 70, skillIcon: TailwindCSS },
      { name: "Bootstrap", percentage: 80, skillIcon: Bootstrap },
    ],
  },
  {
    category: "Backend",
    skillsName: [
      { name: "Python", percentage: 75, skillIcon: Python },
      { name: "Express.JS", percentage: 85, skillIcon: ExpressJS },
      { name: "Node.JS", percentage: 80, skillIcon: NodeJS },
    ],
  },
  {
    category: "Database",
    skillsName: [
      { name: "MySQL", percentage: 85, skillIcon: MySql },
      { name: "MongoDB", percentage: 75, skillIcon: MongoDB },
    ],
  },
  {
    category: "Version Control",
    skillsName: [
      { name: "Git", percentage: 80, skillIcon: Git },
      { name: "GitHub", percentage: 75, skillIcon: GitHub },
    ],
  },
];
