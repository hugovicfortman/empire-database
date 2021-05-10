import React from 'react';
import SWAPI from '../services/swapi'
import DatasheetSelectedCategory from './DatasheetSelectedCategory';

class DatasheetCategories extends React.Component {

    constructor() {
        super();

        this.state = {

        }
    }

    componentDidMount() {
        // Load the swapi root, and store in state
        // fetch(`${SWAPI}`).then(r => console.log(r)
        fetch(`http://localhost:3002`).then(r => console.log(r.json())
        //     this.setState(() => ({
        //     root : r.data
        // }))
        ).catch(e => console.log(e));
    }

    render(){
        return (
            <aside className="datasheet-categories">
                <h4>Categories</h4>
                <ul className="categories-list">
                    <li className="category">People</li>
                    <li className="category">Planets</li>
                </ul>
                <DatasheetSelectedCategory />
            </aside>
        );
    }
}
export default DatasheetCategories;