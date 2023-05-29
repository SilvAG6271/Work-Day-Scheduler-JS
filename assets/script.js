var hours = (".hours");
var saveBtn = $(".saveBtn");
var description = $(".description");
var timeColorChange = $(".time-block")
var currentHour = parseInt(dayjs().hour());


$(document).ready(function(){
  var today = dayjs();
  $("#currentDay").text(today.format("dddd MMMM YYYY, h:mm a"));
  
  });

  $(".time-block").each(function () {
    var id = $(this).attr("id");
    var eventSchedule = localStorage.getItem(id);

    if (eventSchedule !== null) {
        $(this).children(".description").val(eventSchedule);
    }
});



  $(".saveBtn").on("click", function () {

    var calEvent = $(this).siblings(".description").val();
    var hourEvent = $(this).parent().attr("id");
   

    localStorage.setItem(hourEvent, calEvent);

    console.log(hourEvent, calEvent);

    
   
 
       
    
    


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

     
      
    }

    
   

    });



    
  



