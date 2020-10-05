import React from "react";
import Icon1 from "../../images/services-3.svg";
import Icon2 from "../../images/services-1.svg";
import Icon3 from "../../images/services-2.svg";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "./styles";

function Services() {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Mixing</ServicesH2>
          <ServicesP>
            We will carefully polish your project in order to make it sound just
            like the artists you are used to listen
          </ServicesP>
        </ServicesCard>

        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Composition</ServicesH2>
          <ServicesP>
            From jingles to complex soundtracks, our composition experts will
            deliver a high quality story-telling work.
          </ServicesP>
        </ServicesCard>

        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Sound Design</ServicesH2>
          <ServicesP>
            With different influences and experiences, our team of sound
            designers will cover all of the aspects of the sound design.
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
}

export default Services;
