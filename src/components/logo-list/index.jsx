import React from "react";
import "./style.scss";
import {
  AndroidOutlined,
  AppleOutlined,
  GoogleOutlined,
  InstagramOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
const LogoList = () => {
  return (
    <div className={"logo_list"}>
      <div className={"title logo_title"}>
        HELPING PEOPLE CREATE BEAUTIFUL CONTENT AT
      </div>

      <div className={"flex justify-s alignC logo_list_content"}>
        <div className={"flex gap-10 alignC title"}>
          <GoogleOutlined />
          <div className={"font_size"}>Google</div>
        </div>
        <div className={"flex gap-10 alignC title"}>
          <InstagramOutlined />
          <div>Instagram</div>
        </div>
        <div className={"flex gap-10 alignC title "}>
          <AndroidOutlined />
          <div>Android</div>
        </div>
        <div className={"flex gap-10 alignC title"}>
          <YoutubeOutlined />
          <div>Youtube</div>
        </div>
        <div className={"flex gap-10 alignC title"}>
          <AppleOutlined />
          <div>Apple</div>
        </div>
      </div>
    </div>
  );
};

export default LogoList;
