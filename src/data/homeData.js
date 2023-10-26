import {
  ReactIcon,
  VueIcon,
  NextJSIcon,
  BootsrapIcon,
  BuefyIcon,
  FigmaIcon,
  FormikIcon,
  GithubIcon,
  GitIcon,
  GitlabIcon,
  LeafletIcon,
  MaterialUIIcon,
  SassIcon,
  SCIcon,
  TrelloIcon,
  RamdaIcon,
  JiraIcon,
  BitBucketIcon,
  Cubo,
  favicon,
} from "@/images";

const homeData = [
  {
    nombre: "Pepito Conejo",
    edad: 25,
    "carnet de conducir": true,
  },
  {
    nombre: "Ana Barberá",
    edad: 90,
    "carnet de conducir": false,
  },
];

export const listData = [
  {
    title: "Frameworks and Libraries",
    elements: [
      {
        name: "react",
        icon: ReactIcon,
      },
      {
        name: "vue",
        icon: VueIcon,
      },
      {
        icon: NextJSIcon,
        name: "next.js",
      },
    ],
  },
  {
    title: "Style Frameworks & Libraries",
    elements: [
      {
        icon: SassIcon,
        name: "sass",
      },
      {
        icon: BootsrapIcon,
        name: "bootstrap",
      },
      {
        icon: SCIcon,
        name: "style Components",
      },
      {
        icon: MaterialUIIcon,
        name: "material UI",
      },
      {
        icon: BuefyIcon,
        name: "buefy",
      },
    ],
  },
  {
    title: "Development Tools",
    elements: [
      {
        icon: FigmaIcon,
        name: "figma",
      },
      {
        icon: GitIcon,
        name: "git",
      },
      {
        icon: GithubIcon,
        name: "github",
      },
      {
        icon: GitlabIcon,
        name: "gitlab",
      },
      {
        icon: TrelloIcon,
        name: "trello",
      },
      {
        icon: JiraIcon,
        name: "jira",
      },
      {
        icon: BitBucketIcon,
        name: "BitBucket",
      },
    ],
  },
  {
    title: "Additional Utilities",
    elements: [
      {
        icon: FormikIcon,
        name: "formik + Yup",
      },
      {
        icon: LeafletIcon,
        name: "leaflet",
      },
      {
        icon: RamdaIcon,
        name: "ramda",
      },
    ],
  },
  {
    title: "Soft Skills",
    elements: [
      {
        icon: favicon,
        name: "Communication",
      },
      {
        icon: favicon,

        name: "Teamwork",
      },
      {
        icon: favicon,

        name: "Problem solving",
      },
    ],
  },
];

export const experienceData = [
  {
    name: "Punto de venta",
    position: "Front-End Developer",
    description: "",
    action: "inicia un nuevo proyecto Freelance de",
    date: "Feb 2021",
  },
  {
    name: "Wanabana.io",
    position: "Front-End Developer",
    description: "",
    action: "comienza a trabajar en",
    date: "Nov 2021",
  },
  {
    name: "HMH Sistemas",
    position: "Front-End Developer",
    description: "",
    action: "comienza a trabajar en",
    date: "Feb 2023",
  },
  {
    name: "Transcol",
    position: "Front-End Developer",
    description: "",
    url: "transcol.com.mx",
    action: "inicia en un nuevo proyecto",
    date: "Jun 2022",
  },
  {
    name: "HMH Sistemas",
    description: "",
    action: "es promovido a Team Leader en",
    date: "Feb 2023",
  },
  {
    name: "Hospitales MAC",
    position: "Front-End Developer",
    description: "",
    current: true,
    date: "Jun 2023",
  },
];
