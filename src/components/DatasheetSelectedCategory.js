function DatasheetSelectedCategory(props) {
    
    let keyIndex = 0;
    const items = props.data.results.map((item) => <li className="category"
        onClick={ () => props.selectArticle({ item: item, category: props.category.name}) } 
        key={ (() => { keyIndex++; return keyIndex; })() }>{ item.name } { item.title }</li>);
    return (
        <div className="selected-category">
            <div className="floating-panel-top">
                <div className="btn-close" onClick={ () => props.handleClose() }>X</div>
            </div>
            <h5>{ props.category.name }</h5>
            {
                props.loading?
                    <div>
                        <h3>Loading...</h3>
                    </div>  :
                    <ul className="category-sublist">
                        { items }
                    </ul>
            }
        </div>
    );
}

export default DatasheetSelectedCategory;