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

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await sendImg(formData);
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
          <div className={"chip"}>
            <div className={"title"}>Как пользоваться ?</div>
            <div className={"text"}>
              Введите ваше имя пользователя или зарегистрируйтесь, чтобы создать
              новый аккаунт.
            </div>
          </div>
          <div className={"chip"}>
            <div className={"title"}>Как отправить картинку ?</div>
            <div className={"text"}>
              Вы можете отправить изображения, нажав на значок "Клип" рядом с
              полем ввода.
            </div>
          </div>
          <div className={"chip"}>
            <div className={"title"}>Доп инфо</div>
            <div className={"text"}>
              Если у вас возникли вопросы или проблемы, нажмите на значок
              "Помощь" в верхнем правом углу экрана.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default ChatContent;
