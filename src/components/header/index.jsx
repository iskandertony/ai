import React from "react";
import "./style.scss";
import Button from "../button";
import { useNavigate } from "react-router-dom";
import Logo from "../logo";
const Header = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/chat");
  };
  return (
    <div className={"header"}>
      <div className={"header_content container"}>
       <Logo/>
        <div className={"flex gap-20"}>
          <div className={"title"} onClick={handleClick}>
            CHAT
          </div>
          <div className={"title"}>PRICING</div>
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
