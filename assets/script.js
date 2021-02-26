//currentDay updates with weekday name and date @ top of page.
let currentDay = moment().format('dddd, MMMM Do')
//populate #currentDay using moment.js
$('#currentDay').text(currentDay);

//start planner code

//save column - saves user input on click.
let userTask = '' //sets global variable for current task
//retrieves stored data or sets an empty array
var savedTasks = JSON.parse(localStorage.getItem('userTask')) || []; 

//set textareas to an array which will be referenced when .saveBtn is clicked
var txtArray = $('textarea').toArray();

let index = 0;

//uses index of the button to specify which task to save
$('.saveBtn').click(function () {
    //assigns the clicked button's index to the index variable
    index = $('.saveBtn').index(this);

    //references the textarea that corresponds with the button
    if (txtArray[index].value === '') {
        alert("No task to save!");
    } else {
        //assigns an object with the user's input and its current index
        userTask = {
            index: index,
            value: txtArray[index].value
        }
        savedTasks.push(userTask);
        localStorage.setItem('userTask', JSON.stringify(savedTasks));
    }
})

//on refresh/page load returns each task to its original textarea
//creates a jquery object using each object's value and assigns it to the corresponding index in txtArray
savedTasks.forEach(task =>{$(txtArray[task.index]).val(task.value)})


//hour column
var hrArray = $('.hour').toArray(); //array of each cell in hour column

const liveHour = moment().format('HH'); //live time

//for each element of hrArray, hour is checked against liveHour and past, present or future class is added
hrArray.forEach(function(hour, index) {
    hour = moment().hour(9).add(index, 'hours').hours()//starts at 9(am) and ends at 17(5pm)
    
    //converted hour to string b/c it returns a number while liveHour returns string
    h = hour.toString();
    cell = txtArray[index] 

    //controls the background color of each textarea depending on the current time
    if (hour < liveHour) {
        $(cell).addClass('past')
    } else if (hour > liveHour) {
        $(cell).addClass('future')
    } else {
        $(cell).addClass('present')
    }
})


