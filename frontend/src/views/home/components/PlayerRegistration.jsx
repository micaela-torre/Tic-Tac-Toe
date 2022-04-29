import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Avatar from './Avatar';
import BoardGame from './BoardGame';
import { useLocalStorage } from './hooks/useLocalStorage';

const PlayerRegistration = ({ value = '' }) => {
    const [onBoard, setOnBoard] = useState(true);
    const [player, setPlayer] = useLocalStorage('', '');
    const [infoPlayer, setInfoPlayer] = useState({})
    const imagesAvatar = [
        'https://i.postimg.cc/k5W3Fx9m/gato.png',
        'https://i.postimg.cc/y8Bb4wCw/gato-unicornio.png',
        'https://i.postimg.cc/rp5s00Pd/sonreir.png',
    ];
    const setItem = (key, value) => window.localStorage.setItem(key, value)

    const setItemLocalStorage = ({playerOne,playerTwo}) => {
       if(!!playerOne || !!playerTwo) {
        setItem(playerOne, '0')
        setItem(playerTwo, '0')
        setOnBoard(false)
       } else return alert('llena todos los campos')
    }
    console.log(infoPlayer)
    return (
        <>
            {onBoard ? (
                <div className="card-player">
                    <input
                        className="input-nickname"
                        type="text"
                        name="playerOne"
                        placeholder="Enter your Nickname :)"
                        onChange={e => setInfoPlayer({...infoPlayer,[e.target.name]: e.target.value})}
                        required
                    />
                    {value !== 'singlePlayer' && (
                        <input className="input-nickname"
                            type="text" 
                            placeholder="Enter your friend's nickname :)" 
                            name='playerTwo'
                            onChange={e => setInfoPlayer({...infoPlayer,[e.target.name]: e.target.value})}
                            required />
                    )}
                    <div className="container-avatars">
                        <p>Choose your avatar :</p>
                        <div className="avatar-views">
                            {imagesAvatar.map((image, index) => (
                                <Avatar key={`image-avatar: ${index}`} image={image} />
                            ))}
                        </div>
                    </div>
                    <button onClick={() => setItemLocalStorage(infoPlayer)} className="button-play">
                        Play
                    </button>
                </div>
            ) : (
                <BoardGame player={player} value={value} />
            )}
        </>
    );
};

PlayerRegistration.propTypes = {
    value: PropTypes.string,
};

export default PlayerRegistration;
