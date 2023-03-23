class Media {
    constructor(title = '', isCheckedOut = false, ratings = []) {
        this._title = title;
        this._isCheckedOut = isCheckedOut;
        this._ratings = ratings;
    }

    get title() {
        return this._title;
    }
    get isCheckedOut() {
        return this._isCheckedOut;
    }
    get ratings() {
        this._ratings;
    }

    set setCheckedOut(isChecked) {
        this._isCheckedOut = isChecked;
    }

    toggleCheckOutStatus() {
        if (this._isCheckedOut === true) {
            this._isCheckedOut = false;
        } else {
            this._isCheckedOut = true;
        }
    }

    getAverageRating() {
        const initialValue = 0;
        const sumWithInitial = this._ratings.reduce(
            (accumulator, currentValue) => accumulator + currentValue,
            initialValue);
        return sumWithInitial / this._ratings.length;
    }

    addRating(newRating) {
        if (newRating > 5) {
            newRating = 5;
        } else if (newRating < 1) {
            newRating = 1;
        }
        this._ratings.push(newRating);
    }
}

class Book extends Media {
    constructor(title, pages, author = '') {
        super(title);
        this._pages = pages;
        this._author = author;
    }

    get pages() {
        return this._pages;
    }

    get author() {
        return this._author;
    }
}

class Movie extends Media {
    constructor(title, director = '', runtime) {
        super(title);
        this._director = director;
        this._runtime = runtime;
    }

    get director() {
        return this._director;
    }

    get runtime() {
        return this._runtime;
    }
}

class CD extends Media {
    constructor(title, artist = '', songs = []) {
        super(title);
        this._artist = artist;
        this._songs = songs;
    }

    get artist() {
        return this._artist;
    }

    get songs() {
        return this._songs;
    }

    //randomize songs array
    shuffle() {
        const arrayLength = this._songs.length;
        for (let i = 0; i < arrayLength; i++) {
            let dzieciol = this._songs[i];
            let randomindex = Math.floor(Math.random() * arrayLength);
            this._songs[i] = this._songs[randomindex];
            this._songs[randomindex] = dzieciol;

        }
    }
}

// storage for all media types
class Catalog {
    constructor(mediaStorage = []) {
        this._mediaStorage = mediaStorage;
    }

    get mediaStorage() {
        return this._mediaStorage;
    }

    addMediaToStorage(newElement) {
        this._mediaStorage.push(newElement);
    }
}


let mediaTest = new Media("tytuł", false, [4, 5, 3, 5]);
console.log(mediaTest);

mediaTest.toggleCheckOutStatus();
console.log(mediaTest);

mediaTest.addRating(5);
console.log(mediaTest.getAverageRating());

let movieTest = new Movie("title", 'ten co film nakręcił', 6)
console.log(movieTest);

console.log(movieTest.director);
console.log(movieTest.runtime);

const historyOfEverything = new Book('A Short History of Nearly Everything', 544, 'Bill Bryson')

historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut);

historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log(historyOfEverything.getAverageRating());

console.log(historyOfEverything.pages);
console.log(historyOfEverything.author);

const speed = new Movie('Speed', 'Jan de Bont', 116);

speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);

speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.getAverageRating());

const testCD = new CD('tytuł', 'ktoś', ['Baba O’Riley', 'Soul Bossa Nova', 'Tom’s Diner', 'Taniec Cukrowej Wieszczki', 'Chelsea Dagger', 'Taniec z szablami', 'Cobrastyle', 'Breathe']);

console.log(testCD.songs);
testCD.shuffle();
console.log(testCD.songs);

const testCatalog = new Catalog();

testCatalog.addMediaToStorage(speed);
testCatalog.addMediaToStorage(historyOfEverything);
testCatalog.addMediaToStorage(movieTest);
testCatalog.addMediaToStorage(mediaTest);

console.log(testCatalog.mediaStorage);



