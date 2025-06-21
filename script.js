const buttons = document.querySelectorAll('button');
const display = document.querySelector('.display');


document.addEventListener('keydown', (event)=>{
    const k = event.key;
    const allowed_keys= ['0','1','2','3','4','5','6','7','8','9','+','-','*','/','.', 'Enter', 'Backspace', 'c', 'C'];
    if(!allowed_keys.includes(k)){
        return;
    }
    if(k==='Enter'){
        try{
            display.value = eval(display.value);
        }
        catch {
            display.value = 'Error';
        }
    }
    else if(k==='Backspace'){
        display.value = display.value.slice(0, -1);
    }
    else if(k==='c'||k==='C')display.value ='';
    else{
        display.value += k;
    }
});




buttons.forEach(button=>{
    button.addEventListener('click', ()=>{
        const press = button.textContent;
        if (press === 'C'){
            display.value='';
        }else if (press=== '='){
            try{
                display.value = eval(display.value);
            }
            catch{
                display.value = 'Error Detected';
            }
        }
        else{
            display.value += press;
        }
    });
});
