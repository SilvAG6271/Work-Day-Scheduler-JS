var hours = (".hours");
var saveBtn = $(".saveBtn");
var description = $(".description");
var timeColorChange = $(".time-block")
var currentHour = parseInt(dayjs().hour());


$(document).ready(function(){
  var today = dayjs();
  $("#currentDay").text(today.format("dddd MMMM YYYY, h:mm a"));
  });


  $(saveBtn).on("click", function () {

    var calEvent = $(this).siblings("texarea").val();
    var hourEvent = $(this).parents(".time-block").attr("id");

    localStorage.setItem(calEvent, hourEvent);

    


  } )

    
 
 

 

  timeColorChange.each (function(){

    var hourId = parseInt($(this).attr("id"));

    if (hourId < currentHour) {
      $(this).addClass("past");
     }else if (hourId === currentHour) {
      $(this).removeClass("past");
      $(this).addClass("present");
    }else{
      $(this).removeClass("past");
      $(this).removeClass("present");
      $(this).addClass("future");

      $(this).val(localStorage.getItem(hourId));
      console.log(hourId);
    }




    });

;
    
    
  



