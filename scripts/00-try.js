function display() {
    const getInput = document.querySelector('.getName');
    const getName = getInput.value;
    console.log(getName);

    const getDateTime = new Date();
    const dateFormat = getDateTime.toLocaleString('en-us', {
        weekday:"long", 
        day:"numeric", 
        year:"numeric", 
        month:"long"});
    
    const timeFormat = getDateTime.toLocaleTimeString();
    
   if (getName === '') {
        document.querySelector('.display')
        .innerHTML='';

        document.querySelector('input')
            .classList.add('input-error');
        
        document.querySelector('.js-error')
            .innerHTML= `Please enter your name to proceed`;
        
   } else {
        

        document.querySelector('.js-error')
            .innerHTML='';

        document.querySelector('input')
            .classList.remove('input-error');

        document.querySelector('.display')
            .innerHTML= `Hello ${getName}! Today is ${dateFormat} and the time now is ${timeFormat}`;
        
        getInput.value = '';
        
   }
 
}