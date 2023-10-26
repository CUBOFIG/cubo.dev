import { experienceData } from "@/data/homeData";
import { Cubo } from "@/public/images";
import Image from "next/image";

const ExperienceList = () => (
  <>
    {/* {experienceData.map(({ name, position, description, current }, index) => (
      <div className="company" key={`experience-${index}`}>
        <div className="company__details">
          <div>
            <div>
              <h1>
                {name}
                <span> {current && "Current 🔥"}</span>
              </h1>
            </div>
            <h3>{position}</h3>
          </div>
        </div>
        <p className="company__description">{description}</p>
      </div>
    ))} */}

    <div className="experience-chat">
      <div className="experience_container">
        {experienceData.map(
          ({ name, position, description, current, action, date }, index) => (
            <div className="company" key={`experience-${index}`}>
              <div className="company__details d-flex">
                <Image src={Cubo} alt={name} className="chat-logo" />
                <div className="d-flex flex-direction-column">
                  <div className="textos">
                    Heriberto {action}
                    <strong>{`${name}${!position ? "." : ""}`}</strong>
                    {position && (
                      <>
                        como
                        <strong> {position}.</strong>
                      </>
                    )}
                  </div>
                  <p>{date}</p>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  </>
);

export default ExperienceList;
