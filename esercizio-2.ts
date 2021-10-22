import { Obj} from "./esercizio-1";

class User implements Obj{
    name: string;
    surname : string;
constructor (name: string, surname: string){
    this.name = name;
    this.surname = surname;
}
fullName() {
    console.log(`${this.name} ${this.surname}`)
    }
}

let student = new User ('Federica', 'Raponi');
student.fullName();