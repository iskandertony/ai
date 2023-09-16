import React from "react";
import "./style.scss";

import Logo from "../../components/logo";
import ChatMenu from "../../components/chat-menu";
import ChatList from "../../components/chat-list";
import { Divider } from "antd";
import ChatCardInfo from "../../components/chat-card-info";
import { useNavigate } from "react-router-dom";
import ChatContent from "../../components/chat-content";
const Chat = () => {
  const navigate = useNavigate();
  const handleNav = () => {
    navigate("/main");
  };
  return (
    <div className={" chat"}>
      <div className={"flex flex-column justify-s"}>
        <Logo onClick={handleNav} />
        <ChatMenu />
        <Divider />
        <ChatList />
        <ChatCardInfo />
      </div>
      <div className={"flex"}>
        <ChatContent />
      </div>
    </div>
  );
};

export default Chat;
