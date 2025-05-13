import UserCard from "./UserCard";
import UserMessage from "./UserMessage";

export default function ChatBubble({ user, message }) {
  return (
    <>
      <UserCard
        avatarUrl={user.avatarUrl}
        name={user.name}
        meta={user.meta}
      />
      <UserMessage message={message} />
    </>
  )
}