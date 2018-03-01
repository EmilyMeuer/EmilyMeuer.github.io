/*
    2/28/2018
    Intro to Javascript classes
*/

function PersonBadPractice(name, age, gender) {
    this.name   = name;
    this.age    = age;
    this.gender = gender;
    
    this.print  = function() {
        console.log(this.name, this.age, this.gender);
    }
} // Person class

window.onload   = function() {
    var p   = new PersonBadPractice("Emily", "22", "F");
    p.print();
} // window.onload
