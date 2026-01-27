function ThemeSelect({ onLight, onDark, onPink }) {
    // Select the colour theme of the webpage
    return (
        <>
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                    Theme
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                    <li><button className="dropdown-item" type="button" onClick={onLight}>Light</button></li>
                    <li><button className="dropdown-item" type="button" onClick={onDark}>Dark</button></li>
                    <li><button className="dropdown-item" type="button" onClick={onPink}>Pink</button></li>
                </ul>
            </div>
        </>
    );
}

export default ThemeSelect;