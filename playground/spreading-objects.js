const user = {
    name: 'Matheus',
    age: 25
};

console.log(({
    ...user,
    location: 'Curitiba'
}));