function addListItem () {
   $("#js-shopping-list-form > button").on('click', function(event) {
     event.preventDefault()
    var mylist = $('#shopping-list-entry').val();
    $('.shopping-list').append(
      ` <li>
        <span class="shopping-item">${mylist}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li> `);
   }); 
}
  $(addListItem);

function deleteListItem() {
  $("body").on('click', ".shopping-item-delete", function(event) {
    event.preventDefault() 
    $(this).parent().parent().remove();
  });
}
$(deleteListItem);
 
function checkListItem() {
  $("body").on("click", '.shopping-item-toggle', function() {
    $(this).closest('li').children().first().toggleClass('shopping-item__checked');
  });
}
$(checkListItem);
