
const axios = require('axios'); 
module.exports = handleMovie; 


function handleMovie(request, response) {
    let { searchQuery } = request.query;

    const url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.MOVIE_API_KEY}&query=${searchQuery}&language=de-DE&region=DE`;

    axios.get(url)
        .then(results => {
            // console.log('qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq', results.data);
            const moviesArray = results.data.results.map(movie => new Movie(movie));
            response.status(200).send(moviesArray);
        })
       
}



class Movie {
    constructor(movie) {
        this.title = movie.title;
        this.overview = movie.overview;
        this.averageVotes = movie.vote_average;
        this.totalVotes = movie.vote_count;
        this.imageUrl = 'https://image.tmdb.org/t/p/w500' + movie.poster_path;
        this.popularity = movie.popularity;
        this.releasedOn = movie.release_date;

    }
}