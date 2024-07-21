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
  favicon,
  hmh,
  wanabana,
  mac,
  arkon,
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
    name: "Arkon Data",
    position: "Front-End Developer",
    date: "Feb. 2024 - Current",
    image: arkon,
    current: true,
  },
  {
    name: "Hospitales Mac",
    position: "Front-End Developer",
    description: "mac_description",
    date: "Jul. 2023 - Feb. 2024",
    image: mac,
  },
  {
    name: "HMH Sistemas",
    position: "Front-End Developer",
    description: "hmh_description",
    date: "Ene. 2022 - Jul. 2023",
    image: hmh,
  },
  {
    name: "Wanabana.io",
    position: "Front-End Developer",
    description: "wanabana_description",
    date: "Nov. 2020 - Nov. 2021",
    image: wanabana,
  },
];
