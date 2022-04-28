import PropTypes from "prop-types"
import React from 'react';
import { useLocalStorage } from "./hooks/useLocalStorage";


const PlayerRegistration = ({ value = "", setVisible }) => {
    const [name, setName] = useLocalStorage('name','');
  
    return (
        <div className="card-player">
                <input className="input-nickname" type="text" placeholder="Enter your Nickname :)" onChange={(e)=> setName(e.target.value)} />
                {value !== "singleplayer" && <input className="input-nickname" type="text" placeholder="Enter your friend's nickname :)" />}
                <button onClick={() => setVisible(false) } className="button-play">
                Play
                </button>
               <p>Hola!{name}</p>
        </div>
    );
};

PlayerRegistration.propTypes = {
  setVisible: PropTypes.func,
  value: PropTypes.string
}

export default PlayerRegistration;
