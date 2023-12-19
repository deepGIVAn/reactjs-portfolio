import React from "react";
import css from "./Hero.module.scss";
import { motion } from "framer-motion";
import { fadeIn, slideIn, staggerContainer } from "../../utils/motion";

export default function Hero() {
  return (
    <section className={`paddings ${css.wrapper}`}>
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={staggerContainer()}
        viewport={{ once: false, amount: 0.25 }}
        className={`innerWidth ${css.container}`}
      >
        <div className={css.upperElements}>
          <motion.span
            variants={fadeIn("right", "tween", 0.2, 1)}
            className="primaryText"
          >
            Hey There, <br />
            <span>I'm Developer.</span>
          </motion.span>
          <motion.span
            className="secondaryText"
            variants={fadeIn("left", "tween", 0.4, 1)}
          >
            I design beautiful simple <br />
            things, And I love what i do
          </motion.span>
        </div>

        <motion.div
          className={css.person}
          variants={fadeIn("up", "tween", 0.3, 1.3)}
        >
          <motion.img
            src="./person.png"
            alt="person"
            variants={slideIn("up", "tween", 0.5, 1.3)}
          />
        </motion.div>

        <a href="mailto:deepakpvt26@gmail.com" className={css.email}>
          deepakpvt26@gmail.com
        </a>

        <div className={css.lowerElements}>
          <motion.div
            className={css.experience}
            variants={fadeIn("right", "tween", 0.2, 1)}
          >
            <div className="primaryText">10</div>
            <div className="secondaryText">
              <div>Years</div>
              <div>Experience</div>
            </div>
          </motion.div>
          <motion.div
            className={css.certificate}
            variants={fadeIn("right", "tween", 0.2, 1)}
          >
            <img src="./certificate.png" alt="certificate" />
            <span>CERTIFIED PROFATIONAL</span>
            <span>UI/UX DESIGNER</span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
