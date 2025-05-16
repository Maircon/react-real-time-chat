import { Link, useParams } from "react-router";
import UserInputMessage from '../components/UserInputMessage'
import ChatBubble from "../components/ChatBubble";
import { useEffect, useState } from "react";
import { useSocket } from "../context/SocketProvider";

export default function Room({ roomId }) {
  const [messages, setMessages] = useState([{ user: {}, message: '' }])
  const userId = sessionStorage.getItem('token')
  const params = useParams()
  const { socket } = useSocket()

  useEffect(() => {
    const roomCode = `message_${params.roomId}`;
    console.log({ roomCode });
    socket.on(roomCode, (mss) => {
      console.log("socket on message", { mss });
      setMessages((n) => [...n, mss]);
    });

    return () => {
      socket.off(roomCode);
    };
  }, [socket])
  
  return (
    <>
      <h2>Bem vindo a Room {roomId} url: {params.roomId} userId: {userId}</h2>

      <div className="center-container">
        {messages.map((mss, index) =>
          <ChatBubble
            user={mss.user}
            message={mss.message}
            key={index}
          />
        )}
      </div>

      <UserInputMessage />
      <Link to="/">Voltar</Link>
    </>
  )
}
