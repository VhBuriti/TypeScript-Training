/*
    A class should have only
    one job or reason to change
*/

class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }

  // Handles user authentication
  authenticate(inputPassword) {
    return this.password === inputPassword;
  }

  // Saves user to database
  save() {
    // Assume we have a connection to a db and a method to save a user
    db.saveUser(this);
  }
}

const user = new User("Maurice", "secret");
if (user.authenticate("secret")) {
  user.save();
}


// Comparison

/// Before SRP

class User {
  constructor(name) {
    this.name = name;
  }

  toJSON() {
    return JSON.stringify(this);
  }
}

/// After SRP

class User {
  constructor(name) {
    this.name = name;
  }
}

class UserSerialize {
  static toJSON(user) {
    JSON.stringify(user);
  }
}
