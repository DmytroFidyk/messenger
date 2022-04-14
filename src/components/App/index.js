import React from 'react';
import io from 'socket.io-client';

import './styles.css';

import Header from '../Header';
import Chat from '../Chat';
import ParticipantsPanel from '../ParticipantsPanel';
import Form from '../Form';

const socket = io('https://messenger-private-server.herokuapp.com/');

const App = () => {
    let unreadMessagesCount = 0;
    const [ nickName, setNickName ] = React.useState('Невідомий');

    React.useEffect(() => {
        let user = prompt("Введіть ваше ім'я aбо псевдонім");

        if(user !== '') {
            setNickName(user);
        }
        else {
            user = 'Невідомий';
        }

        if(user === null) {
            setNickName('Невідомий');
            user = 'Невідомий';
        }

        socket.on('connect', () => {
            socket.emit('new participant', {userId: socket.id, nickName: user});
        });
    }, []);

    return (
        <div className="main-container">
            <Header socket={socket} nickName={nickName}/>
            <div className="chat-container">
                <Chat socket={socket} nickName={nickName} unreadMessagesCount={unreadMessagesCount}/>
                <ParticipantsPanel socket={socket}/>
            </div>
            <Form socket={socket} currentUser={nickName}/>
        </div>
    );
};

export default App;