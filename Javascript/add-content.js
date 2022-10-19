/* Th i s script displays a greeting to the user based upon the current time. */

var today= new Date(); //create a new date oject
var hourNow = today.getHours(); //find current time
var greeting; 
if (hourNow > 18) {  
greeting= 'Good evening!';
}
else if (hourNow > 12) 
{
    greeting = ' Good afternoon!'; 
}
else if (hourNow > 0) 
{
    greeting = 'Good morning!'; 
}
else
{
    greeting = 'Welcome! ' ; 
}
document .write( ' <h3>' +greeting + ' </ h3> '); 