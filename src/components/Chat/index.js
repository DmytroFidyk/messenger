import React from 'react';

import './styles.css';

import Message from '../Message';

function scrollDown() {
    const chat = document.getElementById('chat');
    chat.scrollTop = chat.scrollHeight;
}

const Chat = (props) => {
    const socket = props.socket;
    const [ messages, setMessages ] = React.useState([]);
    
    React.useEffect(() => {
        socket.on('incoming', message => {
            setMessages(messages => {
                return [
                    ...messages,
                    message
                ];
            });
            
            scrollDown();
        });

       
    }, []);

    const allMessages = messages.map(message => {
        return <Message key={message.id} messageData={message} socketId={socket.id}/>;
    });

    return (
        <div id="chat" className="chat">{allMessages}</div>
    );
};

export default Chat;