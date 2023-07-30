// ````// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  var scheduleItems = [];
  
  $('.saveBtn').on('click', function() {
    scheduleItems.push({
      name: 'Item',
      description: $(this).prev().val()
    })
    localStorage.setItem("scheduleItem", JSON.stringify(scheduleItems));
  })

  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?


var currentHour = moment().format('LT');

function updateTimeBlocks() {
  const currentHour = new Date().getHours();

  const timeBlocks = document.querySelectorAll('.time-block');
  timeBlocks.forEach(timeBlock => {
    const hour = parseInt(timeBlock.id.split('-')[1], 10);
    timeBlock.classList.remove('past', 'present', 'future');

    if (hour < currentHour) {
      timeBlock.classList.add('past');
    } else if (hour === currentHour) {
      timeBlock.classList.add('present');
    } else {
      timeBlock.classList.add('future');
    }
  });
}

updateTimeBlocks();

  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //

  


//   $(".saveBtn").click(function (event) {
//     event.preventDefault();
//     var value = $(this).siblings(".time-block").val();
//     var time = $(this).parent().attr("id").split("-")[1];
//     localStorage.setItem(time, value);
//   });

//  $("hour-09 .time-block").val(localStorage.getItem("09"));

  // TODO: Add code to display the current date in the header of the page.
  var dayStamp = moment().format('dddd' + ',' + ' MMMM Do');
  $('#currentDay').text(dayStamp);

});


