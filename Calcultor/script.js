const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

buttons.forEach(function(currentValue,index,arr){
  addEventListener('click', function(e){
    
      const key = currentValue.getAttribute('data-key');
     console.log(key)
  })
})