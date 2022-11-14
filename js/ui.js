"use strict";

console.log("UI JS Loaded!");

// let baseEndpoint = 'https://www.omdbapi.com/apikey='

class UI {

    constructor() {
        this.movies = document.querySelector('#movies>.post-container');
        this.series = document.querySelector('#main-slider>.swiper>.series__list');
        this.search = document.querySelector('.search__input');
        this.movieInfo = document.querySelector('.movie__details');
    }

    showMovies(data) {
        let movieOutput = '';

        data.forEach((movie) => {
            `
            <div class="post-box">
                <!--img-->
                <div class="post-img">
                    <img alt="" src="${movie.Poster}"/>
                </div>
                <!--text---------->
                <div class="main-slider-text">

                    <!--quality----->
                    <span class="quality">Full HD</span>

                    <!--bottom-text-->
                    <div class="bottom-text">
                        <!--name----->
                        <div class="movie-name">
                            <span>
                                ${movie.Year}
                            </span>
                            <a href="movie-page.html" title="Movie Details" onclick="movieClicked('${movie.imdbID}')"> 
                                ${movie.Title}
                            </a>
                        </div>

                        <!--Category-and-rating---->
                        <div class="category-rating">

                            <!--category-->
                            <div class="category">
                                <a>${movie.Type}</a> 
                            </div>

                            <!--rating---> 
                            9.9
                        </div>
                    </div>
                </div>
            </div> 
            `
        }

        );


        this.movies.innerHTML = movieOutput;


        // init carousel
        // const elements = this.carousel;
        // M.Carousel.init(elements);

    }


    showSeries(data) {
        let seriesOutput = '';

        data.forEach((series, i) => {
            seriesOutput +=`
                <!--------------------- series ${i+1} ----------------->
                <div class="swiper-slide series">
                    <!--box------------------->
                    <div class="main-slider-box">
                        <!--overlayer-------->
                        <a href="#" class="main-slider-overlay">
                            <i class="fas fa-play"></i>
                        </a>
                        <!--img----------->
                        <div class="main-slider-img">
                            <img alt="Poster" src="${series.Poster}"/>
                        </div>
                        <!--text---------->
                        <div class="main-slider-text">
                            <!--quality----->
                            <span class="quality">Full HD</span>
                            <!--bottom-text-->
                            <div class="bottom-text">
                                <!--name----->
                                <div class="movie-name">
                                    <span>${series.Year}</span>
                                    <a href="#"  onclick="movieClicked('${movie.imdbID}')>
                                        ${series.Title}
                                    </a>
                                </div>
                                <!--Category-and-rating---->
                                <div class="category-rating">
                                    <!--category-->
                                    <div class="category">
                                        <a>${series.Type}</a> 
                                    </div>
                                    <!--rating--->
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
            `  
        });

        this.series.innerHTML = seriesOutput;
    }



    showInfo(info) {
        let output;

        output += `
            
            <h2 class="header"> ${info.Title} </h2>
                <div class="card horizontal">
                    <div class="card-image">
                        <img src="${info.Poster}" alt="">
                    </div>
                    <div class="card-stacked">
                        <div class="card-content">
                           <ul class="collection with-header">
                                <li class="collection-header">
                                    <h4>${info.Title}</h4>
                                </li>
                                <li class="collection-item">
                                    <strong class="flow-text">Actor: ${info.Actor}</strong>
                                </li>
                                <li class="collection-item">
                                    <strong class="flow-text">Awards: ${info.Awards}</strong >
                                </li >
                                <li class="collection-item">
                                    <strong class="flow-text">Genre: ${info.Genre}</strong>
                                </li>
                                <li class="collection-item">
                                    <strong class="flow-text">Released: ${info.Released}</strong>
                                </li>
                                <li class="collection-item">
                                    <strong class="flow-text">Rated: ${info.imdbRating}</strong>
                                </li>
                                
                            </ul >
                        </div>

                        <div class="card-action">
                            <a href="https://www.imdb.com/title/${info.imdbID}"target="_blank" > Watch on IMDB </a>
                             <a href="index.html"  > <<<Back Home </a>
                        </div>
                    </div>
                </div>
        `

    }


}