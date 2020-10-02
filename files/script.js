// Challenge 1: Your Age in Days

function ageInDays(){
let birthYear = prompt('What year were you born?'); 
let ageInDayss = (2020-birthYear) * 365;
let h1 = document.createElement('h1'); //using DOM creating a h1 tag
let textAnswer = document.createTextNode('You are' + ' '  + ageInDayss + ' ' + 'days'); //this is used to display what we needed to show in h1
h1.setAttribute('id','ageInDays'); //here we are giving id named ageindays to the h1 tag
h1.appendChild(textAnswer); //let textAnswer is appended here
document.getElementById('flex-box-result').appendChild(h1); //all of the above operations in single ine
}

function reset(){
    document.getElementById('ageInDays').remove(); //ageindays because it is the id of the h1 tag
}   

// Challenge : Cat Generator

function generateCat(){
    let image = document.createElement('img');
    let div = document.getElementById('flex-cat-gen');
    image.src = "../img/cat.gif";
    div.appendChild(image);
}


