import "./button.css";
import React from "react";
import Button from "react-bootstrap/Button";

// ? Função com os props do botão})
const Button_ = ({
  width_,
  heigth_,
  backgroundcolor_,
  color_,
  border_,
  radius_,
  weigth_,
  font_,
  text_button,
}) => {
  return (
    <>
      {/*//? Tag do Botão - OBS:toggle = botão consegue ser apertado*/}
      <Button
        id="button"
        toggle
        style={{
          width: width_,
          height: heigth_,
          backgroundColor: backgroundcolor_,
          color: color_,
          border: border_,
          borderRadius: radius_,
          fontWeight: weigth_,
          fontFamily: font_,
        }}
      >
        {text_button}
      </Button>{" "}
    </>
  );
};

export default Button_;
