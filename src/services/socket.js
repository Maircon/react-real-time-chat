import { io } from 'socket.io-client'

let socket

export const getSocket = (token) => {
  if (!socket) {
    socket = io('http://localhost:3000', {
      auth: {
        token
      }
    })
  }

  return socket
}

export const clearSocket = () => {
  console.log('clearSocket')
  if (socket) {
    console.log('clearSocket exist')
    socket.disconnect()
    socket = null
  }
}
