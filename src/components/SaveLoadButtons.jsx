function SaveLoadButtons({ onSave, onLoad, onChange, defaultValue }) {
    return (
        <>
            <div style={{ paddingBottom: 10 }}>
                <input type="text" className="form-control" defaultValue={defaultValue} onChange={onChange} id="state_name_text_input" placeholder="Enter State Name" aria-label="state_name" aria-describedby="state_name_label" />
            </div>

            <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                <button id="play" className="btn btn-outline-primary" onClick={onSave}>Save</button>
            </div>

            <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                <button id="stop" className="btn btn-outline-primary" onClick={onLoad}>Load</button>
            </div>
        </>
    );
}

export default SaveLoadButtons;