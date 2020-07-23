//Chap 1
//task1
var greeting = "Hello user";
alert(greeting);
// task2
var message = "Error! Please enter a valid password";
alert(greeting);
alert(message);
// task3
var land = "Welcome JS Land \n happy coding";
alert(land);
// task4
var welcome = "Welcome JS Land";
var code = "happy coding";
alert(welcome);
alert(code);
//task5
var console_msg = "Hello...I can run JS through my web browser's console";
console.log(console_msg);
// end of chap1
// chap2
// task1
var username;
// task2
var myName = "Nimra Sharif";
// task3
var message;
var message = "Hello World";
alert(message);
// task4
var std_name = "Ali";
var std_age = 20;
var std_msg = "Web Developer";
alert(std_name);
alert(std_age + "years old");
alert(std_msg);
//task5
var pizza = "PIZZA \n PIZZ \n PIZ \n PI \n P";
alert(pizza);
// task6
var email = "rosegulab505@gmail.com";
alert("My email address is " + email);
// task7
var book = "A smarter way to learn JavaScript";
alert("I am trying to learn from the Book " + book);
// task8
var content = "Yah! I can write HTML content through JavaScript";
document.write(content);
document.write("<br>");
// end of chap2
// chap 3
// task1
var my_age = 20;
alert("I am " + age + " years old");
// task2
var visit = 2;
alert("You have visited this site " + visit + " times");
// task3
var birthyear = 1999;
document.write("My birth year is " + birthyear);
document.write("<br>");
//task4
document.write("Data type of any declared variable is number");
document.write("<br>");
//task5
var visitor_name = "John Doe";
var product = "T-shirt";
var quantity = 5;
document.write(visitor_name + " ordered " + product + quantity + " (s) on XYZ Clothing store");
//end of chap3
//start of chap4
//task1
var variable1,
    variable2,
    variable3;
//task2
var first;
var _firstName;
var firstName;
var firstName2;
var $first;
//task3
//     var 2illegal;
//    var /illegal;
//    var !illegal;
//    var ?Illegal;
//    var ;illegal;
//task4
var heading = "Rules for naming JS variables";
document.write(heading);
document.write("<br>");
var varnames = "Variable  names can only contain LETTER,DOLLAR SIGN,NUMBERS,UNDERSCORE.";
document.write(varnames);
document.write("<br>");
var namebegin = "Variables must begin with a LETTER,UNDERSCORE or $.";
document.write(namebegin);
document.write("<br>");
var name = "Variable name are case SENSITIVE.";
document.write(name);
document.write("<br>");
var JS = "Variable names should not be JS KEYWORDS."
document.write(JS);
document.write("<br>");
//end of chap4
//chap 5
//task1
var num1 = 5;
var num2 = 3;
var result = num1 + num2;
document.write("<br>");
document.write("sum of " + num2 + " and" + num1 + " is" + result);
//task2
var num1 = 5;
var num2 = 3;
var result1 = num1 - num2;
document.write("sum of " + num1 + " and" + num2 + " is" + result1);
var num1 = 5;
var num2 = 3;
var result2 = num1 / num2;
document.write("sum of " + num1 + " and" + num2 + " is" + result2);
var num1 = 5;
var num2 = 3;
var result3 = num1 * num2;
document.write("sum of " + num1 + " and" + num2 + " is" + result3);
var num1 = 5;
var num2 = 3;
var result4 = num1 % num2;
document.write("sum of " + num1 + " and" + num2 + " is" + result4);
//task3
var value;
document.write("Value after variable declaration is " + value);
document.write("<br>");
value = 5;
document.write("Initialvalue: " + value);
document.write("<br>");
value++;
document.write("Value after increment is: " + value);
document.write("<br>");
value = value + 7;
document.write("Value after addition is: " + value);
document.write("<br>");
value--;
document.write("Value after decrement is :" + value);
document.write("<br>");
value = value % 3;
document.write("The Remainder is: " + value);
document.write("<br>");
//task4
var one_ticket = 600;
var numOftickets = 5;
var ticket_cost = one_ticket * 5;
document.write("Total cost to buy" + numOftickets + " tickets to a movie is " + ticket_cost + "PKR");
// task5



// task6
var cel = 6;
var convert = 6 * (7 - 32) * 5 / 9;
alert(convert);
var fahrenheit = 7;
var convertfahren = 7 * (6 * 9 / 5) + 32;
alert(convertfahren);
// task7
var item1 = 650;
var item2 = 100;
var quantity1 = 3;
var quantity2 = 7;
var charges = 100;
var compute = item1 + item2 + charges;
document.write("Price of item 1 is " + item1);
document.write("Quantity of item 1 is " + quantity1);
document.write("Price of item 2 is " + item2);
document.write("Quantity of item 2 is " + quantity2);
document.write("Shipping Charges " + charges);
document.write("Quantity of item 1 is " + quantity1);
document.write("Price of item 2 is " + item2);
document.write("Quantity of item 2 is " + quantity2);
document.write("Shipping Charges " + charges);
document.write("Total cost of your order is " + compute);
//    task8
var total_marks = 980;
var obtained_marks = 804;
var percent = (obtained_marks / total_marks) * 100;
document.write("Total marks: " + total_marks);
document.write("Marks obtained: " + obtained_marks);
document.write("Percentage: " + percent + "%");
//   task9

//end of chap 5
//start of chap 6 to 9
// task1
var a = 10;
document.write("The value of a is : " + a);
document.write("<br>");
a++;
document.write("The value of ++a is : " + a);
document.write("<br>");
document.write("Now the value of a is : " + a);
document.write("<br>");
a++;
document.write("The value of a++ is : " + a);
document.write("<br>");
document.write("Now the value of a is : " + a);
document.write("<br>");
--a;
document.write("The value of --a is : " + a);
document.write("<br>");
document.write("Now the value of a is : " + a);
document.write("<br>");
a--;
document.write("The value of a-- is : " + a);
document.write("<br>");
document.write("Now the value of a is : " + a);
document.write("<br>");
// task2
var a = 2;
var b = 1;
--a;
alert("--a " + "=" + a);
var d = --a - --b;
alert("--a - --b " + "=" + d);
var c = --a - --b + ++b;
alert("--a - --b + ++b " + "=" + c);
// alert(a);
// alert(b);
var e = --a - --b + ++b + b--;
// alert("--a - --b + ++b + b-- " + "=" + e);
alert("a is " + a);
alert("b is " + b);
alert("result is " + e);
// task3
var name = prompt("What is your name", 'Ali');
alert("Hi " + name + "!");
// task6
var sub1 = prompt("Enter first subject name");
var sub2 = prompt("Enter second subject name");
var sub3 = prompt("Enter third subject name");
var first_sub = sub1;
var second_sub = sub2;
var third_sub = sub3;
var total_subMarks = 100;
var obt_marks1 = prompt("Enter your first obtained maks");
var obt_marks2 = prompt("Enter your second obtained maks");
var obt_marks3 = prompt("Enter your third obtained maks");
var result_std1 = obt_marks1 / total_subMarks * 100;
var result_std2 = obt_marks1 / total_subMarks * 100;
var result_std3 = obt_marks1 / total_subMarks * 100;
document.write("<br>result_std1");
document.write("<br>result_std2");
document.write("<br>result_std3");
//chap 9 to 11
// task1
var city_name = prompt("Enter your city");
if (city_name === "karachi") {
    alert("Welcome to city of lights");
}
// task2
var gender = prompt("Your gender");
if (gender === 'Male') {
    alert("Good Morning Sir");
}
if (gender !== 'Male') {
    alert("Good Morning Ma'am");
}
//   task3        
var color = prompt("Enter color");
if (color == "red") {
    alert("must stop");
}
else if (color == "yellow") { alert("ready to move"); }
else if (color == "green") {
    alert("move now");
}
else { alert("wrong input"); }
// task4
var fuel = +prompt("enter amount of fuel in a car");
if (fuel < 0.25) { document.write("Please refill the fuel in your car"); }
// task6
var marks1 = +prompt("Enter first subject marks");
var marks2 = +prompt("Enter second subject marks");
var marks3 = +prompt("Enter third subject marks");

//task 7
var secret_num = 5;
var user_prompt = +prompt("Enter secret number");
if (user_prompt === secret_num) {
    alert("Bingo!Correct answer");
}
else if (user_prompt === 6) {
    alert("Close enough to the correct ans");
}
else { alert("wrong answer") };
//task8
var program = +prompt("Enter Number");
if (program % 3 === 0) {
    alert("divisible by 3");
}
else { alert("not divisible by 3") };
//task 9
var program1 = +prompt("Enter Number");
if (program1 % 2 === 0) {
    alert("even num");
}
else { alert("odd num") };
//task 10
var program2 = +prompt("Enter temperature");
if (program2 > 40) {
    alert("hot day");
}
else if (program2 > 30) {
    alert("weather is normal");
}
else if (program2 > 20) {
    alert("weather is cool");
}
else if (program2 > 10) {
    alert("weather is so cool");
}
//task11
var first_num = +prompt("Enter your first value");
var operator = +prompt("Enter your operator");
var second_num = +prompt("Enter your second value");
var calculator = (first_num + operator + second_num);
if (operator === "+") {
    document.write("<br>Answer " + "=", (+first_num) + (+second_num) + "")
}
else if (operator === "-") {
    document.write("<br>Answer " + "=", first_num - second_num)
}
else if (operator === "*") {
    document.write("<br>Answer " + "=", first_num * second_num)
}
else if (operator === "%") {
    document.write("<br>Answer " + "=", first_num % second_num)
}
//chap12 -13 
//task3
var i = +prompt("enter number");
if (i > 0) { Document.write("positive"); }
else if (i < 0) { document.write("negative"); }
else { document.write("zero"); }
//task4
var string = prompt("Enter Vowels");
if (string == 'a') {
    alert("True");
}
else if (string == 'e') {
    alert("True");
}
else if (string == 'i') {
    alert("True");
}
else if (string == 'o') {
    alert("True");
}
else if (string == 'u') {
    alert("True");
}
//task5    
var paswd = 123;
var corctpassword = +prompt("enter your password");
if (paswd === corctpassword) { alert("correct!"); }
else if (paswd !== corctpassword) {
    alert("Incorrect password")
}
else { alert("Please enter correct password"); }
//task6
var greet;
var hour = 13;
if (hour < 18) {
    alert("Good day");
}
else { alert("Good evening"); }
//task 7
var time = prompt("enter time");
var time = 1900;
if (time >= 0000 && time < 1200) { alert("Good Morning!"); }
else if (time >= 1200 && time < 1700) { alert("Good Afternoon!"); }
else if (time >= 1700 && time < 2100) { alert("Good Evening!"); }
else { alert("Good night!"); }
//chap 14-16
//task3
var string_array = ["man", "women", "girl"];
//task4
var num_array = [1, 2, 3, 4];
//task5
var boolean_array = [true, false];
//task6
var mixed_array = ["man", 4, true];
//task8
var student = ["ali", "ahmed", "abdullah"];
var number = [230, 350, 420];
var prcnt = 230 / 500 * 100;
var prcnt2 = 350 / 500 * 100;
var prcnt3 = 420 / 500 * 100;
console.log("Score of ali is " + "230.Percentage: " + prcnt + "%");
console.log("Score of ahmed is " + "350.Percentage: " + prcnt2 + "%");
console.log("Score of abdullah is " + "420.Percentage: " + prcnt3 + "%");
//task9
var color = ["red", "blue", "pink", "purple"];
console.log(color);
var choose1 = prompt("enter the color you want to add in begining");
var u_shift = color.unshift(choose1);
console.log(color);
// var color = ["red","blue","pink","purple"];
var choose2 = prompt("enter the color you want to add in ending");
var c_push = color.push(choose2);
console.log(color);
// var color = ["red","blue","pink","purple"];
// var choose3 = prompt("enter your want to add two color in begining");
var t_ushift = color.unshift(["black"], ["green"]);
console.log(color);
// var color = ["red","blue","pink","purple"];
// var choose4 = prompt("enter your want to delete in begining color");
var u_shift1 = color.shift(["pink"]);
console.log(color);
// var color = ["red","blue","pink","purple"];
var choose5 = prompt("enter which color you want to add now?");
var choose6 = prompt("enter on which index you want to add your desired color?");
// var c_pop =color.pop(choose5);
color.splice(choose6, 0, choose5);
// var c_pop =color.pop(choose5);
console.log(color);
// var color = ["red","blue","pink","purple"];
var choose7 = prompt("on which index you want to delete color?");
var choose8 = prompt("how many color(s) you want to delete?");

color.splice(choose7, choose8, 0);
console.log(color);
// var color = ["red","blue","pink","purple"];
// var choose = prompt("enter your want to where add a color");
// color.splice(1,2,);
console.log(color);
//task 10
var city = ["khi", "lhr", "fsbd", "pshwr", "hydbd"];
console.log(city);
var cityname = city.slice(1, 4);
console.log(cityname);
//task 12
var arr = ["This", "is", "my", "cat"];
console.log(arr);
var arr1 = arr.join(' ');
console.log(arr1);
//chap 17-20
//task 1
var multi_array = [[], [], []];
//task2
var multi_array1 = [[0, 1, 2, 3], [1, 0, 1, 2], [2, 1, 0, 1]];
document.write(multi_array1);
//task3
var j = 1;
var size = 10;
for (var j = 1; j <= size; j++) {
    console.log(j);
}
//task4 (table)
var userTable = +prompt("which table do you want");
var length = +prompt("table of length");
for (var i = 1; i <= length; i++) {
    console.log(userTable + "x" + i + "=" + userTable * i)
}
//task5
// var pro = prompt("enter no. from 1 to 5");
var fruits = ["apple", "mango", "banana", "orange", "grapes"];
for (var a = 0; a < fruits.length; a++) { alert(fruits[a]); }
//task6
var c = 1;
var size = 15;
for (var c = 1; c <= size; c++) {
    console.log(c);
}
var r = 1;
for (var r = 15; r >= 1; r--) {
    console.log(r);
}
var even = 0;
for (var m = 0; m <= 20; m = m + 2) {
    console.log(m);
}
var odd = 1;
for (var n = 1; n < 20; n = n + 2) {
    console.log(n);
}
var series = 2000;
for (var o = 2000; o <= 10000; o = o + 1000) {
    console.log(o);
}
//task7
var array = ["cake", "apple pie", "cookie", "chips", "patties"];
//var firstarray = "apple pie";
var program = prompt("enter items from 1 to 5");
var matchFound = "no";
for (var d = 0; d < array.length; d++) {
    if (program === array[d]) {
        alert("item found");
        matchFound = "yes";
    }
}
if (matchFound == "no") { alert("not found"); }

// chap 21 to 25
// task1
var fInput = prompt("Enter your first name");
var lInput = prompt("Enter your last name");
var fullName = fInput + lInput;
alert("Hello! " + fullName);
//task2
var fav = prompt("enter your favourite mobile phone");
var f = fav.length;
document.write("My favourite phone is: " + fav);
document.write("<br>");
document.write("Lenght of string: " + f);
//task3
var string = "Pakistani";
var last = string.indexOf('n');
document.write("<br>");
document.write("String: " + string);
document.write("Index of 'n': " + last);
//task4
var string1 = "Hello World";
var last1 = string1.lastIndexOf('l');
document.write("<br>");
document.write("String: " + string1);
document.write("Last index of 'l': " + last1);
//task5
var string2 = "Pakistani";
var last2 = string2.charAt(3);
document.write("<br>");
document.write("String: " + string2);
document.write("Character at index 3: " + last2);
//task6 //check it
var fInput1 = prompt("Enter your first name");
var lInput2 = prompt("Enter your last name");
var fullString = string.concat(fInput1 + lInput2);
alert("Hello! " + fullString);
//task7
var rep = "Hyderabad";
rep1 = rep.replace("Hyder", "Islam");
document.write("<br>");
document.write("City: " + rep);
document.write("After Replacement: " + rep1);
//task8
var message = "Ali and Sana are best friends.They play cricket and football together";
var msg = message.replace(/and/gi, "&");
document.write(msg);
//task9
var stringNum = "472";
var changeString = Number(stringNum);
document.write("Value: " + stringNum);
document.write("Typeof " + typeof (stringNum));
document.write("Value: " + changeString);
document.write("Typeof " + typeof (changeString));
//task10
var peanutString = "peanut";
var uppercasePeanut = peanutString.toUpperCase();
document.write("<br>");
document.write("User input: " + peanutString);
document.write("Uppercase " + uppercasePeanut);
//tas11
var script = "javascript";
var p = script.slice(0, 1);
var c = p.toUpperCase();
var a = script.slice(1);
var b = a.toLowerCase();
document.write("<br>");
document.write("User input: " + script);
document.write("Titlecase " + c + b);
//task12
var stringNum1 = 35.36;
var changeString1 = stringNum1.toString();
var joinNum = changeString1.split(".").join("");
document.write("Number: " + stringNum1);
document.write("Result: " + joinNum);
//task13
var input = prompt("enter unsename");
for (var z = 0; z < input.length; z++) {
    if (input.charAt(z) === "@" || input.charAt(z) === "!" || input.charAt(z) === "," || input.charAt(z) === ".") {
        alert("enter a valid username");
    }
}
//task14
var array = ["cake", "apple pie", "cookie", "chips", "patties"];
//var firstarray = "apple pie";
var program = prompt("enter items from 1 to 5");
var matchFound = "no";
for (var d = 0; d < array.length; d++) {
    if (program === array[d]) {
        alert("item found");
        matchFound = "yes";
    }
}
if (matchFound == "no") { alert("not found"); }
//task16
var uni = "University of Karachi";
var uni1 = uni.split(" ");
document.write(uni);
document.write("<br>");
for (var i = 0; i < uni.length; i++) {
    document.write(uni[i] + "<br>");
}
//task17
var program = prompt("Enter country name");
var programLenght = program.length;
var proSlice = program.slice(programLenght - 1);
document.write("<br>");
document.write("User input: " + program);
document.write("<br>");
document.write("Last Index of: " + proSlice);
//task 18

//chap26 to 30
//task1
var num = prompt("enter integer number");
document.write("number " + num);
var m = Math.round(num);
document.write("round off value  " + m);
var floor = Math.floor(num);
document.write("floor value: " + floor);
var ceil = Math.ceil(num);
document.write("ceil value " + ceil);
//task2
var minus = prompt("enter number in minus");
document.write("number " + minus);
var rou = Math.round(minus);
document.write("round off value  " + rou);
var flo = Math.floor(minus);
document.write("floor value: " + flo);
var ce = Math.ceil(minus);
document.write("ceil value " + ce);
//task3
var num = -3;
var absNum = Math.abs(num);
alert("Absolute value of " + num + " is " + absNum);

//task4
var random = Math.random();
var changerandom = (random * 6) + 1;
var changesix = Math.floor(changerandom);
document.write("Random dice value ", changesix);
//task5
var coin = Math.random();
var changing = (coin * 1);
var round = Math.round(changing + 1);
document.write(round + " = " + "Head");
var tail = Math.random();
var tailno = (tail * 1);
var tailround = Math.round(tailno)
document.write(tailround + " = " + "Tail");
//task6
var random1 = Math.random();
var changerandom1 = (random1 * 100) + 1;
var changesix1 = Math.floor(changerandom1);
document.write("Random number between 1 and 100: ", changesix1);
//task7
var weight = prompt("enter your weight");
var weigh = parseInt(weight);
document.write("The weight of user is " + weigh + "kilograms");
//task8
var a = (Math.random() * 10) + 1;
var d = Math.floor(a);
var b = prompt("enter number");
if (d == b) { alert("congrats"); }
else { alert("better luck next time"); }
//   console.log("rand no", d);
//   console.log("user input", b);
//chap 31-34
//task1
var current = new Date();
document.write(current);
//  Task 2
var d = new Date().toString();
var dMonth = d.slice(3, 7);
document.write("Current month : " + dMonth);

// Task 3
var d = new Date().toString();
var dDay = d.slice(0, 3);
document.write("Today is " + dDay);

// task 4
var d = new Date().toString();
var dDay = d.slice(0, 3);
if (dDay === "Sat" || dDay === "Sun") {
    alert("It's  Fun Day");
}
//Task 5
var d = new Date().toString();
var dDate = d.slice(8, 10);
if (dDate >= 1 && dDate <= 15) {
    document.write("First fifteen days of the month");
}
else {
    document.write("Last fifteen days of the month");
}

// Task 6
var d = new Date();
var dMs = d.getTime();
var dMin = dMs / (1000 * 60)
document.write("Current Date : " + d);
document.write("<br>");
document.write("elapsed milliseconds since january 1, 1970 : " + dMs);
document.write("<br>");
document.write("elapsed minutes since january 1, 1970 : " + dMin);

// Task 7
var d = new Date().getHours();
if (d >= 1 && d <= 12) {
    alert("It's AM")
}
else {
    alert("It's PM")
}
// Task 8
var d = new Date("december 31, 2020");
document.write("Later Date: " + d);

// Task 9
var d = new Date();
var d1 = new Date("april 25, 2020");
var totalDays = (d - d1) / (1000 * 60 * 60 * 24);
document.write(Math.floor(totalDays) + " days has passed since Ramadan 1st, 2020");

// Task 10
var refDate = new Date();
var checkDate = new Date("january 01, 2020");
var diff = refDate - checkDate;
document.write("on reference date " + refDate, diff + " has passed since beginning of 2020");
// Task 11                   
var d = new Date();
var setHours = d.getHours();
document.write("current date : " + d);
document.write("<br>");
document.write("1 hour ago, it was " + setHours);

// Task 12
var d = new Date();
var d1 = new Date("june 21, 1020");
alert("current date : " + d);
alert("100 years back, it was: " + d1);

// Task 13
var age = +prompt("Enter your age");
document.write("current date : " + d);
document.write("<br>");
document.write("1 hour ago, it was " + setHours);
var d = new Date().getFullYear();
var birthYear = d - age;
document.write("your age is " + age);
document.write("<br>");
document.write("your birth year is " + birthYear);

// Chap 35-38
// task 1
function date() {
    var d = new Date;
    document.write(d);
}
date();

// task 2
function fName() {
    var name1 = prompt("enter your first name");
    var name2 = prompt("enter your last name");
    var fullName = name1 + " " + name2;
    alert("welcome " + fullName);
}
fName();

// task 3
function sum() {
    var num1 = +prompt("enter first number");
    var num2 = +prompt("enter last number");
    var add = num1 + num2;
    alert("sum of num1 & num2 is: " + add);
}
sum();
// task4
function operation(num1, opr, num2) {
    // var num1 = +prompt("Enter first number");
    // var num2 = +prompt("Enter second number");
    //    var opr = prompt("Enter operator");
    if (opr === "+") {
        return num1 + num2;
    }
    else if (opr === "-") {
        return num1 - num2;
    }
    else if (opr === "x") {
        return num1 * num2;
    }
    else if (opr === "/") {
        return num1 / num2;
    }
    else if (opr === "%") {
        return num1 % num2;
    }
    else {
        return NaN;
    }
}
var ans = alert(operation(10, '-', 5));
//task5
function square(num) {
    alert(Math.pow(num, 2));
}
square(10);
//task6
function factorial(num) {
    var answer = 1;
    if (num === 0 || num === 1) {
        return answer;
    }
    if (num > 1) {
        for (var i = 0; i > 1; i--) {
            return answer = answer * i;
        }
    }
}
alert(factorial(3));

//task7
function count() {
    var start = +prompt("Enter first number");
    var end = +prompt("Enter last number");
    for (var i = start; i <= end; i++) {
        document.write(start[i] + "<br>")
    }
}
count();

// task 8

// // task 9
function calcArea(width, height) {
    alert("Area is " + width * height)
}
calcArea(2, 3);

function calcArea() {
    // alert("Area is " + width * height)
    return width * height;
}
alert(calcArea(width = 6, height = 5));
//task10
//task11
//task12
//task13
function text(first, second) {
    var counter = 0;
    for (var i = 0; i < first.length; i++) {
        if (first.slice(i, i + 1) === second) {
            ++counter;
        }
    }
    alert(counter);
}
text("JSResources.com", 'o');

// chap 38-44

// task1
var a = +prompt("Enter value of a");
var b = +prompt("Enter value of b");
function power() {
    var c = Math.pow(a,b);
    return c;
}
console.log(power());


// task2
var year = +prompt("Enter Year you want to check leap year");

function findYear(year) {

    if (year % 4 == 0 && year%100 == 0 && year% 400 !== 0) {
        console.log(year + "leap year");
    }
    else {
        console.log(year + "not leap year");
    }
}
findYear(year);

// Task 3     
function calcSideOfTriangle(a, b, c) {
    var s = (a + b + c) / 2;
    return s;
}
console.log(calcSideOfTriangle(5, 6, 7));

function calcAreaTraingle() {
    let area = 9 * (9 - 5) * (9 - 6) * (9 - 7);
    return area;
}
console.log(calcAreaTraingle());


// Task 4
let studentMarks1 = +prompt("Enter first subject's marks");
let studentMarks2 = +prompt("Enter second subject's marks");
let studentMarks3 = +prompt("Enter third subject's marks");

function avg() {
    let avg = Math.round((studentMarks1 + studentMarks2 + studentMarks3) / 3);
    return avg;
}
function findPercentage() {
    let totalMarks = 300;
    let totalObtainedMarks = studentMarks1 + studentMarks2 + studentMarks3;
    let perc = (totalObtainedMarks / totalMarks) * 100;
    return perc;
}

function calcStudentResult() {
    console.log(avg());
    console.log(findPercentage());
}

console.log(calcStudentResult());


// Task 5
function findIndexOf() {
    let text = "hello how are you?";
    return text.search("r");
}
console.log(findIndexOf());


// Task 6
let userInput = prompt("Enter any text to remove vowels");
function deleteVowels(userInput) {
    let text1 = userInput.replace(/a/g, "").replace(/e/g, "").replace(/i/g, "").replace(/o/g, "").replace(/u/g, "");
    return text1;
}
console.log(deleteVowels(userInput));


// Task 7
function findOccurrences(str) {
    var chars = str.toLowerCase().split("");
    var count = 0;

    for (let i = 0; i < chars.length - 1; i++) {
        var char = chars[i];
        var next = chars[i + 1];
        if (isCorrectCharacter(char) && isCorrectCharacter(next)) {
            count++
        }
    }

    return count;
}
function isCorrectCharacter(char) {
    switch (char) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            return true;
        default:
            return false;
    }
}

var found = findOccurrences("Pleases read this application and give me gratuity");

console.log(found);


// Task 8
var userDistance = prompt("Enter distance between two cities in km.");
function convertDistanceIntoMeter() {
    let meterDistance = userDistance * 1000;
    return meterDistance;
}
console.log(convertDistanceIntoMeter());

function convertDistanceIntoFeet() {
    let feetDistance = userDistance * 3281;
    return feetDistance;
}
console.log(convertDistanceIntoFeet());

function convertDistanceIntoInch() {
    let inchDistance = userDistance * 39370;
    return inchDistance;
}
console.log(convertDistanceIntoInch());

function convertDistanceIntoCentimeter() {
    let cmDistance = userDistance * 100000;
    return cmDistance;
}
console.log(convertDistanceIntoCentimeter());


// Task 9
var userOvertimeHours = +prompt("Enter total hours you worked.");
let freeTime = (60 * 0.1 * 40) / 60;
let realWorkingHours = 40 + freeTime;
function calcOvertime() {
    if (userOvertimeHours > realWorkingHours) {
        let payRate = 12;
        let overtimeWages = (userOvertimeHours - realWorkingHours) * payRate;
        return overtimeWages;
    }
}
console.log(calcOvertime());


// Task 10
function currencyDenomination() {
    let userCash = +prompt("Enter cash : ");
    let hundred = parseInt(userCash / 100);
    let fifty = parseInt(userCash % 100 / 50);
    let ten = parseInt(((userCash % 100) % 50) / 10);
    alert('You will have ' + hundred + ' hundred notes ' + fifty + ' fifty notes ' + ten + ' ten notes');
}
currencyDenomination();

// chap 43-48
// task1
function link(){            
    alert("This is done by dom");
}

// task2
function mobile(){
    alert("Thanks for purchasing us");
}

// task3
function  del(){
    var deleteButn = document.querySelector("#delete");
    console.log(deleteButn);
    var tableRow = document.querySelector("#first");
    console.log(tableRow);
    if(deleteButn){
        tableRow.innerHTML = "";
    } 
}

function del1(){
    var deleteButn = document.querySelector("#delete");
    console.log(deleteButn);
    var tableRowSecond = document.querySelector("#second");
    console.log(tableRowSecond);
    if(deleteButn){
        tableRowSecond.innerHTML = "";
    }
}

function del2(){
    var deleteButn = document.querySelector("#delete");
    console.log(deleteButn);
    var tableRowThird = document.querySelector("#third");
    console.log(tableRowThird);
    if(deleteButn){
        tableRowThird.innerHTML = "";
    }
}

function del3(){
    var deleteButn = document.querySelector("#delete");
    console.log(deleteButn);
    var tableRowFourth = document.querySelector("#fourth");
    console.log(tableRowFourth);
    if(deleteButn){
        tableRowFourth.innerHTML = "";
    }
}





// task4
function changeImage(id,src){
var image = document.querySelector("#img");
image.src = src;
}



// task5

var add = 0;
function counterAdd(){
    var count = document.querySelector("strong");
    console.log(count);
    count.innerHTML = ++add;
}

function countMinus(){
    var count = document.querySelector("strong");
    console.log(count);
    count.innerHTML = --add;
}

// chap 49-52
// task1
function submitData() {
    var firstName = document.querySelector("#fname").value;
    var lastName = document.querySelector("#lname").value;
    var password = document.querySelector("#password").value;
    var email = document.querySelector("#email").value;
    var formData = document.querySelector("#form-show");
    formData.innerHTML = `firstName:  ${firstName}  <br>  lastName: ${lastName} <br> password: ${ password } <br> email: ${ email}`;
}

// task2

function para(){
    var paragraph = `Javascript often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.

    Alongside HTML and CSS, JavaScript is one of the core technologies of the World Wide Web.JavaScript enables interactive web pages and is an essential part of web applications. The vast majority of websites use it for client-side page behavior,[9] and all major web browsers have a dedicated JavaScript engine to execute it.`
    var pera = document.querySelector("#pera");
    pera.innerHTML = paragraph; 
}

// chap 53-58

// task1

function showImage(e) {
    console.log(e.src);
    var modalImage = document.getElementById("modalImage");
    modalImage.src = e.src;
}

// task2
var a = 10

function zoomIn(){
    a = a + 10;
    var paragraph1 = document.querySelector("#zoom");
    paragraph1.style.fontSize = a + "px" ;
}

function zoomOut(){
    a -= 10;
    var paragraph1 = document.querySelector("#zoom");
    paragraph1.style.fontSize = a + "px";
}



// chap 58 - 67
// task1
// sub-task 1
 var main = document.querySelector("#main-content");
 console.log(main);

//  subtask 2
 var main = document.querySelector("#main-content").childnode;
console.log(main);

// sub-task 4
let firstNameValue =  document.getElementById("first-name");
firstNameValue.value = 'Nimra';

// sub task 5
let lastNameValue = document.getElementById("last-name");
lastNameValue.value = "Sharif" ; 