import React, { useEffect } from "react";
import Paulo from "../../images/paulo.png";
import Rands from "../../images/rands.png";
import Danix from "../../images/danix.png";
import { AnimateSharedLayout } from "framer-motion";
import Aos from "aos";
import "aos/dist/aos.css";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "./styles";

function Team() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <AnimateSharedLayout>
      <ServicesContainer id="team">
        <ServicesH1>Our Team</ServicesH1>
        <ServicesWrapper
          data-aos="fade-up"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="right"
        >
          <ServicesCard>
            <ServicesIcon src={Rands} />
          </ServicesCard>

          <ServicesCard>
            <ServicesIcon src={Paulo} />
            <ServicesH2>Mixing</ServicesH2>
            <ServicesP>
              We will carefully polish your project in order to make it sound
            </ServicesP>
          </ServicesCard>

          <ServicesCard>
            <ServicesIcon src={Danix} />
          </ServicesCard>
        </ServicesWrapper>
      </ServicesContainer>
    </AnimateSharedLayout>
  );
}

export default Team;
