import { listData } from "@/data/homeData";
import Image from "next/image";

const TechStack = () => (
  <div className="experience-list">
    {listData.map(({ title, elements }, index) => (
      <div className="list-container" key={`list-${index}`}>
        <h2>{title}</h2>
        <hr />
        <ul>
          {elements.map(({ name, icon, isIcon }, index) => (
            <li key={`element-${index}`} className={`is-${name}`}>
              {icon && (
                <>{isIcon ? icon : <Image src={icon} alt={`icon-${name}`} />}</>
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
