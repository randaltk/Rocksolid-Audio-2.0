import React, { useState } from "react";

import { i18n } from "../../translate/i18n";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
} from "./styles";
const I18N_STORAGE_KEY = "i18nextLng";
function Sidebar({ isOpen, toggle }) {
  const [language] = useState(localStorage.getItem(I18N_STORAGE_KEY));

  const handleSelectChange = (event) => {
    localStorage.setItem(I18N_STORAGE_KEY, event.target.value);
    window.location = window.location.reload;
  };
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggle}>
            {i18n.t("navbar.about")}
          </SidebarLink>
          <SidebarLink to="discover" onClick={toggle}>
            {i18n.t("navbar.discover")}
          </SidebarLink>
          <SidebarLink to="services" onClick={toggle}>
            {i18n.t("navbar.services")}
          </SidebarLink>
          <SidebarLink to="team" onClick={toggle}>
            {i18n.t("navbar.team")}
          </SidebarLink>
          <SidebarLink to="contact" onClick={toggle}>
            {i18n.t("navbar.contact")}
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
      <select value={language} onChange={handleSelectChange}>
        <option id="BRA" value="pt-BR">
          PT
        </option>

        <option id="EN" value="en-US">
          EN
        </option>
      </select>
    </SidebarContainer>
  );
}

export default Sidebar;
