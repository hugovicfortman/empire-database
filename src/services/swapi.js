const SWAPI = { 
    NOCORS: "http://localhost:3002?l=", 
    URL: "https://swapi.dev/api/", 
    BTOKEN : "13057faf3anct_T7ChlC3ebb8fef69Dm1wibHOMgd03827c059jfp3R7TtsUdd_1wib529svFu1bshUO" 
};
export default function getSWAPI(fnCallback, url = SWAPI.URL) {
    // Load the swapi root, and store in state
    fetch(`${SWAPI.NOCORS}${url}&btoken=${SWAPI.BTOKEN}`).then(r => r.json())
    .then((d) => {
        fnCallback(d);
    }).catch(e => console.log(e));
}