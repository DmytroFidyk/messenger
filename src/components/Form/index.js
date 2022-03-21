import React from 'react';

import './styles.css';

const Form = (props) => {

    const socket = props.socket;
    const nickname = props.currentUser;

    const [ message, setMessage ] = React.useState('');

    function handleChange(event) {
        setMessage(event.target.value);
    }

    function getTime() {
        const currentDate = new Date();

        let hours = currentDate.getHours();
        if (hours < 10)
            hours = '0' + hours;

        let minutes = currentDate.getMinutes();
        if (minutes < 10)
            minutes = '0' + minutes;

        
        return hours + ':' + minutes;
    }

    function sendMessage(event) {
        const time = getTime();

        if (event.key === 'Enter') {
            event.preventDefault();           

            if (message !== '') {
                socket.emit('new message', { id: 0, userId: socket.id, nickname: nickname, messageText: message, time: time });
                document.getElementById('message-input').value = '';
            }
        }
    }

    return (
        <form className="form">
            <textarea id="message-input" className="message-input" onChange={handleChange} onKeyDown={sendMessage}></textarea>
            <button className="send-button" type="submit" onSubmit={sendMessage}>Відправити</button>
        </form>
    );
}

export default Form;