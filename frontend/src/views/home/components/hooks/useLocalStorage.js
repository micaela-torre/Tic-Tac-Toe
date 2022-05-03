import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

export function useLocalStorage(key) {
    let listOfInformation = [];

    toast.error('Lorem ipsum dolor');
    const setLocalStorage = info => localStorage.setItem(key, JSON.stringify(info));

    const verifyInformation = (playerOne, playerTwo) => {
        // console.log(playerOne, playerTwo)
        // if (storedValue.length > 0) {
            let listLocalStorage = localStorage.getItem(key);
            listLocalStorage = !!listLocalStorage && JSON.parse(listLocalStorage);

            if (listLocalStorage.length > 0) listOfInformation = [...listLocalStorage];
            listOfInformation.push(playerOne, playerTwo)

            setLocalStorage(listOfInformation);
        // } else {
        //     <ToastContainer />;
        //     return false;
        // }
    };

    return {  verifyInformation };
}
