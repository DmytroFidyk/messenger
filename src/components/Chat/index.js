import React from 'react';

import './styles.css';

import Message from '../Message';

function scrollDown() {
    const chat = document.getElementById('chat');
    chat.scrollTop = chat.scrollHeight;
}

const Chat = (props) => {
    const [ unreadMesaggesCount, setUnreadMessaggesCount ] = React.useState(0);
    
    document.addEventListener('visibilitychange', () => {
        if (!document.hidden) {
            document.title = 'Месенджер';
            unreadMessagesCount = 0;
        }
    });

    const socket = props.socket;
    let unreadMessagesCount = props.unreadMessagesCount;

    const [ messages, setMessages ] = React.useState([]);
    
    React.useEffect(() => {
        socket.on('incoming', message => {
            if(message.userId !== socket.id) {
                unreadMessagesCount += 1;
                if (document.hidden) {
                    document.title = `Повідомлення (${unreadMessagesCount})`;
                }
            }

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