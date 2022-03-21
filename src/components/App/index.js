import React from 'react';
import io from 'socket.io-client';

import './styles.css';

import Header from '../Header';
import Chat from '../Chat';
import Form from '../Form';

const socket = io('https://messenger-private-server.herokuapp.com/');

const App = () => {
    const [ nickName, setNickName ] = React.useState('Невідомий' || localStorage.getItem('nickName'));

    React.useEffect(() => {
        setNickName(() => {
            return prompt();
        });

        localStorage.setItem('nickName', nickName);
    }, []);

    return (
        <div className="main-container">
            <Header/>
            <Chat socket={socket}/>
            <Form socket={socket} currentUser={nickName}/>
        </div>
    );
};

export default App;