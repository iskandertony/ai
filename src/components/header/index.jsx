import React from "react";
import "./style.scss";
import Icon from "../icon";
import Button from "../button";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/tets");
  };
  return (
    <div className={"header"}>
      <div className={"header_content container"}>
        <div className={"flex gap-10"}>
          <Icon name={"logo"} />
          <h2>Brainwave</h2>
        </div>
        <div className={"flex gap-20"}>
          <div className={"title"} onClick={handleClick}>
            FEATURES
          </div>
          <div className={"title"}>d</div>
          <div className={"title"}>HOW TO USE</div>
          <div className={"title"}>ROADMAP</div>
        </div>
        <div className={"flex gap-20 alignC"}>
          <div className={"title"}>NEW ACCOUNT</div>
          <Button
            text={"SIGN IN"}
            transparent={"transparent"}
            button_gradient={"button_gradient"}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
