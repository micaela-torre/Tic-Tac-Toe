const setInformationLocalStorage = info => localStorage.setItem('listOfInformation', JSON.stringify(info));

export function verifyInformation(playerOne, playerTwo) {
    let listOfInformation = [];
    let listLocalStorage = localStorage.getItem('listOfInformation');
    listLocalStorage = !!listLocalStorage && JSON.parse(listLocalStorage);
    if (listLocalStorage.length > 0) listOfInformation = [...listLocalStorage];

    if (Object.keys(playerTwo).length === 0) {
        listOfInformation.push(playerOne);
    } else {
        listOfInformation.push(playerOne, playerTwo);
    }

    setInformationLocalStorage(listOfInformation);
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
    if (winner !== 'Computer') winningScoresList.push(playerWinner);

    localStorage.setItem('listOfWinners', JSON.stringify(winningScoresList));
}
