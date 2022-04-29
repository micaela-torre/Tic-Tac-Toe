import React, { useState } from 'react';
import PlayerRegistration from './PlayerRegistration';


const CardPlayer = () => {

    const [visible, setVisible] = useState(false);
    const [value, setValue] = useState('');

    const setData = (type) => {
        setVisible(true);
        setValue(type)
        
    };

    return (
        <>
            {!visible ? (
                <>
                    <div className="card-player" onClick={() => setData("singlePlayer")} >
                        <div className="image-card-player"></div>
                        <p>Single Player</p>
                    </div>
                    <div className="card-player" onClick={() => setVisible(true)}>
                        <div className="image-card-players"></div>
                        <p>MultiPlayer</p>
                    </div>
                </>
            ) : (
                <PlayerRegistration value={value}/>
            )}
        </>
    );
};
export default CardPlayer;

