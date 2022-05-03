import React, { useState } from 'react';
import BoardGame from './BoardGame';
import { useLocalStorage } from './hooks/useLocalStorage';
import Input from './Input';

const PlayerRegistration = ({ isOnePlayer }) => {
    const [onBoard, setOnBoard] = useState(true);
    const {  verifyInformation } = useLocalStorage('listOfInformation');
    const [playerOne, setPlayerOne] = useState({})
    const [playerTwo, setPlayerTwo] = useState({});
    const imagesAvatar = [
        'https://i.postimg.cc/k5W3Fx9m/gato.png',
        'https://i.postimg.cc/y8Bb4wCw/gato-unicornio.png',
        'https://i.postimg.cc/rp5s00Pd/sonreir.png',
    ];
  
    const inputHandlerPlayerOne = e => setPlayerOne({...playerOne, [e.target.name]: e.target.value});
    const inputHandlerPlayerTwo = e => setPlayerTwo({...playerTwo, [e.target.name]: e.target.value});
    
    return (
        <>
            {onBoard ? (
                <div className="card-player">
                    <>
                        <Input type="text"
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

                    <button
                        onClick={() => {
                            setOnBoard(false);
                            
                            verifyInformation(playerOne, playerTwo);
                        }}
                        className="button-play"
                    >
                        Play
                    </button>
                </div>
            ) : (
                <BoardGame isOnePlayer={isOnePlayer}  playerOne={playerOne} playerTwo={playerTwo}  />

            )}
        </>
    );
};

export default PlayerRegistration;
