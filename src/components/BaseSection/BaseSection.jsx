import { useTranslation } from "next-i18next";

const BaseSection = ({ children, description, title }) => {
  const { t } = useTranslation();

  return (
    <div className="base-section">
      <div className="base-section__title">
        {/* <h1>{title.ft}</h1>
        <h1>{title.st}</h1> */}
        <h1>{title.ft}</h1>
        <div className="contt">
          <h1>{title.st}</h1>
          <h1 className="t-h2">{title.st}</h1>
          <h1 className="t-h3">{title.st}</h1>
        </div>
      </div>
      <p className="base-section__description">{t(description)}</p>
      {children && <div>{children}</div>}
    </div>
  );
};

export default BaseSection;
