function DJControls({ defaultVolume, onVolumeChange, defaultCpm, onChange }) {
    return (
        <>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="b1"/>
                <label className="form-check-label" htmlFor="b1">
                        Bassline
                    </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="a1" />
                <label className="form-check-label" htmlFor="a1">
                        Main Arp.
                    </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="d1"/>
                <label className="form-check-label" htmlFor="d1">
                        Drums1
                    </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="d2"/>
                <label className="form-check-label" htmlFor="d2">
                        Drums2
                    </label>
            </div>
            <div style={{ marginLeft: "20px"}}>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="radioDefault" id="radioDefault1" checked />
                    <label class="form-check-label" for="radioDefault1">
                        Drum Type 1
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="radioDefault" id="radioDefault2" />
                    <label class="form-check-label" for="radioDefault2">
                        Drum Type 2
                    </label>
                </div>
            </div>
        </>
  );
}

export default DJControls;