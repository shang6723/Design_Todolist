var i = 0; // for event id

function form_action_add() {
    var add_event = "<li id=event" + i + "><div><label>" + $("#event").val() + "</label></div>"
                + "<button type='button' onClick='form_action_delete(event"+ i +")'>Delete</button></li>";
    i++;
    $("#list_display").append(add_event);
    $("#event").val('');
}

function form_action_delete(id) {
     $(id).remove();
}

function form_action_clear() {
    $("#list_display").children().length = 0;
}