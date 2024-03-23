/* 
    Objects of a superclass should be able to be
    replaced with objects of a subclass without
    affecting the correctness of the program.
*/

class Bird {
  fly() {
    console.log("I can fly");
  }
}

class Ostrich extends Bird {
  fly() {
    throw new Error("Can't fly");
  }

  run() {
    console.log("I can run");
  }
}
