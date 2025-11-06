function DJControls({ defaultVolume, onVolumeChange, defaultCpm, onChange }) {
    return (
        <>
            <div className="input-group mb-3">
                <span className="input-group-text" id="cpm_label">setCPM</span>
                <input type="text" className="form-control" defaultValue={defaultCpm} onChange={onChange} id="cpm_text_input" placeholder="120" aria-label="cpm" aria-describedby="cpm_label" />
            </div>

            <label htmlFor="volume_range" className="form-label">Volume</label>
            <input type="range" className="form-range" defaultValue={defaultVolume} onMouseUp={onVolumeChange} min="0" max="1" step="0.01" id="volume_range" />

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
        </>
  );
}

export default DJControls;