const SWAPI = { 
    NOCORS: "http://localhost:3002?l=", 
    URL: "https://swapi.dev/api/", 
    APIKEY : "nct_T7ChlCDm1wibHOMgjfp3R7TtsUsvFu1bshUO" 
};
export default function getSWAPI(fnCallback, url = SWAPI.URL) {
    // Load the swapi root, and store in state
    const myHeader = new Headers({
        'X-AUTH-TOKEN': SWAPI.APIKEY
      });
    fetch(`${SWAPI.NOCORS}${url}`, { headers: myHeader }).then(r => r.json())
    .then((d) => {
        fnCallback(d);
    }).catch(e => console.log(e));
}