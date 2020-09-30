class Artist {
    constructor(name) {
        this.name = name;
    }
}

class Album extends Artist {
    constructor(name, title, score) {
        super(name);
        this.title = title;
        this.score = score;
    }
    display() {
        return `My record is ${this.title} by the band ${this.name} and has the score ${this.score}`;
    }
}

let myRecord = new Album("Metallica", "Master of Puppets", 4);

console.log(myRecord.display());


function goodScore(n) {
    return m => m >= n;
}

let goodScore5 = goodScore(4);

if (goodScore5(myRecord.score)) {
    console.log("Bra skiva!")
} else {
    console.log("Dålig skiva!")
}





const bands = [
    { 'Name': 'Metallica', 'Rating': 4 },
    { 'Name': 'Iron Maiden', 'Rating': 3 },
    { 'Name': 'Slayer', 'Rating': 4 },
    { 'Name': 'Sportlov', 'Rating': 666 },
    { 'Name': 'Asta Kask', 'Rating': 3 },
    { 'Name': 'Håkan Hellström', 'Rating': 1 }
]

bands.forEach(index => console.log(index.Name));

const result = bands.filter(band => band.Rating >= 4);
console.log(result);


const sales = ['150', '200', '250', '540', '190'];
const afterVat = sales.map(sale => sale * 1.25);
console.log(afterVat)

const moreNumbs = [50, 400];
let numbs = [150, 100, ...moreNumbs, 300, 250];
console.log(numbs);

function add(val1, val2, val3, val4, val5, val6) {
    console.log(val1, val2, val3, val4, val5, val6)
    return val1 + val2 + val3 + val4 + val5 + val6;
}
console.log(add(50, 20, ...moreNumbs, 100, 30));


const user = {
    id: 2030,
    username: 'ameste',
    root: true,
    password: 'dontstorepasswordshere',
    email: 'info@ameste.se',
}

const { id, username, root, password, email } = user;

console.log(id, username, root, email)


function dieselDunk(n) {
    console.log(n + ' dieseldunkar');
}
dieselDunk(5);

var diesel = (n) => console.log(n + ' dieseldunkar');
diesel(5);