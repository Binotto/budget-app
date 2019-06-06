//
//Array destructuring
//

// const address = ['Jupiter Street', 'Philadelphia', 'Pensylvania', '71757274737'];

// const [, city, state ='New York'] = address;

// console.log(`You are in ${city} ${state}.`);

const item = ['Coffee (iced)', '$3.00', '$3.50', '$3.75'];
const [itemName, , mediumPrice] = item;

console.log(`A medium ${itemName} costs ${mediumPrice}`)

