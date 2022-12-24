// Hepimizin Matematik derslerinden bildiği üzere Dairenin Alanı = π x r2 şeklinde hesaplanır. Node.JS Javascript çalışma ortamında yarıçap değerini konsoldan parametre olarak girerek alanı bulmaya çalışacağız. Konsol çıktısı: Yarıçapı (Yarıçap) olan dairenin alanı: (Alan) şeklinde olmalıdır.

const arguments = process.argv.slice(2);

function circleArea(radius) {
    let area = Math.PI * radius * radius;
    console.log(`Yarıçapı ${radius} olan dairenin alanı: ${area}`);
}


circleArea(arguments[0] * 1);