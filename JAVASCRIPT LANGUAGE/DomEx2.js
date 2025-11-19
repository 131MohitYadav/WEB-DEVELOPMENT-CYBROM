// DOM Manipulation
document.getElementById('change-text').addEventListener('click', function(){
    document.getElementById('main-heading').textContent = 'Hii Kajal!!';
    document.getElementById('main-heading').style.color = 'red';
})

document.getElementById('add-element').addEventListener('click', function() {
    const newElement = document.createElement('div');
    newElement.className = 'new-element';
    newElement.textContent = 'New Element Added';
    document.getElementById('content').appendChild(newElement);
})