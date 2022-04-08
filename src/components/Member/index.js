import './styles.css';

const Member = ({nickName, photo}) => {
    return (
        <div className="member">
            <div className="profile-photo">
                <img id="user-photo" src={photo} alt="Фото профілю"/>
            </div>
            <div className="nickName">{nickName}</div>
        </div>
    );
}; 

export default Member;