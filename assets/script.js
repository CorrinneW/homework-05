//NEEDED ELEMENTS AND POSSIBLE SOLUTIONS

//1. Today's date and day of the week in the header
    //Moment.js (see student mini project)

//2. a table with a row for each hour from 9am-5pm
    //3 columns: one lists the hours, one is where user inputs text, and the last is a save button
    //hourse will never change


//currentDay updates with weekday name and date.
var currentDay = moment().format('dddd, MMMM Do')
//populate #currentDay using moment.js
$('#currentDay').text(currentDay);