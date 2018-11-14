// let user = 'tom'

// if (user == 'tom') {
//     console.log('Hello Tom');
// } else {
//     console.log('Hello someone other than Tom');
// }
// let age = 18;
let age = window.prompt('Whats your age?', 100);
if (age >= 18) {
    alert('Welcome to the casino!');
} else if (age < 18) {
    alert('You are not allowed in')
}