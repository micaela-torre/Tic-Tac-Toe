import React from 'react';
import CardPlayer from './components/CardPlayer';


const Home = () => {
    return (
        <div className="container-home">
            <div className="text-3d">TIC TAC TOE</div>
            <div className="image-game-video"></div>
            <div className="container-cards-home">
                <CardPlayer />
            </div>
            <div className="image-joystick"></div>
        </div>
    );
};

export default Home;
