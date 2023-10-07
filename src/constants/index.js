import { red } from "@mui/material/colors";
import {
    ECerti,
    javascript,
    html,
    kautilya,
    avm,
    nitk,
    css,
    reactjs,
    tailwind,
    nodejs,
    rawg,
    mongodb,
    postgre,
    git,
    github,
    figma,
    bootstrap,
    c,
    cpp,
    express,
    postman,
    python,
    vscode,
    instagram,
    linkedin,
    facebook,
    gmail,
    link,
    CodeGPT,
    jquery,
    solidity,
    redux,
    latex,
    graphql,
    aws,
    jupyter,
    impresario,
    foodmart,
    player,
    devsearch,
    voteblock
  } from "../assets";
  
  const educations = [
    {
      title: "Secondary education",
      company_name: "DAV Centenary Public School, Siwan",
      icon: avm,
      iconBg: "#FFFF",
      date: "2008 - 2017",
      points: [
        "CBSE 10th - 10 CGPA ",
      ],
    },
    {
      title: "Senior secondary education",
      company_name: "Delhi Public School, Bokaro Steel City, Jharkhand",
      icon: kautilya,
      iconBg: "#FFFF",
      date: "2018 - 2019",
      points: [
        "CBSE 12th - 91.6%",
      ],
    },
    {
      title: "B.Tech",
      company_name: "NITK Surathkal, Karnataka",
      icon: nitk,
      iconBg: "#FFFF",
      date: "2020 - 2024",
      points: [
        "Persuing Electrical and Electronics Engineering",
      ],
    },
  ];
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "education",
      title: "Education",
    },
    {
      id: "tech",
      title: "Skills",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  export const contacts = [
    {
      id: "github",
      title: "Github",
      icon: github,
      link : "https://github.com/rohandevray"
    },
    {
      id: "linkedIn",
      title: "LinkedIn",
      icon: linkedin,
      link : "https://www.linkedin.com/in/rohan-kumar-pushpam-326001212/"
    },
    {
      id: "gmail",
      title: "Gmail",
      icon: gmail,
      link : "mailto:rohan12dx@gmail.com"
    },
    {
      id: "insta",
      title: "Insta",
      icon: instagram,
      link : "https://www.instagram.com/rohan_12dx/"
    },
    {
      id: "facebook",
      title: "Facebook",
      icon: facebook,
      link : "https://www.facebook.com/profile.php?id=100008341568818"
    },
  ];

  const Jobs = [{
    name : "NITK",
    role : "Research Intern",
    date : "May 2023 - July 2023",
    tags: [
      {
        name: "python",
        icon: python,
      },
      {
        name: "jupyter",
        icon: jupyter,
      },
    ],
  }]
  
  const webd = [
    {
      name: "Django",
      icon: nodejs,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux",
      icon: redux,
    },
    {
      name: "PostgreSQL",
      icon: postgre,
    },
    {
      name: "Bootstrap",
      icon: bootstrap,
    },
    {
      name: "AWS",
      icon: aws,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "GraphQL",
      icon: graphql,
    },
    {
      name: "JQuery",
      icon: jquery,
    },
    
    

  ];

  const tools = [
    {
      name: "Git",
      icon: git,
    },
    {
      name: "Github",
      icon: github,
    },
    {
      name: "VsCode",
      icon: vscode,
    },
    {
      name: "Postman",
      icon: postman,
    },
    {
      name: "Figma",
      icon: figma,
    },
    {
      name: "Jupyter Notebook",
      icon: jupyter,
    },
    {
      name: "Latex",
      icon: latex,
    },

  ];

  const lang = [
    {
      name: "C",
      icon: c,
    },
    {
      name: "C++",
      icon: cpp,
    },
    {
      name: "Javascript",
      icon: javascript,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "Solidity",
      icon: solidity,
    },
    {
      name: "HTML",
      icon: html,
    },
    {
      name: "CSS",
      icon: css,
    },
    
  ];
  
  
  const projects = [
    {
      name: "DevSearch",
      description:
        "It's an online directory for developers to showcase their projects, skills and connect with them.",
      tags: [
        
        {
          name: "django",
          icon: nodejs,
        },
       
        {
          name: "javascript",
          icon: javascript,
        },
        {
          name: "postgreSQL",
          icon:postgre,
        },
        {
          name: "AWS",
          icon: aws,
        },
      ],
      image: devsearch,
      links : [
        {
          icon : github,
          src : "https://github.com/rohandevray/noobcoders"
        },
      ],
    },
    {
      name: "VoteBlock",
      description:
        "This application is a decentralized blockchain based voting system for organizational elections.",
      tags: [
        {
          name: "react",
          icon: reactjs,
        },
        {
          name: "javascript",
          icon: javascript,
        },
        {
          name: "Tailwind",
          icon: tailwind,
        },
        {
          name: "solidity",
          icon: solidity,
        },
        
      ],
      image: voteblock,
      links : [
        // {
        //   icon : link,
        //   src : "https://storemate.netlify.app/"
        // },
        {
          icon : github,
          src : "https://github.com/rohandevray/votechain"
        },
      ],
    },
    {
      name: "FoodMart",
      description:
        "It's an Django based E-commerce website for fruits and shakes which is integrated with paypal payment methods.",
      tags: [
        {
          name: "django",
          icon: nodejs,
        },
        {
          name: "javascript",
          icon: javascript,
        },
        {
          name: "Python",
          icon: python,
        },
      ],
      image: foodmart,
      links : [
        // {
        //   icon : link,
        //   src : "https://crypt-hunt.netlify.app/"
        // },
        {
          icon : github,
          src : "https://github.com/rohandevray/apex"
        },
      ],
    },
    {
      name: "Music Player",
      description:
        "It's a react based music player intergrated with few low beats music.",
      tags: [
        {
          name: "react",
          icon: reactjs,
        },
        {
          name: "javascript",
          icon: javascript,
        },
      ],
      image: player,
      links : [
        {
          icon : link,
          src : "https://react-app-tau-drab.vercel.app/"
        },
        {
          icon : github,
          src : "https://github.com/rohandevray/React-App"
        },
      ],
    },
    {
      name: "Impresario",
      description:
        "It's a Django web application made using PostgreSQL to keep the track of organisations and their events",
      tags: [
        {
          name: "Django",
          icon: nodejs,
        },
        {
          name: "Django",
          icon: postgre,
        },
        {
          name: "javascript",
          icon: javascript,
        },
        // {
        //   name: "Css",
        //   icon: css,
        // },
      ],
      image: impresario,
      links : [
        // {
        //   icon : link,
        //   src : "https://code-gpt-henna.vercel.app/"
        // },
        {
          icon : github,
          src : "https://github.com/rohandevray/impresario-prod"
        },
      ],
    },

    {
      name: "Ignite GameInfo",
      description:
        "This website is made to contain tons of video games details along with their platform and ratings.",
      tags: [
        {
          name: "react",
          icon: reactjs,
        },
        {
          name: "javascript",
          icon: javascript,
        },
        {
          name: "redux",
          icon: redux,
        },
      ],
      image:rawg,
      links : [
        {
          icon : github,
          src : "https://github.com/rohandevray/React-GameInfo-Project"
        },
      ],
    },
    
  ];
  
  export {educations,lang, tools, webd, projects, Jobs};