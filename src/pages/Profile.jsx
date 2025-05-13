import { useEffect, useState } from 'react'
import api from '../services/api'

export default function Profile({ handleAuth, isDisabled, children }) {
  return (
    <>
      <button disabled={isDisabled} onClick={handleAuth}>{children}</button>
    </>
  )
}