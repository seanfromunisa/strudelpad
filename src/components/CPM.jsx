function CPM({ defaultValue, onChange }) {
    // Text field controlling the cycles per minute
  return (
      <>
          <div className="input-group mb-3">
              <span className="input-group-text" id="cpm_label">setCPM</span>
              <input type="text" className="form-control" defaultValue={defaultValue} onChange={onChange} id="cpm_text_input" placeholder="120" aria-label="cpm" aria-describedby="cpm_label" />
          </div>
      </>
  );
}

export default CPM;