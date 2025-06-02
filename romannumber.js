const inputVal = document.getElementById('number');
const convertBtn = document.getElementById('convert-btn');
const results = document.getElementById('results');
const outputDiv = document.getElementById('output')





const convertRom = (num) => {
  
  const values = 
        [1000, 900, 500, 400, 100, 
         90, 50, 40, 10, 9, 5, 4, 1];
  const symbols = 
        ['M', 'CM', 'D', 'CD', 'C', 
         'XC', 'L', 'XL', 'X', 'IX', 
         'V', 'IV', 'I'];
  let result = '';


  
    for(let i=0; i < values.length; i++){
      while(num >= values[i]){
        result += symbols[i];
        num -= values[i];
        
      }
    } 
      
      outputDiv.innerHTML = `<fieldset class="result">${result}</fieldset>`;
      return result;
    
  }



const invalInput = () => {
  const araNum = parseInt(inputVal.value);
  if (isNaN(araNum)){
    outputDiv.innerHTML = `<fieldset class="error">Please enter a valid number</fieldset>`;
    return NaN;
  } else if(araNum <= 0) {
    outputDiv.innerHTML = `<fieldset class="error">Please enter a number greater than or equal to 1</fieldset>`;
    inputVal.value = "";
  } else if (araNum > 3999) {
    outputDiv.innerHTML = `<fieldset class="error">Please enter a number less than or equal to 3999</fieldset>`;
    inputVal.value = "";
  }
  
}


const seti = () => {
    if (isNaN(parseInt(inputVal.value)) || parseInt(inputVal.value) >= 4000 || parseInt(inputVal.value) <= 0) {
      invalInput();
    } else {
      convertRom(parseInt(inputVal.value));
    }
};


convertBtn.addEventListener("click",seti);

inputVal.addEventListener ("keyup", (e) => {
  if(e.key === "Enter"){
    seti();
  }
});