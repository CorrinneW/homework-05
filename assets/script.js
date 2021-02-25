//currentDay updates with weekday name and date @ top of page.
let currentDay = moment().format('dddd, MMMM Do')
//populate #currentDay using moment.js
$('#currentDay').text(currentDay);

//start planner code

//set each planner column to an array
const hourArray = $('.hour').toArray();
console.log(hourArray);

const inputArray = $('textarea').toArray();
console.log(inputArray);

const btnArray = $('.saveBtn').toArray();
console.log(btnArray);

const rowArray = $('.row').toArray();

//save column - saves user input on click.
//retrieves stored data or sets an empty array
var savedTasks = JSON.parse(localStorage.getItem('userTask')) || []; 

//need to treat each row as a separate entity from other rows.
for(var i = 0; i < rowArray.length; i++){
    $('.saveBtn').click(function () {
        //interact only with textarea in current index
        console.log($('textarea').eq(i).val());
    
        if (userTask === "") {
            alert("No task to save!");
        } else {
            console.log(userTask);
    
            savedTasks.push(userTask);
            localStorage.setItem('userTask', JSON.stringify(savedTasks));
        };
    })
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

