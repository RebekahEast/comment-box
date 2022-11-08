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
    if (charLen < CloseChar) {
        ele.style.color='black';
    }
}

submitform.addEventListener('submit', (event)=> {
    event.preventDefault();
});