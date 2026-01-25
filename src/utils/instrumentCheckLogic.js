export default function instrumentCheckLogic({ outputText, volume, cpm, drumType, b1Checked, a1Checked, d1Checked, d2Checked }) {
    //
    if (!outputText) return

    //Replace volume, cpm, and drum type variables across the song text with their set values
    outputText = outputText.replace(/{VOLUME}/g, volume);
    outputText = outputText.replace(/{CPM}/g, cpm);
    outputText = outputText.replace(/{DRUMTYPE}/g, drumType);

    //Check which radio buttons have been selected. If any are selected, keep their values empty. For the rest, replace in song text with "_" to mute their respective instrument
    if (!b1Checked) {
        outputText = outputText.replace(/{B1}/g, "_");
    }
    else {
        outputText = outputText.replace(/{B1}/g, "");
    }

    if (!a1Checked) {
        outputText = outputText.replace(/{A1}/g, "_");
    }
    else {
        outputText = outputText.replace(/{A1}/g, "");
    }

    if (!d1Checked) {
        outputText = outputText.replace(/{D1}/g, "_");
    }
    else {
        outputText = outputText.replace(/{D1}/g, "");
    }

    if (!d2Checked) {
        outputText = outputText.replace(/{D2}/g, "_");
    }
    else {
        outputText = outputText.replace(/{D2}/g, "");
    }

    return outputText;
}