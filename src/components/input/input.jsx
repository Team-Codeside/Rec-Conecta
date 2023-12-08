import React from "react";
import "./input.css";
import Form from "react-bootstrap/Form";

// ? COMPONENTE FLEXIVEL DOS INPUTS, com parâmetros do Input
const Input_control = ({ 
  type_,
  label_,
  name_,
  id_,
  placeholder_,
  width_,
  heigth_,
  backgroundcolor_,
  color_,
  border_,
  radius_,
  fontsizelabel_,
  margin_,
  padding_,
  Onchange_,
  value_,
  multiple
  
}) => {
  return (

    // 0 FORMULÁRIO BASE -  
    <div className="input-base">
        <Form>
          <Form.Group
            className={name_}
            controlId={id_}
            style={{
              color: color_
            }}
            placeholder={placeholder_}
            onChange={Onchange_}
            value_={value_}
            {...(multiple ? {multiple} : '')}
            

          >
            <Form.Label  style={{fontSize: fontsizelabel_}}>{label_}</Form.Label>
            <Form.Control
              type={type_}
              placeholder={placeholder_}
              style={{
                width: width_,
                height: heigth_,
                backgroundColor: backgroundcolor_,
                borderRadius: radius_,
                border: border_,
                margin: margin_,
                padding: padding_
              }}
            />
          </Form.Group>
        </Form>
    </div>
  );
};

export default Input_control;