const fs = require('fs');

// Dosya okuma işlemi

fs.readFile('password.txt', 'utf8', (err, data) => {
    if (err) console.log(err);
    console.log(data);
    console.log('Dosya okuma işlemi tamamlandı.');
})


// Dosya yazma işlemi

fs.writeFile('example.txt', 'KODLUYORUZZZZ', 'utf8', (err) => {
    if (err) console.log(err);
    console.log('Dosya yazma işlemi tamamlandı.');
})


fs.writeFile('example.json', '{"name" : "Fatih", "Age": "23" }', 'utf8', (err) => {
    if (err) console.log(err);
    console.log('JSON dosya yazma işlemi tamamlandı.');
})



// Dosyaya Veri Ekleme


fs.appendFile('example.txt', '\n KODLUYORUZZZ 22222', 'utf8', (err) => {
    if (err) console.log(err);
    console.log('Yeni veri eklendi.');
})


// Dosya Silme

fs.unlink('example.json', (err) => {
    if (err) console.log(err);
    console.log('Dosya silindi.');
})

// Klasörler oluşturmak

fs.mkdir('uploads/img', { recursive: true }, (err) => {
    if (err) console.log(err);
    console.log('Klasörler oluşturuldu.');
})


// Klasörler silmek

fs.rmdir('uploads', { recursive: true }, (err) => {
    if (err) console.log(err);
    console.log('Klasörler silindi.');
})