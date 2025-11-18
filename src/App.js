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

let globalEditor = null;

const handleD3Data = (event) => {
    console.log(event.detail);
};

export default function StrudelDemo() {

    const hasRun = useRef(false);

    const handlePlay = () => {
        let outputText = songText
        if (outputText == null) {
            outputText = stranger_tune;
        }
        outputText = outputText.replaceAll("{VOLUME}", volume);
        outputText = outputText.replaceAll("{CPM}", cpm);
        outputText = outputText.replaceAll("{DRUMTYPE}", drumType);

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

        globalEditor.setCode(outputText);
        globalEditor.evaluate()
    }

    const handleStop = () => {
        globalEditor.stop()
    }

    const [songText, setSongText] = useState(stranger_tune)

    const [volume, setVolume] = useState(1);

    const [cpm, setCpm] = useState(40);

    const [state, setState] = useState("stop");

    const [b1Checked, setB1Checked] = useState(true);

    const [a1Checked, setA1Checked] = useState(true);

    const [d1Checked, setD1Checked] = useState(true);

    const [d2Checked, setD2Checked] = useState(true);

    const [drumType, setDrumType] = useState("RolandTR808");

    useEffect(() => {

        if (state === "play") {
            handlePlay();
        }

    }, [volume, b1Checked, a1Checked, d1Checked, d2Checked, drumType])

useEffect(() => {

    if (!hasRun.current) {
        document.addEventListener("d3Data", handleD3Data);
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


return (
    <div>
        <h2>Strudel Demo</h2>
        <main>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-3">
                        <UIControl />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-8" style={{ maxHeight: '50vh', overflowY: 'auto' }}>
                        <PreprocessTextArea defaultValue={songText} onChange={(e) => setSongText(e.target.value)} />
                    </div>
                    <div className="col-md-4">
                        <nav>
                            <PlayButtons onPlay={() => { setState("play"); handlePlay() }} onStop={() => { setState("stop"); handleStop() }} />
                        </nav>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-8" style={{ maxHeight: '50vh', overflowY: 'auto' }}>
                        <div id="editor" />
                        <div id="output" />
                    </div>
                    <div className="col-md-4">
                        <CPM defaultValue={cpm} onChange={(e) => setCpm(e.target.value)} />
                        <Volume defaultVolume={volume} onVolumeChange={(e) => setVolume(e.target.value)} />
                        <DJControls
                            b1Checked={b1Checked} setB1Checked={setB1Checked}
                            a1Checked={a1Checked} setA1Checked={setA1Checked}
                            d1Checked={d1Checked} setD1Checked={setD1Checked}
                            d2Checked={d2Checked} setD2Checked={setD2Checked}
                        />
                        <RadioDJ
                            onType1={() => setDrumType("RolandTR808")} onType2={() => setDrumType("AkaiLinn")}
                            onType3={() => setDrumType("RhythmAce")} onType4={() => setDrumType("ViscoSpaceDrum")}
                        />
                    </div>
                </div>
            </div>
            <canvas id="roll"></canvas>
        </main >
    </div >
);


}