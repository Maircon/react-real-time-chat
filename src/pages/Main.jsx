import Button from '../components/Button'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import Profile from './Profile'
import SocketProvider, { useSocket } from '../context/SocketProvider'
import { useAuth } from '../context/AuthProvider'

export default function Main() {
  const {
    token,
    auth,
    logout
  } = useAuth()
  const {
    socket
  } = useSocket()

  return (
    <>
      <div>
        <a>
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a>
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <Profile isDisabled={!!token} handleAuth={auth}>Login</Profile>
        <Profile isDisabled={!token} handleAuth={logout}>Logout</Profile>
        <Button isDisabled={!socket} roomId={1}>Room 1</Button>
        <Button isDisabled={!socket} roomId={2}>Room 2</Button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}