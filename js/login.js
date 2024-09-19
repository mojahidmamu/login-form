// console.log( 'This is a login form');


// step-1: set event handlet
document.getElementById('login-btn').addEventListener('click', function(event){
  // step-2: pervent default behavior(prevent reloadign browser)
  event.preventDefault();  // Vejal to beginners
  console.log( 'login button form ');
  // step-3: get the phone number
  const phonenumber = document.getElementById('phone-number').value;
  console.log( phonenumber);

})