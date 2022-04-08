import './styles.css';

const Button = ({icon, handleClick}) => {
    icon = "images/icons/" + icon;

    return (
        <div className="button" onClick={handleClick}>
            <img id="side-panel-icon" className="icon" src={icon} alt="Кнопка"/>
        </div>
    );
};

export default Button;