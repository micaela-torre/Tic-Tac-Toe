import React from 'react';
import BoardGame from './components/BoardGame';
import CardPlayer from './components/CardPlayer';
import Ranking from './components/Ranking';

const Home = () => {
    return (
        <div className="container-home">
            <div class="text-3d">TIC TAC TOE</div>
            <div className="image-game-video"></div>
            <div className="container-cards-home">
                <CardPlayer />
                {/* <BoardGame/> */}
                {/* <Ranking/> */}
    
            </div>
            <div className="image-joystick"></div>
        </div>
    );
};

export default Home;
