function InstrumentCheckLogic({ outputText, volume, cpm, drumType, b1Checked, a1Checked, d1Checked, d2Checked }) {
    //Replace volume, cpm, and drum type variables across the song text with their set values
    outputText = outputText.replaceAll("{VOLUME}", volume);
    outputText = outputText.replaceAll("{CPM}", cpm);
    outputText = outputText.replaceAll("{DRUMTYPE}", drumType);

    //Check which radio buttons have been selected. If any are selected, keep their values empty. For the rest, replace in song text with "_" to mute their respective instrument
    if (!b1Checked) {
        outputText = outputText.replaceAll("{B1}", "_");
    }
    else {
        outputText = outputText.replaceAll("{B1}", "");
    }

    if (!a1Checked) {
        outputText = outputText.replaceAll("{A1}", "_");
    }
    else {
        outputText = outputText.replaceAll("{A1}", "");
    }

    if (!d1Checked) {
        outputText = outputText.replaceAll("{D1}", "_");
    }
    else {
        outputText = outputText.replaceAll("{D1}", "");
    }

    if (!d2Checked) {
        outputText = outputText.replaceAll("{D2}", "_");
    }
    else {
        outputText = outputText.replaceAll("{D2}", "");
    }

    return outputText;
}

export default InstrumentCheckLogic;