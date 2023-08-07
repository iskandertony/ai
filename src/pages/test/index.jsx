import React, { useState } from "react";
import "./style.scss";
import { Form, Select, Radio, Input } from "antd";

const { Option } = Select;

const Tets = () => {
  const [trainingType, setTrainingType] = useState();
  const [mode, setMode] = useState();
  const [activityType, setActivityType] = useState();
  const [activityMode, setActivityMode] = useState();

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <div className="container tets">
      <div className="tets_text">Расписание</div>
      <Form layout="vertical" onFinish={onFinish}>
        <div className="back-ground">
          <Form.Item name="groupType" label="Типы тренировок">
            <Select
              placeholder="Выбрать"
              onChange={(value) => setTrainingType(value)}
            >
              <Option value="individual">Индивидуальная</Option>
              <Option value="group">Группа</Option>
            </Select>
          </Form.Item>
          {trainingType && (
            <Form.Item name="mode" label="Выберите режим">
              <Radio.Group onChange={(e) => setMode(e.target.value)}>
                <Radio value="online">Онлайн</Radio>
                <Radio value="offline">Офлайн</Radio>
                <Radio value="both">Оба</Radio>
              </Radio.Group>
            </Form.Item>
          )}
          {(mode === "offline" || mode === "both") && (
            <>
              <Form.Item name="input1" label="Поле ввода 1">
                <Input />
              </Form.Item>
              <Form.Item name="input2" label="Поле ввода 2">
                <Input />
              </Form.Item>
            </>
          )}
        </div>
        <div className="back-ground">
          <Form.Item name="activityType" label="Специализация">
            <Select
              placeholder="Выбрать"
              onChange={(value) => setActivityType(value)}
            >
              <Option value="fitness">Фитнес</Option>
              <Option value="running">Бег</Option>
            </Select>
          </Form.Item>
          {activityType && (
            <Form.Item name="activityMode" label="Выберите режим активности">
              <Radio.Group onChange={(e) => setActivityMode(e.target.value)}>
                <Radio value="online">Онлайн</Radio>
                <Radio value="offline">Офлайн</Radio>
                <Radio value="both">Оба</Radio>
              </Radio.Group>
            </Form.Item>
          )}
          {(activityMode === "offline" || activityMode === "both") && (
            <>
              <Form.Item name="activityInput1" label="Поле ввода активности 1">
                <Input />
              </Form.Item>
              <Form.Item name="activityInput2" label="Поле ввода активности 2">
                <Input />
              </Form.Item>
            </>
          )}
        </div>

        <div className={"back-ground"}>Добавить еще специализацию</div>

        <Form.Item>
          <button type="submit">Отправить</button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Tets;
