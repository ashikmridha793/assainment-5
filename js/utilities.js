function getInputFieldValueById(id){
      const inputValue = document.getElementById(id).value;
      // const inputNumber = parseFloat(inputValue)
      return inputValue
}


function getInputFieldValueById(id){
      const textValue = document.getElementById(id).innerText
      const textNumber = parseFloat(textValue);
      return textNumber
}


function showSectionById(id){
      document.getElementById('donation-form').classList.add('hidden');
      document.getElementById('history-form').classList.add('hidden');

      document.getElementById(id).classList.remove('hidden');
}