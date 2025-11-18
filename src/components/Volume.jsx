function Volume({ defaultVolume, onVolumeChange }) {
  return (
      <>
          <label htmlFor="volume_range" className="form-label">Volume</label>
          <input type="range" className="form-range" defaultValue={defaultVolume} onMouseUp={onVolumeChange} min="0" max="1" step="0.01" id="volume_range" />
      </>
  );
}

export default Volume;