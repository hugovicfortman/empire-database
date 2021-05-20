function DatasheetArticle(props) {

    const entity = props.article.item;
    const data = [];
    let keyIndex = 0;
    for(let key in entity)
    {
        data.push(<tr key={ (() => { keyIndex++; return keyIndex; })() }>
            <td>{ key }</td><td style={{wordBreak:"break-word"}} >{ entity[key] }</td></tr>);
    }


    return (
        <article className="datasheet-article">
            <div style={ { padding: "0px 20px" } } >
                <table>
                    <thead>
                        <tr><th colSpan={ 2 }><h4>{ entity.name }</h4></th></tr>
                    </thead>
                    <tbody style={ { textAlign: "justify" } } >
                        { data }
                    </tbody>
                </table>
                    {/*
                        "height": "172", 
                        "mass": "77", 
                        "hair_color": "blond", 
                        "skin_color": "fair", 
                        "eye_color": "blue", 
                        "birth_year": "19BBY", 
                        "gender": "male", 
                        "homeworld": "http://swapi.dev/api/planets/1/", 
                        "films": [
                            "http://swapi.dev/api/films/1/", 
                            "http://swapi.dev/api/films/2/", 
                            "http://swapi.dev/api/films/3/", 
                            "http://swapi.dev/api/films/6/"
                        ], 
                        "species": [], 
                        "vehicles": [
                            "http://swapi.dev/api/vehicles/14/", 
                            "http://swapi.dev/api/vehicles/30/"
                        ], 
                        "starships": [
                            "http://swapi.dev/api/starships/12/", 
                            "http://swapi.dev/api/starships/22/"
                        ], 
                        "created": "2014-12-09T13:50:51.644000Z", 
                        "edited": "2014-12-20T21:17:56.891000Z", 
                        "url": "http://swapi.dev/api/people/1/"
                    */}
            </div>
        </article>
    );
}

export default DatasheetArticle;