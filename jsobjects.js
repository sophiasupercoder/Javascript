let me = {
    age: 31,
    currentLocation: 'london',
}

me.hobbies = ['singing', 'dancing', 'reading', 'surfing']
delete me.age

console.log('my hobbies are ' + `${me.hobbies}`);

// for (let hobbie of me.hobbies) {
//     console.log('my hobby is ' + `${hobbie}`);
// }