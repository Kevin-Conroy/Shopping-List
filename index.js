$(document).ready(function(){
   $('button').click(function() {
    var mylist = $('#shopping-list-entry').val();
    $('#shopping-list').append('<li>'+mylist+'</li>');
     return false;
 });
