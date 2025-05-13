import '../styles/userCard.css'

export default function UserCard({ avatarUrl, name, meta }) {
  return (
    <div className="user-card">
      <img
        src={avatarUrl}
        alt="Profile"
        className="avatar"
      />
      <div className="info">
        <div className="name">{name}</div>
        <div className="meta">{meta}</div>
      </div>
    </div>
  )
}1