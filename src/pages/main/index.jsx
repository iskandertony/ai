import React from "react";
import background from "../../assets/imgs/background.webp";
import "./style.scss";
import Button from "../../components/button";
import Chat from "../../components/chat";
import LogoList from "../../components/logo-list";
const Main = () => {
  return (
    <div className={"main"}>
      <img src={background} alt="" className={"main_img"} />
      <div className={"container border"}>
        <div className={"container_content"}>
          <div className={"plus"}>+</div>
          <div className={"title"}>
            <div>Explore the Possibilities</div>
            <div className={"relative"}>
              of AI Chatting with{" "}
              <span className={"gradient_underline"}>Brainwave</span>
            </div>
          </div>

          <div className={"button_main"}>
            <Button
              text={"GET STARTED"}
              button_background_color_white={"button_background_color_white"}
              button_color_black={"button_color_black"}
            />
          </div>

          <Chat />
        </div>
        <LogoList />
      </div>
    </div>
  );
};

export default Main;
