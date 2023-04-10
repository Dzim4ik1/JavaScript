const person = {
    fullName:'Дмитрий Вожжов',
    age: 26,
    anyInfoAboutYourPlace: {
        galaxy: 'Milky Way',
        planet: 'Earth',
        planetNumberFromTheSun: 3,
       
    },
    hasCats: false,
    hobbies: ['run','computer games', 'reading books'],
    greeting(){
       return `hey, my name is ${this.fullName}`
    }

}

const copyPerson = { ...person, occupation:{
    work: 'manager',
    loveWork: false
}};

console.log(copyPerson.occupation.work);


const text = document.getElementById('text');
text.innerHTML = copyPerson.occupation.work;

console.log(person.greeting())