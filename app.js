// Q1
// var student = {
//     name : 'Syed Ahsan Ali',
//     roll : "75"
// }
// for (var i in student){
//     console.log(student[i])
// }

// Q2
// var student = {
//     name : 'Syed Ahsan Ali',
//     roll : "75"
// }
// for (var i in student){
//     console.log(student[i])
// }
// delete student.roll;
// for (var i in student){
//     console.log(student[i])
// }

// Q3
// var student = {
//     name : "David Rayy",
//     sclass : "VI",
//     rollno : 12 }
//     console.log(Object.keys(student).length)

// Q4
// var library = [{
//     author : "Bill Gates",
//     title : "The Road Ahead",
//     readingStatus : true
// },
// {
//     author : "Steve Jobs",
//     title : "Road to Apple",
//     readingStatus : true
// },{
//     author : "Babu Bhaiya",
//     title : "Babu Rao ka Style",
//     readingStatus : false
// }
// ]
// for(var i in library){
//     for(var j in library[i]){
//         console.log(library[i][j])

//     }
    // console.log(library[i])
// }
// Q5
// var a=+prompt('Enter radius');
// var b=+prompt('Enter height');
// var vol = {
//     r : a,
//     he : b,

// }

// var volc=(3.14*(vol.r*vol.r)*vol.he);
// document.write("Volume of Culinder is "+volc)

// Q6
// var library = [ 
//     {
//         title:  'The Road Ahead',
//         author: 'Bill Gates',
//         libraryID: 5
//     },
//     {
//         title: 'Walter Isaacson',
//         author: 'Steve Jobs',
//         libraryID: 4
//     },
//     {
//         title: 'Mockingjay: The Final Book of The Hunger Games',
//         author: 'Suzanne Collins',
//         libraryID: 3
//     }];
//     for(var i in library){
//         for(var j in library){
//            if(library[i] > library[j]){
// var temp = library[j];
// library[j]=library[j+1];
// library[j] = temp;
//            }
//         }

//     }
// for(var i in library){
//     console.log(library[i])
// }

// Windows Location Change
// function change(){
//     // window.location.replace("new.html");
//     window.open("https://www.google.com/",'window','width =700,height = 600,top = 100, left=500 ')
// }
// function back(){
//     window.location.replace("index.html");
// }

// ES6
// const a=3.14;
// console.log(`Value Of Pi is ${a}`);

// var arr=["Ahsan","Ali"];
// var arr1=[...arr,"Tanzeel"];
// console.log(arr1);

// OBEJCT DESTRUCTIOON
// var sch = {
//     name : "Saylani",
//     branch : 2
// }
// console.log(sch)
// let{name,branch}=sch;
// console.log(branch);
// console.log(name);

// TERNARY
// var age=20;
// var check=age > 30 ? "TRUE" : "FALSE";
// console.log(check)

// PROMISE

// var p=new Promise(function (resolve,reject){
//     var age=22;
//     if(age > 30){
//         resolve("GREATER")
//     }
//     else{
// reject("LESSER")
//     }

// })
// p.then(function(data){
// console.log(data);
// })
// .catch(function(error){
//     console.log(error)
// })