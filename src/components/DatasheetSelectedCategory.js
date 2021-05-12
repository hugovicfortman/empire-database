class DatasheetSelectedCategory {
    
    constructor() {
        super();

        this.state = {

        };
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

    render() {
        const cat = this.props.selectedCategory;
        
        return (
            <div className="selected-category">
                <div className="floating-panel-top">
                    <div className="btn-close">X</div>
                </div>
                <h5>{ cat }</h5>
                <ul className="category-sublist">
                    <li className="category">People</li>
                    <li className="category">Planets</li>
                </ul>
            </div>
        );
    }
}

export default DatasheetSelectedCategory;