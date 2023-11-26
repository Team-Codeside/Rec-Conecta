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
  fontsize_,
  fontsizelabel_
}) => {
  return (

    // ? FORMULÁRIO BASE -  
    <div className="input-base">
        <Form>
          <Form.Group
            className={name_}
            controlId={id_}
            style={{
              width: width_,
              height: heigth_,
              color: color_,
              fontSize: fontsize_,
            }}
          >
            <Form.Label style={{fontSize: fontsizelabel_}}>{label_}</Form.Label>
            <Form.Control
              type={type_}
              placeholder={placeholder_}
              style={{
                backgroundColor: backgroundcolor_,
                borderRadius: radius_,
                border: border_,
              }}
            />
          </Form.Group>
        </Form>
    </div>
  );
};

export default Input_control;
