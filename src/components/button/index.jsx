import React from "react";
import "./style.scss";

const Button = (props) => {
  const {
    text,
    onClick,
    transparent,
    border_white,
    button_background_color_white,
    button_color_black,
    button_gradient
  } = props;
  return (
    <button
      onClick={onClick}
      className={`button ${transparent} ${border_white} ${button_background_color_white} ${button_color_black}  ${button_gradient}`}
      data={`${text}`}
    />
  );
};

export default Button;
