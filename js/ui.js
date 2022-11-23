"use strict";

console.log("UI JS Loaded!");

// let baseEndpoint = 'https://www.omdbapi.com/apikey='

class UI {

    constructor() {
        this.carousel = document.querySelector('.carousel');
        this.series = document.querySelector('.series__list');

        this.movies = document.querySelector('.movie__list');
        // this.search = document.querySelector('.search');
        this.movieInfo = document.querySelector('.movieInfo');
    }

    showMovies(data) {
        let movieOutput = '';

        data.forEach((movie) => {
            movieOutput += `
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
                            <span>2021</span>
                            <a href="movie.html"  onclick="movieClicked('${movie.imdbID}')>
                                ${movie.Title}
                            </a>
                        </div>

                        <!--Category-and-rating---->
                        <div class="category-rating">

                            <!--category-->
                            <div class="category">
                                <a href="movie.html">${movie.Type}</a> 
                            </div>

                            <!--rating---> 
                            ${movie.imdbRating}
                        </div>
                    </div>
                </div>
            </div> 
             `;
        }

        );


        this.movies.innerHTML = movieOutput; 

    }


    


    showSeries(data) {
        let seriesOutput = '';

        data.forEach((series) => {
            seriesOutput += `
                <div class="swiper-slide series">
                    <!--box------------------->
                    <div class="main-slider-box">
                        <!--overlayer-------->
                        <a href="movie.html" class="main-slider-overlay movieInfoButton" onclick="movieClicked('${movie.imdbID}')">
                            <i class="fas fa-play"></i>
                        </a>
                        <!--img----------->
                        <div class="main-slider-img"> 
                            <img src="${series.Poster}" alt="Poster" class="activator">
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
                                    <a href="#">${series.Title}</strong>
                                </div>
                                <!--Category-and-rating---->
                                <div class="category-rating">
                                    <!--category-->
                                    <div class="category">
                                        <a href="#">${series.Type}</a> 
                                    </div>
                                    <!--rating--->
                                    <div class="rating">
                                        ${series.imdbRating} 
                                    </div> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    `;
        });

        this.series.innerHTML = '';
        this.series.innerHTML = seriesOutput;
    }



    showInfo(info) {
        let output;

        output += `
            
        <section class="movie-banner movie-info">
            <!--==img==================================-->
            <div class="m-banner-img">
                <img alt="" src="${info.Poster}">
            </div>
            <!--content================================-->
            <div class="banner-container">
                <!--title-container*******************----->
                <div class="title-container">
                    <!--title-top===============-->
                    <div class="title-top">
                    <!--title----->
                    <div class="movie-title">
                        <h1>Pirates of the Caribbean Salazar's Revenge</h1>
                        By <em>${info.Actor}</em>
                    </div>
                    <!--more-about-movie-->
                    <div class="more-about-movie">
                        <span class="quality">Full HD</span>
                        <div class="rating">
                            ${info.imdbRating} <img alt="imbd" src="img/IMDb-icon.png">
                        </div>
                        <span>${info.Released}</span>
                        <span>${info.Awards}</span>
                    </div>
                    <!--language--------->
                    <div class="language">
                        <span>English</span>
                    </div>
                    </div>
                    <!--Title-botttom==========================-->
                    <div class="title-bottom">
                        <!--category------->
                        <div class="category">
                            <strong>Category</strong><br/>
                            <a href="#">${info.Genre}</a>
                        </div>
                        <!--trailer-btn---->
                        <a href="https://www.imdb.com/title/${info.imdbID}" target='_blank' class='watch-btn'>
                            Watch Trailer
                            <i class="fas fa-play fa-fw mx-2"></i>
                        </a>
                    </div>
                </div>
                // <!--play-btn******************************--->
                // <div class="play-btn-container">
                //     <div class="play-btn">
                //         <a href="javascript:void">
                //             <i class="fas fa-play"></i>
                //         </a>
                //     </div>
                // </div> 
            </div>
        </section>
        `

    }


    
    // showSearch(data) {
    //     let searchOutput = '';

    //     data.forEach((series) => {
    //         searchOutput += `
    //             <div class="col s3 ">
    //                 <div class="card medium black ">

    //                     <div class="card-image waves-effect waves-block waves-light">
    //                         <img src="${series.Poster}" alt="" class="activator">
    //                     </div>

    //                     <div class="card-content black">
    //                         <span class="card-title activator text-white text-darken-4">
    //                             ${series.Title}
    //                         </span><i class="material-icons right">more</i>
    //                     </div>

    //                     <div class="card-reveal black">
    //                         <span class="card-title   text-white  text-darken-4"><i class="material-icons right">close</i>
                                
    //                         </span>
                            

    //                         <p class="green-text">
    //                             Type: <span class="text-yellow">
    //                                 ${series.Type}
    //                             </span>
    //                         </p>
                            

    //                         <p class="green-text">
    //                             Year: <span class="text-yellow">
    //                                 ${series.Year}
    //                             </span>
    //                         </p>

    //                         <a href="#" class="waves-effect green btn-small" onclick="movieClicked('${movie.imdbID}')">More Info</a>
    //                     </div>
    //                 </div>
    //             </div>
    //         `;
    //     });

    //     this.search.innerHTML = searchOutput;
    // }
}