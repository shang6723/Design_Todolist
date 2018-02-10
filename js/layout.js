
$(document).ready(function() {
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth()+1;
    var year = date.getFullYear();
    $("#form_title").html(month+"/"+day+"/"+year);
});