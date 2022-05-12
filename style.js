//-----------------MODERN JAVASCRIPT-----------------------------------------------


//-------01) one system------------

// let number = () => console.log(200);
// number();



//---------02) two system-----------

// let  number = () =>{
//     return 10;
// }
// console.log(number());

//------------03) three system-----------

// let number = (a,b) => a+b;
// console.log(number(5,6));


//-----------04) system 4----------------

// let number = (a,b) =>{
//     return a+b;
// }
// console.log(number(10,15));



//------------ Truthly / Falsy-----------------
// var myVar = "";

// if(myVar){
//     console.log("It's Truthly");
// }
// else{
//     console.log("It's Falsy"); //Return Falsy
// }



//----------Truthly / Falsy-----------------
// var myVar = true;

// if(myVar){
//     console.log("It's Truthly");
// }
// else{
//     console.log("It's Falsy"); //Return Truthly
// }



//---------Ternary Operator-------------------


//---------big one---------
// var age = 18;

// var set;
// if(age>=18){
//     set = "You are an adult";
// }
// else{
//     set =  "You are child";
// }
// console.log(set);


//-----------sort area from big--------
// var age = 9;
// var set = age>=18 ? "You area an adult": age < 10 ? "you are Child" : "You are young";
// console.log(set);




//----------------------- ARRAY --------------------------------------



//---------Array find() method-----------------

// var number = [1,2,3,4,5,6,7,8,9];

// var result = number.find(function(currentValue){
//     return currentValue < 2;
// });


// ----------------Array findIndex() method--------------


// var myindex = number.findIndex(function(myvalue){
//     return myvalue > 8;
// })

//----------Array filter() method----------

// var myfilter = number.filter(function(myvalue){
//     return myvalue < 8;
// })

//----------Array slice() method-----------

// var myslice = number.slice(2,5);
// console.log(myslice);


// console.log(number);
// console.log(result);
// console.log(myindex);
// console.log(myfilter);




//------------Array splice() method--------------

// var number = [1,2,3,4,5,6,7,8,9];
// var result = number.splice(1,3, 10,11,12);
// console.log(result);
// console.log(number);


//----------------Array concat() method---------------


// const a = [1,2,3,4,5];
// const b = [6,7,8,9,10];
// const c = [6,7,8,9,10];
// const result = a.concat(b,c);
// console.log(result);



//------------Array map() method--------------------

// var a = [1,2,3,4,5,6];
// var result = a.map((num) => {
//     return num * 2;
// })
// console.log(a);
// console.log(result);



//----------------Array reduce() method------------------
// var a = [1,2,3,4,5,6];
// var sum = a.reduce((currentValue, prevValue) => {
//     return currentValue + prevValue;
// });
// console.log(sum);


//-----------------Array End----------------------




//------------------- for loop -----------------------


// for(i=0; i<=10; i++){
//     console.log(i);
// }

//Output: 1,2,3,4,5,6,7,8,9,10


// var aboutMyself = {
//     name : "Naeem",
//     roll : 900177,
//     GPA  : 4.00
// }
// for(property in aboutMyself){
//     console.log(property);
// }

//Output: name roll GPA


// var number = [1,2,3,4,5];
// for(myvalue in number){
//     console.log(myvalue);
// }

//Output : 0,1,2,3,4 "That's mean it print index number"


// var number = [1,2,3,4,5];
// for(myvalue of number){
//     console.log(myvalue);
// }

//Output : 1,2,3,4,5 "It's print arry value"


// var myString = "I love Bangladesh";
// for(mySt in myString){
//     console.log(mySt);
// }

//Output : 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16 "It's print String index number"

// var myString = "I love Bangladesh";
// for(mySt of myString){
//     console.log(mySt);
// }

//Output :
    // I

    // l
    // o
    // v 
    // e 

    // B 
    // a 
    // n 
    // g 
    // l 
    // a 
    // d 
    // e 
    // s 
    // h 

//------------------- for loop End-----------------------


//------------------  Important object tricks -----------------------

// var myAbout = {
//     name : "Nazmul",
//     roll : 900177,
//     GPA  : 4.00
// }
// var keys = Object.keys(myAbout);
// console.log(keys);

// var myvalue = Object.values(myAbout);
// console.log(myvalue);

// var myentry = Object.entries(myAbout);
// console.log(myentry);




// var a = 5;
// var b = 7;
// var c = "The sum of a + b is : "+ (a+b);

// var mySelf = {
//     name : "Naeem",
//     roll : 900176,
//     GPA  : 4.00,
//     a,
//     b,
//     c

// }
// console.log(mySelf);

//------------------  Important object tricks End--------------------

//------------------  Spread Operator start--------------------------

// var  myArray = [1,2,3,4];
// var myNewArray = [myArray[0], myArray[1], myArray[2], myArray[3], 5,6,7];

// console.log(myArray);
// console.log(myNewArray);

//-----------This one short area ------------

// var  myArray = [1,2,3,4];
// var myNewArray = [...myArray, 5,6,7];

// console.log(myArray);
// console.log(myNewArray);



// var a = [1,2,3,4,5];
// var b = [6,7,8,9,10];

// var c = [...a, ...b];
// console.log(c);

// Output:
// [
//     1, 2, 3, 4,  5,
//     6, 7, 8, 9, 10
// ]

//------------------  Spread Operator End ---------------------------


//------------------  Rest  Operator Start ---------------------------

//---------simple function---------------
// function myFun(a,b,c){
//     console.log(a,b,c);
// }
// myFun(1,2,3);
//----Output : 1 2 3


// function myOne(a,b){
//     console.log(a,b);
// }
// myOne(1,2,3,4);
//----Here print just 1 and  2. others values were ignored


// function myFunc(){
//     console.log(arguments);
// }
// myFunc(1,2,3,4,5,6);

//--- Output : [Arguments] { '0': 1, '1': 2, '2': 3, '3': 4, '4': 5, '5': 6 }


// function myFunc(...naeem){
//     console.log(naeem);
// }
// myFunc(1,2,3,4,5,6);




//------------------  Rest  Operator End ---------------------------


//------------------ Destructuring start ---------------------------

// const user = {
//     fname : "Nazmul",
//     mname : 'Islam',
//     lname : "Naeem",
//     roll : 900177,
//     city : "Rangpur",
//     education : {
//         degree : "Diploma in Engineering"
//     }
// }

// const {fname: myfName} = user;
// const {mname: mymName} = user;
// const {lname: mylName} = user;
// console.log("My name is ",  myfName, mymName, mylName);

// const {education :{degree: myEducation}} = user;
// console.log("I am a student of ", myEducation);

//------------------ Destructuring End -----------------------------


