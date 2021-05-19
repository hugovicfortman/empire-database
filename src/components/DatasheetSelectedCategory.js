import React from 'react';

class DatasheetSelectedCategory extends React.Component {

    constructor() {
        super();
    }

    componentDidMount() {
        document.querySelector('.category-panel-inner')
            .addEventListener('scroll', (e) => this.trackScrolling(e, this));
    }

    trackScrolling(e) {
        if (e.target.offsetHeight + e.target.scrollTop >= e.target.scrollHeight) {
            if(this.props.data.next) {
                this.props.loadMore(this.props.data.next);
            }
        }
    }

    componentWillUnmount() {
        document.querySelector('.category-panel-inner')
            .removeEventListener('scroll', (e) => this.trackScrolling(e, this));
    }

    render() {
    
        let keyIndex = 0;
        const items = this.props.data.results.map((item) => <li className="category"
            onClick={ () => this.props.selectArticle({ item: item, category: this.props.category.name}) } 
            key={ (() => { keyIndex++; return keyIndex; })() }>{ item.name } { item.title }</li>);
        return (
            <div className="selected-category">
                <div className="floating-panel-top">
                    <div className="btn-close" onClick={ () => this.props.handleClose() }>✖</div>
                </div>
                <h5>{ this.props.category.name }</h5>
                <div className="category-panel-inner">
                    {
                        this.props.loading?
                            <div>
                                <h3>Loading...</h3>
                            </div>  :
                            <ul className="category-sublist">
                                { items }
                                {
                                    this.props.data.next && 
                                        <li className="category-loader"><span></span></li>
                                }
                            </ul>
                    }
                </div>
            </div>
        );
    }
}

export default DatasheetSelectedCategory;