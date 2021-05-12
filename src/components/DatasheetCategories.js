import React from 'react';
import SWAPI from '../services/swapi'
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
        let myHeader = new Headers({
            'X-AUTH-TOKEN': SWAPI.APIKEY
          });
        fetch(`${SWAPI.NOCORS}${SWAPI.URL}`, { headers: myHeader }).then(r => r.json())
        .then((cs) => {
            this.setState(() => ({ categories : cs }));
        }).catch(e => console.log(e));
    }

    selectCategory(cat) {
        this.setState(() => ({ selectedCategory: { cat : this.state.categories[cat] }}));
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
                <DatasheetSelectedCategory category={ this.state.selectedCategory } 
                    deselect={ this.deselectCategory }/>
            </aside>
        );
    }
}
export default DatasheetCategories;