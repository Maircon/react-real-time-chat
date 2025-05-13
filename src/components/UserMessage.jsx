import { useEffect, useState } from 'react'
import '../styles/userMessage.css'
// import socket from '../services/socket'

export default function UserMessage({ message }) {
  return (
    <div className="user-message">
      <p>{message}</p>
    </div>
  )
}