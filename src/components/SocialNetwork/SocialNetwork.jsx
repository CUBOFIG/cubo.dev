import React, { use, useEffect, useState } from "react";
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
    console.log(theme, document.documentElement.classList.contains("light"));

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
      <a href="https://twitter.com/SOYCUB0">
        <TwitterLogo
          height="120"
          width="120"
          fill={colorMode?.color}
          borderColor={colorMode?.borderColor}
        />
      </a>
      <a href="https://github.com/CUBOFIG">
        <GitHubLogo
          height="120"
          width="120"
          fill={colorMode?.color}
          borderColor={colorMode?.borderColor}
        />
      </a>
      <a href="https://instagram.com/cubo.io?igshid=MzMyNGUyNmU2YQ==">
        <InstagramLogo
          height="120"
          width="120"
          fill={colorMode?.color}
          borderColor={colorMode?.borderColor}
        />
      </a>
      <a href="https://www.linkedin.com/in/heriberto-figueroa-michel-750517207/">
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
