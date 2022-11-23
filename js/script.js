"use strict";
// import UI from './ui.js';
// import OMDB from './api.js';


console.log("Script JS Loaded!");


// init api
const api = new OMDB();

// init UI
const ui = new UI();

// variable declarations
const searchForm = document.querySelector('#searchForm'); 
const movieInfo = document.querySelector('.movie-info');

// event listeners: search
searchForm.addEventListener("submit", (e) =>{
    let searchInput = e.target.value;

    if (searchInput === ''){
        return;
    }

    // get results
    let results = api.getMovies(searchInput);

    // display results
    ui.showSeries(results.series);
    ui.showMovies(results.movies);
})

// search live
searchForm.addEventListener("keyup", (e) =>{
    let searchInput = e.target.value;

    if (searchInput === ''){
        return;
    }

    // get results
    let results = api.getMovies(searchInput);

    // display results
    ui.showSeries(results.series);
    ui.showMovies(results.movies);
})

 


// movie info
const movieClicked = (ID) => {
    sessionStorage.setItem('movieID', ID);
    location.assign('./movie.html') // redirect
    return false;


};


const getMovieInfo = () => {

    let id = sessionStorage.getItem('movieID');

    //make a call to omdb api
    api.getMovieInfo(id)
    .then((results) => {
        ui.showInfo(results);
    })
    .catch(err => alert(err));
};


if (movieInfo){
    movieInfo.addEventListener("DOMContentLoaded", getMovieInfo);
}




// init 
const init = () => {

    // get results
    let results = api.getMovies("2022");

    // display results
    ui.showSeries(results.series);
    ui.showMovies(results.movies);
    } 


init();