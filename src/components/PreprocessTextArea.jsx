function PreprocessTextArea({ defaultValue, onChange }) {
    // Text field for editing the song text to be processed
  return (
      <>
          <label htmlFor="exampleFormControlTextarea1" className="form-label">Text to preprocess:</label>
          <textarea className="form-control" rows="15" defaultValue={defaultValue} onChange={onChange} id="proc" ></textarea>
      </>
  );
}

export default PreprocessTextArea;