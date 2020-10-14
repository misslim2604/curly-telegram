class Person {
    constructor({firstName, lastName, job}) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.job = job;
        this.skills = [];
        Person._amount = Person._amount || 0;
        Person._amount++;
    }

    static get amount() {
        return Person._amount;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName(fN) {
        if (/[A-Za-z]\s[A-Za-z]/.test(fN)) {
            [this.firstName, this.lastName] = fN.split(' ');
        } else {
            throw Error('Bad fullName');
        }
    }

    learn(skill) {
        return this.skills.push(skill);
    }
}


class Job {
    constructor(company, position, salary) {
        this.company = company;
        this.position = position;
        this.salary = salary;
    }
}

const john = new Person({
    firstName: 'John',
    lastName: 'Doe',
    job: new Job('Youtbe', 'developer', 200000)
});

const marie = new Person({
    firstName: 'Marie',
    lastName: 'Singh',
    job: new Job('AWS', 'programmer', 150000)
});

console.log(john.firstName)
console.log(john.lastName)

console.log(marie.firstName)
console.log(marie.lastName)

marie.fullName = "Mike Smith";
console.log(marie.fullName)
console.log(marie.firstName)
console.log(marie.lastName)

john.learn('es6');
john.learn('es7');
console.log(john.skills)

marie.learn('programming');
marie.learn('Javascript');
marie.learn('python');
console.log(marie.skills)

console.log(Person)


class User {
    constructor(props) {
        let {email, password} = props;
        this.email = email;
        this.encryptedPassword = this.#encrypt(password);
    }

    #encrypt = (password) => {
    return `pretend-this-is-an-encrypted-version-of-${password}`
    }

    #decrypt = () => {
        return this.encryptedPassword.split(`pretend-this-is-an-encrypted-version-of-${password}`)[1];
    }

    authenticate(password) {
        return this.#decrypt() === password;
    }
}

let Marie = new User ({
    email: "marielim@digicotton.com",
    password: "000000"
})

const isAuthenticated = Marie.authenticate("000000");
console.log(isAuthenticated)
