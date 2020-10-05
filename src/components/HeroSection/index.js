import React, { useState } from "react";
import { Button } from "../ButtonComponent";
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

function HeroSection() {
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
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg loop muted autoPlay src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Professional Audio Work</HeroH1>
        <HeroP>
          We know that greatness in a disruptive era requires bold ambition,
          curious talent and a culture that believes we're smarter togueter
        </HeroP>
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
      </HeroContent>
    </HeroContainer>
  );
}
export default HeroSection;
