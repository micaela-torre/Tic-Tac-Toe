import React, { useState } from 'react';
import PlayerRegistration from './PlayerRegistration';


const CardPlayer = () => {

    const [visible, setVisible] = useState(false);
    const [value, setValue] = useState('');

    const setData = (type) => {
        setVisible(!visible);
        setValue(type)
        
    };

    return (
        <>
            {!visible ? (
                <>
                    <div className="card-player" onClick={() => setData("singleplayer")} >
                        <div className="image-card-player"></div>
                        <p>Single Player</p>
                    </div>
                    <div className="card-player" onClick={() => setData()}>
                        <div className="image-card-players"></div>
                        <p>MultiPlayer</p>
                    </div>
                </>
            ) : (
                <PlayerRegistration value={value} setVisible={setVisible}/>
            )}
        </>
    );
};
export default CardPlayer;

