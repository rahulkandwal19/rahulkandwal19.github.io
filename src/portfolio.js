/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Rahul Kandwal",
  title: "Hi, I am\nRahul Kandwal",
  subTitle: emoji(
    "A second-year engineering student with good academics and a deep passion for technology, seeking an\n" +
      " internship"
  ),
  resumeLink:
    "./RahulKandwal_Resume.pdf", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/rahulkandwal19",
  linkedin: "https://www.linkedin.com/in/rahulkandwal19/",
  gmail: "rahulkandwal19@outlook.com",
  twitter:"https://x.com/rahulkandwal19",
  kaggle:"https://www.kaggle.com/rahulkandwal19",
  medium:"",
  discord:"https://discord.com/users/rahulkandwal19",
  reserchGate:"",
  display: true
};

// Skills Section

const skillsSection = {
  title: "Tech Skills",
  subTitle: "Have knowledge of web development, Machine Learning & basics of IoT using ESP32",
  skills: [
    emoji(
      "⚡ Development using FLASK + MySQL and/or Firebase"
    ),
    emoji("⚡ Machine Learning using tensorflow on images and audio data"),
    emoji(
      "⚡ Have worked with APIs, Chart.JS, numpy, pandas, git/github"
    )
  ],

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    }
  ],
  display: true 
};

// Education Section

const educationInfo = {
  display: true, 
  schools: [
    {
      schoolName: "Graphic Era Hill University",
      logo: require("./assets/images/gehuLogo.png"),
      subHeader: "Bachelor of Technology (Computer Science & Engineering)",
      duration: "June 2023 - 2027",
      desc: "Relevant Courses : Data Structure, Algorithms, OOP, Fundamentals of IoT & Introduction to ML",
      descBullets: [
        "Presented reserch project in AIU Anveshan 2025, an International Student Research Convention",
        "Won Crack-C 2024 an programing competition for 1st year students organised by GEU-ACM",
        "CGPA : 9.10"
      ]
    },
    {
      schoolName: "DAV Public School, Dehradun",
      logo: require("./assets/images/davSchool.png"),
      subHeader: "CBSE Board",
      duration: "March 2023",
      desc: "Subjects : English, Computer Science, Physics, Chemistry & Mathematics",
      descBullets: [
        "Developed a GUI-based Periodic Table application using Python (Tkinter) and MySQL, showcasing fundamental CRUD operations for class 12th project work."
      ]
    }
  ]
};

const achievementSection = {
  title: "Certifications",
  subtitle:
    "",

  achievementsCards: [
    {
      title: "Applied Data Science - Level 2",
      subtitle: "-by IBM Skill Builder",
      image: require("./assets/images/IBM.png"),
      imageAlt: "IBM Logo",
      url: "https://www.credly.com/badges/21597c82-07c1-45b0-b499-929837a0a971"
    },
    {
      title: "Python Essentials",
      subtitle: "-by CISCO Networking Academy",
      image: require("./assets/images/CiscoNetworkAcademy.png"),
      imageAlt: "IBM Logo",
      url: "https://www.credly.com/badges/889f9839-1565-47ac-9d02-04a6de416890"
    },
    {
      title: "Geo-Processing with Python",
      subtitle: "-by IIRS-ISRO",
      image: require("./assets/images/iirs.png"),
      imageAlt: "IBM Logo",
      url: "https://www.linkedin.com/posts/rahulkandwal19_geoprocessing-using-python-by-iirs-dehradun-activity-7095608582695493633-g6TH"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

const blogSection = {
  title: "Blogs",
  subtitle:
    "Some of my writing works primarily around Science & Technology",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "",
      title: "Not Available",
      description:
          "Either Blog is Removed or Link is broken",
      date: "25 May 2025"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const contactInfo = {
  title: emoji(""),
  subtitle:
    "",
  number: "",
  email_address: ""
};

const researchSection = {
  title: "Research Profile",
  subTitle: "A newbie, Exploring topics around science and technology majorly in engineering and its applicative areas" +
            "",
  skills: [
    emoji(
        "I am interested in following domains but not limited to - Machine Learning, IoT Systems, bioinformatics and other related CS topics"
    ),
    emoji(
        "⚡ Currently working on an edge acoustic deep learning model"
    ),
    emoji(
        "⚡ Available for discussion"
    ),
    emoji(
        "⚡ Open to any possible opportunity for me "
    )
  ],

  profile: [
    /*
    {
      skillName: "ResearchGate",
      fontAwesomeClassname: "fa-brands fa-researchgate",
      url:""
    },
    {
      skillName: "Google Scolar",
      fontAwesomeClassname: "fa-brands fa-google",
      url:""
    }
    */
  ],
  display: true // Set false to hide this section, defaults to true
};


const publicationsSection = {
  title: "Publications",
  subtitle:
      ".",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "h",
      title: "Feature Selection for Audio Deep Learning",
      description:
          "Study finds suitable features for training deep learning models",
      date: "In Progress"
    },
    {
      url: "",
      title: "Publication is Not Available",
      description:
          "Either unavailable or link is broken. Try fixing the site url",
      date: "N/A"
    },
    {
      url: "",
      title: "Publication is Not Available",
      description:
          "Either unavailable or link is broken. Try fixing the site url",
      date: "N/A"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};



const projectSection = {
  title: "PROJECTS",
  subTitle: "A collection of innovative and well-crafted solutions, demonstrating expertise " +
            "through efficient execution and forward-thinking approaches. Each project reflects " +
            "a commitment to quality.",
  skills: [
    emoji(
        "⚡ Web Development"
    ),
    emoji(
        "⚡ Data Science & ML"
    ),
    emoji(
        "⚡ IoT & Systems"
    )
  ],
  display: true // Set false to hide this section, defaults to true
};


const projectList = {
  title: "My Projects",
  subtitle: "",

  projectCards: [
    {
      title: "certifyyu",
      subtitle: "Certification Issuing & Verification platform built with robust backend on firebase with scanner integration within webapp",
      url: "https://certifyyu-verify.web.app",
      technology: [
        {
          skillName: "HTML",
          fontAwesomeClassname: "fa-brands fa-html5"
        },
        {
          skillName: "CSS",
          fontAwesomeClassname: "fa-brands fa-css3"
        },
        {
          skillName: "JS",
          fontAwesomeClassname: "fa-brands fa-js"
        },
        {
          skillName: "Bootstrap",
          fontAwesomeClassname: "fa-brands fa-bootstrap"
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "fas fa-fire"
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "fa-brands fa-python"
        },

      ],
    },
    {
      title: "Find My Fund",
      subtitle: "Provides recommendation of best available Mutual Funds as per user return expetations using K-Nearest Negibours",
      url: "https://github.com/rahulkandwal19/Find-My-Fund",
      technology: [
        {
          skillName: "HTML",
          fontAwesomeClassname: "fa-brands fa-html5"
        },
        {
          skillName: "CSS",
          fontAwesomeClassname: "fa-brands fa-css3"
        },
        {
          skillName: "JS",
          fontAwesomeClassname: "fa-brands fa-js"
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "fa-brands fa-python"
        },
      ],
    },
    {
      title: "Gunshot Detection System",
      subtitle:"An Esp-32 based acoustic gunshot detection system with decision tree edge model and a CNN model on cloud",
      url: "https://github.com/rachitbangwal/GSonix-GunshotDetectionSystem",
      technology: [
        {
          skillName: "C++",
          fontAwesomeClassname: "fa-brands fa-c"
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "fa-brands fa-python"
        },
        {
          skillName: "ESP-32",
          fontAwesomeClassname: "fa-solid fa-microchip"
        },
      ],
    },
    {
      title: "genomo",
      subtitle: "Algorithemic Design to Model Zoonosis on Graph Data Structure and Optimize complexities for real world usage",
      url: "https://github.com/rahulkandwal19/genomo",
      technology: [
        {
          skillName: "HTML",
          fontAwesomeClassname: "fa-brands fa-html5"
        },
        {
          skillName: "CSS",
          fontAwesomeClassname: "fa-brands fa-css3"
        },
        {
          skillName: "JS",
          fontAwesomeClassname: "fa-brands fa-js"
        },
        {
          skillName: "C++/CPP",
          fontAwesomeClassname: "fa-brands fa-c"
        },
      ],
    },
    {
      title: "QDo",
      subtitle: "Quantum Computing Learning Platform minimizing learning curve with circuit simulation, Gamification and GenAI",
      url: "https://github.com/rahulkandwal19/qdo",
      technology: [
        {
          skillName: "HTML",
          fontAwesomeClassname: "fa-brands fa-html5"
        },
        {
          skillName: "CSS",
          fontAwesomeClassname: "fa-brands fa-css3"
        },
        {
          skillName: "JS",
          fontAwesomeClassname: "fa-brands fa-js"
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "fa-brands fa-python"
        },
      ],
    },
    {
      title: "Agriculture Data Visualization",
      subtitle:"Extraction, cleaning and visualization of agriculture data specifically to uttarakhand state on kaggle notebook",
      url: "https://www.kaggle.com/code/rahulkandwal19/agriculture-production-analysis-of-uttrakhand",
      technology: [
        {
          skillName: "Python",
          fontAwesomeClassname: "fa-brands fa-python"
        },
        {
          skillName: "Kaggle",
          fontAwesomeClassname: "fa-brands fa-kaggle"
        },
        {
          skillName: "Kaggle",
          fontAwesomeClassname: "fa-solid fa-chart-column"
        },
      ],
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  achievementSection,
  blogSection,
  contactInfo,
  researchSection,
  publicationsSection,
  projectSection,
  projectList
};
