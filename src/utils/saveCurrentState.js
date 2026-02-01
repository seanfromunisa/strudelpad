export default function saveCurrentState(songText, cpm, b1Checked, a1Checked, d1Checked, d2Checked, drumType, stateName) {
    //Create object holding all current variable values
    const currentState = {
        saveSongText: songText,
        saveCpm: cpm,
        saveB1Checked: b1Checked,
        saveA1Checked: a1Checked,
        saveD1Checked: d1Checked,
        saveD2Checked: d2Checked,
        saveDrumType: drumType,
    };

    //Stringify this object using JSON
    const stateJSON = JSON.stringify(currentState);

    //Store this JSON data into local storage
    localStorage.setItem(stateName, stateJSON);
}