import { useNavigate } from 'react-router-dom';

export default function Button({ isDisabled, roomId, children }) {
  const to = useNavigate()
  function handleOnClick() {
    to(`/room/${roomId}`)
  }

  return (
    <button disabled={isDisabled} onClick={handleOnClick}>{children}</button>
  )
}
