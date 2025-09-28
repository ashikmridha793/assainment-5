document.getElementById('btn-money-donate-1').addEventListener('click', function(event){
      event.preventDefault()
      const donatedMoney = parseFloat(document.getElementById('input-donate-money').value);
      

      if (donatedMoney){
            const donate = getInputFieldValueById('donated-money');
            const moneyDonated = donate + donatedMoney;
            document.getElementById('donated-money').innerText = moneyDonated;
            
            const balance = getInputFieldValueById('total-balance')

            if (donatedMoney > balance){
                  alert('Your balance is to low!!😢😢')
                  return;
            }

            const newBalance = balance - donatedMoney;
            document.getElementById('total-balance').innerText = newBalance
            
      }
      
      else{
            alert('donate failed');
      }
})


document.getElementById('btn-money-donate-2').addEventListener('click', function(event){
      event.preventDefault()
      const donatedMoney = parseFloat(document.getElementById('input-donate-money-2').value);
      // const donateMoney = getInputFieldValueById('input-donate-money');

      if (donatedMoney){
            const donate = getInputFieldValueById('donated-money-2');
            const moneyDonated = donate + donatedMoney;
            document.getElementById('donated-money-2').innerText = moneyDonated;
             const balance = getInputFieldValueById('total-balance')

            if (donatedMoney > balance){
                  alert('Your balance is to low!!😢😢')
                  return;
            }
            
            const newBalance = balance - donatedMoney;
            document.getElementById('total-balance').innerText = newBalance
      }
      else{
            alert('donate failed');
      }
})

document.getElementById('btn-money-donate-3').addEventListener('click', function(event){
      event.preventDefault()
      const donatedMoney = parseFloat(document.getElementById('input-donate-money-3').value);
      // const donateMoney = getInputFieldValueById('input-donate-money');

      if (donatedMoney){
            const donate = getInputFieldValueById('donated-money-3');
            const moneyDonated = donate + donatedMoney;
            document.getElementById('donated-money-3').innerText = moneyDonated;
             const balance = getInputFieldValueById('total-balance')

            if (donatedMoney > balance){
                  alert('Your balance is to low!!😢😢')
                  return;
            }
            
            const newBalance = balance - donatedMoney;
            document.getElementById('total-balance').innerText = newBalance
      }
      else{
            alert('donate failed');
      }
})

