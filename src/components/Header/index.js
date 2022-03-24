import './styles.css';

const Header = () => {
    return (
        <header className="header">
            <div id="close-button" className="close-button">
                <img id="side-panel-icon" className="icon" src="images/icons/group.png" alt="Кнопка закрити панель"/>
            </div>
        </header>
    );
};

export default Header;