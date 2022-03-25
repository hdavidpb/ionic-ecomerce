import React from "react";
import { IonMenuButton } from "@ionic/react";
import logo from "../assets/images/logo.svg";
import photProfile from "../assets/images/image-avatar.png";
import { BsCart3 } from "react-icons/bs";

import * as SC from "./styles";
interface IProps {
  viewName: string;
}

const HeaderBtn = ({ viewName }: IProps) => {
  return (
    <SC.NavbarContainer>
      <SC.RighSide>
        <div style={{ width: "50px" }}>
          <IonMenuButton style={{ width: "100%" }} />
        </div>
        <SC.Logo src={logo} alt="logo" />
      </SC.RighSide>
      <SC.RighSide>
        <SC.IconContainer>
          <SC.Badge>3</SC.Badge>
          <BsCart3 size={20} />
        </SC.IconContainer>
        <SC.IconContainer>
          <img src={photProfile} alt="profile" />
        </SC.IconContainer>
      </SC.RighSide>
    </SC.NavbarContainer>
  );
};

export default HeaderBtn;
