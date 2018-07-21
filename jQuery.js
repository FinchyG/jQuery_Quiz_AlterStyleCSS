//code for submitting answers

function submit() { //eslint-disable-line no-unused-vars
  question1();
  question2();
  question3();
  question4();
  question5();
}
  
function question1() {
    
  var country1   = document.getElementById('flag1').value;
  var correct1   = document.getElementById('correct1');
  var incorrect1 = document.getElementById('incorrect1');
  
  if(country1.match(/france/i)){
    correct1.style.visibility   = "visible";
    incorrect1.style.visibility = "hidden";
  } else {
    incorrect1.style.visibility = "visible";
    correct1.style.visibility   = "hidden";
  }
  
}


function question2() {        
      
  var country2   = document.getElementById('flag2').value;
  var correct2   = document.getElementById('correct2');
  var incorrect2 = document.getElementById('incorrect2');
      
  if(country2.match(/greece/i)){
    correct2.style.visibility   = "visible";
    incorrect2.style.visibility = "hidden";
  } else {
    incorrect2.style.visibility = "visible";
    correct2.style.visibility   = "hidden";
  }
    
}

function question3() {
    
  var country3   = document.getElementById('flag3').value;
  var correct3   = document.getElementById('correct3');
  var incorrect3 = document.getElementById('incorrect3');

  if(country3.match(/austria/i)){
    correct3.style.visibility   = "visible";
    incorrect3.style.visibility = "hidden";
  } else {
    incorrect3.style.visibility = "visible";
    correct3.style.visibility   = "hidden";
  }
      
}

function question4() {
    
  var country4   = document.getElementById('flag4').value;
  var correct4   = document.getElementById('correct4');
  var incorrect4 = document.getElementById('incorrect4');

  if(country4.match(/italy/i)){
    correct4.style.visibility   = "visible";
    incorrect4.style.visibility = "hidden";
  } else {
    incorrect4.style.visibility = "visible";
    correct4.style.visibility   = "hidden";
  }

}

function question5() {
    
  var country5 = document.getElementById('flag5').value;
  var correct5      = document.getElementById('correct5');
  var incorrect5    = document.getElementById('incorrect5');

  if(country5.match(/germany/i)){
    correct5.style.visibility   = "visible";
    incorrect5.style.visibility = "hidden";
  } else {
    incorrect5.style.visibility = "visible";
    correct5.style.visibility   = "hidden";
  }
      
}

//code for getting answers

function getFlagAnswers() { //eslint-disable-line no-unused-vars

  for(var i = 1; i < 6; i++) {
    document.getElementById("flag_name_" + i).style.visibility = "visible";
  }
  
}