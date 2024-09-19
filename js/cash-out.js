// console.log( 'cash out file connected');
document.getElementById('btn-cash-out').addEventListener('click', function (event) {
  event.preventDefault();
  console.log( 'cash out btn ');

  const cashOut = document.getElementById('input-cash-out').value;
  const PinNumber = document.getElementById('input-cash-out-pin').value;

  console.log( cashOut, PinNumber);
  // wrong way to verify pin number
  if(PinNumber === '1234'){
     const balance =document.getElementById('account-balance-total').innerText;
      
     const balanceNumber = parseFloat(balance);
     const cashoutNumber = parseFloat(cashOut);

    //  reduce the balance
     const newBalance = balanceNumber - cashoutNumber;
     console.log( newBalance);

    //  update the total balance in UI/DOM
     document.getElementById('account-balance-total').innerText = newBalance;
  }
  else{
    alert('Do not match the pin Number. Please try again. ')
  }
})