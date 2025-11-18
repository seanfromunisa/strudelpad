function RadioDJ({  }) {
    return (
        <>
            <div style={{ marginLeft: "20px" }}>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="radioDefault" id="radioDefault1" defaultChecked />
                    <label className="form-check-label" htmlFor="radioDefault1">
                        RolandTR808
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="radioDefault" id="radioDefault2" />
                    <label className="form-check-label" htmlFor="radioDefault2">
                        AkaiLinn
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="radioDefault" id="radioDefault3" />
                    <label className="form-check-label" htmlFor="radioDefault3">
                        RhythmAce
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="radioDefault" id="radioDefault4" />
                    <label className="form-check-label" htmlFor="radioDefault4">
                        ViscoSpaceDrum
                    </label>
                </div>
            </div>
        </>
  );
}

export default RadioDJ;