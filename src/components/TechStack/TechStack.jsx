import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import {
  FaSass as SassIcon,
  FaReact as ReactIcon,
  FaBootstrap as BootstrapIcon,
  FaGithub as GithubIcon,
  FaGitAlt as GitIcon,
  FaBitbucket as BitBucketIcon,
  FaJira as JiraIcon,
  FaTrello as TrelloIcon,
} from "react-icons/fa";
import {
  SiBuefy as BuefyIcon,
  SiMui as MaterialUIIcon,
  SiBun as BunIcon,
  SiDocker as DockerIcon,
  SiStorybook as StorybookIcon,
  SiVitest as VitestIcon,
  SiReactrouter as ReactRouterIcon,
  SiClaude as ClaudeIcon,
} from "react-icons/si";
import { RiNextjsFill as NextJSIcon } from "react-icons/ri";
import {
  VscSettings as FliptIcon,
  VscBeaker as PlaywrightIcon,
} from "react-icons/vsc";
import {
  VueIcon,
  FigmaIcon,
  FormikIcon,
  GitlabIcon,
  LeafletIcon,
  SCIcon,
  RamdaIcon,
} from "@/images";
const rsbuildLogo = "/images/rsbuild-logo.svg";
import { FiUser, FiUsers, FiZap, FiTarget, FiStar } from "react-icons/fi";

const CATEGORIES = [
  {
    id: "frameworks",
    label: "Frameworks & Libraries",
    technologies: [
      {
        name: "React",
        icon: <ReactIcon className="icon_react" />,
        isIcon: true,
      },
      { name: "Vue", icon: VueIcon, isIcon: false },
      {
        name: "Next.js",
        icon: <NextJSIcon className="icon_next" />,
        isIcon: true,
      },
      { name: "Bun", icon: <BunIcon className="icon_bun" />, isIcon: true },
      { name: "Rsbuild", icon: rsbuildLogo, isIcon: false },
      {
        name: "React Router",
        icon: <ReactRouterIcon className="icon_reactrouter" />,
        isIcon: true,
      },
    ],
  },
  {
    id: "styling",
    label: "Styling",
    technologies: [
      { name: "Sass", icon: <SassIcon className="icon_sass" />, isIcon: true },
      {
        name: "Bootstrap",
        icon: <BootstrapIcon className="icon_bootstrap" />,
        isIcon: true,
      },
      { name: "Styled Components", icon: SCIcon, isIcon: false },
      {
        name: "Material UI",
        icon: <MaterialUIIcon className="icon_material" />,
        isIcon: true,
      },
      {
        name: "Buefy",
        icon: <BuefyIcon className="icon_buefy" />,
        isIcon: true,
      },
    ],
  },
  {
    id: "devtools",
    label: "Dev Tools",
    technologies: [
      { name: "Figma", icon: FigmaIcon, isIcon: false },
      { name: "Git", icon: <GitIcon className="icon_git" />, isIcon: true },
      {
        name: "GitHub",
        icon: <GithubIcon className="icon_github" />,
        isIcon: true,
      },
      { name: "GitLab", icon: GitlabIcon, isIcon: false },
      {
        name: "Trello",
        icon: <TrelloIcon className="icon_trello" />,
        isIcon: true,
      },
      { name: "Jira", icon: <JiraIcon className="icon_jira" />, isIcon: true },
      {
        name: "BitBucket",
        icon: <BitBucketIcon className="icon_bitbucket" />,
        isIcon: true,
      },
      {
        name: "Docker",
        icon: <DockerIcon className="icon_docker" />,
        isIcon: true,
      },
      {
        name: "Flipt",
        icon: <FliptIcon className="icon_flipt" />,
        isIcon: true,
      },
      {
        name: "Storybook",
        icon: <StorybookIcon className="icon_storybook" />,
        isIcon: true,
      },
      {
        name: "Claude Code",
        icon: <ClaudeIcon className="icon_claude" />,
        isIcon: true,
      },
    ],
  },
  {
    id: "utilities",
    label: "Utilities",
    technologies: [
      { name: "Formik + Yup", icon: FormikIcon, isIcon: false },
      { name: "Leaflet", icon: LeafletIcon, isIcon: false },
      { name: "Ramda", icon: RamdaIcon, isIcon: false },
      {
        name: "Playwright",
        icon: <PlaywrightIcon className="icon_playwright" />,
        isIcon: true,
      },
      {
        name: "Vitest",
        icon: <VitestIcon className="icon_vitest" />,
        isIcon: true,
      },
    ],
  },
  {
    id: "softskills",
    label: "Soft Skills",
    technologies: [
      {
        name: "Communication",
        icon: <FiUser className="icon_softskill" />,
        isIcon: true,
      },
      {
        name: "Teamwork",
        icon: <FiUsers className="icon_softskill" />,
        isIcon: true,
      },
      {
        name: "Problem Solving",
        icon: <FiZap className="icon_softskill" />,
        isIcon: true,
      },
      {
        name: "Leadership",
        icon: <FiTarget className="icon_softskill" />,
        isIcon: true,
      },
      {
        name: "Companionship",
        icon: <FiStar className="icon_softskill" />,
        isIcon: true,
      },
      {
        name: "Commitment",
        icon: <FiTarget className="icon_softskill" />,
        isIcon: true,
      },
      {
        name: "Ambiguity Tolerance",
        icon: <FiZap className="icon_softskill" />,
        isIcon: true,
      },
      {
        name: "Epistemic Calibration",
        icon: <FiStar className="icon_softskill" />,
        isIcon: true,
      },
      {
        name: "Room Reading",
        icon: <FiUsers className="icon_softskill" />,
        isIcon: true,
      },
      {
        name: "Boredom Resilience",
        icon: <FiUser className="icon_softskill" />,
        isIcon: true,
      },
    ],
  },
];

const totalSkills = CATEGORIES.reduce(
  (acc, c) => acc + c.technologies.length,
  0,
);

const TechCard = ({ tech, index }) => (
  <div
    className="techstack__card"
    style={{ animationDelay: `${index * 0.05}s` }}
  >
    <span className="techstack__card-icon">
      {tech.isIcon ? (
        tech.icon
      ) : (
        <Image src={tech.icon} alt={tech.name} width={28} height={28} />
      )}
    </span>
    <span className="techstack__card-name">{tech.name}</span>
  </div>
);

const TechStack = () => {
  const [activeId, setActiveId] = useState(CATEGORIES[0].id);
  const [animKey, setAnimKey] = useState(0);
  const [showFade, setShowFade] = useState(false);
  const containerRef = useRef(null);
  const gridRef = useRef(null);
  const hasFiredRef = useRef(false);

  // Solo recalcula al cambiar de tab o al redimensionar (debounced).
  // No corre en scroll, así no hay reflow durante el scroll del grid.
  useEffect(() => {
    let timeout;
    const check = () => {
      const el = gridRef.current;
      if (!el) return;
      const tops = new Set();
      Array.from(el.children).forEach((c) => tops.add(c.offsetTop));
      setShowFade(tops.size > 3);
    };

    check();
    const onResize = () => {
      clearTimeout(timeout);
      timeout = setTimeout(check, 150);
    };
    window.addEventListener("resize", onResize);
    return () => {
      clearTimeout(timeout);
      window.removeEventListener("resize", onResize);
    };
  }, [activeId, animKey]);

  const active = CATEGORIES.find((c) => c.id === activeId);

  const handleTab = (id) => {
    setActiveId(id);
    setAnimKey((k) => k + 1);
  };

  // Evento para Kiubit
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const allTechs = CATEGORIES.filter((c) => c.id !== "softskills").flatMap(
      (c) => c.technologies,
    );

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasFiredRef.current) {
          hasFiredRef.current = true;
          const tech = allTechs[Math.floor(Math.random() * allTechs.length)];
          window.dispatchEvent(
            new CustomEvent("kiubit-dialog", { detail: { tech } }),
          );
        }
        if (!entry.isIntersecting) hasFiredRef.current = false;
      },
      { threshold: 0.3 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="techstack" ref={containerRef}>
      {/* Tabs */}
      <div className="techstack__tabs">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            className={`techstack__tab${activeId === cat.id ? " techstack__tab--active" : ""}`}
            onClick={() => handleTab(cat.id)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div
        className={`techstack__grid-wrap${showFade ? " techstack__grid-wrap--scrollable" : ""}`}
      >
        <div className="techstack__grid" key={animKey} ref={gridRef}>
          {active.technologies.map((tech, i) => (
            <TechCard key={tech.name} tech={tech} index={i} />
          ))}
        </div>
      </div>

      {/* Footer stats */}
      <div className="techstack__footer">
        <span>{totalSkills} skills</span>
      </div>
    </div>
  );
};

export default TechStack;
