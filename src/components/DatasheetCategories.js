import React from 'react';
import getSWAPI from '../services/swapi'
import DatasheetSelectedCategory from './DatasheetSelectedCategory';

class DatasheetCategories extends React.Component {

    constructor() {
        super();

        this.state = {
            categories: {},
            selectedCategory: null
        }
    }

    componentDidMount() {
        // Load the swapi root, and store in state
        getSWAPI((cs) => this.setState(() => ({ categories : cs })))
    }

    selectCategory(cat) {
        this.setState(() => ({ selectedCategory: { name: cat, url: this.state.categories[cat] }}));
    }

    deselectCategory() {
        this.setState(() => ({ selectCategory: null}));
    }

    render(){

        const categories = (() => {
            const cList = [];
            for(let c in this.state.categories)
            {
                cList.push(<li key={ this.state.categories[c] } className="category" 
                    onClick={ () => this.selectCategory(c) }>{c}</li>);
            }
            return cList;
        })();

        return (
            <aside className="datasheet-categories">
                <h4>Categories</h4>
                <ul className="categories-list">
                    {categories}
                </ul>
                {
                this.state.selectedCategory !== null?
                    <DatasheetSelectedCategory category={ this.state.selectedCategory } 
                        deselect={ () => this.deselectCategory() } 
                        selectArticle={ (it) => this.props.selectArticle(it) } /> : <span></span>
                }
            </aside>
        );
    }
}
export default DatasheetCategories;