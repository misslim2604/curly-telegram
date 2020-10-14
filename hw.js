//buat program untuk mengecek nilai ganjil dan genap
//tipe data untuk number



//1. buat variable dengan nama number 
let number = 3
//2. beri nilai variable = 3
//3. apakah nilai variable 'number' habis dibagi 2
if(number % 2 === 0){
    console.log("angka genap")
}else{
    console.log("angka ganjil")
}

//4. jika habis, maka tampilkan pesan 'angka genap'
//5. jika ada sisa hasil bagi, maka tampilkan pesan 'angka ganjil'

let number = prompt("masukkan angka?");
if(!isNaN(number)&& number >=0){
    if (number%2===0){
        console.log("genap");
    } else {
        console.log("ganjil");
    }
}else {
    console.log("input salah");
}

let hasil;
let number = prompt("masukkan angka?");
if(!isNaN(number)&& number >=0){
    if (number%2===0){
        console.log("genap");
    } else {
        console.log("ganjil");
    }
    hasil = (number % 2 === 0) ? "genap" : "ganjil"
}else {
    console.log("input salah");
}

let a = 2 + 2;

switch (a) {
    case 3:
        alert( 'terlalu kecil' );
        break;
    case 4:
        alert( 'benar sekali" );
        break;
    case 5:
        alert( 'terlalu besar' );
        break;
        default:
        alert( "tidak tahu")
}

let angka = 3 + 3;

switch (a) {
    case 3:
        alert( 'terlalu kecil' );
        break;
    case 4:
        alert( 'benar sekali' );
    case 5:
        alert( 'terlalu besar' );
        break;
        default:
        alert( "tidak tahu" )
}
for (let lantai = 1; lantai <= 5; lantai++) {
    console.log(lantai)
}

for (let lantai = 20; lantai >= 1; lantai--) {
    console.log(lantai)
}

let number = 5;
while (number <=1) {
    console.log(number)
}

do {
    console.log(number);
    angka++;
} while( angka <= 1)
5
