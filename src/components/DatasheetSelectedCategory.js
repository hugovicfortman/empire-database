function DatasheetSelectedCategory() {
    return (
        <div className="selected-category">
            <div className="floating-panel-top">
                <div className="btn-close">X</div>
            </div>
            <h5>People</h5>
            <ul className="category-sublist">
                <li className="category">People</li>
                <li className="category">Planets</li>
            </ul>
        </div>
    );
}

export default DatasheetSelectedCategory;