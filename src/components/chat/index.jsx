import React from "react";
import robot from "../../assets/imgs/robot.webp";
import "./style.scss";
import { LoadingOutlined } from "@ant-design/icons";
const Chat = () => {
  return (
    <div className={"chat_component with_border"}>
      <img src={robot} alt="описание_изображения" className={"chat_img"} />
      <div className={"input"}>
        <LoadingOutlined /> <span className={"text"}> Ai is generating </span>
      </div>
    </div>
  );
};

export default Chat;
