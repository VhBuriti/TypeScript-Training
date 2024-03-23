/*
    High-level modules (main application logic) 
    should not depend directly on low-level 
    modules (like specific tools or libraries).

    Basically, it implies into creating more "generic" approches constructors and extending them for our desired code
*/

// Without DIP

class UsernamePasswordAuth {
  authenticate(username, password) {
    // logic to authenticate using username and password
  }
}

class User {
  login(username, password) {
    const auth = new UsernamePasswordAuth();
    return auth.authenticate(username, password);
  }
}

// With DIP

class AbstractAuthMethod {
  authenticate(credentials) {
    throw new Error("This method should be overridden.");
  }
}

class UsernamePasswordAuth extends AbstractAuthMethod {
  authenticate({ username, password }) {
    // logic to authenticate using username and password
  }
}

class EmailAuth extends AbstractAuthMethod {
  authenticate({ email, token }) {
    // logic to authenticate using email and a token sent to the email
  }
}
