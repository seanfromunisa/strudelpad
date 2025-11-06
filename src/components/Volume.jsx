function Volume({ defaultVolume, onChange }) {
  return (
      <>
          <label htmlFor="volume_range" className="form-label">Volume</label>
          <input type="range" className="form-range" defaultValue={defaultVolume} onMouseUp={onChange} min="0" max="1" step="0.01" id="volume_range" />
      </>
  );
}

export default Volume;