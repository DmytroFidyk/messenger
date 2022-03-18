import './styles.css';

import Header from '../Header';
import Message from '../Message';
import Form from '../Form';

const messageData = {
    //id: 1,
    nickname: 'Дмитро',
    messageText: 'Вітання з мирної, вільної України!',
    time: '12:15'
};

const myMessageData = {
    //id: 1,
    nickname: 'Дмитрик',
    messageText: "Обов'язково будуть Мир і Перемога!",
    time: '12:15',
    isMyMessage: true
};

const App = () => {
    return (
        <div className="main-container">
            <Header/>
            <div className="chat-container">
                <Message messageData={messageData} />
                <Message messageData={myMessageData} />
            </div>          
            <Form/>
        </div>
    );
};

export default App;