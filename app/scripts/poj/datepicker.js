$(function() {
    $( "#datepicker-start" ).datepicker({
      changeMonth: true,
      changeYear: true
    });
  });

$(function() {
    $( "#datepicker-end" ).datepicker({
      changeMonth: true,
      changeYear: true
    });
  });





//create labels here:
//Put in function!!
form  = new MonthRadioForm();

form.createForm();
form.addToParent(document.getElementById('lease-date-section'));
form.addMonths()


yearForm = new YearRadioForm();
yearForm.createForm();
yearForm.addToParent(document.getElementById('lease-date-section'));
yearForm.Test();
