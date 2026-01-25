import './App.css';
import { useEffect, useRef, useState } from "react";
import { StrudelMirror } from '@strudel/codemirror';
import { evalScope } from '@strudel/core';
import { drawPianoroll } from '@strudel/draw';
import { initAudioOnFirstClick } from '@strudel/webaudio';
import { transpiler } from '@strudel/transpiler';
import { getAudioContext, webaudioOutput, registerSynthSounds } from '@strudel/webaudio';
import { registerSoundfonts } from '@strudel/soundfonts';
import { stranger_tune } from './tunes';
import console_monkey_patch, { getD3Data } from './console-monkey-patch';
import DJControls from './components/DJ_Controls';
import PlayButtons from './components/PlayButtons';
import ProcButtons from './components/ProcButtons';
import PreprocessTextArea from './components/PreprocessTextArea';
import UIControl from './components/UIControl';
import Volume from './components/Volume';
import CPM from './components/CPM';
import RadioDJ from './components/RadioDJ';
import SaveLoadButtons from './components/SaveLoadButtons';
import instrumentCheckLogic from './utils/instrumentCheckLogic.js';
import ThemeSelect from './components/ThemeSelect';

//Establishing globalEditor variable
let globalEditor = null;

export default function StrudelDemo() {

    //Establishing that the Strudel interface has not been initialized
    const hasRun = useRef(false);

    //Processing of variables each time the program is played
    const handlePlay = () => {

        //Using stand in variable to represent songText. If songText is not established, use the default song text
        let outputText = songText
        if (outputText == null) {
            outputText = stranger_tune;
        }

        //Replace variables in the song text to reflect the users instrument settings
        outputText = instrumentCheckLogic(outputText, volume, cpm, drumType, b1Checked, a1Checked, d1Checked, d2Checked);

        //Having refactored all of the song text, process it into strudel and execute
        globalEditor.setCode(outputText);
        globalEditor.evaluate()
    }

    //Stop the song
    const handleStop = () => {
        globalEditor.stop()
    }

    //Establishing the variable getters and setters, as well as their default values
    const [songText, setSongText] = useState(stranger_tune)

    const [volume, setVolume] = useState(1);

    const [cpm, setCpm] = useState(40);

    const [state, setState] = useState("stop");

    const [b1Checked, setB1Checked] = useState(true);

    const [a1Checked, setA1Checked] = useState(true);

    const [d1Checked, setD1Checked] = useState(true);

    const [d2Checked, setD2Checked] = useState(true);

    const [drumType, setDrumType] = useState("RolandTR808");

    const [pageTheme, setPageTheme] = useState("light");

    //If a colour theme is selected using the ThemeSelect dropdown component, change the page colour theme
    useEffect(() => {

        if (pageTheme === "light") {

        }

        if (pageTheme === "dark") {

        }

        if (pageTheme === "pink") {

        }

    }, [pageTheme])

    //JSON object saving function
    const saveState = () => {

        //Create object holding all current variable values
        const currentState = {
            saveSongText: songText,
            saveVolume: volume,
            saveCpm: cpm,
            saveB1Checked: b1Checked,
            saveA1Checked: a1Checked,
            saveD1Checked: d1Checked,
            saveD2Checked: d2Checked,
            saveDrumType: drumType,
        }

        //Store these into local storage
        localStorage.setItem(
            "savedState",
            JSON.stringify(this.currentState)
        );
    }

    //JSON object loading function
    const loadState = () => {

        //Transfer saved object data into placeholder variable
        let data = localStorage.getItem("savedState");

        //If there is an object to speak of, reconstruct the data and set the appropriate variables
        if (data !== undefined) {
            const loadedData = JSON.parse(data);
            setSongText(loadedData.saveSongText);
            setVolume(loadedData.saveVolume);
            setCpm(loadedData.saveCpm);
            setB1Checked(loadedData.saveB1Checked);
            setA1Checked(loadedData.saveA1Checked);
            setD1Checked(loadedData.saveD1Checked);
            setD2Checked(loadedData.saveD2Checked);
            setDrumType(loadedData.saveDrumType);
        }
    }

    //Each time any of the dependant variables are set/changed and the song is currently playing, process the variables again
    useEffect(() => {

        if (state === "play") {
            handlePlay();
        }

    }, [volume, b1Checked, a1Checked, d1Checked, d2Checked, drumType])

//Initializing of the Strudel interface
useEffect(() => {

    if (!hasRun.current) {
        console_monkey_patch();
        hasRun.current = true;
        //Code copied from example: https://codeberg.org/uzu/strudel/src/branch/main/examples/codemirror-repl
            //init canvas
            const canvas = document.getElementById('roll');
            canvas.width = canvas.width * 2;
            canvas.height = canvas.height * 2;
            const drawContext = canvas.getContext('2d');
            const drawTime = [-2, 2]; // time window of drawn haps
            globalEditor = new StrudelMirror({
                defaultOutput: webaudioOutput,
                getTime: () => getAudioContext().currentTime,
                transpiler,
                root: document.getElementById('editor'),
                drawTime,
                onDraw: (haps, time) => drawPianoroll({ haps, time, ctx: drawContext, drawTime, fold: 0 }),
                prebake: async () => {
                    initAudioOnFirstClick(); // needed to make the browser happy (don't await this here..)
                    const loadModules = evalScope(
                        import('@strudel/core'),
                        import('@strudel/draw'),
                        import('@strudel/mini'),
                        import('@strudel/tonal'),
                        import('@strudel/webaudio'),
                    );
                    await Promise.all([loadModules, registerSynthSounds(), registerSoundfonts()]);
                },
            });
            
        document.getElementById('proc').value = stranger_tune
    }
    globalEditor.setCode(songText);
}, [songText]);

//Body of the page
return (
    <div>
        <h2 style={{ color: "hotpink", textAlign: "center", fontSize: "xx-large" }}>StrudelPad</h2>
        <main>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-7">
                        <div className="accordion" id="accordionExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        Preprocess Text
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <PreprocessTextArea defaultValue={songText} onChange={(e) => setSongText(e.target.value)} />
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Strudel Player
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <div id="editor" />
                                        <div id="output" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div>
                            <nav>
                                <div>
                                    <ThemeSelect
                                        onLight={() => setPageTheme("light")}
                                        onDark={() => setPageTheme("dark")}
                                        onPink={() => setPageTheme("pink")}
                                    />
                                </div>
                                <br />
                                <div>
                                    <SaveLoadButtons onSave={() => saveState()} onLoad={() => loadState()} />
                                </div>
                                <br />
                                <div>
                                    <PlayButtons onPlay={() => { setState("play"); handlePlay() }} onStop={() => { setState("stop"); handleStop() }} />
                                </div>
                                <br />
                            </nav>

                            <div className="row">
                                <CPM defaultValue={cpm} onChange={(e) => setCpm(e.target.value)} />
                                <Volume defaultVolume={volume} onVolumeChange={(e) => setVolume(e.target.value)} />
                            </div>
                            <br/>
                            <div className="row">
                                <DJControls
                                    b1Checked={b1Checked} setB1Checked={setB1Checked}
                                    a1Checked={a1Checked} setA1Checked={setA1Checked}
                                    d1Checked={d1Checked} setD1Checked={setD1Checked}
                                    d2Checked={d2Checked} setD2Checked={setD2Checked}
                                />
                            </div>
                            <div className="row">
                                <RadioDJ
                                    onType1={() => setDrumType("RolandTR808")} onType2={() => setDrumType("AkaiLinn")}
                                    onType3={() => setDrumType("RhythmAce")} onType4={() => setDrumType("ViscoSpaceDrum")}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <canvas id="roll"></canvas>
        </main >
    </div >
);


}