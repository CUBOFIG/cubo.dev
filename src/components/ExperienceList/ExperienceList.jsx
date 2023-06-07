import { experienceData } from "@/data/homeData";

const ExperienceList = () => (
  <>
    {experienceData.map(({ name, position, description, current }, index) => (
      <div className="company" key={`experience-${index}`}>
        <div className="company__details">
          <div>
            <div>
              <h1>
                {name}
                <span> {current && "Current"}</span>
              </h1>
            </div>
            <h3>{position}</h3>
          </div>
        </div>
        <p className="company__description">{description}</p>
      </div>
    ))}
  </>
);

export default ExperienceList;
