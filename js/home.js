// console.log( 'home money');
/**
 * 
 */

// step-1: add an event handler to the add money button inside the form
document.getElementById('btn-add-money').addEventListener('click', function (event) {
  //  pervent page reload after form submit
  event.preventDefault();

  // step-2: get money to be added to the account
  const addMoneyInput = document.getElementById('input-add-money').value;
  console.log(addMoneyInput);

  // get the pin number provided
  const inputPinNumber = document.getElementById('input-pin-number').value;
  console.log(inputPinNumber);
  // step-3: verify the pin Number
  // wrong way to validate pin Number

  if (inputPinNumber === '1234') {
    console.log('adding money to your account');

    // step-4: get the current balan
    const balance = document.getElementById('account-balance-total').innerText;
    console.log(balance);

    // step-5: add addMoneyInput with balance
      const addMoneyNumber = parseFloat(addMoneyInput);
      const balanceNumber =  parseFloat(balance);
      const newBalance =  addMoneyNumber + balanceNumber;
      console.log( newBalance);

      // step-6: update the balance in the UI/DOM
      document.getElementById('account-balance-total').innerText = newBalance;
  }
  else {
    alert('Do not match the pin Number. Please try again. ')
  }
})
