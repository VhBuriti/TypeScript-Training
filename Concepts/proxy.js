/*
    Allows you to intercept and customize
    operations performed on objects. 
    It provides a way to intercept and customize
*/

const cat = {
  name: "Blue Steele",
  age: 7,
  breed: "Scottish Fold",
};

const handler = {
  get: function (obj, property) {
    console.log(`Accessing ${property} from object`);
    return obj[property];
  },
  set: function (obj, property, value) {
    if (property === "age") {
      if (value < 0) {
        obj[property] = 0;
      } else {
        obj[property] = value;
      }
    }
  },
};
const catProxy = new Proxy(cat, handler);
