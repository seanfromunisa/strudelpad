function SaveLoadButtons({ saveState, loadState }) {
    return (
        <>
            <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                <button id="play" className="btn btn-outline-primary" onClick={saveState}>Save</button>
                <button id="stop" className="btn btn-outline-primary" onClick={loadState}>Load</button>
            </div>
        </>
    );
}

export default SaveLoadButtons;