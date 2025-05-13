import { createContext, useContext, useEffect, useState } from "react";
import api from "../services/api";

const AuthContext = createContext({})

export default function AuthProdiver({ children }) {
  const [token, setToken] = useState(null)
  const [disconnectEvent, setDisconnectEvent] = useState(false)

  useEffect(() => {
    const sessionToken = sessionStorage.getItem('token')
    if (sessionToken) {
      setToken(sessionToken)
    }
  })

  async function auth() {
    const result = await api({
      endpoint: '/auth',
      method: 'POST',
      body: {
        userId: Number(Math.random() * 100).toFixed(),
        password: 'any-password-value'
      }
    })
    sessionStorage.setItem('token', result.token)
    setToken(result.token)
  }

  async function logout() {
    await api({
      endpoint: '/logout',
      method: 'POST',
      body: {
        token
      }
    })
    sessionStorage.removeItem('token')
    setToken(null)
    setDisconnectEvent(true)
  }

  return (
    <AuthContext.Provider value={{ token, disconnectEvent, auth, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)