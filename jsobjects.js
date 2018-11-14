let me = {
    age: 31,
    currentLocation: 'london',
}

me.hobbies = ['singing', 'dancing', 'reading', 'surfing']
delete me.age

for (let hobbie of me.hobbies) {
    console.log('my hobby is ' + `${hobbie}`);
}