import './styles.css';

import Button from '../Button';
import React from 'react';

const Header = ({socket, nickName}) => {
    React.useEffect(() => {
        socket.on('write', message => {
            console.log(message);
            if (message.userId !== socket.id)
                document.getElementById('status').innerText = message.text;
        });

        socket.on('stop', text => {
            console.log(text);
            document.getElementById('status').innerText = '';
        });
    }, []);

    function openPanel() {
        const panel = document.getElementById('participants-panel');

        if (panel.style.width === '400px') {
            panel.style.width = '0px';
            document.getElementById('side-panel-icon').src = 'images/icons/group.png';
        } 
        else {
            panel.style.width = '400px';
            document.getElementById('side-panel-icon').src = 'images/icons/icon-close.png';
        }
    }

    return (
        <header className="header">
            <div className="current-user-info">
                <div className="current-profile-photo">
                    <img id="current-user-photo" src="images/icons/user.png" alt="Фото профілю"/>
                </div>
                <div className="current-user-nickname">
                    {nickName}
                </div>  
            </div>
            <div id="status"></div>
            <div className="buttons">
                <Button icon="group.png" handleClick={openPanel}/>
            </div>
        </header>
    );
};

export default Header;