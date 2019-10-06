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

    getPlanet(p) {
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
}

export default SwapiService;