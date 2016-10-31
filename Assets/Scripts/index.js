function loadModal() {
  //Build Modal_ID from clicked Button_ID
  var modal_id = '#modal-'.concat((this.id).substring(7,8));
  
  //Load proper Modal based on clicked button
  $(modal_id).modal();
};

function init() {
  $('.btn').click(loadModal);
};

$(document).ready(init);
