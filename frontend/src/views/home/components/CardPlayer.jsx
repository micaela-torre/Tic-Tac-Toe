import React, { useState } from 'react';
import PlayerRegistration from './PlayerRegistration';

const CardPlayer = () => {
    const [visible, setVisible] = useState(false);
    const [isOnePlayer, setIsOnePlayer] = useState(false);

    const setData = () => {
        setIsOnePlayer(true);
        setVisible(true);
    };

    return (
        <>
            {!visible ? (
                <>
                    <div className="card-player" onClick={setData}>
                        <div className="image-card-player"></div>
                        <p>Single Player</p>
                    </div>
                    <div className="card-player" onClick={() => setVisible(true)}>
                        <div className="image-card-players"></div>
                        <p>MultiPlayer</p>
                    </div>
                </>
            ) : (
                <PlayerRegistration isOnePlayer={isOnePlayer} />
            )}
        </>
    );
};
export default CardPlayer;
