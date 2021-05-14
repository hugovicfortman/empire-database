import React from 'react';
import './Datasheets.css';
import DatasheetCategories from './DatasheetCategories';
import DatasheetArticle from './DatasheetArticle';

class Datasheets extends React.Component {

    constructor() {
        super();

        this.state = {
            article : null
        }
    }

    selectArticle(article) {
        console.log(`${article.item.name} selected`);
        this.setState(() => ({ article: article }));
    }

    render() {
        return (
            <div className="datasheet">
                <header className="datasheet-header">
                    <h3>Data Sheet</h3>
                </header>
                <main className="datasheet-body">
                    <DatasheetCategories selectArticle={ (i) => this.selectArticle(i) } />
                    { this.state.article ? <DatasheetArticle article={ this.state.article } /> : 
                    <span></span> }
                </main>
            </div>
        );
    }
}

export default Datasheets;