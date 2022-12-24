// 1 e ve kendisine bölünecek, 1 den büyük pozitif tam sayı olacak
const arguments = process.argv.slice(2);
function showPrimeNumbers(lownumber, hightnumber) {
    for (let i = lownumber; i <= hightnumber; i++) {
        let isPrime = true;
        for (j = 2; j <= i; j++) {
            if (i % j === 0 && i !== j) {
                isPrime = false;
            }
        }

        if (isPrime) {
            console.log(i);
        }
    }
}

showPrimeNumbers(arguments[0] * 1, arguments[1] * 1);

//console.log(process.argv.slice(2));