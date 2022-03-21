import './styles.css';

const Message = (props) => {
    console.log(props.socketId);
    const { userId, nickname, messageText, time } = props.messageData;
    const socketId = props.socketId;

    let my = '';
    
    if (socketId === userId) {
        my = 'my-';
    }

    return (
        <div className={`${my}message-container`}>
            <div className={`${my}message`}>
                <div className="nickname">{nickname}</div>
                <div className="message-text">{messageText}</div>
                <div className="time">{time}</div>
            </div>
        </div>
    );
};

export default Message;