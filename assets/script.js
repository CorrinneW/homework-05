//currentDay updates with weekday name and date @ top of page.
let currentDay = moment().format('dddd, MMMM Do')
//populate #currentDay using moment.js
$('#currentDay').text(currentDay);

//start planner code

//set each planner row to an array
const rowArray = $('.row').toArray();

var container = document.querySelector(".container")

let index = 0;

//every time a click happens, the index of the row is set to index
//idx will be used to inform checkTask and storeTask functions
//"i < container.children.length" constrains i to only the contents of the selected row.
for (var i = 0; i < container.children.length; i++) {
    //self-invoking function waits for one of the container's children to be clicked and then sets the index of that child to the variable "index"
    (function(i) {
        container.children[i].onclick = function() {
            index = i;
            console.log(index);
        }
    })(i);
    //i calls the function
}

//save column - saves user input on click.
//retrieves stored data or sets an empty array
var savedTasks = JSON.parse(localStorage.getItem('userTask')) || []; 
let userTask = $('textarea').val();
//need to treat each row as a separate entity from other rows.
$('.saveBtn').click(function checkTask() {
    //for rowArray index of clicked...
    for (index of rowArray) {
        if (userTask === "") {
            alert("No task to save!");
        } else {
            storeTask();
        };
    }
})

function storeTask() {
    savedTasks.push(userTask);
    localStorage.setItem('userTask', JSON.stringify(savedTasks));
    checkTask();
}

// //hour column
// const liveHour = moment().format('HH'); //live time
// console.log(liveHour);

// let tableHour = moment().hour(9).format('HH'); //table hour is static and iterates from 9-17
// console.log(tableHour);

// let currentRow = 0; //

// //input column - changes color based on whether task is past, future or present
// function taskStatus() {
//     //iterates through each row (0-9)...color defaults to future 
//     for(var i = 0; i < rowArray.length; i++) {
//         if (tableHour === liveHour) {
//             $('textarea').addClass('.present')
//         } else if (tableHour < liveHour) {
//             $('textarea').addClass('.past')
//         } else {
//             $('textarea').addClass('.future')
//         }
//         currentRow++
//     }
//     console.log(currentRow);
//     console.log(tableHour);
// }

// taskStatus();

