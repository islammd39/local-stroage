

document.getElementById('add').addEventListener('click', function(){
    const field = document.getElementById('input-field1');
    const nameValue = field.value;
    localStorage.setItem('name', nameValue);
    field.value='';
})

const removed = () =>{
    localStorage.removeItem('name');
}

