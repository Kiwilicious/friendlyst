import React from 'react'
import MessageListEntry from './MessageListEntry.jsx'


const MessageList = ({ messages, friend, user }) => {

  return (
    <div className="message-list">
      {
        messages.map(message => <MessageListEntry message={message} friend={friend} user={user} />)
      }
    </div>
  )
}

export default MessageList