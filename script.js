var form = document.getElementById('submitform');
form.addEventListener('submit',function(event){
    event.preventDefault()

    var commentInput = document.getElementById('comment-input').value
    console.log(commentInput)

    var emailInput = document.getElementById('email_input').value
    console.log(emailInput)

    var nameInput = document.getElementById('name_input').value
    console.log(nameInput)
})

let limitChar = (element) => {
    const maxChar = 141;
    const CloseChar = 140;
    
    let ele = document.getElementById(element.id);
    let charLen = ele.value.length;
    let p = document.getElementById('charCounter');
    p.innerHTML = maxChar - charLen + ' characters remaining';
    
    if (charLen > maxChar) {
        ele.value = ele.value.substring(0, maxChar);
        p.innerHTML = 0 + ' characters remaining'; 
    }
    if (charLen > CloseChar ) {
        ele.style.color='orange';
    }
}

