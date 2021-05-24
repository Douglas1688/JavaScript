class Libro{
    constructor(title, author, year, genre){
        this.title = title;
        this.author = author;
        this.year = year;
        this.genre = genre;
    }

    infoLibro(){
        return `Título: ${this.title}, Author: ${this.author}, Year: ${this.year}, Genre: ${this.genre}.`;
    }
}

let books = []
let title, author, year, genre;
while (books.length<3){
    
    title = prompt('Ingrese el título: ');
    author = prompt('Ingrese el autor: ');
    year = prompt('Ingrese el año: ');
    genre = prompt('Ingrese el género: ').toLowerCase();

    if(title !='' &&
        author!=''&&
        !isNaN(year)&&
        year.length==4 &&
        (genre =='aventura' || genre == 'terror' || genre == 'fantasia')){
        books.push(new Libro(title,author,year,genre));
    }

    set

}
// const l1 = new Libro();
// const l2 = new Libro();
// const l3 = new Libro();