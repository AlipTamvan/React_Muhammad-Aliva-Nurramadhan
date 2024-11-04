import React from "react";
import Input from "../atoms/Input";
import Button from "../atoms/Button";

const ChatForm = ({ inputValue, onInputChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <Input
        value={inputValue}
        onChange={onInputChange}
        placeholder="Tanyakan sesuatu pada Google AI..."
      />
      <Button type="submit">Kirim</Button>
    </form>
  );
};

export default ChatForm;
