// signup js
function clickit() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
  
  
    let lowerCaseLetters = /[a-z]/g;
    let upperCaseLetters = /[A-Z]/g;
    let numbers = /[0-9]/g;
    let specialcharacter = /[!,@,#,$,%,^,&,*,(,)]/g;
    let getpasswordlength = password.length;
    let phonelength = phone.length;
  
  
    if (username.length == 0 && password.length == 0 && email.length == 0 && phone.length == 0) {
      alert('Please fill your all Details');
  
    }
    if (username.length == 0) {
        alert('Please fill in your name');
    
      }
    else if (password.length == 0) {
      alert('Please fill in password');
  
    }
    else if (email.length == 0 && password.length == 0) {
      alert('Please fill in email and password');
  
    }
  
    else if (getpasswordlength < 7) {
      alert('min of 8');
  
    }
    else if (email.length == 0) {
      alert('Please fill in email');
  
    }
    else if (phonelength == 10) {
      alert('please enter valid phone number');
  
    }
    else {
  
      let clickit = JSON.parse(localStorage.getItem('formdata')) || [];
  
      const duplicate = clickit.some(data => data.phone === phone || data.email === email);
  
  
  
      const formdata = {
        username: username,
        email: email,
        phone: phone,
        password: password
      };
  
  
      clickit.push(formdata);
  
      localStorage.setItem('formdata', JSON.stringify(clickit));
  
      window.location.href = 'home.html';
      alert('Your account has been created successfully!.');
  
    }
  }
  // End signup js