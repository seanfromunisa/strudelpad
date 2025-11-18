function PlayButtons({ onPlay, onStop }) {
    // Play and stop buttons for starting and ending the song
    return (
        <>
            <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                <button id="play" className="btn btn-primary btn-lg" onClick={onPlay}>Play</button>
            </div>
                
            <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                <button id="stop" className="btn btn-secondary btn-lg" onClick={onStop}>Stop</button>
            </div>
        </>
  );
}

export default PlayButtons;