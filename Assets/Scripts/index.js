//Function will find and load modal based on the id of the button clicked
function loadModal() {
  var button_id = this.id;
  var modal_id = '#modal-'.concat(button_id.substring(7));
  $(modal_id).modal();
  if(modal_id == "modal-diagrams") {
    $("#carousel-example-generic").carousel();
  }
};

//Function displays proper instructions to modal terminal display
function gitInstall() {
  typeText('.terminal-window', 'sudo apt-get install git-all', 0, 200);
}

//Function will type one letter at a time of 'string' to the 'target' element over a give 'interval'
function typeText(target, string, index, interval) {
  if (index < string.length) {
    $(target).append(string[index++]);
    setTimeout(function () { typeText(target, string, index, interval); }, interval);
  }
  else
    $(target).append('\nuser@terminal:~$ ');
}

//Functions listening once document is loaded
function init() {
  //Button clicked will Load Modal
  $('.main-btn').click(loadModal);
  $('#gitLin').click(gitInstall);
};

$(document).ready(init);
