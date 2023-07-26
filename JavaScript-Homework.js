//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords() {
    for (const dog of dog_names) {
        if(dog_string.includes(dog)){
            return "Matched dog_name"
        } else {
            console.log("No Matches")
        }
    }
}

console.log(findWords())

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

let arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    for (let i = 0; i < arr.length; i++) {
        if(i % 2 === 0) {
            arr.splice(i, 1, "even index")
        } 
    }
}

replaceEvens(arr)
console.log(arr)

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]

// Codewars Problems //
//============ #1 ============//
function multiply(a, b){
    return a * b
}

console.log(multiply(2, 3))

//============ #2 ============//
function greet(){
    return 'hello world!'
}

console.log(greet())

//============ #3 ============//
function even_or_odd(number){
    if(number % 2 === 0){
        return 'Even'
    } else {
        return 'Odd'
    }
}

console.log(even_or_odd(32))

//============ #4 ============//
function repeat_str(repeat, string){
    if(repeat > 0) {
        return string.repeat(repeat);
    } 
}

console.log(repeat_str(4, 'hello'))