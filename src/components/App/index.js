import './styles.css';

import Header from '../Header';
import Form from '../Form';

const App = () => {
    return (
        <div className="main-container">
            <Header/>
            <div className="chat-container">
                <h1>Вітання з мирної, вільної України!</h1>
            </div>          
            <Form/>
        </div>
    );
};

export default App;