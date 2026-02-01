function SaveLoadButtons({ onSave, onLoad }) {
    return (
        <>
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