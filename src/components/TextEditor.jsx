import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import PreprocessTextArea from './PreprocessTextArea';

//States and handlers for the offcanvas component
function TextEditor({ songText, onChange }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //The returned offcanvas component
    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Edit
            </Button>

            <Offcanvas show={show} onHide={handleClose} placement={'bottom'}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Preprocess Text</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <PreprocessTextArea defaultValue={songText} onChange={onChange} />
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default TextEditor;