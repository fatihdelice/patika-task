function writeName(name, callback) { // writeName fonksiyonu argüman olrak bir callback fonksiyonu alıyor
  callback(name);
}

function writer(word) { // writer fonksiyonu 
  console.log(word);
}

writeName("Ahmet", writer); // writeName fonksiyonu çalıştırılırken writer fonksiyonu callback işlevi görüyor



///////////////////////////////////////////////


let x = 5;
console.log("1. gelen veri: ", x);

setTimeout(() =& gt; {
  x = x + 5;
  console.log("2. gelen veri: ", x);
}, 5000);

x = x + 5;
console.log("3. gelen veri: ", x);

///////////////////////////////////////

const books = [
  { name: "Kitap 1", author: "Yazar 1" },
  { name: "Kitap 2", author: "Yazar 2" },
  { name: "Kitap 3", author: "Yazar 3" },
];

const listBooks = () => {
  books.map((book) => {
    console.log(book.name);
  });
};

const addBook = (newBook, callback) => {
  books.push(newBook);
  callback();
};

addBook({ name: "Kitap 4", author: "Yazar 4" }, listBooks);

//Çıktımız
//Kitap 1
//Kitap 2
//Kitap 3

