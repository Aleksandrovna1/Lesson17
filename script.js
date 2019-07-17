"use strict";

// №1 
    var hours = 3;
    var minutes = 60;
    var seconds = 60;
    var secondsInMinutes = minutes * seconds;
    var secondsInHours = secondsInMinutes * hours;
    console.log(secondsInHours);
// або так №1 
    var hours = 3;
    var minutes = 60;
    var seconds = 60;
    console.log(hours * minutes * seconds);

// №2
    var num = 1;
    num +=12;
    num -=14;
    num *=5;
    num /=7;
    num ++;
    num --;
    alert(num);    

// №3
    var a=10;
    var b=2;
    var c=5;
    console.log(a + b + c);

// №4
    a=17, b=10;
    c = a - b;
    var d=7;
    var result = c + d;
    console.log(result);

// №5
    var message; 
    message = 'Привiт,';
    var name;
    name = 'Тетяна!';
    console.log(message + ' ' + name);