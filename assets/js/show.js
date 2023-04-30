const showList = document.querySelector('#showList')
const upcomingshowList = document.querySelector('#upcomingshowList')


loadShows();
loadUpShows();


async function getMovies() {
    const response = await fetch("/movie.json");
    return await response.json();

}

async function getUpMovies() {
    const response = await fetch("/upmovie.json");
    return await response.json();

}
//upcomingshowList


async function loadShows() {

    document.title = 'Dora - Show'

    const movies = await getMovies()

    movies.forEach(element => {
        const showBox = document.createElement('div');
        showBox.classList.add('showBox')
        showBox.id = element.id;
        showBox.setAttribute("onclick", "openMovie(this.id);");
        showList.appendChild(showBox);

        const poster = document.createElement('img')
        poster.classList.add('poster')
        poster.src = element.poster

        const showName = document.createElement('div')
        showName.classList.add('showName')
        showName.innerHTML = element.name

        showBox.appendChild(poster);
        showBox.appendChild(showName);

    });


}


function openMovie(id) {
    window.location = 'movie.html?show=' + id
}



async function loadUpShows() {

    const movies = await getUpMovies()

    movies.forEach(element => {
        const showBox = document.createElement('div');
        showBox.classList.add('upShowBox')
        showBox.id = element.id;
        upcomingshowList.appendChild(showBox);

        const poster = document.createElement('img')
        poster.classList.add('poster')
        poster.src = element.poster

        const showName = document.createElement('div')
        showName.classList.add('showName')
        showName.innerHTML = element.name

        showBox.appendChild(poster);
        showBox.appendChild(showName);

    });


}
