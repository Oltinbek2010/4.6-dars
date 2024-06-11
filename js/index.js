// Funksiyaga oid masalalar

// 1-masala

// function ikkiSonYigindisi(num1, num2) {
//     let sum = 0;
//     sum = num1 + num2;
//     return sum;
// }

// 2-masala

// function ikkiSonpaytmasi(num1, num2) {
//     let p = 0;
//     p = num1 * num2;
//     return p;
// }

// 3-masala

// function bittaSonningKvadrati(num1) {
//     let kvadrat;
//     kvadrat = num1 ** 2;
//     return kvadrat;
// }

// 4-masala

// function bittaSonningKubi(num1) {
//     let kub;
//     kub = num1 ** 3;
//     return kub;
// }

// 5-masala

// function uchtaSonningOrtaArifmetiki(num1, num2, num3) {
//     let ortaArifmetik = 0;
//     ortaArifmetik = (num1 + num2 + num3) / 3;
//     return ortaArifmetik;
// }

// 6-masala

// function bittaSonningJuftlikiniTekshiruvchi(num1) {
//     let result;
//     if (num1 % 2 == 0) {
//         result = `true`;
//     }else{
//         result = `false`;
//     }
//     return result;
// }

// 7-masala

// function bittaSonningToqliginiTekshiruvchi(num1) {
//     let result;
//     if (num1 % 2 == 1) {
//         result = `true`;
//     }else{
//         result = `false`;
//     }
//     return result;
// }
    
// 8-masala

// function ikkiSonningKattasi(num1, num2) {
//     let max;
//     if (num1 > num2) {
//         max = num1;
//     } else {
//         max = num2;
//     }
//     return max;
// }

// 9-masala

// function ikkiSonningKichigini(num1, num2) {
//     let min;
//     if (num1 > num2) {
//         min = num2;
//     } else {
//         min = num1;
//     }
//     return min;
// }

//10-masala
 
// function oshaSongachaBolganSonlarYigindisi(num1) {
//     let i = 1;
//     let sum = 0;
//     while (i <= num1) {
//         sum = sum + i;
//         i++;
//     }
//     return sum;
// }

// 11-masala

// function bittaSonningFaktoriali(num1) {
//     let p = 1;
//     let i = 1;
//     while (i <= num1) {
//         p *= i;
//         i++;
//     }
//     return p;
// }

// 12-masala

// function yoshiniAniqlash(age) {
//     age = +prompt(`Iltimos, yoshingizni kiriting!`)
//     let result;
//     if (age >= 18) {
//         result = `Katta`;
//     } else { 
//         result = `Kichik`;
//     }
//     return result;
// }

// 13-masala

// function ikkiSonningBolinishi(num1, num2) {
// num1 = +prompt(`1-chi sonni kiriting`)
// num2 = +prompt(`2-chi sonni kiriting`)
// let result;

// if (num2 % num1 == 0) {
//     result = `True`;
// } else {
//     result = `False`;
// }
// return result;
// }

// 14-masala

// function sonningMusbatliginiTekshirish(num1) {
//     let result;
//     if (num1 > 0) {
//         result = `true`;
//     } else if (num1 == 0) {
//         result = ``;
//     } else {
//         result = `false`;
//     }
//     return result;
// }

// 15-masala

// function sonningMusbatliginiTekshirish(num1) {
//     let result;
//     if (num1 < 0) {
//         result = `false`;
//     } else if (num1 == 0) {
//         result = ``;
//     } else {
//         result = `true`;
//     }
//     return result;
// }

// 16-masala

// function kvadratIldizniTop(num1) {
//     return Math.sqrt(num1);
// }

// 17-masala

// function farqniTopish(son1, son2) {
//     return son1 - son2;
// }

// 18-asala

// function uchtaSondanEngKattasiniTop(num1, num2, num3) {
//     let max;
//     if (num1 > num2) {
//         max = num1;
//     }
//     if (num1 < num2) {
//         max = num2;
//     }
//     if (max < num3) {
//         max = num3;
//     }
//     return max;
// }

// 19-masala

// function uchtaSondanEngKichiginiTop(num1, num2, num3) {
//     let min;
//     if (num1 < num2) {
//         min = num1;
//     }
//     if (num1 > num2) {
//         min = num2;
//     }
//     if (min > num3) {
//         min = num3;
//     }
//     return min;
// }

// 20-masala

// function ondanKattaYokiKichik(num1) {
//     let result;
//     if (num1 > 10) {
//         result = `Katta`;
//     } else {
//         result = `Kichik`;
//     }
//     return result;
// }

// 21-masala

// function ikkiSonningYigindisiJuftYokiToqliginiTop(num1, num2) {
//     let result;
//     if ((num1 + num2) % 2 == 0) {
//         result = `true`;
//     } else {
//         result = `false`;
//     }
//     return result;
// }

// 22-masala

// function birSonBeshgaKarraliliginiTop(num1) {
//     let result;
//     if (num1 % 5 == 0) {
//         result = `true`;
//     } else {
//         result = `false`;
//     }
//     return result;
// }

// 23-masala

// function ikkiSonBirBirigaKattaliginiTop(num1, num2) {
//     let result;
//     if (num1 > num2) {
//         result = `true`;
//     } else {
//         result= `false`;
//     }
//     return result;
// }

// 24-masala

// function birSonYettigaBolinishi (num1) {
//     let result;
//     if (num1 % 7 == 0) {
//         result = `true`;
//     } else {
//         result = `false`;
//     }
//     return result;
// }

// 25-masala

// function sonningOninchiDarajasi (num1) {
//     let result;
//     result = num1 ** 10;
//     return result;
// }

// 26-masala

// function ikkiSonningOrtArifmetik (num1 ,num2) {
//     let result;
//     result = (num1 + num2) / 2;
//     return result;
// }

// 27-masala

// function sonningYuzdanKichikYokiKattaligi (num1) {
//     let result;
//     if (num1 > 100) {
//         result = `Katta`;
//     } else {
//         result = `Kichik`;
//     }
//     return result;
// }

// 28-masala

// function sonningIkkigaBolinishiniTop (num1) {
//     let result;
//     if (num1 % 2 == 0) {
//         result = `true`;
//     } else {
//         result = `false`;
//     }
//     return result;
// }

// 29-masala

// function ikkiSonningKopaytmasiningKvadratIldizi(num1, num2) {
//     let kvadratIldizi;
//     let result;
//     result = (num1 * num2);
//     kvadratIldizi = Math.sqrt(result);
//     return kvadratIldizi;
// }

// 30-masala

// function ikkiSonningQoshilishiningUchgaTengliginiTop(num1, num2, num3) {
//     let result;
//     if ((num1 + num2) == num3) {
//         result = `true`;
//     } else {
//         result = `false`;
//     }
//     return result;
// }

// For bilan ishlanadigan masalalar

// 1-masala

// function birdanOngachaSonlarniChiqaribBering() {
//     let sum = 0;
//     for (let i = 1; i <= 10; i++) {
//         sum = sum + i;
//     }
//     return sum;
// }

// 2-masala

// function birdanBeshgachaBolganSonlarningKopaytmasi() {
//     let p = 1;
//     for (let i = 1; i <= 5; i++) {
//         p *= i;
//     }
//     return p;
// }

// 3-masala

// function faktorialniTop(num1 = +prompt(`Sonni kiriting`)) {
//     let faktorialUchun = 1;
//     for (let i = 1; i <= num1; i++) {
//         faktorialUchun *= i;
//     }
//     return faktorialUchun;
// }

// 4-masala

// function birdanBerilganSongachaJuftlariniChopEting(num1 = +prompt(`Sonni kiriting`)) {
//     let result;
//     for (let i = 2; i <= num1; i += 2) {
//         result = i;
//     }
//     return result;
// }

// 5-masala

// function birdanBerilganSongachaToqlariniChopEting(num1 = +prompt(`Sonni kiriting`)) {
//     let result;
//     for (let i = 1; i <= num1; i += 2) {
//         result = i;
//     }
//     return result;
// }