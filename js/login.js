// console.log( 'This is a login form');


// step-1: set event handlet
document.getElementById('login-btn').addEventListener('click', function(event){
  // step-2: pervent default behavior(prevent reloadign browser)
  event.preventDefault();  // Vejal to beginners
  console.log( 'login button form ');
  // step-3: get the phone number & pinnumber
  const phonenumber = document.getElementById('phone-number').value;
  const pinnmber = document.getElementById('pin-number').value;

  console.log( phonenumber, pinnmber);
  // step-4: validate phone and pin
  if(phonenumber === '8' && pinnmber === '1234'){
    console.log( 'Logged in');
    window.location.href ='/home.html';
    // step-5: allow user to use the website
  }else{
    alert('Please check again');
  }

})