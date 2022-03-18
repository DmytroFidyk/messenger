import './styles.css';

const Message = (props) => {
    const { nickname, messageText, time } = props.messageData;

    let my = '';
    
    if (props.messageData.isMyMessage) {
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