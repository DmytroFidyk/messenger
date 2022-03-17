import './styles.css';

const Message = (props) => {
    return (
        <div className="message-container">
            <div className="message">
                <div className="nickname"></div>
                <div className="message-text"></div>
                <div className="time"></div>
            </div>
        </div>
    );
};

export default Message;