//NEEDED ELEMENTS AND POSSIBLE SOLUTIONS

//1. Today's date and day of the week in the header
    //Moment.js (see student mini project)

//2. a table with a row for each hour from 9am-5pm
    //3 columns: one lists the hours, one is where user inputs text, and the last is a save button
    //hours will never change, so basic structure can be established in HTML/CSS using bootstrap.

//3. middle column: user text input which saves to local storage when save button is clicked
    //bootstrap forms might be good for the text input
    //use moment.js to determine past/future tasks for color coding
        //if task time is < current hour, color is gray
        //else if tast time === current hour, color is red
        //else, color is green

//4. last column contains save button
    //on click, saves task to local storage
    //use bootstrap icon for the button



//currentDay updates with weekday name and date.
var currentDay = moment().format('dddd, MMMM Do')
//populate #currentDay using moment.js
$('#currentDay').text(currentDay);

//create table structure

//user input will be stored and recalled from storedPlans array
// let storedPlans = JSON.parse(localStorage.getItem("storedPlans", storedPlans)) || [];

//runs functions on page load 



//hour column (each hour from 9-5 gets a column);
let currentHour = moment(9:00am);

function setHour() {
    for(var i = 9; i<=17; i++) {
        currentHour.add(moment.duration(1, 'h'));
    }
    $('.hour').text(currentHour)
}

setHour();

//input column

//save column




