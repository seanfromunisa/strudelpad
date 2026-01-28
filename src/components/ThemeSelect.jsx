import Dropdown from 'react-bootstrap/Dropdown';

function ThemeSelect({ onLight, onDark, onPink }) {
    return (
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Theme
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item onClick={onLight}>Light</Dropdown.Item>
                <Dropdown.Item onClick={onDark}>Dark</Dropdown.Item>
                <Dropdown.Item onClick={onPink}>Pink</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default ThemeSelect;