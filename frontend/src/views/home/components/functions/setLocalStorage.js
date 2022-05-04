export function setLocalStorage(key) {
    let listOfInformation = [];

    const setInformationLocalStorage = info => localStorage.setItem(key, JSON.stringify(info));

    const verifyInformation = (playerOne, playerTwo) => {
        let listLocalStorage = localStorage.getItem(key);
        listLocalStorage = !!listLocalStorage && JSON.parse(listLocalStorage);
        if (listLocalStorage.length > 0) listOfInformation = [...listLocalStorage];
        listOfInformation.push(playerOne, playerTwo);

        setInformationLocalStorage(listOfInformation);
    };

    return { verifyInformation };
}

export function setPointsLocalStorage(winner, WinnersPoints) {
    let listOfWinners = JSON.parse(localStorage.getItem('listOfInformation'));

    listOfWinners = listOfWinners.find(item => Object.values(item).includes(winner));
    let playerWinner = {};
    playerWinner = { ...listOfWinners, points: WinnersPoints };

    let winningScoresList = [];
    let listLocalStorage = localStorage.getItem('listOfWinners');
    listLocalStorage = !!listLocalStorage && JSON.parse(listLocalStorage);
    if (listLocalStorage.length > 0) {
        let localStoreInformation = listLocalStorage.filter(item => !Object.values(item).includes(winner));

        winningScoresList = [...localStoreInformation];
    }
    winningScoresList.push(playerWinner);

    localStorage.setItem('listOfWinners', JSON.stringify(winningScoresList));
}
