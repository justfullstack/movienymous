"use strict";
// import UI from './ui.js';
// import OMDB from './api.js';


console.log("Script JS Loaded!");


// init api
const omdb = new OMDB();

// init UI
const ui = new UI();




const searchMovie = (e) => {

    e.preventDefault();

    // get user input
    const inputText = document.querySelector('nav-search').value;

    // ake a call to api 
    omdb.searchIMDB(inputText).then((results) => {
        ui.showSearch(results);
    }).catch(err => {
        alert(err);
    });

}



// search movies
document.querySelector('#searchForm').addEventListener('submit', searchMovie);

// get Movies function 
const getMovies = () => {

    // make request to API
    omdb.getMovies().then((results) => {
        ui.showmovies(results.movies)
    }).catch((err) => {

    });
}

// using omdb API
document.addEventListener('DOMContentLoaded', getMovies);



// on more info click
const movieClicked = (ID) => {
    sessionStorage.setItem('movieID', ID);
    location.assign('./movie.html') // redirect
    return false;


};



const movieInfo = () => {

    let id = sessionStorage.getItem('movieID');

    //make a call to omdb api
    omdb.getMovieInfo(id).then((results) => {
        ui.showInfo(results);
    }).catch(err => alert(err));
};
