const person = {
    name: 'Matheus Binotto',
    age: 25,
    location: {
        city: 'Curitiba',
        temp: 70,
    }
};


const {name: firstName = 'Anonymous', age} = person;
// const name = person.name;
// const age = person.age;

console.log(`${firstName} is ${age}.`);

const {city, temp: temperature } = person.location;

if(city && temperature){
    console.log(`It's ${temperature} ${city}`);
}

