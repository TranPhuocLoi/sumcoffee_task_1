//create function:

// validate function:

function validateEmail(email) {
  var count = 0;
  for (var i = 0; i < email.length; i++) {
    if (email[i] == "@")
        count++;
  }
  return count == 1;
}

// check password function

//version 1
function validatePass1(pass) {
  for (var i = 0; i < pass.length; i++) {
    if (pass.length >= 6) {
      return true;
    }
  }
  return false;
}
//version 2
function validatePass2(pass) {
  var count = 0;
  for (var i = 0; i < pass.length; i++) {
    if ("A" <= pass[i] && pass[i] <= "Z") {
      count++;
    }
  }
  if (count >= 1) {
    return true;
  }
  return false;
}
//version 3
function validatePass3(pass) {
  var dem = 0;
  for (var i = 0; i < pass.length; i++) {
    if (!("A" <= pass[i] && pass[i] <= "Z" || "a" <= pass[i] && pass[i] <= "z" || 0 <= pass[i] && pass[i] <= 9) && pass[i] != " ")
      dem++;
  }
  if (dem >= 1) {
    return true;
  }
  return false;
}
//checkPass main  
function checkPass(a) {
  if (validatePass1(a) && validatePass1(a) && validatePass3(a)) {
    return 1;
  }
}



var signInButton = document.getElementById('btn-signIn');

signInButton.onclick = function () {
  //get password end psw repeat
  var pswType = document.querySelectorAll("input[type=password]");
  var psw = pswType[0];
  var pswRepeat = pswType[1];

  var email = document.getElementById('emailInput');

  var flagSuccess = true;
 
  //check email
  if (!validateEmail(email.value)) {
    console.log(validateEmail(email.value));
    document.getElementById('err-email').innerHTML = "Please check your email !";
    flagSuccess = false;
  }
  else {
    document.getElementById('err-email').innerHTML = "";
  }
  
  //check password
  if (!checkPass(psw.value)) {
    console.log(psw.value);
    document.getElementById('err-password').innerHTML = "Please check your password !";
    flagSuccess = false;
  }
  else {
    document.getElementById('err-password').innerHTML = "";
  }

  //check password repeat
  if (psw.value != pswRepeat.value) {
    document.getElementById('err-psw-repeat').innerHTML = "Password not match !";
    flagSuccess = false;
  }
  else {
    document.getElementById('err-psw-repeat').innerHTML = "";
  }

}


