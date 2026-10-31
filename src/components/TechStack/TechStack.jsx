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
  SiRedux as ReduxIcon,
  SiVite as ViteIcon,
  SiFirebase as FirebaseIcon,
  SiOpenai as OpenAIIcon,
  SiGithubcopilot as CopilotIcon,
  SiJavascript as JavaScriptIcon,
  SiTypescript as TypeScriptIcon,
  SiHtml5 as HtmlIcon,
  SiCss as CssIcon,
  SiRuby as RubyIcon,
  SiPython as PythonIcon,
  SiPostgresql as PostgresIcon,
} from "react-icons/si";
import {
  TbHierarchy as ReactFlowIcon,
  TbLayoutGrid as MicrofrontendIcon,
  TbStack2 as MonorepoIcon,
  TbComponents as PatternsIcon,
} from "react-icons/tb";
import { RiNextjsFill as NextJSIcon } from "react-icons/ri";
import {
  VscSettings as FliptIcon,
  VscBeaker as PlaywrightIcon,
  VscAzure as AzureIcon,
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
import {
  FiUser,
  FiUsers,
  FiZap,
  FiTarget,
  FiStar,
  FiCpu,
  FiRadio,
  FiBox,
} from "react-icons/fi";

const CATEGORIES = [
  {
    id: "languages",
    label: "Languages",
    technologies: [
      {
        name: "JavaScript",
        icon: <JavaScriptIcon className="icon_javascript" />,
        isIcon: true,
      },
      {
        name: "TypeScript",
        icon: <TypeScriptIcon className="icon_typescript" />,
        isIcon: true,
      },
      { name: "HTML", icon: <HtmlIcon className="icon_html" />, isIcon: true },
      { name: "CSS", icon: <CssIcon className="icon_css" />, isIcon: true },
      { name: "Ruby", icon: <RubyIcon className="icon_ruby" />, isIcon: true },
      {
        name: "Python",
        icon: <PythonIcon className="icon_python" />,
        isIcon: true,
      },
    ],
  },
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
      {
        name: "Redux",
        icon: <ReduxIcon className="icon_redux" />,
        isIcon: true,
      },
      {
        name: "React Context",
        icon: <ReactIcon className="icon_react" />,
        isIcon: true,
      },
      {
        name: "Zustand",
        icon: <FiBox className="icon_zustand" />,
        isIcon: true,
      },
      {
        name: "React Router",
        icon: <ReactRouterIcon className="icon_reactrouter" />,
        isIcon: true,
      },
      { name: "Bun", icon: <BunIcon className="icon_bun" />, isIcon: true },
      { name: "Rsbuild", icon: rsbuildLogo, isIcon: false },
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
        name: "Vite",
        icon: <ViteIcon className="icon_vite" />,
        isIcon: true,
      },
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
        name: "Azure",
        icon: <AzureIcon className="icon_azure" />,
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
      {
        name: "React Flow",
        icon: <ReactFlowIcon className="icon_reactflow" />,
        isIcon: true,
      },
      {
        name: "PostgreSQL",
        icon: <PostgresIcon className="icon_postgresql" />,
        isIcon: true,
      },
      { name: "Ramda", icon: RamdaIcon, isIcon: false },
      {
        name: "Firebase",
        icon: <FirebaseIcon className="icon_firebase" />,
        isIcon: true,
      },
      {
        name: "WebSockets / SSE",
        icon: <FiRadio className="icon_websockets" />,
        isIcon: true,
      },
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
    id: "architecture",
    label: "Architecture",
    technologies: [
      {
        name: "Microfrontends",
        icon: <MicrofrontendIcon className="icon_architecture" />,
        isIcon: true,
      },
      {
        name: "Monorepo",
        icon: <MonorepoIcon className="icon_architecture" />,
        isIcon: true,
      },
      {
        name: "Design Patterns",
        icon: <PatternsIcon className="icon_architecture" />,
        isIcon: true,
      },
    ],
  },
  {
    id: "ai",
    label: "AI & Intelligent Tools",
    technologies: [
      {
        name: "Claude Code",
        icon: <ClaudeIcon className="icon_claude" />,
        isIcon: true,
      },
      {
        name: "Claude API",
        icon: <ClaudeIcon className="icon_claude" />,
        isIcon: true,
      },
      {
        name: "GitHub Copilot",
        icon: <CopilotIcon className="icon_copilot" />,
        isIcon: true,
      },
      {
        name: "LLM Integration",
        icon: <FiCpu className="icon_ai" />,
        isIcon: true,
      },
      {
        name: "Prompt Engineering",
        icon: <FiCpu className="icon_ai" />,
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
  const tabsRef = useRef(null);
  const hasFiredRef = useRef(false);

  const [loop, setLoop] = useState(false);

  // Carrusel infinito: si los tabs no caben, se renderizan 3 copias y el scroll
  // se recoloca en la copia central al acercarse a un extremo, así nunca termina.
  useEffect(() => {
    const el = tabsRef.current;
    if (!el) return;
    let timeout;

    const setWidth = () => {
      const first = el.querySelector('[data-set="1"]');
      const base = el.querySelector('[data-set="0"]');
      return first && base ? first.offsetLeft - base.offsetLeft : 0;
    };

    const measure = () => {
      const single = loop ? setWidth() : el.scrollWidth;
      setLoop(single > el.clientWidth);
    };

    const onResize = () => {
      clearTimeout(timeout);
      timeout = setTimeout(measure, 150);
    };

    measure();
    window.addEventListener("resize", onResize);
    return () => {
      clearTimeout(timeout);
      window.removeEventListener("resize", onResize);
    };
  }, [loop]);

  useEffect(() => {
    const el = tabsRef.current;
    if (!el || !loop) return;

    const getSetWidth = () =>
      el.querySelector('[data-set="1"]').offsetLeft -
      el.querySelector('[data-set="0"]').offsetLeft;

    el.scrollLeft = getSetWidth();

    // Desplazamiento suave: la rueda mueve un objetivo y el scroll lo alcanza con easing
    const SPEED = 0.45;
    const EASE = 0.06;
    let target = el.scrollLeft;
    let current = el.scrollLeft;
    let frame = null;

    const wrap = () => {
      const w = getSetWidth();
      if (current < w * 0.5) {
        current += w;
        target += w;
      } else if (current > w * 1.5) {
        current -= w;
        target -= w;
      }
    };

    const tick = () => {
      current += (target - current) * EASE;
      wrap();
      el.scrollLeft = current;
      frame = Math.abs(target - current) > 0.5 ? requestAnimationFrame(tick) : null;
    };

    // React registra wheel como passive: listener nativo para poder hacer preventDefault
    const onWheel = (e) => {
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;
      e.preventDefault();
      if (!frame) current = target = el.scrollLeft;
      target += e.deltaY * SPEED;
      if (!frame) frame = requestAnimationFrame(tick);
    };

    // Scroll nativo (trackpad horizontal o táctil): solo recolocar en la copia central
    const onScroll = () => {
      if (frame) return;
      const w = getSetWidth();
      if (el.scrollLeft < w * 0.5) el.scrollLeft += w;
      else if (el.scrollLeft > w * 1.5) el.scrollLeft -= w;
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => {
      cancelAnimationFrame(frame);
      el.removeEventListener("scroll", onScroll);
      el.removeEventListener("wheel", onWheel);
    };
  }, [loop]);

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
      <div className="techstack__tabs" ref={tabsRef}>
        {(loop ? [0, 1, 2] : [1]).flatMap((set) =>
          CATEGORIES.map((cat, i) => (
            <button
              key={`${set}-${cat.id}`}
              data-set={i === 0 ? (loop ? set : 0) : undefined}
              className={`techstack__tab${activeId === cat.id ? " techstack__tab--active" : ""}`}
              onClick={() => handleTab(cat.id)}
              // Las copias del carrusel no entran en el orden de tabulación ni en lectores de pantalla
              tabIndex={set === 1 ? undefined : -1}
              aria-hidden={set === 1 ? undefined : true}
            >
              {cat.label}
            </button>
          )),
        )}
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
