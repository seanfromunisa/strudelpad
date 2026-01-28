import PreprocessTextArea from './PreprocessTextArea';

function TextEditor({ songText, onChange }) {

    console.log("working?");

    // Text field for editing the song text to be processed
    return (
        <>
            <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom">Edit</button>

            <div className="offcanvas offcanvas-bottom" tabIndex="-1" id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasBottomLabel">Preprocess Text</h5>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body small">
                    <PreprocessTextArea defaultValue={songText} onChange={onChange} />
                </div>
            </div>
        </>
    );
}

export default TextEditor;