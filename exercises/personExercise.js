class User {

    constructor (firstName, LastName) {
        this.firstName = firstName
        this.LastName = LastName
    }

    get fullName () {
        return `${this.firstName} ${this.LastName}`
    }

    set fullName (newName) {
        const [first, last] = newName.split(" ")
        this.firstName = first;
        this.LastName = last;
    }
}