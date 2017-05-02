//Global variables
var typeTimer;

//Function will find and load modal based on the id of the button clicked
function loadModal() {
  var button_id = this.id;
  var modal_id = '#modal-'.concat(button_id.substring(7));
  $(modal_id).modal();
}

//Function displays proper instructions to modal terminal display based on id of modal-btn clicked
function generateInstruction() {
  if(typeTimer != null) {
    clearTimeout(typeTimer);
    typeTimer = null;
    $('.terminal-window').append('\nuser@terminal:~$ ');
  }

  switch(this.id) {
    //  Fall-through modal instructions (same instructions run on multiple cases/modals)
    case "gitAdd":
    case "branchAdd":
      typeText('.terminal-window', 'git add .', 0, 200);
      break;
    case "gitCommit":
    case "branchCommit":
      typeText('.terminal-window', 'git commit -m <commit message>', 0, 200);
      break;
    case "gitPush":
    case "pushMergedBranch":
      typeText('.terminal-window', 'git push origin master', 0, 200);
      break;
    case "mergeBranch":
    case "gitMerge":
      typeText('.terminal-window', 'git checkout master', 0, 200, function() {
        typeText('.terminal-window', 'git merge <branch>', 0, 200);
      });
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
      typeText('.terminal-window', 'git config --global user.name <username>', 0, 200, function() {
        typeText('.terminal-window', 'git config --global user.email <email>', 0, 200);
      });
      break;
    case "checkConfig":
      typeText('.terminal-window', 'git config --list', 0, 200);
      break;
    case "gitClone":
      typeText('.terminal-window', 'git clone <Repository URL>', 0, 200);
      break;
    //  Begin modal-3 instructions - see Fall-through Modal Instructions for gitAdd & gitCommit & gitPush
    case "gitStatus":
      typeText('.terminal-window', 'git status', 0, 200);
      break;
    case "gitPull":
      typeText('.terminal-window', 'git pull', 0, 200);
      break;
    //  Begin modal-5 instructions
    case "createBranch":
      typeText('.terminal-window', 'git branch <branch>', 0, 200);
      break;
    case "viewBranches":
      typeText('.terminal-window', 'git branch', 0, 200);
      break;
    case "switchBranch":
      typeText('.terminal-window', 'git checkout <branch>', 0, 200);
      break;
    case "checkoutNewBranch":
      typeText('.terminal-window', 'git checkout -b <branch>', 0, 200);
      break;
    case "delBranch":
      typeText('.terminal-window', 'git branch -d <branch>', 0, 200);
      break;
    //  Begin modal-6 instructions - see Fall-through Modal Instructions for branchAdd & branchCommit & mergeBranch & pushMergedBranch
    case "pushBranch":
      typeText('.terminal-window', 'git push origin <branch>', 0, 200);
      break;
    //  Begin modal-8 instructions
    case "createFork":
      typeText('.terminal-window', 'see instructions below to Create Fork', 0, 200);
      break;
    case "checkRemote":
      typeText('.terminal-window', 'git remote -v', 0, 200);
      break;
    case "setRemote":
      typeText('.terminal-window', 'git remote add upstream <Fork Repository URL>', 0, 200);
      break;
    case "pullFork":
      typeText('.terminal-window', 'git pull upstream master', 0, 200);
      break;
    //  Begin modal-9 instructions
    case "pullReq":
      typeText('.terminal-window', 'see instructions below to Create Pull Request', 0, 200);
      break;
    case "mergePull":
      typeText('.terminal-window', 'see instructions below for Merging Pull Request', 0, 200);
      break;
    case "mergeCon":
      typeText('.terminal-window', 'git checkout master', 0, 200, function() {
        typeText('.terminal-window', 'git pull upstream master', 0, 200, function() {
          typeText('.terminal-window', 'git checkout <branch>', 0, 200, function() {
            typeText('.terminal-window', 'git merge master', 0, 200);});});
      });
      break;
    //  Begin modal-10 instructions
    case "gitStash":
      typeText('.terminal-window', 'git stash', 0, 200);
      break;
    case "stashList":
      typeText('.terminal-window', 'git stash list', 0, 200);
      break;
    case "showStash":
      typeText('.terminal-window', 'git stash show -p <stash@{index}>', 0, 200);
      break;
    case "gitPop":
      typeText('.terminal-window', 'git pop <stash@{index}>', 0, 200);
      break;
    case "gitDrop":
      typeText('.terminal-window', 'git drop <stash@{index}>', 0, 200);
      break;
    //  Begin modal-11 instructions
    case "gitAmend":
      typeText('.terminal-window', 'git commit --amend', 0, 200);
      break;
    case "gitUnStage":
      typeText('.terminal-window', 'git reset HEAD <file>', 0, 200);
      break;
    case "gitUnMod":
      typeText('.terminal-window', 'git checkout -- <file.ext>', 0, 200);
      break;
    case "gitReset":
      typeText('.terminal-window', 'git reset HEAD-x <reset type>', 0, 200);
      break;
    case "gitRevert":
      typeText('.terminal-window', 'git revert HEAD-x', 0, 200);
      break;
    case "gitCheckout":
      typeText('.terminal-window', 'git checkout HEAD-x', 0, 200);
      break;
    //  Begin modal-12 instructions
    case "gitLog":
      typeText('.terminal-window', 'git log <-(x)>', 0, 200);
      break;
    case "gitRebase":
      typeText('.terminal-window', 'git checkout <branch>', 0, 200, function() {
        typeText('.terminal-window', 'git rebase master', 0, 200);
      });
      break;
    //  Default in the case that button-id does not match case command
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

//Function will display proper Image in Modal
function loadImgModal() {
  var anchor_id = this.id;
  var img = document.getElementById('variable-modal-img');
  img.src = "../Assets/Images/".concat(anchor_id + ".png");
  img.alt = anchor_id;
  var modal = $('#modal-display-image');
  modal.modal();
}

//Functions listening once document is loaded
function init() {
  //Button clicked will Load Modal
  $('.panel-btn').click(loadModal);
  //Modal-btn clicked will generate/display proper instructions
  $('.modal-btn').click(generateInstruction);
  //Will clear terminal window when modal becomes hidden
  $('.modal').on('hidden.bs.modal', clearTerminal);
  //Anchor clicked will Load Image Modal
  $('.trigger-img-modal').click(loadImgModal);
}

$(document).ready(init);
