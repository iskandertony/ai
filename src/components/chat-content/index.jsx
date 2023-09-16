import React, { useEffect, useState } from "react";
import "./style.scss";
import Icon from "../icon";
import { Button, Input } from "antd";
import { observer } from "mobx-react";
import AvatarOnline from "../avatar-online";
import chatStore from "../../store/ChatStore";
import { check, sendImg } from "../../api";

const ChatContent = observer(() => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [currentTopic, setCurrentTopic] = useState("flowers");

  useEffect(() => {
    setMessages(chatStore.getChatHistory(currentTopic));
  }, [currentTopic]);

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) {
      setMessages([...messages, "Файл не выбран"]);
      return;
    }

    const reader = new FileReader();
    reader.onloadend = async () => {
      const base64String = reader.result
        .replace("data:", "")
        .replace(/^.+,/, "");
      console.log("base64String", base64String);

      try {
        const response = await sendImg(base64String);
        console.log("response", response);
        if (response.ok) {
          setMessages([...messages, "Изображение успешно отправлено"]);
        } else {
          setMessages([...messages, "Ошибка при отправке изображения"]);
        }
      } catch (error) {
        console.log("error", error);
      }
    };

    reader.onerror = () => {
      setMessages([...messages, "Ошибка при чтении файла"]);
    };

    reader.readAsDataURL(file);
  };

  const Class = [
    {
      name: "cars",
    },
    {
      name: "flowers",
    },
    {
      name: "fruit",
    },
  ];

  return (
    <div className={"cht_content"}>
      <div className={"content"}>
        <div className={"flex justify-s alignC gap-20 header_chat"}>
          <div className={"title"}>Hello</div>
          <div className={"flex justify-s alignC gap-30"}>
            <Icon name={"star"} />
            <Icon name={"save"} />
            <Icon name={"dots"} />
          </div>
        </div>

        <div className={"chat_context"}>
          <div className={"chat_history"}>
            {messages.map((message, index) => (
              <div key={index} className={"title message-container"}>
                {uploadedImage && (
                  <img
                    id={"cat"}
                    src={uploadedImage}
                    alt="Uploaded"
                    className={"picture"}
                    style={{ width: "200px", height: "auto" }}
                  />
                )}
                {message}
              </div>
            ))}
          </div>
          <div className={"flex gap-10"}>
            <Input type="file" onChange={handleImageUpload} />
          </div>
        </div>
      </div>

      <div className={" part_two"}>
        <div className={"part_two_header"}>
          <Icon name={"notification"} />
          <AvatarOnline />
          <Button>Share</Button>
        </div>
        <div className={"part_two_content"}>
          {Class.map((item, index) => (
            <div
              className={"title"}
              key={index}
              onClick={() => setCurrentTopic(item.name)}
            >
              {item.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

export default ChatContent;
