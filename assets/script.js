//currentDay updates with weekday name and date @ top of page.
let currentDay = moment().format('dddd, MMMM Do')
//populate #currentDay using moment.js
$('#currentDay').text(currentDay);

//start planner code

//save column - saves user input on click.
let userTask = '' //sets global variable for current task
//retrieves stored data or sets an empty array
var savedTasks = JSON.parse(localStorage.getItem('userTask', savedTasks)) || []; 
//set each planner row to an array
var txtArray = $('textarea').toArray();

let index = 0;

//using index of both the textarea and the button to specify which task to save
$('.saveBtn').click(function () {
    usertask = ''
    index = $('.saveBtn').index(this);
    console.log(index);

    //if textarea.index
    if (txtArray[index].value === '') {
        alert("No task to save!");
        console.log(txtArray[index].value)
    } else {
        userTask = txtArray[index].value;
        savedTasks.push(userTask);
        localStorage.setItem('userTask', JSON.stringify(savedTasks));
    }
})



// //need to treat each row as a separate entity from other rows.
// $('.saveBtn').click(function () {
//     checkTask();
// })

// function checkTask() {
//     //if task at selected index is blank, alert user, else store task
//     userTask = 
//     // for (index of container.children) {
//     //     userTask = $('textarea').val();

//     //     if (userTask === "") {
//     //         alert("No task to save!");
//     //         break;
//     //     } else {
//     //         storeTask();
//     //         userTask = '';
//     //         break;
//     //     };
//     // }
// }



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

