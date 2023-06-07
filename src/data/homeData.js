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
        name: "react",
      },
      {
        name: "vue",
      },
      {
        name: "ramda",
      },
    ],
  },
];

export const experienceData = [
  {
    name: "Freelance - Punto de venta",
    position: "Front-End Developer",
    description:
      "Hola 👋, Mi nombre es Heriberto y soy Ingeniero de Software, con experiencia en diferentes proyectos con diferentes tecnologías y una gran pasión por la innovación. Tengo el sueño de ayudar con mis habilidades a orientar a todo aquel que quiera adentrarse en el mundo de la tecnología.",
  },
  {
    name: "Wanabana.io",
    position: "Front-End Developer",
    description:
      "Hola 👋, Mi nombre es Heriberto y soy Ingeniero de Software, con experiencia en diferentes proyectos con diferentes tecnologías y una gran pasión por la innovación. Tengo el sueño de ayudar con mis habilidades a orientar a todo aquel que quiera adentrarse en el mundo de la tecnología.",
  },
  {
    name: "Transcol",
    position: "Front-End Developer",
    description:
      "Realice la refactorización de este sistema de gestión de rutas de transporte público, la cual se encarga de mostrar las diferentes rutas en tiempo real de varios municipios del estado de Colima. \nEstuve encargado de refactorizar, desarrollar código en este sistema construido en Next.js, además de manipular y simplificar el estado global de todo el sistema el cual está desarrollado en Context. Además de la implementación de peticiones con el uso de websocket. \nTambién se aplicó el uso de React Leaft API para el desarrollo de un mapa interactivo.",
    url: "transcol.com.mx",
  },
  {
    name: "HMH Sistemas",
    position: "Front-End Developer",
    description:
      "Hola 👋, Mi nombre es Heriberto y soy Ingeniero de Software, con experiencia en diferentes proyectos con diferentes tecnologías y una gran pasión por la innovación. Tengo el sueño de ayudar con mis habilidades a orientar a todo aquel que quiera adentrarse en el mundo de la tecnología.",
    current: true,
  },
];
