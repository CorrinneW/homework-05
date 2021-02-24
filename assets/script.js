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



//currentDay updates with weekday name and date @ top of page.
let currentDay = moment().format('dddd, MMMM Do')
//populate #currentDay using moment.js
$('#currentDay').text(currentDay);

//start table code
//hour column
let currentHour = moment().format('LT'); //live time
console.log(currentHour);

let tableHour = moment().hour(9).format('LT'); //table starts at 9am
console.log(tableHour);

//defines time span for each hour cell (ie 10AM = 10:00-10:59);
function setHour() {
    //for each row, add a time range with momentjs
    $('.container > .hour').each(function(i) {
        //while between the hours of 9 and 5
        while (currentHour >= moment().hour(9) && currentHour <= moment().hour(17)) {
            //set a duration of 1hr per row
            i = moment.duration(1, 'hours');
        }
    })
}

// setHour();

//input column - changes color based on whether task is past, current or present
let taskStatus = document.querySelector("textarea");

function getStatus() {
    //if (time text < moment().format('LT'))
}


//save column - saves user input on click.



// let currentHour = moment().format('LT');

// for(var i = 0; i<=8; i++) {
//     currentHour += moment.duration().hours(1);
//     $('.hour').text(currentHour)
// }




