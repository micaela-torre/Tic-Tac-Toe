import PropTypes from "prop-types"
import React from 'react';
import Input from './Input';

const DataPlayer = ({ winner = {} }) => {
    return (
        <div className="data-winner">
            <Input
                style={{
                    background: `url('${winner?.avatarPlayer ? winner.avatarPlayer : 'https://i.postimg.cc/zfcnkw1J/3277257.png'}') center/cover no-repeat`,
                }}
                className="image-avatar-player"
                type="button"
                disabled
            />
            <p>{winner?.namePlayerOne || winner?.namePlayerTwo}</p>
            <p>{winner?.points}</p>
        </div>
    );
};

DataPlayer.propTypes = {
  winner: PropTypes.object
}

export default DataPlayer;
