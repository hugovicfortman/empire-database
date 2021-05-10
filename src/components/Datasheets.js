import './Datasheets.css';
import DatasheetCategories from './DatasheetCategories';
import DatasheetArticle from './DatasheetArticle';

function Datasheets() {

    return (
        <div className="datasheet">
            <header className="datasheet-header">
                <h3>Data Sheet</h3>
            </header>
            <main className="datasheet-body">
                <DatasheetCategories />
                <DatasheetArticle />
            </main>
        </div>
    );
}

export default Datasheets;