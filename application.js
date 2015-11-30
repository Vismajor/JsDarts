$(function(){

  var player1score = 501;
  var player2score = 501;

  function canPlayerWin(){
    var result = false;
    var playerOneCurrentPoint = $('#player1_move_score');
    if (playerOneCurrentPoint.val() <= 158){
      result = true
    } else {
      switch(parseInt(playerOneCurrentPoint)){
        case 170:
        case 167:
        case 164:
        case 161:
        case 160:
        result = true
      }
    }

    return result;
  }


  function checkInputPlayerOne()
  {
    var input=$('#player1_move_score').val();
    if (isNaN(input)) 
    {
      alert("Must input numbers");
      return false;
    }
    else if(input > 180) {
      alert("that's not even possible");
      return false;
    }
    else if(input < 0){
      alert("You can't throw negative!");
      return false;
    }
    else {
      return true;
    }
  };

  function checkInputPlayerTwo()
  {
    var input=$('#player2_move_score').val();
    if (isNaN(input)) 
    {
      alert("Must input numbers");
      return false;
    }
    else if(input > 180) {
      alert("that's not even possible");
      return false;
    }
    else if(input < 0){
      alert("You can't throw negative!");
      return false;
    }
    else {
      return true;
    }
  };

  function clearFormPlayerOne() {
    $('#player1_move_score').val('');
  };
  function clearFormPlayerTwo() {
    $('#player2_move_score').val('');
  };


  $('#player2form').hide();

  $('#player1form').on("submit", function(e) {
    e.preventDefault();
    if (canPlayerWin() === true){
        alert('you could finish next turn!')
      }
    // console.log("Form submitted");
    while(true){
        //prompt here
        var current_player1_score = $('#player1_move_score').val();
        var toEndLoop = checkInputPlayerOne(current_player1_score);
        if(toEndLoop){
            break;
        } else {
            // alert("must input valid amount");
            return false;
        } 
    }
    var new_total = player1score - parseInt(current_player1_score);
    player1score = new_total;
    $('#player1_score_list').append('<li>' + player1score + '</li>');
    clearFormPlayerOne();
    $('#player1form').hide();
    $('#player2form').show();
  });

  $('#player2form').on("submit", function(e) {
    e.preventDefault();
    // console.log("Form submitted");
    while(true){
        //prompt here
        var current_player1_score = $('#player2_move_score').val();
        var toEndLoop = checkInputPlayerTwo(current_player2_score);
        if(toEndLoop){
            break;
        } else {
            // alert("must input valid amount");
            return false;
        } 
    }
    var current_player2_score = $('#player2_move_score').val();
    var new_total = player2score - parseInt(current_player2_score);
    player2score = new_total;
    $('#player2_score_list').append('<li>' + player2score + '</li>');
    clearFormPlayerTwo();
    $('#player2form').hide();
    $('#player1form').show();
  });
});