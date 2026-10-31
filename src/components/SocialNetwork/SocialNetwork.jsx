import React, { useEffect, useState } from "react";
import {
  TwitterLogo,
  GitHubLogo,
  InstagramLogo,
  LinkedinLogo,
} from "./IconsComponents";
import { useTheme } from "next-themes";

const SocialNetwork = () => {
  const { theme } = useTheme();

  const [colorMode, setColorMode] = useState({
    color: "#333131",
    borderColor: "#fff",
  });

  useEffect(() => {
    setTimeout(() => {
      if (document.documentElement.classList.contains("light")) {
        setColorMode({
          color: "#333131",
          borderColor: "#fff",
        });
      } else {
        setColorMode({
          color: "#fff",
          borderColor: "#333131",
        });
      }
    }, 0);
  }, [theme]);

  return (
    <div className="network-section">
      <a href="https://twitter.com/SOYCUB0" aria-label="Twitter">
        <TwitterLogo
          height="120"
          width="120"
          fill={colorMode?.color}
          borderColor={colorMode?.borderColor}
        />
      </a>
      <a href="https://github.com/CUBOFIG" aria-label="GitHub">
        <GitHubLogo
          height="120"
          width="120"
          fill={colorMode?.color}
          borderColor={colorMode?.borderColor}
        />
      </a>
      <a
        href="https://instagram.com/cubo.io?igshid=MzMyNGUyNmU2YQ=="
        aria-label="Instagram"
      >
        <InstagramLogo height="120" width="120" fill={colorMode?.color} />
      </a>
      <a
        href="https://www.linkedin.com/in/heriberto-figueroa-michel-750517207/"
        aria-label="Linkedin"
      >
        <LinkedinLogo
          height="120"
          width="120"
          fill={colorMode?.color}
          borderColor={colorMode?.borderColor}
        />
      </a>
    </div>
  );
};

export default SocialNetwork;
