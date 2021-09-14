export default class SWAPI {

    config = { URL: "https://swapi.dev/api/" };

    getSWAPIConfig() {
        return fetch("https://projects.victorfortman.com/live/imperial-database/config/")
            .then( c => c.json())
            .then( d => d)
            .catch(e => console.log(e));
    }

    runSWAPI(fnCallback, url) {
        // Load the swapi root, and store in state
        console.log(`${this.config.CORS.API}`.replace('@L',url));
        fetch(`${this.config.CORS.API}`.replace('@L',url))
        .then(r => r.json())
        .then((d) => {
            fnCallback(d);
        }).catch(e => console.log(e));
    }

    getSWAPI(fnCallback, url = this.config.URL) {
        if(this.config.API === undefined)
        {
            this.getSWAPIConfig()
                .then(_ => this.runSWAPI(fnCallback, url));
        }else {
            this.runSWAPI(fnCallback, url);
        }
    }
}