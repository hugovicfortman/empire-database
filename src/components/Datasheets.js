import './Datasheets.css';

function Datasheets() {

    return (
        <div className="datasheet">
            <header className="datasheet-header">
                <h3>Data Sheet</h3>
            </header>
            <main className="datasheet-body">
                <aside className="datasheet-categories">
                    <h4>Categories</h4>
                    <ul className="categories-list">
                        <li className="category">People</li>
                        <li className="category">Planets</li>
                    </ul>
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
                </aside>
                <article className="datasheet-article">
                    <h4>Luke Skywalker</h4>
                    <p>Information about luke skywalker</p>
                </article>
            </main>
        </div>
    );
}

export default Datasheets;