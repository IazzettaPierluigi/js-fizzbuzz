// for (let i = 1; i <= 100; i++) {
//     document.getElementById('output').innerHTML += `<span>${i}<span>`
// }

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
        document.getElementById('output').innerHTML += '<span class="box" id="fizz">Fizz</span>';
    } else if (i % 5 ===0){
        document.getElementById('output').innerHTML += '<span class="box" id="buzz">Buzz</span>'
    } else if (i % 3 ===0 && i % 5 ===0){
        document.getElementById('output').innerHTML += '<span class="box" id="fizzbuzz">FizzBuzz</span>'
    } else {
        document.getElementById('output').innerHTML +=`<span class="box">${i}<span>`;
    }
}
