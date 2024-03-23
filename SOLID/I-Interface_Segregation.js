/*
    A class should not be forced to
    implement interfaces it does not use.

    This is most commom applied into TypeScript

    It implies to create more target specific interfaces for our applications.
*/

// Before
class Worker {
  work() {
    console.log("I am a worker and I am working")
  }
  eat() {
    console.log("I am a worker and I am eating")
  }
}

// After applying ISP
class Worker {
  work() {
    console.log("I am eating")
  }
}

class Eater {
  eat() {
    console.log("I am eating")
  }
}
