import React, { useEffect } from "react";
import { useChat } from "../contexts/ChatContext";
import { init, subscribeToMessages } from "../socketApi";
import ChaList from "./ChaList";
import Form from "./Form";
import UserSelection from "./UserSelection";

function Container() {
  const { setChat } = useChat();

  useEffect(() => {
    init();

    subscribeToMessages((message) => {
      console.log("callback function");
      setChat((prev) => [...prev, { text: message }]);
    });
  }, [setChat]);

  return (
    <>
      <UserSelection />
      <ChaList />
      <Form />
    </>
  );
}

export default Container;
