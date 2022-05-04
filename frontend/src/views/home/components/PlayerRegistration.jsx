import PropTypes from 'prop-types';
import React, { useState } from 'react';
import BoardGame from './BoardGame';
import { verifyInformation } from './functions/setLocalStorage';
import Input from './Input';
import { SwalAlert } from './SwalAlert';

const PlayerRegistration = ({ isOnePlayer }) => {
    const [onBoard, setOnBoard] = useState(true);
    const [playerOne, setPlayerOne] = useState({});
    const [playerTwo, setPlayerTwo] = useState({});

    const imagesAvatar = [
        'https://i.postimg.cc/k5W3Fx9m/gato.png',
        'https://i.postimg.cc/y8Bb4wCw/gato-unicornio.png',
        'https://i.postimg.cc/rp5s00Pd/sonreir.png',
    ];

    const inputHandlerPlayerOne = e => setPlayerOne({ ...playerOne, [e.target.name]: e.target.value });
    const inputHandlerPlayerTwo = e => setPlayerTwo({ ...playerTwo, [e.target.name]: e.target.value });

    const setInputVerification = () => {
        if (!playerOne.namePlayerOne) {
            SwalAlert('Complete the fields, plisss :)', 'https://i.postimg.cc/43hPK2r6/1818405.png', 'bottom-right');
            return false;
        }
        verifyInformation(playerOne, playerTwo);
        setOnBoard(false);
    };
    return (
        <>
            {onBoard ? (
                <div className="card-player">
                    <>
                        <Input
                            type="text"
                            placeholder="Enter your nickname :)"
                            name="namePlayerOne"
                            onChange={inputHandlerPlayerOne}
                            className="input-nickname"
                        />

                        <div className="container-avatars">
                            <p>Choose your avatar :</p>
                            <div className="avatar-views">
                                {imagesAvatar.map((image, index) => (
                                    <Input
                                        key={`image-avatar: ${index}`}
                                        image={image}
                                        type="button"
                                        value={image}
                                        name="avatarPlayer"
                                        className="image-avatar-player"
                                        style={{ background: `url('${image}') center/cover no-repeat` }}
                                        onClick={inputHandlerPlayerOne}
                                    />
                                ))}
                            </div>
                        </div>
                    </>
                    {!isOnePlayer && (
                        <>
                            <Input
                                type="text"
                                placeholder="Enter your friend's nickname :)"
                                name="namePlayerTwo"
                                className="input-nickname"
                                onChange={inputHandlerPlayerTwo}
                            />

                            <div className="container-avatars">
                                <p>Choose your avatar :</p>
                                <div className="avatar-views">
                                    {imagesAvatar.map((image, index) => (
                                        <Input
                                            key={`image-avatar: ${index}`}
                                            image={image}
                                            type="button"
                                            value={image}
                                            name="avatarPlayer"
                                            style={{ background: `url('${image}') center/cover no-repeat` }}
                                            className="image-avatar-player"
                                            onClick={inputHandlerPlayerTwo}
                                        />
                                    ))}
                                </div>
                            </div>
                        </>
                    )}

                    <button onClick={() => setInputVerification()} className="button-play">
                        Play
                    </button>
                </div>
            ) : (
                <BoardGame isOnePlayer={isOnePlayer} playerOne={playerOne} playerTwo={playerTwo} setOnBoard={setOnBoard} />
            )}
        </>
    );
};

PlayerRegistration.propTypes = {
    isOnePlayer: PropTypes.any,
};

export default PlayerRegistration;
