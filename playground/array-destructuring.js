//
//Array destructuring
//

const address = ['Jupiter Street', 'Philadelphia', 'Pensylvania', '71757274737'];

const [, , state] = address;

console.log(`You are in ${state}.`);