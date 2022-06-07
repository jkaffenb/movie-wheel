// TODO:

// make webpage pretty

class MovieTable {
    constructor() {
        this.id = 0;
        this.array = [];
    }

    addMovie(movieTitle) {
        let movie = document.createElement("li");
        const movieName = document.createTextNode(movieTitle);
        movie.appendChild(movieName);
        movie.setAttribute("id", "movie" + this.id);
        movie.setAttribute("class", "movie");
        var x = Math.round(0xffffff * Math.random()).toString(16);
        var y = (6 - x.length);
        var z = "000000";
        var z1 = z.substring(0, y);
        var color = "#" + z1 + x;
        this.array.push({
            "movieName": movieTitle,
            "movieID": "movie" + this.id,
            "color": color
        });
        movie.style.backgroundColor = color
        const table = document.getElementById("table");
        table.appendChild(movie, table);
        this.id++;
        drawWheel(this.array.length);
    }

    removeMovie(id) {
        const found = this.array.indexOf(this.array.find(element => element.movieID === id));
        this.array.splice(found, 1);
        numMovies.innerText = myTable.array.length;
        drawWheel(this.array.length);
        document.getElementById(id).remove();
    }
}

const numMovies = document.querySelector('#numMovies');
const myTable = new MovieTable();
const admovie = document.getElementById('addform')
const movieName = document.querySelector("#admovie");
const randomMovie = document.getElementById('randommovie');
const movieArray = document.getElementsByClassName("movie");
const wheel = document.querySelector('.circular-progress');


var myfunction = function () {
    myTable.removeMovie(this.id);
}

function drawWheel(num) {
    for (var i = 0; i < movieArray.length; i++) {
        movieArray[i].addEventListener('click', myfunction);
    }
    //hardcode in 0-4, if chunks are <90deg can use formula
    const circle = document.getElementById('circle');
    if (num === 0) {
        const slice1 = document.createElement("li");
        const slice2 = document.createElement("li");
        const slice3 = document.createElement("li");
        const slice4 = document.createElement("li");
        slice1.className = "circle-movie";
        slice2.className = "circle-movie";
        slice3.className = "circle-movie";
        slice4.className = "circle-movie";
        slice1.style = "transform: rotate(0deg) skew(0deg)";
        slice2.style = "transform: rotate(90deg) skew(0deg)";
        slice3.style = "transform: rotate(180deg) skew(0deg)";
        slice4.style = "transform: rotate(270deg) skew(0deg)";
        let color = "red";
        slice1.style.backgroundColor = color;
        slice2.style.backgroundColor = color;
        slice3.style.backgroundColor = color;
        slice4.style.backgroundColor = color;
        circle.append(slice1);
        circle.append(slice2);
        circle.append(slice3);
        circle.append(slice4);
        return;
    }
    if (num === 1) {
        const slice1 = document.createElement("li");
        const slice2 = document.createElement("li");
        const slice3 = document.createElement("li");
        const slice4 = document.createElement("li");
        slice1.className = "circle-movie";
        slice2.className = "circle-movie";
        slice3.className = "circle-movie";
        slice4.className = "circle-movie";
        slice1.style = "transform: rotate(0deg) skew(0deg)";
        slice2.style = "transform: rotate(90deg) skew(0deg)";
        slice3.style = "transform: rotate(180deg) skew(0deg)";
        slice4.style = "transform: rotate(270deg) skew(0deg)";
        let color = myTable.array[0].color;
        slice1.style.backgroundColor = color;
        slice2.style.backgroundColor = color;
        slice3.style.backgroundColor = color;
        slice4.style.backgroundColor = color;
        const text = document.createElement("a");
        text.innerText = myTable.array[0].movieName;
        text.style.display = "block";
        text.style.paddingLeft = "1%";
        slice1.appendChild(text);
        circle.append(slice1);
        circle.append(slice2);
        circle.append(slice3);
        circle.append(slice4);
        return;
    }

    if (num === 2) {
        const slice1 = document.createElement("li");
        const slice2 = document.createElement("li");
        const slice3 = document.createElement("li");
        const slice4 = document.createElement("li");
        slice1.className = "circle-movie";
        slice2.className = "circle-movie";
        slice3.className = "circle-movie";
        slice4.className = "circle-movie";
        slice1.style = "transform: rotate(0deg) skew(0deg)";
        slice2.style = "transform: rotate(90deg) skew(0deg)";
        slice3.style = "transform: rotate(180deg) skew(0deg)";
        slice4.style = "transform: rotate(270deg) skew(0deg)";
        let color = myTable.array[0].color;
        slice1.style.backgroundColor = color;
        slice2.style.backgroundColor = color;
        color = myTable.array[1].color;
        slice3.style.backgroundColor = color;
        slice4.style.backgroundColor = color;
        const text = document.createElement("a");
        text.innerText = myTable.array[0].movieName;
        text.style.display = "block";
        text.style.paddingLeft = "1%";
        slice1.appendChild(text);
        const text1 = document.createElement("a");
        text1.innerText = myTable.array[1].movieName;
        text1.style.display = "block";
        text1.style.paddingLeft = "1%";
        slice1.appendChild(text);
        slice3.appendChild(text1);
        circle.append(slice1);
        circle.append(slice2);
        circle.append(slice3);
        circle.append(slice4);
        return;
    }
    if (num === 3) {
        const slice1 = document.createElement("li");
        const slice2 = document.createElement("li");
        const slice3 = document.createElement("li");
        const slice4 = document.createElement("li");
        const slice5 = document.createElement("li");
        const slice6 = document.createElement("li");
        const slice7 = document.createElement("li");
        const slice8 = document.createElement("li");
        const slice9 = document.createElement("li");
        const slice10 = document.createElement("li");
        const slice11 = document.createElement("li");
        const slice12 = document.createElement("li");
        slice1.className = "circle-movie";
        slice2.className = "circle-movie";
        slice3.className = "circle-movie";
        slice4.className = "circle-movie";
        slice5.className = "circle-movie";
        slice6.className = "circle-movie";
        slice7.className = "circle-movie";
        slice8.className = "circle-movie";
        slice9.className = "circle-movie";
        slice10.className = "circle-movie";
        slice11.className = "circle-movie";
        slice12.className = "circle-movie";
        slice1.style = "transform: rotate(0deg) skew(60deg)";
        slice2.style = "transform: rotate(30deg) skew(60deg)";
        slice3.style = "transform: rotate(60deg) skew(60deg)";
        slice4.style = "transform: rotate(90deg) skew(60deg)";
        slice5.style = "transform: rotate(120deg) skew(60deg)";
        slice6.style = "transform: rotate(150deg) skew(60deg)";
        slice7.style = "transform: rotate(180deg) skew(60deg)";
        slice8.style = "transform: rotate(210deg) skew(60deg)";
        slice9.style = "transform: rotate(240deg) skew(60deg)";
        slice10.style = "transform: rotate(270deg) skew(60deg)";
        slice11.style = "transform: rotate(300deg) skew(60deg)";
        slice12.style = "transform: rotate(330deg) skew(60deg)";
        let color = myTable.array[0].color;
        slice1.style.backgroundColor = color;
        slice2.style.backgroundColor = color;
        slice3.style.backgroundColor = color;
        slice4.style.backgroundColor = color;
        color = myTable.array[1].color;
        slice5.style.backgroundColor = color;
        slice6.style.backgroundColor = color;
        slice7.style.backgroundColor = color;
        slice8.style.backgroundColor = color;
        color = myTable.array[2].color;
        slice9.style.backgroundColor = color;
        slice10.style.backgroundColor = color;
        slice11.style.backgroundColor = color;
        slice12.style.backgroundColor = color;
        const text = document.createElement("a");
        text.innerText = myTable.array[0].movieName;
        text.style = "transform: skew(-60deg)";
        text.style.display = "block";
        text.style.paddingLeft = "1%";
        slice2.appendChild(text);
        const text1 = document.createElement("a");
        text1.innerText = myTable.array[1].movieName;
        text1.style = "transform: skew(-60deg)";
        text1.style.display = "block";
        text1.style.paddingLeft = "1%";
        slice6.appendChild(text1);
        const text2 = document.createElement("a");
        text2.innerText = myTable.array[2].movieName;
        text2.style = "transform: skew(-60deg)";
        text2.style.display = "block";
        text2.style.paddingLeft = "1%";
        slice10.appendChild(text2);
        circle.append(slice1);
        circle.append(slice2);
        circle.append(slice3);
        circle.append(slice4);
        circle.append(slice5);
        circle.append(slice6);
        circle.append(slice7);
        circle.append(slice8);
        circle.append(slice9);
        circle.append(slice10);
        circle.append(slice11);
        circle.append(slice12);
        return;
    }
    if (num === 4) {
        const slice1 = document.createElement("li");
        const slice2 = document.createElement("li");
        const slice3 = document.createElement("li");
        const slice4 = document.createElement("li");
        slice1.className = "circle-movie";
        slice2.className = "circle-movie";
        slice3.className = "circle-movie";
        slice4.className = "circle-movie";
        slice1.style = "transform: rotate(0deg) skew(0deg)";
        slice2.style = "transform: rotate(90deg) skew(0deg)";
        slice3.style = "transform: rotate(180deg) skew(0deg)";
        slice4.style = "transform: rotate(270deg) skew(0deg)";
        slice1.style.backgroundColor = myTable.array[0].color;
        slice2.style.backgroundColor = myTable.array[1].color;
        slice3.style.backgroundColor = myTable.array[2].color;
        slice4.style.backgroundColor = myTable.array[3].color;
        slice1.innerText = myTable.array[0].movieName;
        slice2.innerText = myTable.array[1].movieName;
        slice3.innerText = myTable.array[2].movieName;
        slice4.innerText = myTable.array[3].movieName;
        circle.append(slice1);
        circle.append(slice2);
        circle.append(slice3);
        circle.append(slice4);
        return;
    }

    const deltaRotation = 360 / num;
    const skew = 90 - deltaRotation;
    let slice = document.createElement("li");
    let text = document.createElement("a");
    for (let i = 0; i < num; i++) {
        slice = document.createElement("li");
        slice.className = "circle-movie";
        slice.style = `transform: rotate(${i * deltaRotation}deg) skew(${skew}deg)`;
        slice.style.backgroundColor = myTable.array[i].color;
        // could scale text and padding, revist later
        text = document.createElement("a");
        text.innerText = myTable.array[i].movieName;
        text.style = `transform: skew(-${skew}deg)`;
        text.style.display = "block";
        text.style.paddingLeft = "1%";

        slice.appendChild(text);
        circle.append(slice);
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function spinWheel(speed) {
    if (speed === -1) {
        wheel.style.animationPlayState = "paused";
        return;
    }
    wheel.style.animation = `forward-spin ${speed}s infinite linear`

    return;
}

function randomSpin() {
    setTimeout(function () { spinWheel(.5); }, 500);
    setTimeout(function () { spinWheel(-1); }, 6000);
    setTimeout(function () { grabWinner(); }, 7500);
    return;
}

function findColor() {
    //this selection isn't perfect, come back and fix later
    let centerX = wheel.offsetLeft + wheel.offsetWidth / 2;
    let centerY = wheel.offsetTop + wheel.offsetHeight / 2;
    const winner = document.elementFromPoint(centerX + 1, centerY);
    var myrgb = winner.style.backgroundColor;

    if (myrgb.length === 0) {
        //needed if selects text instead of pie slice
        var temp = winner.display;
        winner.style.display = "none";
        const newWinner = document.elementFromPoint(centerX + 1, centerY);
        winner.style.display = temp;
        myrgb = newWinner.style.backgroundColor;
    }
    const rgb2hex = (rgb) => `#${rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/).slice(1).map(n => parseInt(n, 10).toString(16).padStart(2, '0')).join('')}`
    return rgb2hex(myrgb);
}

function grabWinner() {
    const movieColor = findColor();

    const found = myTable.array.indexOf(myTable.array.find(element => element.color === movieColor));
    const movieID = myTable.array[found].movieID;

    let movie = document.getElementById(movieID);
    movie.style.backgroundColor = 'green';
    movie.id = 'winner'
    numMovies.innerText = myTable.array.length;
    randomMovie.append(movie);
    myTable.removeMovie(movieID);
    drawWheel(myTable.size);
    return;
}

randomMovie.addEventListener('click', () => {
    if (myTable.array.length < 2) {
        alert("Need more than 1 movie!");
        return;
    }

    randomSpin();
    return;
});

admovie.addEventListener('submit', function (e) {
    e.preventDefault();
    if (myTable.length === 100) {
        window.alert('Max Movies');
        return;
    }
    myTable.addMovie(movieName.value);
    numMovies.innerText = myTable.array.length;

});
