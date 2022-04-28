import { useState } from 'react';

export function useLocalStorage(key, initialValue) {
    const [valueLocalStorage, setValueLocalStorage] = useState(() => {
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (err) {
            return initialValue;
        }
    });

    const setLocalStorage = value => {
        try {
            setValueLocalStorage(value);
            window.localStorage.setItem(key, JSON.stringify(value));
        } catch (err) {
            console.log(err);
        }
    };
    return [valueLocalStorage, setLocalStorage];
}
