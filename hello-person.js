class person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
}

function helloPerson(person){
    console.log("Hello " + person.name);
}

const Alonso = new person("Alonso", 23);

helloPerson(Alonso);