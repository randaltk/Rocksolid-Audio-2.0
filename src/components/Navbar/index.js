import React, { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import { motion } from "framer-motion";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  ImgLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
} from "./styles";

import LogoWeb from "../../assets/el_pesim.png";

import { i18n } from "../../translate/i18n";

const I18N_STORAGE_KEY = "i18nextLng";
function Navbar({ toggle }) {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  const [language] = useState(localStorage.getItem(I18N_STORAGE_KEY));

  const handleSelectChange = (event) => {
    localStorage.setItem(I18N_STORAGE_KEY, event.target.value);
    window.location = window.location.reload;
  };

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>
            <motion.div
              initial={{ opacity: 0, y: -250 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0, duration: 4 }}
            >
              <ImgLogo src={LogoWeb} />
            </motion.div>
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <motion.div
            initial={{ opacity: 0, y: -250 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0, duration: 4.5 }}
          >
            <NavMenu>
              <NavItem>
                <NavLinks
                  to="about"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  {i18n.t("navbar.about")}
                </NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks
                  to="discover"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  {i18n.t("navbar.discover")}
                </NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks
                  to="services"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  {i18n.t("navbar.services")}
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="team"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  {i18n.t("navbar.team")}
                </NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks
                  to="contact"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  {i18n.t("navbar.contact")}
                </NavLinks>
              </NavItem>

              <select value={language} onChange={handleSelectChange}>
                <option id="BRA" value="pt-BR">
                  PT
                </option>

                <option id="EN" value="en-US">
                  EN
                </option>
              </select>
            </NavMenu>
          </motion.div>
        </NavbarContainer>
      </Nav>
    </>
  );
}

export default Navbar;
