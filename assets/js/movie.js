const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const hasShow = urlParams.has('show');
const show = urlParams.get('show')

const video = document.querySelector('#videoBox')
const moviePoster = document.querySelector('#moviePoster')
const movieName = document.querySelector('#movieName')
const movieGenre = document.querySelector('#movieGenre')
const movieStory = document.querySelector('#movieStory')
const movieDirector = document.querySelector('#movieDirector')
const movieCast = document.querySelector('#movieCast')


if (hasShow && show) {
    startMovie(show);
} else {
    window.location.href = '/'
}


async function getMovies() {
    const response = await fetch("/movie.json");
    return await response.json();
}

async function startMovie(show) {

    const movies = await getMovies();
    const movie = movies.filter((movie) => movie.id == show)[0];

    if (!movie) window.location.href = '/'

    document.title = movie.name;

    video.src = movie.src
    moviePoster.src = movie.poster

    movieName.classList.add('name')
    movieName.innerHTML = movie.name

    movieStory.classList.add('story')
    movieStory.innerHTML = movie.story


    movie.genre.forEach(element => {
        var genre = document.createElement('p')
        genre.classList.add('genre');
        genre.innerHTML = element;
        movieGenre.appendChild(genre);
    });

    movie.director.forEach(element => {
        var director = document.createElement('p')
        director.classList.add('cast');
        director.innerHTML = element;
        movieDirector.appendChild(director);
    });

    movie.cast.forEach(element => {
        var cast = document.createElement('p')
        cast.classList.add('cast');
        cast.innerHTML = element;
        movieCast.appendChild(cast);
    });


}










