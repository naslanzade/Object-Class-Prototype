"use strict"

//homeWork
// let name="Musa";
// let newArr=[];

// function reverseStr(name){
//     for(let i=0; i<name.length;i++){
//         newArr.push(name[i]);
//     }

//     let reversed=newArr.reverse();
//     console.log(reversed.toString().replaceAll(","," "));
// }

// reverseStr(name);

// const reverseStr= str=>{
//     return str.split("").reverse().join("");
// }

// console.log(reverseStr("Result"))


//object

// let stu = {
//     name: "Resul",
//     surname: "Hesenov",
//     age: 15
// }

// stu.address="Xalqlar"

// console.log(stu.address)

// for (const key in stu) {
//    console.log(key+"/"+stu[key])
// }

// let count = 0;


// for (const key in stu) {
//     count++;
// }

// console.log(count);


// let stu1 = {
//     id: 1,
//     name: "Resul",
//     surname: "Hesenov",
//     age: 15
// }


// let stu2 = {
//     id: 2,
//     name: "Gultac",
//     surname: "Ceferova",
//     age: 18
// }

// let stu3 = {
//     id: 3,
//     name: "Nicat",
//     surname: "Nozruzade",
//     age: 21
// }

// let stu4 = {
//     id: 4,
//     name: "Musa",
//     surname: "Afandiyev",
//     age: 19
// }


// let stu5 = {
//     id: 5,
//     name: "Anar",
//     surname: "Huseynov",
//     age: 36
// }

// // let students=[stu1,stu2,stu3,stu4,stu5]

// // for (const iterator of students) {
// //     console.log(iterator.name)
// // }

// // let group={
// //     name:"P414",
// //     capacity:3,
// //     addStudent:function(){
// //         console.log(this)
// //     }
// // }

// // group.addStudent();


// let group = {
//     name: "P414",
//     capacity: 4,
//     students: [],
//     addStudent: function (student) {
//         if (this.students.length == this.capacity) {
//             console.log("Group is already full")
//             return;
//         }

//         let stu = this.students.find(s => s.id == student.id);
//         if (stu != undefined) {
//             console.log("This student already exist");
//             return;
//         }

//         this.students.push(student);

//     },
//     updateStudent: function (student) {
//         let existStudent = this.students.find(s => s.id == student.id);
//         if (student.name != undefined) {
//             existStudent.name = student.name;
//         }
//         if (student.surname != undefined) {
//             existStudent.surname = student.surname;
//         }
//         if (student.age != undefined) {
//             existStudent.age = student.age;
//         }

//     },
//     getAllStudents: function () {
//         return this.students;
//     },
//     deleteStudent:function(id){

//     //  this.students = this.students.filter(s=>s.id!=id)

//     let existStudentIndex=this.students.findIndex(s=>s.id==id);
//     this.students.splice(existStudentIndex,1);
//     }
// }


// group.addStudent(stu5);
// group.addStudent(stu4);
// group.addStudent(stu3);
// group.addStudent(stu2);

// console.log(group.getAllStudents());

// let updatedStudent = {
//     id: 5,
//     name: "Anar",
//     surname: "Huseynov",
//     age: 26
// };

// group.updateStudent(updatedStudent);

// console.log(group.getAllStudents());


// group.deleteStudent(5);

// console.log(group.getAllStudents());


// group.deleteStudent(5);

//  console.log(group.getAllStudents());


// class Car{
//     constructor(name,speed){
//         this.name=name;
//         this.speed=speed
//         this.color="Red"
//     }
// }

// let car1=new Car("Mercedes",500);

// console.log(car1.name+"/"+car1.color+"/"+car1.speed);


// class Car{
//     constructor(name){
//         this.name=name;      
//         this.color="Red"
//     }

//     speed(data){
//         console.log(600+data)
//     }
// }

// let car2=new Car("Toyota");
// car2.speed(400);


// class Car{
//     constructor(color,speed){          
//         this.color=color
//         this.speed=speed            
//     }

//     speedTest(data){
//         console.log(600+data)
//     }
// }

// class BMW extends Car{
//     constructor(marka,color,speed){
//         super(color,speed);
//         this.marka=marka;
//     }
// }

// let bmw=new BMW("F130","yellow")
// let car2=new Car("Toyota");
// // console.log(bmw.color);

// bmw.speedTest(200);


// class Test{
//     static eating(){
//         console.log("eat")
//     }
// }
// Test.eating();


// let numbers=[1,2,3,4,5,6,7];

// let names=["Resul","Ramil"]
// // Array.prototype.musa="Yatma";

// Array.prototype.sumOfNumbers=function(){

//     let sum=0;
//     for(let i=0;i<this.length;i++){
//         sum+=this[i];
//     }
//    return sum;
// }

// // console.log(numbers.musa);
// // console.log(names.musa);

// console.log(numbers.sum());


// Array.prototype.getBiggestNumber=function(){
//     console.log(Math.max(...this));
// }

// let numbers=[1,2,3,4,5,6,7];
// numbers.getBiggestNumber();


// String.prototype.lengthOfString=function(){
//     console.log(this.length);
// }

// let text="Salam";
// text.lengthOfString();


// Number.prototype.powOfNumber=function(num){
//     console.log(Math.pow(this,num))
// }

// let number=5;
// number.powOfNumber(2);