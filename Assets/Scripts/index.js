//Global variables
var typeTimer;

//Function will find and load modal based on the id of the button clicked
function loadModal() {
//  clearTerminal;
  var button_id = this.id;
  var modal_id = '#modal-'.concat(button_id.substring(7));
  $(modal_id).modal();
  if(modal_id == "modal-diagrams") {
    $("#diagrams-carousel").carousel();
  }
};

//Function displays proper instructions to modal terminal display based on id of modal-btn clicked
function generateInstruction() {
  if(typeTimer != null) {
    clearTimeout(typeTimer);
    $('.terminal-window').append('\nuser@terminal:~$ ');
  }

  switch(this.id) {
    //Begin modal-1 instructions
    case "gitWin":
      typeText('.terminal-window', 'sudo apt-get install windows', 0, 200);
      break;
    case "gitLin":
      typeText('.terminal-window', 'sudo apt-get install git-all', 0, 200);
      break;
    case "gitOSX":
      typeText('.terminal-window', 'sudo apt-get install osx', 0, 200);
      break;
    case "gitClone":
      typeText('.terminal-window', 'git clone https://github.com/"repository link"', 0, 200);
      break;
    //Begin modal-2 instructions
    //Begin modal-3 instructions
    //Begin modal-4 instructions
    //Begin modal-5 instructions
    //Begin modal-6 instructions
    //Begin modal-7 instructions
    //Begin modal-8 instructions
    //Begin modal-9 instructions
    default:
      typeText('.terminal-window', 'no instruction found', 0, 200);
  }
}

//Function will type one letter at a time of 'string' to the 'target' element over a give 'interval'
function typeText(target, string, index, interval) {
  if (index < string.length) {
    $(target).append(string[index++]);
    typeTimer = setTimeout(function () { typeText(target, string, index, interval); }, interval);
  }
  else {
    $(target).append('\nuser@terminal:~$ ');
    typeTimer = null;
  }
}

//Clears terminal text on Modal close
function clearTerminal() {
  clearTimeout(typeTimer);
  typeTimer = null;
  $('.terminal-window').empty();
  $('.terminal-window').append('user@terminal:~$ ');
}

//Functions listening once document is loaded
function init() {
  //Button clicked will Load Modal
  $('.main-btn').click(loadModal);
  //Modal-btn clicked will generate/display proper instructions
  $('.modal-btn').click(generateInstruction);
  //Will clear terminal window when modal becomes hidden
  $('.modal').on('hidden.bs.modal', clearTerminal);
};

$(document).ready(init);
