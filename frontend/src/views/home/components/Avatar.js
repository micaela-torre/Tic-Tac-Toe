import React from 'react';

const Avatar = ({image}) => {
    return <div style={{background: `url('${image}') center/cover no-repeat`}} className='image-avatar-player'></div>;
};

export default Avatar;
