class MovieTable {
    constructor() {
        this.size = 0;
        this.array = [];
    }

    full() {
        return (this.size >= 100);
    }

    empty() {
        return (this.size <= 0);
    }

    addMovie(movieTitle) {
        //not sure why this is necessary
        let movie = '';
        if (this.size % 10 === 0) {
            //append a div
            movie = document.createElement("li");
            const table = document.getElementById("table");
            table.appendChild(movie, table);
        }

        movie = document.createElement("li");
        const movieName = document.createTextNode(movieTitle);
        movie.appendChild(movieName);
        movie.setAttribute("id", "movie" + this.size);
        this.array.push(movieTitle);
        movie.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        const table = document.getElementById("table");
        table.appendChild(movie, table);
        this.size++;
        drawWheel(this.size);
    }

    removeMovie() {
        const table = document.getElementById("movie" + (this.size - 1));
        table.remove();
        this.array.pop();

        this.size--;
        drawWheel(this.size);
    }
}

const numMovies = document.querySelector('#numMovies');
const myTable = new MovieTable();
const admovie = document.getElementById('addform')
const movieName = document.querySelector("#admovie");
const removie = document.querySelector("#removie");
const randomMovie = document.getElementById('randommovie');


function drawWheel(num) {
    //hardcode in 1-4, if chunks are <90deg can use formula
    const circle = document.getElementById('circle');
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
        let color = '#' + Math.floor(Math.random() * 16777215).toString(16);
        slice1.style.backgroundColor = color;
        slice2.style.backgroundColor = color;
        slice3.style.backgroundColor = color;
        slice4.style.backgroundColor = color;
        //slice1.innerText = myTable.array[0];
        const text = document.createElement("a");
        text.innerText = myTable.array[0];
        //text.style = "transform: skew(-45deg)";
        text.style.display = "block";
        text.style.paddingLeft = "5%";
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
        let color = '#' + Math.floor(Math.random() * 16777215).toString(16);
        slice1.style.backgroundColor = color;
        slice2.style.backgroundColor = color;
        color = '#' + Math.floor(Math.random() * 16777215).toString(16);
        slice3.style.backgroundColor = color;
        slice4.style.backgroundColor = color;
        // slice1.innerText = myTable.array[1];
        // slice3.innerText = myTable.array[0];
        const text = document.createElement("a");
        text.innerText = myTable.array[0];
        text.style.display = "block";
        text.style.paddingLeft = "5%";
        slice1.appendChild(text);
        const text1 = document.createElement("a");
        text1.innerText = myTable.array[1];
        text1.style.display = "block";
        text1.style.paddingLeft = "5%";
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
        let color = '#' + Math.floor(Math.random() * 16777215).toString(16);
        slice1.style.backgroundColor = color;
        slice2.style.backgroundColor = color;
        slice3.style.backgroundColor = color;
        slice4.style.backgroundColor = color;
        color = '#' + Math.floor(Math.random() * 16777215).toString(16);
        slice5.style.backgroundColor = color;
        slice6.style.backgroundColor = color;
        slice7.style.backgroundColor = color;
        slice8.style.backgroundColor = color;
        color = '#' + Math.floor(Math.random() * 16777215).toString(16);
        slice9.style.backgroundColor = color;
        slice10.style.backgroundColor = color;
        slice11.style.backgroundColor = color;
        slice12.style.backgroundColor = color;
        // slice1.innerText = myTable.array[0];
        // slice5.innerText = myTable.array[1];
        // slice9.innerText = myTable.array[2];
        const text = document.createElement("a");
        text.innerText = myTable.array[0];
        text.style = "transform: skew(-60deg)";
        text.style.display = "block";
        text.style.paddingLeft = "1%";
        slice2.appendChild(text);
        const text1 = document.createElement("a");
        text1.innerText = myTable.array[1];
        text1.style = "transform: skew(-60deg)";
        text1.style.display = "block";
        text1.style.paddingLeft = "1%";
        slice6.appendChild(text1);
        const text2 = document.createElement("a");
        text2.innerText = myTable.array[2];
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
        slice2.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        slice3.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        slice4.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        slice1.innerText = myTable.array[0];
        slice2.innerText = myTable.array[1];
        slice3.innerText = myTable.array[2];
        slice4.innerText = myTable.array[3];
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
        slice.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        // could scale text and padding, revist later
        text = document.createElement("a");
        text.innerText = myTable.array[i];
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

randomMovie.addEventListener('click', () => {
    const movieID = "movie" + getRandomInt(myTable.size);
    console.log
    let movie = document.getElementById(movieID);
    movie.style.backgroundColor = 'green';
    randomMovie.append(movie);
});

admovie.addEventListener('submit', function (e) {
    e.preventDefault();
    if (myTable.full()) {
        window.alert('Max Movies');
        return;
    }
    myTable.addMovie(movieName.value);
    numMovies.innerText = myTable.size;

});

removie.addEventListener('click', () => {
    if (myTable.empty()) {
        return;
    }
    myTable.removeMovie();
    numMovies.innerText = myTable.size
})

