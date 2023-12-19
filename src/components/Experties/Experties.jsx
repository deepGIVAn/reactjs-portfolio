import React from "react";
import css from "./Experties.module.scss";
import { projectExperience } from "../../utils/data";

export default function Experties() {
  return (
    <section className={css.wrapper}>
      <div
        className={`paddings yPaddings flexCenter innerWidth ${css.container}`}
      >
        <div className={css.leftSide}>
          {projectExperience.map((exp, i) => (
            <div className={css.exp} key={i}>
              <div className="flexCenter">
                <exp.icon size={25} color="white" />
              </div>
              <div className="">
                <span>{exp.name}</span>
                <span> {exp.projects} </span>
              </div>
            </div>
          ))}
        </div>
        <div className={css.rightSide}></div>
      </div>
    </section>
  );
}
