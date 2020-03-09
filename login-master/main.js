// PUT A TITLE HERE
'use strict'

// listen for the click 
document.getElementById('log').addEventListener('click', login)


//detect for correct password
function login () {
let user = 'admin.3232257';
let pass = 'verysandwitchestint';

if ( user == document.getElementById('inlog').value && pass == document.getElementById('inpass').value){
    document.getElementById('sendback').innerHTML = 'Sign in Successful'
} else {
    document.getElementById('sendback').innerHTML = 'Sign in Unsuccessful'
}


if  ( user != document.getElementById('inlog').value && pass != document.getElementById('inpass').value){
    document.getElementById('sendbacklog').innerHTML = 'Username and password is inccorect'
} else if (user != document.getElementById('inlog').value){
    document.getElementById('sendbacklog').innerHTML = 'Username is inccorect'
} else if  (pass != document.getElementById('inpass').value) {
    document.getElementById('sendbacklog').innerHTML = 'Password is inccorect'
} else {
    document.getElementById('sendbacklog').innerHTML = null
}


 









}