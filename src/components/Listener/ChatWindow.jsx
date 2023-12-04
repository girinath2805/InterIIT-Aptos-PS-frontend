import React from 'react'
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, Avatar } from '@chatscope/chat-ui-kit-react';

const ChatWindow = () => {
    return (
        <MainContainer className='rounded-lg'>
            <ChatContainer>
                <MessageList>
                    <Message model={{
                        message: "Hello my friend",
                        sentTime: "just now",
                        sender: "Joe"
                    }}><Message.Header sender="Emily" />
                    </Message>
                </MessageList>
                <MessageInput placeholder="Type message here" />
            </ChatContainer>
        </MainContainer>
    )
}

export default ChatWindow