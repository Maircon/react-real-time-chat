import { Link, useParams } from "react-router";
import UserInputMessage from "../components/UserInputMessage";
import ChatBubble from "../components/ChatBubble";
import { useEffect, useState } from "react";
import { useSocket } from "../context/SocketProvider";

export default function Room({}) {
  const [messages, setMessages] = useState([{ user: {}, message: "" }]);
  const userId = sessionStorage.getItem("token");
  const { roomId } = useParams();
  const { socket } = useSocket();

  useEffect(() => {
    socket.emit("joinRoom", { roomId });
    socket.on("message", (mss) => {
      console.log("socket on message", { mss });
      setMessages((n) => [...n, mss]);
    });

    return () => {
      socket.emit("leaveRoom", { roomId });
      socket.off("message");
    };
  }, [socket]);

  return (
    <>
      <h2>
        Bem vindo a Room {roomId} url: {roomId} userId: {userId}
      </h2>

      <div className="center-container">
        {messages.map((mss, index) => (
          <ChatBubble user={mss.user} message={mss.message} key={index} />
        ))}
      </div>

      <UserInputMessage />
      <Link to="/">Voltar</Link>
    </>
  );
}
