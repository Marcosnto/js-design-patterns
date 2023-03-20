import { isValidEmail, isAllLetters } from './validator.js';

const user = {
  firstName: 'John',
  lastName: 'Doe',
  username: 'johndoe',
  age: 42,
  email: 'john@doe.com',
};

const userProxy = new Proxy(user, {
  get: (target, property) => {
    console.log(
      `${new Date()} | The value of ${property} is ${target[property]}`
    );
  },

  set: (target, property, value) => {
    switch (property) {
      case 'username': {
        if (!isAllLetters(value)) {
          throw new Error('Username only accept letters');
        }
        if (value.length < 3) {
          throw new Error('Username needs to have more then 2 caracters');
        }
      }
      case 'email': {
        if (!isValidEmail(value)) {
          throw new Error('Invalid email');
        }
      }
      case 'age': {
        if (value < 18) {
          throw new Error('The age needs to be at least 18');
        }
      }
      default: {
        Reflect.set(target, property, value);
        console.log(
          `${new Date()} | The value of ${property} is ${target[property]}`
        );
        return true;
      }
    }
  },
});

userProxy.age = '19';
