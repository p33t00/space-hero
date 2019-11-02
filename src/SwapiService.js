class SwapiService {

    _domain = 'https://swapi.co/api';

    async getRequest(url) {
        const resp = await fetch(this._domain + url);

        // if http resp code is not 200
        if (!resp.ok) { throw new Error(`Could not fetch ${url} with status ${resp.status}`); }

        return await resp.json();
    }

    async getPeople(p) {
        // could use same approach as getPlanet()
        const char = await this.getRequest(`/people/${p}`);
        return this._transformChar(char);
    }

    getAllPeople = async () => {
        const resp = await this.getRequest('/people');
        return this._transformCharList(resp.results);
    }

    async getPlanet(p) {
        const resp = await this.getRequest(`/planets/${p}`);
        return this._transformPlanet({...resp, id:p});
    }

    getAllPlanets = async () => {
        const resp = await this.getRequest('/planets');
        return resp.results;
    }
    
    getStarship(s) {
        return this.getRequest(`/starships/${s}`);
    }
    
    getAllStarships = async () => {
        const resp = await this.getRequest('/starships');
        return resp.results;
    }

    
    _transformPlanet(resp) {
        return {id: resp.id, name: resp.name, created: resp.created, terrain: resp.terrain, population: resp.population, rotationPeriod: resp.rotation_period};
    }

    _transformChar(resp) {
        return Object.assign({}, resp, {id: this._extractIDFromURL(resp.url)});
    }

    _transformCharList(resp) {
        return resp.map(c => {return {id: this._extractIDFromURL(c.url), name: c.name}});
    }

    _extractIDFromURL(url) {
        const rgx = /\/(\d+)\/$/;
        return url.match(rgx)[1];
    }
}

export default SwapiService;