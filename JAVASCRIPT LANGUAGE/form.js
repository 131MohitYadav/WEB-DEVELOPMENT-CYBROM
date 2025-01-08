function formdata(){
    let num1 = parseInt(document.getElementById('num1').value)
    let num2 = parseInt(document.getElementById('num2').value)
    //alert(num1 + num2)
    let ans = document.getElementById('ans')
    ans.innerHTML = num1 + num2
    return false
}