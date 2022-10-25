// // 1  undefined or error
// var hello = 'world';
// console.log(hello);

// // 2 undefined because its calling a function that has not existed yet // real answer is magnet
// var needle = 'haystack';
// function test(){
//     var needle = 'magnet'
//     console.log(needle);
// }
// test();



// //3  will log super cool
// var brendan = 'super cool';
// function print() {
//     brendan = 'only okay';
//     console.log(brendan);
// }
// console.log(brendan);

// //4 
// var food = 'chicken';
// console.log(food);
// function eat() {
//     food = 'half-chicken'
//     console.log(food);
//     var food = 'gone';
// }
// eat();

// //5  undefined cause it runs into the first food = chicken but food isnt defined
// var mean = function(){
//     food = 'chicken';
//     console.log(food);
//     var food = 'fish';
//     console.log(food);
// }
// console.log(food);
// mean();

//6 first console log will be undefined
var genre = 'disco';
console.log(genre)
function rewind() {
    genre = 'rock';
    console.log(genre);
    var genre = 'r&b';
    console.log(genre);
}
rewind();
console.log(genre);

//7 