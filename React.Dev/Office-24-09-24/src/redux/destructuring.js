// Object destructuring
const person = {
    name: "Pramod Kumar",
    age: 46,
    location: {
        city: "Noida",
        temprature: 92
    }
};

const {name: firstName = "Anonymous", age, location} = person;

console.log(`${firstName}` `${location.city}` `${age}`);

// Array Destructuring

const address = ["Faridabad", "Haryana", "India", "121004"];

const [city, state, country, pin] = address;
console.log(`${city}` `${state}` `${country}` `${pin}`);

const [, , , pin2 = '121005'] = address;
console.log(`${pin2}`);








