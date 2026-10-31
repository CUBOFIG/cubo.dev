import React from "react";
import {
  VueIcon,
  FigmaIcon,
  FormikIcon,
  GitlabIcon,
  LeafletIcon,
  SCIcon,
  RamdaIcon,
  favicon,
  hmh,
  wanabana,
  mac,
  arkon,
} from "@/images";

import {
  FaBitbucket as BitBucketIcon,
  FaJira as JiraIcon,
  FaTrello as TrelloIcon,
  FaSass as SassIcon,
  FaReact as ReactIcon,
  FaBootstrap as BootstrapIcon,
  FaGithub as GithubIcon,
  FaGitAlt as GitIcon,
} from "react-icons/fa";
import {
  SiBuefy as BuefyIcon,
  SiMui as MaterialUIIcon,
  SiBun as BunIcon,
  SiDocker as DockerIcon,
  SiWebpack as RsbuildIcon,
} from "react-icons/si";
import { RiNextjsFill as NextJSIcon } from "react-icons/ri";
import { VscSettings as FliptIcon } from "react-icons/vsc";

export const listData = [
  {
    title: "Frameworks and Libraries",
    elements: [
      {
        name: "react",
        icon: <ReactIcon className="icon_react" />,
        isIcon: true,
      },
      {
        name: "vue",
        icon: VueIcon,
      },
      {
        icon: <NextJSIcon className="icon_next" />,
        name: "next.js",
        isIcon: true,
      },
      {
        icon: <BunIcon className="icon_bun" />,
        name: "bun",
        isIcon: true,
      },
      {
        icon: <RsbuildIcon className="icon_rsbuild" />,
        name: "rsbuild",
        isIcon: true,
      },
    ],
  },
  {
    title: "Style Frameworks & Libraries",
    elements: [
      {
        icon: <SassIcon className="icon_sass" />,
        name: "sass",
        isIcon: true,
      },
      {
        icon: <BootstrapIcon className="icon_bootstrap" />,
        name: "bootstrap",
        isIcon: true,
      },
      {
        icon: SCIcon,
        name: "style Components",
      },
      {
        icon: <MaterialUIIcon className="icon_material" />,
        name: "material UI",
        isIcon: true,
      },
      {
        icon: <BuefyIcon className="icon_buefy" />,
        name: "buefy",
        isIcon: true,
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
        icon: <GitIcon className="icon_git" />,
        name: "git",
        isIcon: true,
      },
      {
        icon: <GithubIcon className="icon_github" />,
        name: "github",
        isIcon: true,
      },
      {
        icon: GitlabIcon,
        name: "gitlab",
      },
      {
        icon: <TrelloIcon className="icon_trello" />,
        name: "trello",
        isIcon: true,
      },
      {
        icon: <JiraIcon className="icon_jira" />,
        name: "jira",
        isIcon: true,
      },
      {
        icon: <BitBucketIcon className="icon_bitbucket" />,
        name: "BitBucket",
        isIcon: true,
      },
      {
        icon: <DockerIcon className="icon_docker" />,
        name: "docker",
        isIcon: true,
      },
      {
        icon: <FliptIcon className="icon_flipt" />,
        name: "flipt",
        isIcon: true,
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
      {
        icon: favicon,
        name: "Leadership",
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
