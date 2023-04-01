const object = {
    fullname:'Дмитрий Вожжов',
    age: 26,
    anyInfoAboutYourPlace: {
        galaxy: 'Milky Way',
        planet: 'Earth',
        planetNumberFromTheSun: 3,
       
    },
    hascats: false,
    hobbies: ['run','computer games', 'reading books'],
    greeting(){
        `hey, my name is ${this.fullname}`
    }

}

const copyObject = { ...object, occupation:{
    work: 'manager',
    loveWork: false
}};

console.log(copyObject.occupation.work);


const text = document.getElementById('text');
text.innerHTML = copyObject.occupation.work;