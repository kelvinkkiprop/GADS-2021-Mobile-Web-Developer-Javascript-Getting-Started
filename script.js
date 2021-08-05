//----------------------------------------------------Script----------------------------------------------------//
//Numbers
let price = 20.45;
console.log('price is '+price);
console.log('Variable value is '+typeof price);
console.log('Number to string '+typeof price.toString());

let amount = Number.parseFloat('1.4564564854');
console.log('Parsed number '+ amount);

//String
let fName = "Kelvin";
let lName = "Kiprop";

console.log('Concantinated names '+fName+' '+lName);
console.log('Fname to lowercase '+fName.toLocaleLowerCase());
console.log('Fname to uppercase '+fName.toLocaleUpperCase());

//Objects
let person = {
    firstName: "Joe",
    lastName: "Doe",
}
console.log(person);

//Boole
// let isIt = true;
let isIt = false;
if(!isIt){
    console.log("Bolean is "+isIt);
}


//Conditions
if(5===5){
    console.log('The same');
}
if('KK'!=='kk'){
    console.log('Not equal');
}else{
    console.log('Equal')
}

//Convert precisison
let sum = 1.1+1.3;
console.log("Fixed precisison "+sum.toFixed(2));
console.log("Not fixed precisison "+sum);

//Ternary operator
let cost = 11;
let check = cost>10 ? 'Yes' : 'No';
console.log(check);

//Loops
for(let i=0; i<5; i++){
    console.log(i);
}
let j = 1;
while(j<5){
    console.log(j);  
    j++;  
}
let k=1;
do{
    console.log(k);
    k++;
}while(k<10)


//Functions
function showMessage(message){
    console.log(message);
}
showMessage("Hello from a function");

let myFunction = function(){
    console.log("Hello form a variable function");
    // return "Hello form a variable function";    
} 
myFunction();
// console.log(myFunction());

function iReturnValue(){
    return "Hello I return value function";    
} 
console.log(iReturnValue());

function myFunction1(){
    function fn(){
        return 'I am a nested function';
    }
    return fn();
}
console.log(myFunction1());

//Objects and DOM
let student = {
    name: "Kelvin Kiprop",
    age: 26,
    partTime: false,
}
console.log("Value from student object "+student.age);

//Styling DOM Elemenents
const domH1 = document.getElementById('domH1Element');
domH1.style.color = '#ff0000'
domH1.style.backgroundColor = '#0000ff'


//Buttons interaction
btnClickMe = document.getElementById('btnClickMe');
btnClickMe.addEventListener('click', function(){
    alert('You clicked me');
});

//Showing and hiding documents
 const nav = document.getElementById('nav');
 nav.addEventListener('click', function(){
    if(nav.classList.contains('myNavItem')){
       nav.classList.remove('myNavItem');
    }else{
       nav.classList.add('myNavItem');
    }
 });


//Arrays
// let myArray = ['Kelvin Kiprop', 26, true];
let myArray = Array.of('Kelvin Kiprop', 26, true);
console.log(myArray);
myArray[1] = 35;
console.log(myArray[1]);
console.log(Array.isArray(myArray));

//Manipulating arrays
let values = Array.of('Kelvin Kiprop', 26, true);
values.push('Junior'); //Adds element at the end 
console.log(values);
values.pop(); //Remove last element 
console.log(values);
values.shift(); //Remove first element
console.log(values);
values.unshift("Hello", 'World'); //Add elemnst in front of the array
console.log(values);

//SLice ans splice
let myValues = ['a', 'b', 'c', 'd'];
console.log(myValues);
let myNewValues = myValues.slice(1,3);//Takes elements at between gived indexes
console.log(myNewValues);

let myValues1 = ['a', 'b', 'c', 'd'];
let myNewValues11 = myValues1.splice(1, 0, 'Kip');//Inserts elements at a given index and the items that needs to be deleted
console.log(myValues1);


//Array searching and looping
let searchMyArray = ['a', 'b', 'c', 'd', 'e', 'f'];
let set = searchMyArray.filter(function (item){
    console.log(item);
    return item > 'b';
});
console.log(set);

searchMyArray.forEach(function (item, index){
    console.log(item);
    console.log(searchMyArray.indexOf(item));
    console.log(index);
});

//----------------------------------------------------./Script----------------------------------------------------//
