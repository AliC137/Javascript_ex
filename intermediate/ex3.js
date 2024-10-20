let person = {
    name: 'Ali',
    age: 21,
    city: 'Dushanbe'
};

console.log('Initial object:', person);

person.email = 'ali@davlatshoev.com';
console.log('After adding email:', person);

person.age = 22;
console.log('After updating age:', person);

delete person.city;
console.log('After removing city:', person);

let propertyToAdd = 'country';
person[propertyToAdd] = 'Tajikistan';
console.log('After dynamically adding country:', person);

let propertyToUpdate = 'name';
person[propertyToUpdate] = 'Sunatullo';
console.log('After dynamically updating name:', person);

console.log('Final object:', person);
