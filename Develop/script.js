// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.

  $(function () {
    // Function to generate time blocks for standard business hours (9am to 5pm)
    function generateTimeBlocks() {
      var container = $(".container-fluid");
      for (var i = 9; i <= 17; i++) {
        var timeBlock = $("<div>")
          .attr("id", "hour-" + i)
          .addClass("row time-block");
        var hourCol = $("<div>")
          .addClass("col-2 col-md-1 hour text-center py-3")
          .text(i + "AM");
        if (i > 12) {
          hourCol.text((i - 12) + "PM");
        }
        var descriptionCol = $("<textarea>")
          .addClass("col-8 col-md-10 description")
          .attr("rows", "3");
        var saveBtn = $("<button>")
          .addClass("btn saveBtn col-2 col-md-1")
          .attr("aria-label", "save")
          .html('<i class="fas fa-save" aria-hidden="true"></i>');
  
        timeBlock.append(hourCol, descriptionCol, saveBtn);
        container.append(timeBlock);
      }
    }
  
    // Add a listener for click events on the save button
    $(".container-fluid").on("click", ".saveBtn", function() {
      var hour = $(this).parent().attr("id").split("-")[1];
      var eventText = $(this).siblings(".description").val();
      localStorage.setItem("event-" + hour, eventText);
      alert("Event saved!");
    });
  
    // Function to update time-block classes based on current hour
    function updateHourlyBlocks() {
      var currentHour = dayjs().hour();
      $(".time-block").each(function() {
        var blockHour = parseInt($(this).attr("id").split("-")[1]);
        if (blockHour < currentHour) {
          $(this).removeClass("present future").addClass("past");
        } else if (blockHour === currentHour) {
          $(this).removeClass("past future").addClass("present");
        } else {
          $(this).removeClass("past present").addClass("future");
        }
      });
    }
  
    // Load saved events from localStorage and set the values of the corresponding textarea elements
    for (var i = 9; i <= 17; i++) {
      var savedEvent = localStorage.getItem("event-" + i);
      if (savedEvent) {
        $("#hour-" + i + " .description").val(savedEvent);
      }
    }
  
    // Display the current date in the header of the page
    var currentDay = dayjs().format("dddd, MMMM D");
    $("#currentDay").text("Today is " + currentDay);
  
    // Call functions to generate time blocks and update hourly blocks when the page loads
    generateTimeBlocks();
    updateHourlyBlocks();
  
    // Update time-block classes every minute
    setInterval(updateHourlyBlocks, 60000);
  });
  