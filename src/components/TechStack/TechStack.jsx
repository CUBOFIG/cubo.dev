import { listData } from "@/data/homeData";
import Image from "next/image";

const TechStack = () => (
  <div className="experience-list">
    {listData.map(({ title, elements }, index) => (
      <div className="list-container" key={`list-${index}`}>
        <h3>{title}</h3>
        <hr />
        <ul>
          {elements.map(({ name, icon }, index) => (
            <li key={`element-${index}`} className={`is-${name}`}>
              {icon && (
                <Image className="icon" src={icon} alt={`icon-tech${index}`} />
              )}
              <p>{name}</p>
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);

export default TechStack;
