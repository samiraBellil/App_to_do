let button_add = document.getElementById('add-btn')
let text_part = document.getElementsByClassName('Part-text')[0]
//console.log(text_part[0])

let text = ''

text_part.addEventListener('change', function (e) {
    text = e.target.value                           
})

button_add.addEventListener('click', function () {

    var button_Complete = document.createElement('button');  
    button_Complete.innerHTML = "complete";                  
    button_Complete.classList.add('button_Complete');        

    var button_delete = document.createElement('button');  
    button_delete.innerHTML = "delete";                  
    button_delete.classList.add('button_delete');        

    var to_do = document.createElement('h3');         
    to_do.innerText = text;                           
                    

    var contents = document.createElement('div');     
    contents.appendChild(button_Complete);           
    contents.appendChild(button_delete);           
    contents.appendChild(to_do);           
    contents.classList.add('to_do'); 

    var section = document.getElementsByTagName('section')[0];   
    section.appendChild(contents);                            
    text_part.value = ''

    button_Complete.addEventListener("click", function () {  
        if
         (button_Complete.innerHTML === "Undo") {
            button_Complete.innerHTML = "complete";
            to_do.style.textDecoration = 'none';
        }
        else if 
        (button_Complete.innerHTML === "complete") {      
            button_Complete.innerHTML = "Undo";                     
            to_do.style.textDecoration = 'line-through';   
        }
    })

    button_delete.addEventListener('click', function () {    
        button_Complete.remove();                            
        button_delete.remove();                              
        to_do.remove();                                   
    })

})

// button_add.addEventListener('click', function (x){
//     text = x.target.value 
//     if(text = '') ;  
//     alert('fill in the text box')
// })