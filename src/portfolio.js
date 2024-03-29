﻿/* Change this file to get your personal Portfolio */

import emoji from "react-easy-emoji";

// Your Summary And Greeting Section

const greeting = {
  username: "Karan Mahboobani",
  title: "Hi all, I'm Karan",
  subTitle: emoji(
    "Android Developer 👨‍💻 | Research and Development Engineer 🤖 | Tech Writer ✍️ "
  ),
  resumeLink:
    "https://drive.google.com/file/d/1gSqEwO0OtvZFmHIkd2HvFcnCgQDiI8tP/view?usp=sharing",
};

// Your Social Media Link

const socialMediaLinks = {
  github: "https://github.com/pingatkaran",
  linkedin: "https://www.linkedin.com/in/karanpb250",
  gmail: "pingatkaran@gmail.com",
  facebook: "https://www.facebook.com/karanpb250",
  twitter: "https://twitter.com/karanpb250",
};

// Your Skills Section

const skillsSection = {
  title: "What i do",
  subTitle:
    "Handling all the Base Codes, Milestones and Sprints of all the projects",
  skills: [
    emoji(
      "⚡ Designing and developing Android and iOS Applications using Java, Kotlin, and Javascript"
    ),
    emoji("⚡ End to End automation executions"),
    emoji(
      "⚡ Working on test automation tools like Selenium, Appium, UFT, SoapUI, AutoIT, Katalon Studio, Seetest Mobile Cloud administration, etc"
    ),
    emoji(
      "⚡ Building predictive models to extract insights and make decisions out of data"
    ),
  ],

  softwareSkills: [
    {
      skillName: "Android",
      classname: "logos:android-icon",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "java",
      classname: "logos:java",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "react-native",
      classname: "simple-icons:react",
      style: {
        color: "#61DAFB",
      },
    },
    {
      skillName: "ionic",
      classname: "logos:ionic-icon",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "git",
      classname: "logos:git-icon",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "circle-ci",
      classname: "logos:circleci",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "kotlin",
      classname: "logos:kotlin",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "firebase",
      classname: "logos:firebase",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "opencv",
      classname: "logos:opencv",
      style: {
        backgroundColor: "white",
        color: "#D00000",
      },
    },
    {
      skillName: "github",
      classname: "logos:github-icon",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "gitlab",
      classname: "logos:gitlab",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "python",
      classname: "logos:python",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "javascript",
      classname: "logos:javascript",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "Visual code",
      classname: "logos:visual-studio-code",
      style: {
        backgroundColor: "transparent",
      },
    },
  ],
};

// Your top 3 work experiences

const workExperiences = {
  viewExperiences: false, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Facebook",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "June 2018 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      ],
    },
    {
      role: "Front-End Developer",
      company: "Quora",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "May 2017 – May 2018",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      role: "Software Engineer Intern",
      company: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2015 – Sep 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to false
  display: true, // Set false to hide this section, defaults to true
};

// Your certifications

const certifications = {
  certifications: [
    {
      title: "Selenium",
      subtitle: "- Vskills",
      logo_path: "vskills-logo.png",
      certificate_link:
        "https://www.vskills.in/certification/40215-certified-selenium-professional-bharat-babu-kammakatla",
      alt_name: "Vskills",
      color_code: "#F6EAEA",
    },
    {
      title: "Cloud Admin & Automation",
      subtitle: "- Experitest",
      logo_path: "seetest-logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1qhh1ZUBB2VPrOaT6bNgiJ5Y2sHmCjvMg/view?usp=drivesdk",
      alt_name: "Experitest",
      color_code: "#F0FFDD",
    },
    {
      title: "Python",
      subtitle: "- Jose Portilla",
      logo_path: "pierian-data-logo.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-a80d6e7c-e753-421d-bcee-5a7bc1769f28/",
      alt_name: "Pierian-Data",
      color_code: "#FEF6E6",
    },
    {
      title: "Selenium Python",
      subtitle: "- Rahul Shetty",
      logo_path: "rahulshettyacademy-logo.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-e4b66abd-18c6-4bfa-9132-ab22d2bf7ef7/",
      alt_name: "RahulShettyAcademy",
      color_code: "#FDE9EA",
    },
    {
      title: "Data Science",
      subtitle: "- IBM",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://coursera.org/share/893f2210f39f5a60d0463b19b469b808",
      alt_name: "IBM",
      color_code: "#E3F1FA",
    },
    {
      title: "ML and DS",
      subtitle: "- Andrei Neagoie",
      logo_path: "zero-to-mastery.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-fd118b7d-7436-442c-a7f8-5077c432d596/",
      alt_name: "Zero To Mastery",
      color_code: "#FFFDDD",
    },
  ],
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://blog.bharatkammakatla.com/selenium-python-automation-framework-how-to-build-cke5vij9p012h9ds1fsaocyax",
      title: "How to build a Selenium Python Automation Framework",
      description:
        "Interested in building a test automation framework with selenium and python? If so, check out here !",
    },
    {
      url: "https://blog.bharatkammakatla.com/steps-to-build-a-selenium-java-framework-ckdsi73xg005ga9s1defhemfz",
      title: "Steps to build a Selenium Java Automation Framework",
      description:
        "Interested in building a test automation framework with selenium and java? If so, check out here !",
    },
    {
      url: "https://blog.bharatkammakatla.com/face-expression-recognition-using-keras-and-cnns-ckbevmufo0195dis1dfs10kt1",
      title: "Building a Machine Learning model to detect human emotions",
      description:
        "Are you interested to know how machines detect human emotions? If so, check out here !",
    },
    {
      url: "https://medium.com/@bharatkammakatla/basic-end-to-end-scikit-learn-workflow-cd9e9a50491b?source=friends_link&sk=b828ac262c172abd7508efcbd00e5bd3",
      title: "Basic End-to-End Scikit-Learn workflow",
      description:
        "Do you want to know how a basic end-to-end scikit-learn workflow is implemented ? If so, check out here !",
    },
  ],
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91 7016982532",
  email_address: "pingatkaran@gmail.com",
};

export {
  greeting,
  socialMediaLinks,
  skillsSection,
  workExperiences,
  openSource,
  blogSection,
  contactInfo,
  certifications,
};
