import { useEffect, useState, createContext, useContext } from "react";
import { getSocket, clearSocket } from "../services/socket";
import { useAuth } from "./AuthProvider";

const SocketContext = createContext({})

export default function SocketProvider ({ children }) {
  const [socket, setSocket] = useState(null)
  const { token, disconnectEvent } = useAuth()

  useEffect(() => {
    if (disconnectEvent) {
      clearSocket()
      setSocket(null)
    }
    if (!token) return
    const newSocket = getSocket(token)
    setSocket(newSocket)
  }, [token, disconnectEvent])

  return (
    <SocketContext.Provider value={{ socket }}>
      {children}
    </SocketContext.Provider>
  )
}

export const useSocket = () => useContext(SocketContext)