import PreprocessTextArea from './PreprocessTextArea';

function TextEditor({ songText, onChange }) {
    // Text field for editing the song text to be processed
    return (
        <>
            <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom">Edit</button>

            <div class="offcanvas offcanvas-bottom" tabindex="-1" id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasBottomLabel">Preprocess Text</h5>
                    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body small">
                    <PreprocessTextArea defaultValue={songText} onChange={onChange} />
                </div>
            </div>
        </>
    );
}

export default TextEditor;