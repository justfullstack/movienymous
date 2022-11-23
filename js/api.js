"use strict";
console.log("API JS Loaded!");

let baseEndpoint = 'https://www.omdbapi.com/apikey='

class OMDB {

    constructor() {
        this.key = 'key'; // omdb secret api key 

    }

    async getMovies(search_name) {
        const movieResponse = await fetch(`${baseEndpoint}${this.key}&m=${search_name}`);
        const movieResults = await movieResponse.json();


        const seriesResponse = fetch`(${baseEndpoint}${this.key}&s=${search_name})`
        const seriesResults = await seriesResponse.json();

        return {
            'movies': movieResults.Search,
            'series': seriesResults.Search,
        }
    }
    

    async getMovieInfo(id) {
        const res = await fetch(`${baseEndpoint}${this.key}&i=${id}`);
        const results = await res.json();
        return results
    } 


    async searchIMDB(inputText) {
        const movieResponse = await fetch(`${baseEndpoint}${this.key}&s=${inputText}`);
        const results = await movieResponse.json();


        return results.Search;
    }
}