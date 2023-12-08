import React, { useState , useEffect} from 'react';
import '../msg/message.css'
import bus from "../../utils/bus";

function Message() {
    const [visibility, setVisibility] = useState(false);
    const [message, setMessage] = useState("");
    const [type, setType] = useState("");
  
    useEffect(() => {
      bus.addListener("flash", ({ message, type }) => {
        setVisibility(true)
        setMessage(message)
        setType(type)

        setTimeout(() => {
          setVisibility(false);
        }, 3000);
      });
    }, []);
  
    // useEffect(() => {
    //   if (document.querySelector(".close") !== null) {
    //     document
    //       .querySelector(".close")
    //       .addEventListener("click", () => setVisibility(false));
    //   }
    // });
  

    return (
       visibility && ( 
        <div className={`message ${type}`}>{message}</div>
       )
    );
}

export default Message;