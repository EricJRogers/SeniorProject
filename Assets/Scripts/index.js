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
}

//Function displays proper instructions to modal terminal display based on id of modal-btn clicked
function generateInstruction() {
  if(typeTimer != null) {
    clearTimeout(typeTimer);
    $('.terminal-window').append('\nuser@terminal:~$ ');
  }

  switch(this.id) {
    //  Fall-through modal instructions (sameinstructions run for multiple cases)
    case "gitAdd":
    case "branchAdd":
      typeText('.terminal-window', 'git add .', 0, 200);
      break;
    case "gitCommit":
    case "branchCommit":
      typeText('.terminal-window', 'git commit -m "enter commit message"', 0, 200);
      break;
    case "gitPush":
    case "pushMergedBranch":
      typeText('.terminal-window', 'git push origin master', 0, 200);
      break;
    //  Begin modal-2 instructions
    case "gitWin":
      typeText('.terminal-window', 'see instructions below to install Git on Windows', 0, 200);
      break;
    case "gitLin":
      typeText('.terminal-window', 'sudo apt-get install git-all', 0, 200);
      break;
    case "gitOSX":
      typeText('.terminal-window', 'git', 0, 200);
      break;
    case "gitConfig":
      typeText('.terminal-window', 'git config --global user.name "username"', 0, 200, function() {
        typeText('.terminal-window', 'git config --global user.email "email"', 0, 200);
      });
      break;
    case "checkConfig":
      typeText('.terminal-window', 'git config --list', 0, 200);
      break;
    case "gitClone":
      typeText('.terminal-window', 'git clone "insert repository url from GitHub"', 0, 200);
      break;
    //  Begin modal-3 instructions - see Multiple Modal Instructions for gitAdd & gitCommit & gitPush
    case "gitStatus":
      typeText('.terminal-window', 'git status', 0, 200);
      break;
    case "gitPull":
      typeText('.terminal-window', 'git pull', 0, 200);
      break;
    //  Begin modal-5 instructions
    case "createBranch":
      typeText('.terminal-window', 'git branch "branch name"', 0, 200);
      break;
    case "viewBranches":
      typeText('.terminal-window', 'git branch', 0, 200);
      break;
    case "switchBranch":
      typeText('.terminal-window', 'git checkout "branch name"', 0, 200);
      break;
    case "checkoutNewBranch":
      typeText('.terminal-window', 'git checkout -b "branch name"', 0, 200);
      break;
    case "delBranch":
      typeText('.terminal-window', 'git branch -d "branch name"', 0, 200);
      break;
    //  Begin modal-6 instructions - see Multiple Modal Instructions for branchAdd & branchCommit & pushMergedBranch
    case "pushBranch":
      typeText('.terminal-window', 'git push origin "branch name"', 0, 200);
      break;
    case "mergeBranch":
      typeText('.terminal-window', 'git checkout master', 0, 200, function() {
        typeText('.terminal-window', 'git merge "branch name"', 0, 200);
      });
      break;
    //  Begin modal-8 instructions
    case "createFork":
      typeText('.terminal-window', 'see instructions below to Create Fork', 0, 200);
      break;
    case "checkRemote":
      typeText('.terminal-window', 'git remote -v', 0, 200);
      break;
    case "setRemote":
      typeText('.terminal-window', 'git remote add upstream "Original Fork Repository URL"', 0, 200);
      break;
    case "pullFork":
      typeText('.terminal-window', 'git pull upstream master', 0, 200);
      break;
    //  Begin modal-9 instructions
    //  Begin modal-10 instructions
    //  Begin modal-11 instructions
    //  Begin modal-12 instructions
    default:
      typeText('.terminal-window', 'no instruction found', 0, 200);
  }
}

//Function will type one letter at a time of 'string' to the 'target' element over a give 'interval'
function typeText(target, string, index, interval, callback) {
  if (index < string.length) {
    $(target).append(string[index++]);
    typeTimer = setTimeout(function () { typeText(target, string, index, interval, callback); }, interval);
  }
  else {
    $(target).append('\nuser@terminal:~$ ');
    typeTimer = null;
    //Callback refers to another line of instructions to be printed out to the terminal immediately after the preceding line of instructions
    if(callback) callback();
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
  $('.panel-btn').click(loadModal);
  //Modal-btn clicked will generate/display proper instructions
  $('.modal-btn').click(generateInstruction);
  //Will clear terminal window when modal becomes hidden
  $('.modal').on('hidden.bs.modal', clearTerminal);
}

$(document).ready(init);
