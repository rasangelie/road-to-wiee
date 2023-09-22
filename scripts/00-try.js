function display() {
    const getInput = document.querySelector('.getName');
    const getName = getInput.value;
    

    const getDateTime = new Date();
    const dateFormat = getDateTime.toLocaleString('en-us', {
        weekday:"long", 
        day:"numeric", 
        year:"numeric", 
        month:"long"});
    
    const timeFormat = getDateTime.toLocaleTimeString();

    document.querySelector('.display')
        .innerHTML= `Hello ${getName}! Today is ${dateFormat} and the time now is ${timeFormat}`;
    
    getInput.value = '';
}