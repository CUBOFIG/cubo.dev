import { useEffect, useState } from "react";
import { experienceData } from "@/data/homeData";
import { FaMinus, FaPlus } from "react-icons/fa";
import Image from "next/image";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { TbPointFilled } from "react-icons/tb";
import { useTranslation } from "next-i18next";
import { FaFire } from "react-icons/fa";

const ExperienceList = () => {
  const [open, setOpen] = useState(null);
  const { t } = useTranslation();

  const [isActive, setIsActive] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    let interval;

    interval = setInterval(() => {
      setIsActive((prev) => !prev);
      controls.start({
        scale: [1, 1.2, 1],
        opacity: [1, 0.5, 1],
        transition: { duration: 0.6 },
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [controls]);

  return (
    <div className="experience">
      <div className="experience_container">
        {experienceData.map(
          ({ name, position, description, current, date, image }, index) => {
            const onHandleOpen = () => {
              if (current) return;

              open === index ? setOpen(null) : setOpen(index);
            };

            return (
              <div
                className="company"
                key={`experience-${index}`}
                onClick={() => onHandleOpen()}
              >
                <div className="company__details d-flex">
                  <Image
                    src={image}
                    alt={name}
                    className="chat-logo"
                    priority
                  />
                  <div className="d-flex flex-direction-column">
                    <div className="textos">
                      <strong>{`${name}${!position ? "." : ""}`}</strong>
                      <TbPointFilled className="point" />
                      <p> {position && `${date}`}</p>
                    </div>
                    <p>{position}</p>
                  </div>

                  {current ? (
                    <motion.div
                      animate={controls}
                      className="company__icons-open"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <FaFire className="image-current" size={50} />
                      {isActive && (
                        <div
                          className="flame-effect"
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            pointerEvents: "none",
                            zIndex: -1,
                          }}
                        />
                      )}
                    </motion.div>
                  ) : null}

                  {!current ? (
                    <div className="company__icons-open">
                      {open === index ? (
                        <motion.div
                          key="minus"
                          initial={{ opacity: 0, rotate: -90 }}
                          animate={{ opacity: 1, rotate: 0 }}
                          exit={{ opacity: 0, rotate: 90 }}
                          transition={{ duration: 0.4 }}
                          onClick={() => onHandleOpen(null)}
                        >
                          <FaMinus size={24} />
                        </motion.div>
                      ) : (
                        <motion.div
                          key="plus"
                          initial={{ opacity: 0, rotate: 90 }}
                          animate={{ opacity: 1, rotate: 0 }}
                          exit={{ opacity: 0, rotate: -90 }}
                          transition={{ duration: 0.4 }}
                          onClick={() => onHandleOpen(index)}
                        >
                          <FaPlus size={24} />
                        </motion.div>
                      )}
                    </div>
                  ) : null}
                </div>
                <AnimatePresence>
                  {open === index && (
                    <motion.div
                      className="company__details-description"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.1 }}
                    >
                      <p>{t(description)}</p>
                    </motion.div>
                  )}
                </AnimatePresence>{" "}
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default ExperienceList;
