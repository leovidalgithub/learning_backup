// console.log(_.defaults({a:1},{a:3,b:2}));

// let aa = ['A', 'B', 'C', 'D'];
// aa = _.chunk(aa, 2);
// console.log(aa);

let users = [
    { 'user': 'barney', 'age': 36, 'active': true },
    { 'user': 'fred', 'age': 40, 'active': false },
    { 'user': 'pebbles', 'age': 1, 'active': true }
];

console.log(_.find(users, {age:40, active:false}).user);

console.log(_.forInRight(users, value => console.log(value)));