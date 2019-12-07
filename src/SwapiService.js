class SwapiService {

    _domain = 'https://swapi.co/api';
    _baseImgUrl = 'https://starwars-visualguide.com/assets/img';

    async getRequest(url) {
        const resp = await fetch(this._domain + url);

        // if http resp code is not 200
        if (!resp.ok) { throw new Error(`Could not fetch ${url} with status ${resp.status}`); }

        return await resp.json();
    }

    getPeople = async (p) => {
        const char = await this.getRequest(`/people/${p}`);
        return this._transform(char);
    }

    getAllPeople = async () => {
        const resp = await this.getRequest('/people');
        return this._transformList(resp.results);
    }

    getPlanet = async (p) => {
        const resp = await this.getRequest(`/planets/${p}`);
        return this._transform({...resp, id:p});
    }

    getAllPlanets = async () => {
        const resp = await this.getRequest('/planets');
        return this._transformList(resp.results);
    }
    
    getStarship = async (s) => {
        const resp = await this.getRequest(`/starships/${s}`);
        return this._transform(resp);
    }
    
    getAllStarships = async () => {
        const resp = await this.getRequest('/starships');
        return this._transformList(resp.results);;
    }

    getPeopleImgUrl = (id) => {
        return `${this._baseImgUrl}/characters/${id}.jpg`;
    }

    getPlanetsImgUrl = (id) => {
        return `${this._baseImgUrl}/planets/${id}.jpg`;
    }

    getStarshipsImgUrl = (id) => {
        return `${this._baseImgUrl}/starships/${id}.jpg`;
    }

    _transform(resp) {
        return Object.assign({}, resp, {id: this._extractIDFromURL(resp.url)});
    }

    _transformList(resp) {
        return resp.map(c => {return {id: this._extractIDFromURL(c.url), name: c.name}});
    }

    _extractIDFromURL(url) {
        const rgx = /\/(\d+)\/$/;
        return url.match(rgx)[1];
    }
}

export default SwapiService;