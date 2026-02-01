import loadReflect from './loadReflect.js';

export default function loadCurrentState(stateName) {

    //
    let loadedData = undefined;

    //Transfer saved object data into placeholder variable
    let data = localStorage.getItem(stateName);

    //If there is an object to speak of, reconstruct the data
    if (data !== undefined) {
        loadedData = JSON.parse(data);

        //According to the loaded data, reflect values visually in the components
        loadReflect(loadedData);
    }

    return loadedData;
}