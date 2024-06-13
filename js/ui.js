"use strict";

console.log("UI JS Loaded!");

// let baseEndpoint = 'https://www.omdbapi.com/apikey='

class UI {

    constructor() {
        this.carousel = document.querySelector('.carousel');
        this.series = document.querySelector('.series');
        this.search = document.querySelector('.search');
        this.movieInfo = document.querySelector('.movieInfo');
    }

    showMovies(data) {
        let movieOutput = '';

        data.forEach((movie) => {
            movieOutput += `
              <div class="carousel-item" id="one">
                    <div class="card medium black ">

                        <div class="card-image waves-effect waves-block waves-light">
                            <img src="${movie.Poster}" alt="" class="activator">
                        </div>

                        <div class="card-content black">
                            <span class="card-title activator text-white text-darken-4">
                              ${movie.Title}
                            </span><i class="material-icons right">more</i>
                        </div>

                        <div class="card-reveal black">
                            <span class="card-title   text-white  text-darken-4"><i class="material-icons right">close</i>
                              
                            </span>
                            

                            <p class="green-text">
                                Type: <span class="text-yellow">
                                    ${movie.Type}
                                </span>
                            </p>
                            

                            <p class="green-text">
                                Year: <span class="text-yellow">
                                    ${movie.Year}
                                </span>
                            </p>

                            <a href="#" class="waves-effect green btn-small" onclick="movieClicked('${movie.imdbID}')">More Info</a>
                        </div>
                    </div>
                </div> 
             `;


        }

        );


        this.carousel.innerHTML = movieOutput;


        // init carousel
        const elements = this.carousel;
        M.Carousel.init(elements);

    }


    showSeries(data) {
        let seriesOutput = '';

        data.forEach((series) => {
            seriesOutput += `
                <div class="col s3 ">
                    <div class="card medium black ">

                        <div class="card-image waves-effect waves-block waves-light">
                            <img src="${series.Poster}" alt="" class="activator">
                        </div>

                        <div class="card-content black">
                            <span class="card-title activator text-white text-darken-4">
                                ${series.Title}
                            </span><i class="material-icons right">more</i>
                        </div>

                        <div class="card-reveal black">
                            <span class="card-title   text-white  text-darken-4"><i class="material-icons right">close</i>
                                
                            </span>
                            

                            <p class="green-text">
                                Type: <span class="text-yellow">
                                    ${series.Type}
                                </span>
                            </p>
                            

                            <p class="green-text">
                                Year: <span class="text-yellow">
                                    ${series.Year}
                                </span>
                            </p>

                            <a href="#" class="waves-effect green btn-small" onclick="movieClicked('${movie.imdbID}')">More Info</a>
                        </div>
                    </div>
                </div>
            `;
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


    
    showSearch(data) {
        let searchOutput = '';

        data.forEach((series) => {
            searchOutput += `
                <div class="col s3 ">
                    <div class="card medium black ">

                        <div class="card-image waves-effect waves-block waves-light">
                            <img src="${series.Poster}" alt="" class="activator">
                        </div>

                        <div class="card-content black">
                            <span class="card-title activator text-white text-darken-4">
                                ${series.Title}
                            </span><i class="material-icons right">more</i>
                        </div>

                        <div class="card-reveal black">
                            <span class="card-title   text-white  text-darken-4"><i class="material-icons right">close</i>
                                
                            </span>
                            

                            <p class="green-text">
                                Type: <span class="text-yellow">
                                    ${series.Type}
                                </span>
                            </p>
                            

                            <p class="green-text">
                                Year: <span class="text-yellow">
                                    ${series.Year}
                                </span>
                            </p>

                            <a href="#" class="waves-effect green btn-small" onclick="movieClicked('${movie.imdbID}')">More Info</a>
                        </div>
                    </div>
                </div>
            `;
        });

        this.search.innerHTML = searchOutput;
    }
}