const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    if (url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('</h2>Index Sayfasına hoşgeldiniz</h2>');
    }
    else if (url === '/hakkimizda') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h2>Hakkımızda sayfasına hoşgeldiniz</h2>');
    }
    else if (url === '/iletisim') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h2>İletişim sayfasına hoşgeldiniz</h2>');
    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.write('<h2>404 SAYFA BULUNAMADI</h2>');
    }

    res.end();
});


const port = 5000;

server.listen(port, () => {
    console.log(`Sunucu ${port} portunda başlatıldı.`);
});

