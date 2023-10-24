import { useTranslation } from "next-i18next";

const BaseSection = ({ description, title, content: Content }) => {
  const { t } = useTranslation();
  const textTranslate = t(description).replace(/\n/g, "<hr />");

  return (
    <div className="base-section">
      <div className="base-section__title">
        {title.ft && <h1 dangerouslySetInnerHTML={{ __html: title.ft }} />}
        <div className="contt">
          <h1>{title.st}</h1>
          <h1 className="t-h2">{title.st}</h1>
          <h1 className="t-h3">{title.st}</h1>
        </div>
      </div>
      <div
        className="base-section__description"
        dangerouslySetInnerHTML={{ __html: textTranslate }}
      />
      {Content && <Content />}
    </div>
  );
};

export default BaseSection;
