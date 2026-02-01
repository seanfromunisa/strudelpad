import { add } from "@strudel/core";

export default function loadReflect(loadedData) {
    //For each visual control component, change its value to reflect the loaded data
    document.getElementById("cpm_text_input").value = loadedData.saveCpm;

    if (loadedData.saveDrumType === "RolandTR808") {
        document.getElementById("radioDefault1").checked = true;
    }
    if (loadedData.saveDrumType === "AkaiLinn") {
        document.getElementById("radioDefault2").checked = true;
    }
    if (loadedData.saveDrumType === "RhythmAce") {
        document.getElementById("radioDefault3").checked = true;
    }
    if (loadedData.saveDrumType === "ViscoSpaceDrum") {
        document.getElementById("radioDefault4").checked = true;
    }

    if (loadedData.saveB1Checked === true) {
        document.getElementById("b1").checked = true;
    }
    else {
        document.getElementById("b1").checked = false;
    }
    if (loadedData.saveA1Checked === true) {
        document.getElementById("a1").checked = true;
    }
    else {
        document.getElementById("a1").checked = false;
    }
    if (loadedData.saveD1Checked === true) {
        document.getElementById("d1").checked = true;
    }
    else {
        document.getElementById("d1").checked = false;
    }
    if (loadedData.saveD2Checked === true) {
        document.getElementById("d2").checked = true;
    }
    else {
        document.getElementById("d2").checked = false;
    }
}