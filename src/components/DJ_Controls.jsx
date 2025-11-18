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
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="radioDefault" id="radioDefault1" defaultChecked />
                    <label className="form-check-label" htmlFor="radioDefault1">
                        Drum Type 1
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="radioDefault" id="radioDefault2" />
                    <label className="form-check-label" htmlFor="radioDefault2">
                        Drum Type 2
                    </label>
                </div>
            </div>
        </>
  );
}

export default DJControls;