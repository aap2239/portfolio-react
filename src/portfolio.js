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
  username: "Aishwarya Patange",
  title: "Hi all, I'm Aishwarya",
  subTitle: emoji(
    "A passionate Data Scientist 🚀 having an experience in building scalable machine learning applications and deep learning research!"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1Tn5Jyh2SDLODZnHHqB6Hm_J6HegwNWmm/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/aap2239",
  linkedin: "https://www.linkedin.com/in/aishwaryapatange/",
  gmail: "aap2239@columbia.edu",
  medium: "https://medium.com/@aishwaryapatange",
  stackoverflow: "https://stackoverflow.com/users/13231272/aishwarya-patange",
  kaggle: "https://www.kaggle.com/aap2239",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "ENTHUSIASTIC MACHINE LEARNING ENGINEER AND DEEP LEARNING RESEARCHER",
  skills: [
    emoji("⚡ Large Language Model training and fine-tuning"),
    emoji("⚡ Mutli-Modal Semantic Search Using Vector Databases"),
    emoji(
      "⚡ Object Detection, Tracking and Anomaly Detection in Video Streams"
    ),
    emoji("⚡ Building end to end scalable Machine Learning WebApps")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Python",
      link: "https://www.python.org/",
      icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/python-colored.svg"
    },
    {
      skillName: "PyTorch",
      link: "https://pytorch.org/",
      icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/pytorch-colored.svg"
    },
    {
      skillName: "TensorFlow",
      link: "https://www.tensorflow.org/",
      icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/tensorflow-colored.svg"
    },
    {
      skillName: "R",
      link: "https://www.r-project.org/",
      icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/rlang-colored.svg"
    },
    {
      skillName: "Java",
      link: "https://www.oracle.com/java/",
      icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/java-colored.svg"
    },
    {
      skillName: "JavaScript",
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg"
    },
    {
      skillName: "Git",
      link: "https://git-scm.com/",
      icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/git-colored.svg"
    },
    {
      skillName: "NodeJS",
      link: "https://nodejs.org/en/",
      icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg"
    },
    {
      skillName: "Express",
      link: "https://expressjs.com/",
      icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/express-colored.svg"
    },
    {
      skillName: "GraphQL",
      link: "https://graphql.org/",
      icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/graphql-colored.svg"
    },
    {
      skillName: "Hasura",
      link: "https://hasura.io/",
      icon: require("./assets/images/hasura.svg").default
    },
    {
      skillName: "MongoDB",
      link: "https://www.mongodb.com/",
      icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mongodb-colored.svg"
    },
    {
      skillName: "ArangoDB",
      link: "https://arangodb.com/",
      icon: require("./assets/images/arangoDB.png")
    },
    {
      skillName: "Milvus",
      link: "https://milvus.io/",
      icon: require("./assets/images/milvus.png")
    },
    {
      skillName: "PostgreSQL",
      link: "https://www.postgresql.org/",
      icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/postgresql-colored.svg"
    },
    {
      skillName: "Linux",
      link: "https://www.linux.org",
      icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/linux-colored.svg"
    },
    {
      skillName: "Docker",
      link: "https://www.docker.com/",
      icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/docker-colored.svg"
    },
    {
      skillName: "Google Cloud",
      link: "https://cloud.google.com/",
      icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/googlecloud-colored.svg"
    }
    // Add other skills similarly
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Columbia University",
      logo: require("./assets/images/columbiaLogo.png"),
      subHeader: "Master of Science in Electrical Engineering",
      duration: "September 2022 - December 2023",
      desc: "Machine Learning and Data Science Track",
      descBullets: [
        "Worked under the guidance of Prof. Zoran Kostic in the Smart City Intersections Project",
        "Columbia University Representative in Center for Smart Street Scapes (an NSF Engineering Research Center)",
        "Graduate Teaching Assistant for E4040 Neural Networks and Deep Learning",
        "Coursework: Statistical Learning, Natural Language Processing, Sparse Models for High Dimensional Data, Algorithms for Data Science"
      ]
    },
    {
      schoolName: "University of Mumbai",
      logo: require("./assets/images/mumbaiLogo.png"),
      subHeader: "Bachelor of Engineering in Electronics and Communication",
      duration: "August 2017 - May 2021",
      desc: "Ranked in the Top 10 Percent of the Class",
      descBullets: [
        "Developed 'Blind Person’s Assistant' showcasing technical prowess and commitment to societal impact",
        "Coursework: Big Data Analytics, Operations Research, Image Processing and Machine Vision, Data Compression and Encryption"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Deep Learning", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Natural Language Processing / Large Language Models",
      progressPercentage: "70%"
    },
    {
      Stack: "Computer Vision",
      progressPercentage: "60%"
    },
    {
      Stack: "AutoML",
      progressPercentage: "70%"
    },
    {
      Stack: "Interpretable Machine Learning",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Graduate Research Assistant",
      company: "COSMOS Labs",
      companylogo: require("./assets/images/cosmos-logo.jpg"),
      date: "Jan 2023 – Dec 2023",
      descBullets: [
        "Trained and fine-tuned YOLOv8 models for the detection and tracking of vehicles, pedestrians, and two-wheelers in the Smart City Intersections Project, achieving an impressive mAP score of 0.79.",
        "Executed a project on automated data collection for object tracking, employing semi-supervised and model-assisted techniques inspired by the data engine of the ’Segment Anything’ paper, resulting in a 20% improvement in model performance.",
        "Engineered and implemented custom TCP and UDP-based protocols for the Smart City Intersections Project, successfully achieving a significant reduction in video streaming latency to 80ms."
      ]
    },
    {
      role: "Software Developer Intern",
      company: "ChaosTrack Inc.",
      companylogo: require("./assets/images/ct_logo_bb.jpg"),
      date: "June 2023 – Sept 2023",
      descBullets: [
        "Contributed to 3 major project features using technologies like Node.JS, REST API, GraphQL API, Hasura, ArangoDB, PostgreSQL, Docker, and GitHub, gaining hands-on experience",
        "Accelerated development an LLM-based application using ML Libraries- Spacy, NLTK, PyTorch, and HuggingFace to simulate and evaluate corporate incident responses, setting a new readiness standard.",
        "Leveraged LangChain and LangSmith for prompt engineering, enhancing OpenAI GPT model responsiveness by 35% and output accuracy by 25%.",
        "Conducted experiments on Retrieval Augmented Generation with Vector Databases (like Milvus) and implemented semantic searches using embedding models like OWL-ViT and Wav2CLIP."
      ]
    },
    {
      role: "Associate Data Scientist",
      company: "iQGateway",
      companylogo: require("./assets/images/iqg-logo.jpg"),
      date: "May 2021 – July 2022",
      descBullets: [
        "Spearheaded design and development of torsha.ai, a cutting-edge end-to-end data science platform. Integrated advanced AutoML capabilities, emphasizing model explainability, efficient data handling, and custom DAG-based pipelines for streamlined model training and evaluation.",
        "Implemented Plotly and D3.JS-based data visualization module for torsha.ai, elevating user experience and consolidating the platform’s reputation for intuitive data insights.",
        "Improved prediction accuracy of AutoML pipeline by 15% through development and integration of multiple custom scikit-learn compatible estimators, further solidifying torsha.ai’s position as a leader in AutoML space."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/torsha-ai.png"),
      projectName: "torsha.ai",
      projectDesc: "Fully Automated End to End Data Science Platform",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://torsha.ai/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/ct_logo.png"),
      projectName: "ChaosTrack Incident Response Simulator",
      projectDesc:
        "Real-world cybersecurity incident simulations via an asynchronous, chatbot-based platform to test your whole organization",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://chaostrack.com/product/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Deep Learning Specialization",
      subtitle:
        "Andrew Ng's Deep Learning Specialization: Fundamentals to advanced techniques.",
      image: require("./assets/images/deeplearningai.png"),
      imageAlt: "deeplearning.ai Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/specialization/certificate/CQCCYVGN6B2Z"
        }
      ]
    },
    {
      title: "Introduction to Web Development",
      subtitle:
        "Explore the web's structure, build dynamic pages with HTML, CSS, JavaScript.",
      image: require("./assets/images/ucdavis.svg").default,
      imageAlt: "UC Davis Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/certificate/Z7ZV4DKVWRCM"
        }
      ]
    },
    {
      title: "Introduction to Programming Using Python",
      subtitle:
        "Recognize and write syntactically correct Python code, recognize data types supported by Python, and the ability to recognize and write Python code that will logically solve a given problem",
      image: require("./assets/images/microsoft.svg").default,
      imageAlt: "microsoft Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.youracclaim.com/badges/4bc276f7-f1d4-43e5-9826-2ec34d937787/linked_in_profile"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {};

// Podcast Section

const podcastSection = {};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1-6466430819",
  email_address: "aap2239@columbia.edu"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
