class SwapiService {

    _domain = 'https://swapi.co/api';

    async getRequest(url) {
        const resp = await fetch(this._domain + url);

        if (!resp.ok) { throw new Error(`Could not fetch ${url} with status ${resp.status}`); }

        return await resp.json();
    }

    getPeople(p) {
        return this.getRequest(`/people/${p}`);
    }

    async getAllPeople() {
        const resp = await this.getRequest('/people');
        return resp.results;
    }

    async getPlanet(p) {
        const resp = await this.getRequest(`/planets/${p}`);
        return this._transformPlanet({...resp, id:p});
    }
    
    getRandPlanet() {
        const p = Math.floor(Math.random() * Math.floor(25));
        return this.getRequest(`/planets/${p}`);
    }

    async getAllPlanets() {
        const resp = await this.getRequest('/planets');
        return resp.results;
    }
    
    getStarship(s) {
        return this.getRequest(`/starships/${s}`);
    }
    
    async getAllStarships() {
        const resp = await this.getRequest('/starships');
        return resp.results;
    }

    _transformPlanet(resp) {
        return {id: resp.id, name: resp.name, created: resp.created, terrain: resp.terrain, population: resp.population, rotationPeriod: resp.rotation_period};
    }
}

export default SwapiService;