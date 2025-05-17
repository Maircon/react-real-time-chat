import '../styles/UserInputMessage.css'

import { useState } from "react"
import { useSocket } from "../context/SocketProvider"
import { useParams } from "react-router-dom";

export default function UserInputMessage() {
  const [text, setText] = useState("");
  const { socket } = useSocket();
  const { roomId } = useParams();

  function handleOnClick() {
    socket.emit("message", { text, roomId });
    setText("");
  }

  return (
    <div className="chat-input">
      <input
        type="text"
        placeholder="Message"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleOnClick}>Send</button>
    </div>
  );
}