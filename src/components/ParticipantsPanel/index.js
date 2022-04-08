import './styles.css';

import Button from '../Button';
import Member from '../Member';
import React from 'react';

const ParticipantsPanel = ({socket}) => {
    const [ participants, setParticipants ] = React.useState([]);

    React.useEffect(() => {
        socket.on('participants', participants => {          
            setParticipants(participants);
        });
        console.log(participants);
    }, []);

    let participantsArray = participants.map(participant => {
        return <Member key={participant.userId} nickName={participant.nickName} photo="images/icons/user.png"/>
    });

    return (
        <div id="participants-panel" className="participants-panel">
            <div className="title-container">
                <h3>Учасники чату</h3>
            </div>
            <div className="participants-list">
                    {participantsArray}
            </div>
        </div>
    );
};

export default ParticipantsPanel;