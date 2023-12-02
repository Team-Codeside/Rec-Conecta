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
  padding_,
  margin_,
  link_,
  type_,
  value_,
  Onclick_,
}) => {
  return (
    <>
      {/* {{///? Tag do Botão - OBS:toggle = botão consegue ser apertado/}} */}
      <a href={link_} style={{textDecoration:'none'}}>
        <Button
          id="button"
          toggle = 'true'
          onClick = {Onclick_}
          style={{
            width: width_,
            height: heigth_,
            backgroundColor: backgroundcolor_,
            color: color_,
            border: border_,
            borderRadius: radius_,
            fontWeight: weigth_,
            fontFamily: font_,
            padding: padding_,
            margin: margin_,
            type: type_,
            value: value_,
            // ! NÃO MEXA NISSO! Aqui é a centralização do texto do botão!!
            display:"flex",
            alignItems: "center",
            justifyContent: "center"
          }}
          >
          {text_button}  
        </Button>
      </a>
    </>
  )
};

export default Button_;