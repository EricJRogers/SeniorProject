function loadModal() {
  //Build Modal_ID from clicked Button_ID
  var modal_id = '#modal-'.concat((this.id).substring(7,8));

  //Load proper Modal based on clicked button
  $(modal_id).modal();
};

function gitWin() {
  console.log("gitWin");
  typeText('.terminal-window', 'git install', 0, 200);
//  $('.terminal-window').append("git install\nuser@terminal:~$ ");
}

function typeText(target, string, index, interval) {
  if (index < string.length) {
    $(target).append(string[index++]);
    setTimeout(function () { typeText(target, string, index, interval); }, interval);
  }
  else
    $(target).append('\nuser@terminal:~$ ');
}

function init() {
  //Button clicked will Load Modal
  $('.btn').click(loadModal);
  $('#gitWin').click(gitWin);
};

$(document).ready(init);
