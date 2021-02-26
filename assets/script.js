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

