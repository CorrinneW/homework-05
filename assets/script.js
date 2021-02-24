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

//start planner code

//set each planner row to an array
const rowArray = $('.row').toArray();

//hour column
const currentHour = moment().format('HH'); //live time

let tableHour = moment().hour(9).format('HH'); //table starts at 9am

let currentRow = 0; //

//input column - changes color based on whether task is past, future or present
function taskStatus() {
    //iterates through each row (0-9)...color defaults to future 
    for(var i = 0; i < rowArray[currentRow].length; i++) {
        if (tableHour === currentHour) {
            $('textarea').removeClass('.future').addClass('.present')
        } else if (tableHour < currentHour) {
            $('textarea').removeClass('.present').addClass('.past')
        } else {
            $('textarea').addClass('.future')
        }
        nextRow();
    }
    console.log(tableHour)
}

//moves up to the next row and adds an hour to tableHour
function nextRow() {
    while (currentRow <= rowArray.length) {
        currentRow++;
        tableHour += moment.duration(1, "hours");
        taskStatus();
    }
}

taskStatus();

//save column - saves user input on click.
const savedTasks = JSON.parse(localStorage.getItem('userTasks')) || []; //empty array which holds saved tasks in local Storage

$('.saveBtn').on("click", function() {
    let userTask = $('textarea').val();

    if (userTask === "") {
        alert("No task to save!");
    } else {
        console.log(userTask);

        savedTasks.push(userTask);
        localStorage.setItem('userTask', JSON.stringify(savedTasks));
    }
})








