import React from "react";
import { Button } from "antd";
import "./style.scss";
import Free from "../free";
import AvatarOnline from "../avatar-online";
const ChatCardInfo = () => {
  return (
    <div className={"chat_card_info"}>
      <div className={"chat_card_info_content"}>
        <AvatarOnline />
        <div className={"flex flex-column"}>
          <div className={"title"}>Tran Mau Tri Tam</div>
          <div className={"text"}>tam@ui8.net</div>
        </div>
        <Free />
      </div>
      <Button block>Upgraded to Pro</Button>
    </div>
  );
};

export default ChatCardInfo;
