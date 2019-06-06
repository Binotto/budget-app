const person = {
    name: 'Matheus Binotto',
    age: 25,
    location: {
        city: 'Curitiba',
        temp: 70,
    }
};


const {name, age} = person;
// const name = person.name;
// const age = person.age;

console.log(`${name} is ${age}.`);

const {city, temp} = person.location;

if(city && temp){
    console.log(`It's ${temp} ${city}`);
}

