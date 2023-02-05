const input = document.querySelector('favchap');
const button = document.querySelector('button');
const list = document.querySelector('ul');

button.addEventListener('click', () => { 
    if (input.value !== '') {
        let chapter = input.value;
        const li = document.createElement('li');
        const deleteBtn = document.createElement('button');
        

        li.textContent = chapter;
        deleteBtn.textContent = '❌';
        document.addEventListener('click', () =>{
            list.remove(li);
        });
        list.appendChild(li);
        
    }
    input.value = '';
    input.focus();
});
