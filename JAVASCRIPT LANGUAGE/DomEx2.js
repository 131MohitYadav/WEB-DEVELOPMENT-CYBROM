// DOM Manipulation
document.getElementById('change-text').addEventListener('click', function(){
    document.getElementById('main-heading').textContent = 'Text Changed';
    document.getElementById('main-heading').style.color = 'red';
})