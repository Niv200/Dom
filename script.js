

function run(){
    const list = document.querySelector('ul');
    const input = document.querySelector('input');
    const button = document.querySelector('button');

    let val = input.value;

    const listItem = document.createElement('li');
    const text = document.createElement('span');
    const listButton = document.createElement('button');
    
    listItem.appendChild(text);
    listItem.appendChild(listButton);

    text.textContent = val;
    listButton.textContent = 'remove';

    console.log(list);
    list.appendChild(listItem);
    listButton.onclick = 
    function(){
        list.removeChild(listItem);
    }
    input.focus();
}