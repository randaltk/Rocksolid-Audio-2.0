import React, { useState, useEffect } from "react";

import { motion } from "framer-motion";
import Aos from "aos";
import "aos/dist/aos.css";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  //Button,
  //MuteIcon,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./styles";
import Video from "../../videos/video.mp4";
import { Button } from "../ButtonComponent";

function HeroSection() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };
  //function toggleMute() {
  //var video = document.getElementById("myVideo");
  //if (video.muted) {
  // video.muted = false;
  // } else {
  //video.muted = true;
  // }

  return (
    <HeroContainer id="home" data-aos="zoom-out-down ease-in-out-sine">
      <HeroBg>
        <VideoBg loop muted autoPlay src={Video} type="video/mp4" />
      </HeroBg>

      <HeroContent>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 10, duration: 5 }}
        >
          <HeroH1>Professional Audio Work</HeroH1>

          <HeroP>Redesigning life through sound</HeroP>

          <motion.div
            whileHover={{
              scale: 1.1,
              textShadow: "0px 0px 8px rgb(255,255,255)",
            }}
          >
            <HeroBtnWrapper>
              <Button
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
                onMouseEnter={onHover}
                onMouseLeave={onHover}
              >
                Get started {hover ? <ArrowForward /> : <ArrowRight />}
              </Button>
            </HeroBtnWrapper>
          </motion.div>
        </motion.div>
      </HeroContent>
    </HeroContainer>
  );
}
export default HeroSection;
