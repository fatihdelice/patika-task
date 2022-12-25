const fs = require('fs');

// CREATE
fs.writeFile('employees.json', '[{"name" : "Employee 1 Name", "salary": 2000 },', 'utf8', (err) => {
    if (err) console.log(err);
    console.log('JSON dosya yazma işlemi tamamlandı.');
})

// READ
fs.readFile('employees.json', 'utf8', (err, data) => {
    if (err) console.log(err);
    console.log(data);
    console.log('Dosya okuma işlemi tamamlandı.');
})

// UPDATE
fs.appendFile('employees.json', '{"name" : "Employee 2 Name", "salary": 4000 }]', 'utf8', (err) => {
    if (err) console.log(err);
    console.log('Yeni veri eklendi.');
})

// DELETE
fs.unlink('employees.json', (err) => {
    if (err) console.log(err);
    else console.log('file removed');
})