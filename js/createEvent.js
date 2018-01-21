
function createWarning(s){
	var er=document.createElement("P");
    er.style.color="#FF0000";
    er.style.textAlign="center";
    er.style.fontSize="20px";
    var t=document.createTextNode(s);
    er.appendChild(t);
    return er;
}

$(document).ready( function() {
		
		$(document).ready(function(){
		    $('[data-toggle="popover"]').popover();   
		});//POPOVER

		$('#createEventForm').submit(function(ev) {
		    ev.preventDefault(); // to stop the form from submitting
		    /* Validations go here */
		    var errorExists=false;
		    var eventName=document.getElementById("event_name");
		    if(eventName.value==""){
		    	var eNW=document.getElementById("event_name_wrapper");
		    	eNW.appendChild(createWarning("Please specify a name for your event."));
		    	errorExists=true;
		    }
		    var eventLocation=document.getElementById("event_starting_location");
		    if(eventLocation.value==""){
		    	var eLW=document.getElementById("event_starting_location_wrapper");
		    	eLW.appendChild(createWarning("Please specify a starting location for your event."));
		    	errorExists=true;
		    }
		    if(errorExists==true)return false;
		    this.submit(); // If all the validations succeeded
		});

    	$(document).on('change', '.btn-file :file', function() {
		var input = $(this),
			label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
		input.trigger('fileselect', [label]);
		});

		$('.btn-file :file').on('fileselect', function(event, label) {
		    
		    var input = $(this).parents('.input-group').find(':text'),
		        log = label;
		    
		    if( input.length ) {
		        input.val(log);
		    } else {
		        if( log ) alert(log);
		    }
	    
		});
		function readURL(input) {
		    if (input.files && input.files[0]) {
		        var reader = new FileReader();
		        
		        reader.onload = function (e) {
		            $('#img-upload').attr('src', e.target.result);
		        }
		        
		        reader.readAsDataURL(input.files[0]);
		    }
		}

		$("#imgInp").change(function(){
		    readURL(this);
		}); 	
});
