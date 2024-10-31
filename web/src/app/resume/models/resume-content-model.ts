export abstract class ResumeContent {
  abstract topic: string;
  abstract paragraphs: ResumeParagraph[];
}

export interface ResumeParagraph {
  paragraphTitle: string;
  paragraphTitleExtention?: string;
  paragraphSubtitle?: string;
  link?: string;
  content: ParagraphContent[];
}

export interface ParagraphContent {
  leading: string;
  text?: string;
  linkName?: string;
  link?: string; 
}

export class Experience extends ResumeContent {
  topic = "Experience";
  paragraphs: ResumeParagraph[] = [
    {
      link: "https://recursyve.io/",
      paragraphTitle: "Recursyve Solutions",
      paragraphTitleExtention: "Lavaltrie — Full-Stack Developer",
      paragraphSubtitle: "March 2023 To July 2024",
      content: [
        {
          leading: "Flutter Skills",
          text: "Development of cross-platform mobile applications with responsive and efficient user interfaces.",
        },
        {
          leading: "NestJS skills",
          text: "Development of robust and modular APIs using this framework.",
        },
        {
          leading: "Using Sequelize",
          text: "Effective management of relational databases thanks to this ORM for Node.js.",
        },
        {
          leading: "DevOps learning",
          text: "Udemy training paid by the employer only. Learning Docker and Kubernetes.",
        },
        {
          leading: "Agile approach",
          text: "Experience working in a team using Agile approach methods, promoting collaboration, adaptation and delivery of different deployments.",
        },
      ],
    },
    {
      link: "https://www.caprea.ca/ville/l-assomption",
      paragraphTitle: "Caprea Real estate assessment and advice",
      paragraphTitleExtention: "L'Assumption — Data Entry Clerk",
      paragraphSubtitle: "Mars 2021 As of March 2023",
      content: [
        {
          leading: "Research",
          text: "Perform in-depth searches for data that may be linked to a property’s specific record.",
        },
        {
          leading: "Data Entry",
          text: "Determine the relevance of certain data, and enter it into the web data storage tool in order to make it available to evaluators.",
        },
        {
          leading: "Automation",
          text: "Implementation of some scripts to optimize the efficiency of data entry. (Macro)",
        },
      ],
    },
    {
      link: "https://www.librairiemartin.com/?srsltid=AfmBOoqgOK7Y73meDBQZdMNGZ-SDl7aawjDbnB4weIaiNFhtC3fmwAfs",
      paragraphTitle: "Librairie Martin",
      paragraphTitleExtention: "Joliette — Delivery person / Receipts of goods",
      paragraphSubtitle: "January 2020 To March 2020 (Shutdown caused by Covid-19)",
      content: [
        {
          leading: "Delivery",
          text: "Delivery of school goods to schools and libraries.",
        },
        {
          leading: "Reception",
          text: "Receive the merchandise and update the inventory.",
        },
      ],
    },
    {
      link: "https://www.itihydraulik.com/accueil/",
      paragraphTitle: "ITI Hydraulik",
      paragraphTitleExtention: "Sainte-Julienne — Sandblaster/Grinder",
      paragraphSubtitle: "February 2018 To December 2019",
      content: [
        {
          leading: "Operator",
          text: "Operation of a semi-automatic hydraulic pressure sandblaster.",
        },
        {
          leading: "Measures",
          text: "Taking very precise measurements (micrometer) to achieve the dimensions according to the engineers' plan.",
        },
      ],
    },
    {
      link: "https://www.krugerproducts.ca/fr-ca",
      paragraphTitle: "Kruger Products",
      paragraphTitleExtention: "Crabtree — Assistant/Operator",
      paragraphSubtitle: "June 2015 To October 2017",
      content: [
        {
          leading: "Operation of automated machines.",
        },
        {
          leading: "Maintenance of tools and machines.",
        },
        {
          leading: "Health and Safety training.",
        },
        {
          leading: "Respect the Quality standards of a factory.",
        },
      ],
    },
  ];
}

export class Education extends ResumeContent {
  topic = "Education";
  paragraphs: ResumeParagraph[] = [
    {
      link: "https://cegep-lanaudiere.qc.ca/joliette/",
      paragraphTitle: "Cégep Régionale de Lanaudière",
      paragraphTitleExtention: "Joliette",
      paragraphSubtitle: "September 2020 to May 2023",
      content: [
        {
          leading: "DEC in Computer Science",
        }
      ],
    },
    {
      link: "https://www.uqtr.ca/index.shtml",
      paragraphTitle: "UQTR",
      paragraphTitleExtention: "Trois-Rivières",
      paragraphSubtitle: "September 2017 to May 2018",
      content: [
        {
          leading: "Course in OO programming in Java",
        },
        {
          leading: "Web programming courses (html, css, js and jQuery)",
        },
      ],
    },
    {
      link: "https://cegep-lanaudiere.qc.ca/joliette/",
      paragraphTitle: "Cégep Régionale de Lanaudière",
      paragraphTitleExtention: "Joliette",
      paragraphSubtitle: "September 2015 to May 2017",
      content: [
        {
          leading: "DEC in Natural Science",
        }
      ],
    },
  ];
}

export class Skills extends ResumeContent {
  topic = "Skills";
  paragraphs: ResumeParagraph[] = [
    {
      paragraphTitle: "Operating systems",
      content: [
        {
          leading: "Win/macOS/Linux",
          text: "I am highly skilled in using command-line terminals across various operating systems, including Linux, macOS, and Windows. With a strong understanding of shell commands and scripting, I am proficient in navigating file systems, managing processes, and automating repetitive tasks. I am comfortable working with different terminal tools and utilities, allowing me to optimize workflows efficiently and troubleshoot issues effectively. My experience also includes working with version control systems, such as Git, from the command line, giving me the flexibility to work efficiently in any development environment.",
        }
      ],
    },
    {
      paragraphTitle: "Languages used",
      content: [
        {
          leading: "Dart",
          text: "Advanced.",
        },
        {
          leading: "C#",
          text: "Intermadiate.",
        },
        {
          leading: "Java",
          text: "Intermadiate.",
        },
        {
          leading: "Kotlin",
          text: "Intermadiate.",
        },
        {
          leading: "Swift",
          text: "Fair.",
        },
        {
          leading: "Go",
          text: "Intermadiate.",
        },
        {
          leading: "TypeScript",
          text: "Advanced.",
        },
      ],
    },
    {
      paragraphTitle: "Frameworks",
      paragraphTitleExtention: "Currently learning Angular",
      link: "https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/43788552?start=15#overview",
      content: [
        {
          leading: "Flutter",
          text: "I have 1.5 years of industry experience in this framework. I keep myself up to date developping an app as a personal project.",
        },
        {
          leading: "NestJs",
          text: "Same as flutter, I do the backend of my mobile app with this framework and I use Prisma as ORM.",
        },
        {
          leading: "Angular",
          text: "I am currently learning this tech with the help of a Udemy course I take online.",
        },
      ],
    },
    {
      paragraphTitle: "DevOps",
      paragraphTitleExtention: "Course ongoing !",
      link: "https://www.udemy.com/course/docker-kubernetes-the-practical-guide/?couponCode=JUST4U02223",
      content: [
        {
          leading: "Docker, Docker compose and multi-container",
          text: "I learn all about Docker and its deployement features! How to create and use images & containers. I also learn about Container Networking with Docker Networks and DNS",
        },
        {
          leading: "Kubernetes, deployments, manage volumes and more",
          text: "I learn how to deploy Docker applications - manually, with managed services or with Kubernetes.",
        },
      ],
    },
  ];
}
