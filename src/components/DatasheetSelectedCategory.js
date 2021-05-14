import React from 'react';
import getSWAPI from '../services/swapi'

class DatasheetSelectedCategory extends React.Component {
    
    constructor() {
        super();

        this.state = {
            datasheet: {
                /**
                 * count: 2
                 * next: ''
                 * previous: null
                 * results: [{ name, title }]
                 */
                count: 0,
                next: '',
                previous: null,
                results: []
            }
        };
    }

    componentDidMount() {
        // Load the swapi root, and store in state
        getSWAPI((dt) => this.setState(() => ({ datasheet : dt })), this.props.category.url);
    }

    getMoreResults() {

    }

    render() {
        let keyIndex = 0;
        const items = this.state.datasheet.results.map((item) => <li className="category"
            onClick={ () => this.props.selectArticle({ item: item, category: this.props.category.name}) } 
            key={ (() => { keyIndex++; return keyIndex; })() }>{ item.name } { item.title }</li>);
        return (
            <div className="selected-category">
                <div className="floating-panel-top">
                    <div className="btn-close">X</div>
                </div>
                <h5>{ this.props.category.name }</h5>
                <ul className="category-sublist">
                    { items }
                </ul>
            </div>
        );
    }
}

export default DatasheetSelectedCategory;