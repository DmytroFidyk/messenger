import React from 'react';

import './styles.css';

const Form = (props) => {
    const socket = props.socket;
    const nickname = props.currentUser;

    const [ message, setMessage ] = React.useState('');
    const [ counter, setCounter ] = React.useState(0);

    function handleChange(event) {
        const text = nickname + " пише...";
        setMessage(event.target.value);
        if (counter < 1) {
            if (event.target.value !== '') {
                socket.emit('user write', {userId: socket.id, text: text});
                setCounter(counter + 1);
            }
        }

        if (event.target.value === '') {
            socket.emit('stop write', 'Стоп');
            setCounter(0);
        }
    }

    function handleSubmit(event) {
        event.preventDefault();
        sendMessage(event);
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

        if (event._reactName !== 'onSubmit') {            
            if (event.key === 'Enter') {
                event.preventDefault();           
                
                if (message !== '') {
                    socket.emit('new message', { id: 0, userId: socket.id, nickname: nickname, messageText: message, time: time });
                    socket.emit('stop write', 'Стоп');
                    setCounter(0);
                    setMessage('');
                    document.getElementById('message-input').value = '';
                }
            }
        }
        else {
            if (message !== '') {
                socket.emit('new message', { id: 0, userId: socket.id, nickname: nickname, messageText: message, time: time });
                socket.emit('stop write', 'Стоп');
                setCounter(0);
                setMessage('');
                document.getElementById('message-input').value = '';
            }
        }
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <textarea 
                id="message-input" 
                className="message-input" 
                onChange={handleChange} 
                onKeyDown={sendMessage}
                placeholder="Напишіть повідомлення"
            >
            </textarea>
            <button className="send-button">
                <img 
                    className="send-icon" 
                    src="images/icons/sent-mail.png" 
                    alt="Send icon"
                />
                <span className="text-button">Відправити</span>
            </button>
        </form>
    );
}

export default Form;