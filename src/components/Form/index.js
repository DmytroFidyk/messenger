import './styles.css';

const Form = () => {
    return (
        <form className="form">
            <textarea className="message-input"></textarea>
            <button className="send-button" type="submit">Відправити</button>
        </form>
    );
}

export default Form;