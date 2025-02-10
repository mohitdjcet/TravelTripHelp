$(document).ready(function() {
	$("#depart").datepicker({
		minDate: 0,
		dateFormat: "dd-mm-yy",
		numberOfMonths: 2,
		onClose: function(selectedDate) {
			$("#return").datepicker("option", "minDate", selectedDate);
			$("#return").select();
			return false;
		}
	});
	$("#return").datepicker({
		dateFormat: "dd-mm-yy",
		numberOfMonths: 2,
		onClose: function(selectedDate) {
			return false;
		}
	});
});  
  
  
  
  
  
/*  
$(document).ready(function(){
    var startDate;
    var endDate;
    $('#depart').datepicker({
		minDate: 0,	
       dateFormat:'dd-mm-yy',
	   onClose: function (selectedDate) {
             $('#return').datepicker("option", "minDate", selectedDate);
        }
    });
    $('#return').datepicker({
        dateFormat:'dd-mm-yy'
    });

    $('#depart').change(function(){
        startDate=$(this).datepicker('getDate');
        $('#return').datepicker('option','minDate', startDate);
    });
    $('#return').change(function(){
        endDate=$(this).datepicker('getDate');
        $('#depart').datepicker('option','maxDate', endDate);
    });
});
      
	  
	  
  $(document).ready(function () {
			$("#depart").datepicker({
				minDate: 0,
				onClose: function(selectedDate) { 
                $("#return").select();
                return false;
				}
			});
		});
		$(document).ready(function () {
			$("#return").datepicker({
				minDate: 0,
				onClose: function(selectedDate) { 
                return false;
				}
			});
		});

	  
    //  $(document).ready(function () {
    //     var minDate = new Date();
    //     $("#depart").datepicker({
    //         showAnim: 'drop',
    //         numberOfMonth: 1,
    //         minDate: minDate,
    //         dateFormat: 'dd/mm/yy',
    //         onClose: function (selectedDate) {
    //             $('#return').datepicker("option", "minDate", selectedDate);
    //         }
    //     });

    //     $("#return").datepicker({
    //         showAnim: 'drop',
    //         numberOfMonth: 1,
    //         minDate: minDate,
    //         dateFormat: 'dd/mm/yy',
    //         onClose: function (selectedDate) {
    //             $('#depart').datepicker("option", "minDate", selectedDate);
    //         }
    //     });
   
    // });*/
  