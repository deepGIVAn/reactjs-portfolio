import React from "react";
import css from "./Experties.module.scss";
import { WhatDoIHelp, projectExperience } from "../../utils/data";

export default function Experties() {
  return (
    <section className={css.wrapper}>
      <div
        className={`paddings yPaddings flexCenter innerWidth ${css.container}`}
      >
        <div className={css.leftSide}>
          {projectExperience.map((exp, i) => (
            <div className={css.exp} key={i}>
              <div className="flexCenter" style={{ background: exp.bg }}>
                <exp.icon size={25} color="white" />
              </div>
              <div className="">
                <span>{exp.name}</span>
                <span className="secondaryText"> {exp.projects} Projects</span>
              </div>
            </div>
          ))}
        </div>
        <div className={css.rightSide}>
          <span className="primaryText">What do I help?</span>
          {WhatDoIHelp.map((para, i) => (
            <div className="secondaryText" key={i}>
              {para}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
