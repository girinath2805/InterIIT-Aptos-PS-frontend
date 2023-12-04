import React from 'react'
import { MainContainer, ChatContainer, MessageList, Message, MessageInput,Avatar } from '@chatscope/chat-ui-kit-react';

const Livechat = () => {
    return (
        <div style={{ position: "relative", height: "450px",width:'350px' }}>
            <span className='flex text-3xl my-2 text-white justify-center'>Livechat</span>
            <MainContainer className='rounded-lg'>
                <ChatContainer>
                    <MessageList>
                        <Message model={{
                            message: "Hello my friend",
                            sentTime: "just now",
                            sender: "Joe"
                        }}><Message.Header sender="Emily"/>
                        </Message>
                    </MessageList>
                    <MessageInput placeholder="Type message here" />
                </ChatContainer>
            </MainContainer>
        </div>
    )
}

export default Livechat
